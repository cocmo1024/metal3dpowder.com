import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIST = path.join(ROOT, 'dist');
const PRODUCT_ROOT = path.join(DIST, 'products');
const failures = [];

const fail = (message) => failures.push(message);
const read = (file) => fs.readFileSync(file, 'utf8');
const decode = (value = '') =>
  value
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .trim();

const getSchemaObjects = (html, route) => {
  const objects = [];
  for (const match of html.matchAll(/<script\b[^>]*type=(?:"application\/ld\+json"|'application\/ld\+json')[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const parsed = JSON.parse(decode(match[1]));
      const visit = (value) => {
        if (!value || typeof value !== 'object') return;
        if (Array.isArray(value)) return value.forEach(visit);
        objects.push(value);
        Object.values(value).forEach(visit);
      };
      visit(parsed);
    } catch (error) {
      fail(`${route}: invalid JSON-LD (${error.message}).`);
    }
  }
  return objects;
};

if (!fs.existsSync(PRODUCT_ROOT)) {
  console.error('Search-intent check failed: dist/products does not exist. Run the build first.');
  process.exit(1);
}

const productDirs = fs
  .readdirSync(PRODUCT_ROOT, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && fs.existsSync(path.join(PRODUCT_ROOT, entry.name, 'index.html')))
  .map((entry) => entry.name)
  .sort();

const searchOwners = new Map();
for (const productId of productDirs) {
  const route = `/products/${productId}/`;
  const html = read(path.join(PRODUCT_ROOT, productId, 'index.html'));
  const mainTag = html.match(/<main\b[^>]*id=(?:"main-content"|'main-content')[^>]*>/i)?.[0] ?? '';
  const layer = decode(mainTag.match(/\bdata-intent-layer=(?:"([^"]*)"|'([^']*)')/i)?.slice(1).find(Boolean));
  const owner = decode(mainTag.match(/\bdata-search-owner=(?:"([^"]*)"|'([^']*)')/i)?.slice(1).find(Boolean));

  if (layer !== 'alloy-grade-commercial') fail(`${route}: wrong or missing commercial intent layer.`);
  if (!owner) fail(`${route}: missing primary search owner.`);
  if (owner) {
    const key = owner.toLowerCase();
    if (searchOwners.has(key)) fail(`${route}: duplicate search owner with ${searchOwners.get(key)} (${owner}).`);
    searchOwners.set(key, route);
  }

  const title = decode(html.match(/<title\b[^>]*>([\s\S]*?)<\/title>/i)?.[1]);
  const h1 = decode(html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i)?.[1].replace(/<[^>]+>/g, ' '));
  const leadDesignation = owner.split(/\s+/)[0]?.toLowerCase();
  if (!title.toLowerCase().includes(leadDesignation) || !title.toLowerCase().includes('powder')) {
    fail(`${route}: title does not visibly own the grade powder query (${owner}).`);
  }
  if (!h1.toLowerCase().includes(leadDesignation) || !/supplier/i.test(h1) || !/rfq/i.test(h1)) {
    fail(`${route}: H1 does not combine the grade with supplier and RFQ intent.`);
  }

  for (const anchor of ['grade-designations', 'process-and-particle-size', 'standards-and-documents', 'price-and-quote-inputs']) {
    if (!new RegExp(`\\bid=(?:"${anchor}"|'${anchor}')`, 'i').test(html)) fail(`${route}: missing #${anchor} section.`);
  }

  if (!/\bdata-grade-guidance(?:\s|>|=)/i.test(html)) fail(`${route}: missing visible grade-identification guidance.`);
  if (/\bdata-buyer-query(?:\s|>|=)/i.test(html)) fail(`${route}: keyword-list cards must not replace buyer guidance.`);
  if (!new RegExp(`href=(?:"|')/rfq/\\?product=${productId}(?:"|')`, 'i').test(html)) {
    fail(`${route}: missing product-prefilled RFQ link.`);
  }

  const productSchemas = getSchemaObjects(html, route).filter((object) => object['@type'] === 'Product');
  if (productSchemas.length !== 1) {
    fail(`${route}: expected one Product schema, found ${productSchemas.length}.`);
    continue;
  }
  const productSchema = productSchemas[0];
  if (!Array.isArray(productSchema.alternateName) || productSchema.alternateName.length < 2) {
    fail(`${route}: Product schema needs at least two alternate designations.`);
  }
  if ('offers' in productSchema) fail(`${route}: Product schema must not imply price, stock, or an Offer.`);
  const primaryProperty = (productSchema.additionalProperty ?? []).find(
    (property) => property?.name === 'Powder designation',
  );
  if (primaryProperty?.value !== owner) fail(`${route}: schema primary query does not match the visible owner.`);
}

const catalogHtml = read(path.join(PRODUCT_ROOT, 'index.html'));
const catalogOwners = [...catalogHtml.matchAll(/\bdata-primary-query=(?:"([^"]*)"|'([^']*)')/gi)].map((match) =>
  decode(match.slice(1).find(Boolean)).toLowerCase(),
);
if (catalogOwners.length !== productDirs.length || new Set(catalogOwners).size !== productDirs.length) {
  fail(`/products/: catalog must expose ${productDirs.length} unique grade search owners; found ${catalogOwners.length}.`);
}

const layerExpectations = [
  ['materials', 'material-family'],
  ['processes', 'process'],
  ['applications', 'application'],
];
for (const [directory, layer] of layerExpectations) {
  const root = path.join(DIST, directory);
  const pages = fs
    .readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && fs.existsSync(path.join(root, entry.name, 'index.html')));
  for (const page of pages) {
    const route = `/${directory}/${page.name}/`;
    const html = read(path.join(root, page.name, 'index.html'));
    if (!new RegExp(`\\bdata-intent-layer=(?:"${layer}"|'${layer}')`, 'i').test(html)) {
      fail(`${route}: expected ${layer} intent layer.`);
    }
  }
}

const articleRoot = path.join(DIST, 'posts', 'Alloys');
const articlePages = fs
  .readdirSync(articleRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && fs.existsSync(path.join(articleRoot, entry.name, 'index.html')));
// Independent regression cases: comparisons retain both alloys; a single-grade guide
// must not inherit unrelated products merely because they share an application hub.
const expectedArticleProducts = new Map([
  ['metal-powder-specification-guide-psd-oxygen-flowability', ['316l', 'ti64', 'alsi10mg']],
  ['additive-manufacturing-powder-supplier-guide', ['316l', 'ti64', 'in718']],
  ['metal-powder-for-3d-printing-price-guide', ['316l', 'ti64', 'alsi10mg']],
  ['ti64-vs-grade-2-titanium-powder', ['ti64', 'ti-grade-2']],
  ['ti64-grade-23-vs-grade-5-powder', ['ti64-grade-23', 'ti64']],
  ['ti64-vs-17-4ph-powder-humanoid-robot-joints', ['ti64', '17-4ph']],
  ['316l-vs-17-4ph-powder', ['316l', '17-4ph']],
  ['in718-vs-in625-powder', ['in718', 'in625']],
  ['h13-vs-m300-powder', ['h13', 'm300']],
  ['316l-in625-powder-pm-hip-nuclear-pressure-components', ['316l', 'in625']],
  ['cocrmo-vs-stainless-powder-wear-critical-industrial-hardware', ['cocrmo', '316l', '17-4ph']],
  ['cucrzr-vs-pure-copper-powder', ['cucrzr']],
  ['tc4-ti6al4v-powder', ['ti64', 'ti64-grade-23']],
  ['alsi10mg-powder', ['alsi10mg']],
  ['316l-stainless-steel-powder', ['316l']],
  ['ti64-grade-23-powder-surgical-guides-and-instrument-hardware', ['ti64-grade-23']],
  ['in625-ded-powder-repair-overlays-and-oilfield-corrosion-hardware', ['in625']],
  ['cucrzr-powder-cold-plates-and-heat-sinks', ['cucrzr']],
]);
for (const slug of expectedArticleProducts.keys()) {
  if (!articlePages.some((page) => page.name === slug)) fail(`Missing article routing regression fixture: ${slug}.`);
}
for (const page of articlePages) {
  const route = `/posts/Alloys/${page.name}/`;
  const html = read(path.join(articleRoot, page.name, 'index.html'));
  if (!/\bdata-intent-layer=(?:"technical-guide"|'technical-guide')/i.test(html)) {
    fail(`${route}: article is not explicitly assigned to technical-guide intent.`);
  }
  if (!/>\s*Technical guide\s*</i.test(html)) fail(`${route}: missing visible technical-guide label.`);
  const productIds = [...html.matchAll(/\bdata-product-route="([^"]+)"/g)].map((match) => match[1]);
  const expectedProducts = expectedArticleProducts.get(page.name);
  if (expectedProducts && JSON.stringify(productIds) !== JSON.stringify(expectedProducts)) {
    fail(`${route}: expected relevant product order ${expectedProducts.join(', ')}, got ${productIds.join(', ')}.`);
  }
  for (const productId of productIds) {
    if (!productDirs.includes(productId) || !html.includes(`href="/rfq/?product=${productId}"`)) {
      fail(`${route}: product ${productId} has no valid catalog destination or prefilled RFQ.`);
    }
  }
  const blogSchemas = getSchemaObjects(html, route).filter((object) => object['@type'] === 'BlogPosting');
  if (blogSchemas.length !== 1) fail(`${route}: expected one BlogPosting schema.`);
  const articleSchema = blogSchemas[0];
  if (articleSchema) {
    const published = Date.parse(articleSchema.datePublished);
    const modified = Date.parse(articleSchema.dateModified);
    if (!Number.isFinite(published) || !Number.isFinite(modified) || modified < published || modified > Date.now()) {
      fail(`${route}: invalid, reversed or future article dates.`);
    }
    const meta = html.match(/<div\b[^>]*class="article-meta"[^>]*>([\s\S]*?)<\/div>/i)?.[1] ?? '';
    if (!meta.includes(`Published <time datetime="${articleSchema.datePublished}"`)) {
      fail(`${route}: visible publication date does not match structured data.`);
    }
    if (modified > published && !meta.includes(`Updated <time datetime="${articleSchema.dateModified}"`)) {
      fail(`${route}: visible update date does not match structured data.`);
    }
    for (const match of meta.matchAll(/<time\b[^>]*datetime="([^"]+)"[^>]*>([^<]+)<\/time>/g)) {
      const expectedDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(match[1]));
      if (decode(match[2]) !== expectedDate) fail(`${route}: displayed date depends on the build machine's time zone.`);
    }
  }
  const visibleText = decode(html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '').replace(/<[^>]+>/g, ' ')).replace(/\s+/g, ' ');
  if (/\b(?:SEO value|SEO page|search intent|internal route)\b/i.test(visibleText)) {
    fail(`${route}: internal editorial or SEO language leaked into visible buyer content.`);
  }
}

if (failures.length) {
  console.error(`Search-intent check failed: ${failures.length} issue(s).`);
  failures.slice(0, 40).forEach((failure) => console.error(`  - ${failure}`));
  if (failures.length > 40) console.error(`  - ... ${failures.length - 40} more omitted`);
  process.exit(1);
}

console.log(
  `Search-intent check passed. ${productDirs.length} grade owners | ${articlePages.length} technical guides | material, process, and application layers verified.`,
);
