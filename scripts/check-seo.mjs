import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const SITE_ORIGIN = "https://metal3dpowder.com";
const ORGANIZATION_ID = `${SITE_ORIGIN}/#organization`;
const OPERATOR_NAME = "Suzhou Como Precision Materials Co., Ltd.";
const SITE_BRAND = "Metal 3D Powder";
const SCRIPT_DIR = path.dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = path.resolve(SCRIPT_DIR, "..");
const DIST_DIR = path.join(PROJECT_ROOT, "dist");
const SITEMAP_INDEX = path.join(DIST_DIR, "sitemap-index.xml");
const MAX_MESSAGES_PER_CHECK = 12;

const failures = new Map();

function fail(check, message) {
  const messages = failures.get(check) ?? [];
  messages.push(message);
  failures.set(check, messages);
}

function walkFiles(directory) {
  const files = [];

  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...walkFiles(entryPath));
    } else if (entry.isFile()) {
      files.push(entryPath);
    }
  }

  return files;
}

function decodeEntities(value) {
  return value.replace(
    /&(#x[\da-f]+|#\d+|amp|quot|apos|lt|gt|nbsp);/gi,
    (_entity, code) => {
      const normalized = code.toLowerCase();
      if (normalized.startsWith("#x")) {
        return String.fromCodePoint(Number.parseInt(normalized.slice(2), 16));
      }
      if (normalized.startsWith("#")) {
        return String.fromCodePoint(Number.parseInt(normalized.slice(1), 10));
      }

      return {
        amp: "&",
        quot: '"',
        apos: "'",
        lt: "<",
        gt: ">",
        nbsp: "\u00a0",
      }[normalized];
    },
  );
}

function normalizeText(value) {
  return decodeEntities(value.replace(/<[^>]*>/g, " "))
    .replace(/\s+/g, " ")
    .trim();
}

function parseAttributes(tag) {
  const attributes = new Map();
  const source = tag
    .replace(/^<\s*[^\s/>]+/i, "")
    .replace(/\/?>\s*$/i, "");
  const pattern =
    /([^\s"'<>/=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;

  for (const match of source.matchAll(pattern)) {
    const name = match[1].toLowerCase();
    const value = decodeEntities(match[2] ?? match[3] ?? match[4] ?? "");
    attributes.set(name, value);
  }

  return attributes;
}

function tags(source, tagName) {
  return [...source.matchAll(new RegExp(`<${tagName}\\b[^>]*>`, "gi"))].map(
    (match) => match[0],
  );
}

function htmlRoute(filePath) {
  const relative = path.relative(DIST_DIR, filePath).split(path.sep).join("/");
  if (relative === "index.html") return "/";
  if (relative.endsWith("/index.html")) {
    return `/${relative.slice(0, -"index.html".length)}`;
  }
  return `/${relative}`;
}

function publicPath(filePath) {
  return `/${path.relative(DIST_DIR, filePath).split(path.sep).join("/")}`;
}

function canonicalUrl(route) {
  return new URL(route, `${SITE_ORIGIN}/`).href;
}

function isNoindex(head) {
  return tags(head, "meta").some((tag) => {
    const attributes = parseAttributes(tag);
    const name = attributes.get("name")?.toLowerCase();
    if (name !== "robots" && name !== "googlebot") return false;
    return (attributes.get("content") ?? "")
      .toLowerCase()
      .split(",")
      .map((directive) => directive.trim())
      .includes("noindex");
  });
}

function getJsonLd(html, route) {
  const documents = [];
  const pattern = /<script\b([^>]*)>([\s\S]*?)<\/script>/gi;

  for (const match of html.matchAll(pattern)) {
    const attributes = parseAttributes(`<script${match[1]}>`);
    if (attributes.get("type")?.toLowerCase() !== "application/ld+json") {
      continue;
    }

    const source = match[2].trim();
    try {
      documents.push(JSON.parse(source));
    } catch (error) {
      fail(
        "json-ld",
        `${route}: JSON-LD is not valid JSON (${error.message}).`,
      );
    }
  }

  return documents;
}

function visitObjects(value, callback) {
  if (Array.isArray(value)) {
    for (const item of value) visitObjects(item, callback);
    return;
  }
  if (!value || typeof value !== "object") return;

  callback(value);
  for (const child of Object.values(value)) {
    visitObjects(child, callback);
  }
}

function hasType(value, expectedType) {
  const types = Array.isArray(value?.["@type"])
    ? value["@type"]
    : [value?.["@type"]];
  return types.includes(expectedType);
}

function containsWorldwide(value) {
  if (typeof value === "string") {
    return value.trim().toLowerCase() === "worldwide";
  }
  if (Array.isArray(value)) return value.some(containsWorldwide);
  if (value && typeof value === "object") {
    return Object.values(value).some(containsWorldwide);
  }
  return false;
}

function normalizedSchemaField(value) {
  if (typeof value === "string") return value.trim();
  if (Array.isArray(value)) {
    return JSON.stringify(value.map(normalizedSchemaField));
  }
  return "";
}

function internalTarget(href, fromRoute) {
  const trimmed = href.trim();
  if (
    !trimmed ||
    trimmed.startsWith("#") ||
    /^(?:mailto|tel|javascript|data|blob):/i.test(trimmed)
  ) {
    return null;
  }

  let url;
  try {
    url = new URL(trimmed, canonicalUrl(fromRoute));
  } catch {
    return { malformed: true, href: trimmed };
  }

  if (!["http:", "https:"].includes(url.protocol)) return null;
  const hostname = url.hostname.toLowerCase();
  if (hostname !== "metal3dpowder.com" && hostname !== "www.metal3dpowder.com") {
    return null;
  }

  let decodedPath;
  try {
    decodedPath = decodeURI(url.pathname);
  } catch {
    return { malformed: true, href: trimmed };
  }

  return {
    href: trimmed,
    url,
    path: decodedPath,
    nonCanonicalOrigin:
      url.protocol !== "https:" || hostname !== "metal3dpowder.com",
  };
}

function routeForTarget(targetPath, routes, files) {
  if (routes.has(targetPath)) return targetPath;
  if (
    targetPath !== "/" &&
    !targetPath.endsWith("/") &&
    routes.has(`${targetPath}/`)
  ) {
    return `${targetPath}/`;
  }
  if (files.has(targetPath)) return targetPath;
  return null;
}

function parseSitemaps(filePath, visited = new Set()) {
  const resolved = path.resolve(filePath);
  if (visited.has(resolved)) {
    fail("sitemap", `Sitemap cycle detected at ${publicPath(resolved)}.`);
    return [];
  }
  visited.add(resolved);

  if (!resolved.startsWith(`${DIST_DIR}${path.sep}`) && resolved !== DIST_DIR) {
    fail("sitemap", `Sitemap escaped dist: ${resolved}.`);
    return [];
  }
  if (!fs.existsSync(resolved)) {
    fail("sitemap", `Referenced sitemap does not exist: ${resolved}.`);
    return [];
  }

  const xml = fs.readFileSync(resolved, "utf8");
  if (/<sitemapindex\b/i.test(xml)) {
    const entries = [];
    for (const match of xml.matchAll(
      /<sitemap\b[^>]*>[\s\S]*?<loc\b[^>]*>([\s\S]*?)<\/loc>[\s\S]*?<\/sitemap>/gi,
    )) {
      const location = decodeEntities(match[1].trim());
      let url;
      try {
        url = new URL(location);
      } catch {
        fail("sitemap", `${publicPath(resolved)} has invalid loc: ${location}.`);
        continue;
      }
      if (url.origin !== SITE_ORIGIN) {
        fail(
          "sitemap",
          `${publicPath(resolved)} references a non-canonical origin: ${location}.`,
        );
        continue;
      }
      let sitemapPath;
      try {
        sitemapPath = decodeURI(url.pathname);
      } catch {
        fail(
          "sitemap",
          `${publicPath(resolved)} has malformed URL encoding: ${location}.`,
        );
        continue;
      }
      const child = path.resolve(DIST_DIR, `.${sitemapPath}`);
      entries.push(...parseSitemaps(child, visited));
    }
    return entries;
  }

  if (!/<urlset\b/i.test(xml)) {
    fail("sitemap", `${publicPath(resolved)} is neither sitemapindex nor urlset.`);
    return [];
  }

  const entries = [];
  for (const match of xml.matchAll(/<url\b[^>]*>([\s\S]*?)<\/url>/gi)) {
    const block = match[1];
    const locationMatch = block.match(/<loc\b[^>]*>([\s\S]*?)<\/loc>/i);
    if (!locationMatch) {
      fail("sitemap", `${publicPath(resolved)} contains a URL without loc.`);
      continue;
    }

    const location = decodeEntities(locationMatch[1].trim());
    const lastmodMatch = block.match(
      /<lastmod\b[^>]*>([\s\S]*?)<\/lastmod>/i,
    );
    entries.push({
      location,
      lastmod: lastmodMatch
        ? decodeEntities(lastmodMatch[1].trim())
        : undefined,
      source: publicPath(resolved),
    });
  }

  return entries;
}

if (!fs.existsSync(DIST_DIR)) {
  console.error("SEO check failed: dist does not exist. Run the build first.");
  process.exit(1);
}

if (!fs.existsSync(SITEMAP_INDEX)) {
  console.error("SEO check failed: dist/sitemap-index.xml does not exist.");
  process.exit(1);
}

const allFiles = walkFiles(DIST_DIR);
const htmlFiles = allFiles.filter((file) => file.toLowerCase().endsWith(".html"));
const filePaths = new Set(allFiles.map(publicPath));
const routePaths = new Set(htmlFiles.map(htmlRoute));
const pages = new Map();
const indexableRoutes = new Set();
const noindexRoutes = new Set();
const inboundRoutes = new Map();
const titleOwners = new Map();
const descriptionOwners = new Map();
let organizationIdentity;
let imageCount = 0;
let internalLinkCount = 0;

for (const file of htmlFiles) {
  const route = htmlRoute(file);
  const html = fs.readFileSync(file, "utf8");
  const headMatch = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i);
  const head = headMatch?.[1] ?? "";
  if (!headMatch) fail("head", `${route}: missing <head>.`);

  const noindex = isNoindex(head);
  const indexable = !noindex && route !== "/404.html";
  if (indexable) indexableRoutes.add(route);
  if (noindex) noindexRoutes.add(route);

  const titleMatches = [...head.matchAll(/<title\b[^>]*>([\s\S]*?)<\/title>/gi)];
  const title = titleMatches[0] ? normalizeText(titleMatches[0][1]) : "";
  const descriptionTags = tags(head, "meta").filter(
    (tag) => parseAttributes(tag).get("name")?.toLowerCase() === "description",
  );
  const description = descriptionTags[0]
    ? normalizeText(parseAttributes(descriptionTags[0]).get("content") ?? "")
    : "";
  const h1Count = [...html.matchAll(/<h1\b[^>]*>/gi)].length;
  const canonicalTags = tags(head, "link").filter((tag) => {
    const rel = parseAttributes(tag).get("rel")?.toLowerCase() ?? "";
    return rel.split(/\s+/).includes("canonical");
  });
  const mainTargets = tags(html, "main").filter(
    (tag) => parseAttributes(tag).get("id") === "main-content",
  );
  const skipLinks = tags(html, "a").filter((tag) => {
    const attributes = parseAttributes(tag);
    const classes = (attributes.get("class") ?? "").split(/\s+/);
    return (
      attributes.get("href") === "#main-content" &&
      classes.includes("skip-link")
    );
  });

  if (mainTargets.length !== 1) {
    fail(
      "document-structure",
      `${route}: expected one <main id="main-content">, found ${mainTargets.length}.`,
    );
  }
  if (skipLinks.length !== 1) {
    fail(
      "document-structure",
      `${route}: expected one skip link to #main-content, found ${skipLinks.length}.`,
    );
  }

  if (indexable) {
    if (titleMatches.length !== 1 || !title) {
      fail(
        "title",
        `${route}: expected one non-empty title, found ${titleMatches.length}.`,
      );
    }
    if (descriptionTags.length !== 1 || !description) {
      fail(
        "description",
        `${route}: expected one non-empty meta description, found ${descriptionTags.length}.`,
      );
    }
    if (h1Count !== 1) {
      fail("h1", `${route}: expected one H1, found ${h1Count}.`);
    }
    if (canonicalTags.length !== 1) {
      fail(
        "canonical",
        `${route}: expected one canonical, found ${canonicalTags.length}.`,
      );
    }

    if (title) {
      const key = title.toLowerCase();
      const owners = titleOwners.get(key) ?? [];
      owners.push(route);
      titleOwners.set(key, owners);
    }
    if (description) {
      const key = description.toLowerCase();
      const owners = descriptionOwners.get(key) ?? [];
      owners.push(route);
      descriptionOwners.set(key, owners);
    }
  } else if (canonicalTags.length > 1) {
    fail(
      "canonical",
      `${route}: noindex page has ${canonicalTags.length} canonicals.`,
    );
  }

  if (canonicalTags.length === 1) {
    const href = parseAttributes(canonicalTags[0]).get("href") ?? "";
    if (href !== canonicalUrl(route)) {
      fail(
        "canonical",
        `${route}: canonical is ${href || "(empty)"}, expected ${canonicalUrl(route)}.`,
      );
    }
  }

  const jsonLd = getJsonLd(html, route);
  const allSchemaObjects = [];
  for (const document of jsonLd) {
    visitObjects(document, (object) => allSchemaObjects.push(object));
  }

  const breadcrumbSchemas = allSchemaObjects.filter((object) =>
    hasType(object, "BreadcrumbList"),
  );
  const visibleBreadcrumbs = tags(html, "nav").filter(
    (tag) =>
      parseAttributes(tag).get("aria-label")?.toLowerCase() === "breadcrumb",
  );

  if (indexable && route !== "/") {
    if (breadcrumbSchemas.length !== 1 || visibleBreadcrumbs.length !== 1) {
      fail(
        "breadcrumbs",
        `${route}: expected one visible breadcrumb and one BreadcrumbList; found ${visibleBreadcrumbs.length} visible and ${breadcrumbSchemas.length} schema.`,
      );
    }
  } else if (breadcrumbSchemas.length > 0) {
    fail(
      "breadcrumbs",
      `${route}: noindex/home page must not emit BreadcrumbList; found ${breadcrumbSchemas.length}.`,
    );
  }

  const collectionPages = allSchemaObjects.filter((object) =>
    hasType(object, "CollectionPage"),
  );
  for (const collectionPage of collectionPages) {
    const order = collectionPage.mainEntity?.itemListOrder;
    const isChronologicalArchive =
      route === "/blog/" ||
      route.startsWith("/blog/page/") ||
      route.startsWith("/blog/tags/");
    const expectedOrder = isChronologicalArchive
      ? "https://schema.org/ItemListOrderDescending"
      : "https://schema.org/ItemListUnordered";
    if (order !== expectedOrder) {
      fail(
        "itemlist-order",
        `${route}: CollectionPage ItemList order is ${order || "(missing)"}, expected ${expectedOrder}.`,
      );
    }
  }

  for (const object of allSchemaObjects) {
    if (
      Object.hasOwn(object, "areaServed") &&
      containsWorldwide(object.areaServed)
    ) {
      fail(
        "organization",
        `${route}: structured data contains areaServed=Worldwide.`,
      );
    }
  }

  if (indexable) {
    const organizationDefinitions = allSchemaObjects.filter(
      (object) => hasType(object, "Organization"),
    );

    for (const organization of organizationDefinitions) {
      const organizationName = normalizedSchemaField(organization.name);
      const isSiteOperator =
        organizationName === OPERATOR_NAME || organizationName === SITE_BRAND;

      if (isSiteOperator && organization["@id"] !== ORGANIZATION_ID) {
        fail(
          "organization",
          `${route}: site operator Organization must use @id ${ORGANIZATION_ID}.`,
        );
      }

      if (organization["@id"] === ORGANIZATION_ID) {
        const name = normalizedSchemaField(organization.name);
        const alternateName = normalizedSchemaField(organization.alternateName);
        if (!name || !alternateName) {
          fail(
            "organization",
            `${route}: Organization requires non-empty name and alternateName.`,
          );
        } else {
          const identity = JSON.stringify({
            id: organization["@id"],
            name,
            alternateName,
          });
          if (organizationIdentity && organizationIdentity !== identity) {
            fail(
              "organization",
              `${route}: Organization @id/name/alternateName are not sitewide-stable.`,
            );
          }
          organizationIdentity ??= identity;
        }
      }
    }
  }

  for (const imageTag of tags(html, "img")) {
    imageCount += 1;
    const attributes = parseAttributes(imageTag);
    if (!attributes.has("alt")) {
      fail("images", `${route}: image is missing alt.`);
    }
    for (const dimension of ["width", "height"]) {
      const value = attributes.get(dimension) ?? "";
      if (!/^\d+(?:\.\d+)?$/.test(value) || Number(value) <= 0) {
        fail(
          "images",
          `${route}: image has invalid or missing ${dimension} (${value || "missing"}).`,
        );
      }
    }
  }

  const anchorHrefs = [];
  for (const anchorTag of tags(html, "a")) {
    const attributes = parseAttributes(anchorTag);
    if (!attributes.has("href")) continue;
    const href = attributes.get("href") ?? "";
    anchorHrefs.push(href);

    const target = internalTarget(href, route);
    if (!target) continue;
    internalLinkCount += 1;
    if (target.malformed) {
      fail("internal-links", `${route}: malformed href ${target.href}.`);
      continue;
    }
    if (target.nonCanonicalOrigin) {
      fail(
        "internal-links",
        `${route}: internal href uses a non-canonical origin (${target.href}).`,
      );
    }

    const targetRoute = routeForTarget(target.path, routePaths, filePaths);
    if (!targetRoute) {
      fail(
        "internal-links",
        `${route}: internal href does not resolve in dist (${target.href}).`,
      );
      continue;
    }

    const lastSegment = target.path.split("/").filter(Boolean).at(-1) ?? "";
    if (
      target.path !== "/" &&
      !target.path.endsWith("/") &&
      !lastSegment.includes(".") &&
      routePaths.has(`${target.path}/`)
    ) {
      fail(
        "trailing-slash",
        `${route}: non-canonical internal href ${target.href}; use ${target.path}/.`,
      );
    }

    if (
      indexable &&
      (target.path === "/blog/tags" ||
        target.path.startsWith("/blog/tags/"))
    ) {
      fail(
        "tag-links",
        `${route}: indexable page links to noindex tag archive ${target.href}.`,
      );
    }

    if (routePaths.has(targetRoute) && targetRoute !== route) {
      const sources = inboundRoutes.get(targetRoute) ?? new Set();
      sources.add(route);
      inboundRoutes.set(targetRoute, sources);
    }
  }

  pages.set(route, { anchorHrefs, indexable, jsonLd });
}

for (const [title, owners] of titleOwners) {
  if (owners.length > 1) {
    fail("duplicate-title", `${JSON.stringify(title)}: ${owners.join(", ")}.`);
  }
}

for (const [description, owners] of descriptionOwners) {
  if (owners.length > 1) {
    fail(
      "duplicate-description",
      `${JSON.stringify(description)}: ${owners.join(", ")}.`,
    );
  }
}

for (const route of indexableRoutes) {
  if (route !== "/" && !(inboundRoutes.get(route)?.size > 0)) {
    fail("orphans", `${route}: indexable page has no internal inbound link.`);
  }
}

const articleRoutes = [...pages.keys()].filter((route) =>
  route.startsWith("/posts/Alloys/"),
);
for (const route of articleRoutes) {
  const productLinks = pages
    .get(route)
    .anchorHrefs.map((href) => internalTarget(href, route))
    .filter(
      (target) =>
        target &&
        !target.malformed &&
        /^\/products\/[^/]+\/$/.test(target.path),
    );

  if (productLinks.length === 0) {
    fail(
      "commercial-paths",
      `${route}: article has no contextual link to a product-detail page.`,
    );
  }
}

const productRoutes = [...indexableRoutes].filter((route) =>
  /^\/products\/[^/]+\/$/.test(route),
);
for (const route of productRoutes) {
  const editorialSources = [...(inboundRoutes.get(route) ?? [])].filter(
    (source) => source.startsWith("/posts/Alloys/"),
  );
  if (editorialSources.length === 0) {
    fail(
      "commercial-paths",
      `${route}: product has no contextual inbound link from an article.`,
    );
  }
}

const notFound = pages.get("/404.html");
if (!notFound) {
  fail("404", "/404.html is missing from dist.");
} else if (notFound.indexable || !noindexRoutes.has("/404.html")) {
  fail("404", "/404.html must contain a noindex robots directive.");
}

const homepage = pages.get("/");
if (!homepage) {
  fail("homepage-itemlist", "Homepage is missing.");
} else {
  const homepageOrganizations = [];
  for (const document of homepage.jsonLd) {
    visitObjects(document, (object) => {
      if (
        hasType(object, "Organization") &&
        object["@id"] === ORGANIZATION_ID
      ) {
        homepageOrganizations.push(object);
      }
    });
  }
  if (homepageOrganizations.length !== 1) {
    fail(
      "organization",
      `Homepage must define exactly one Organization with @id ${ORGANIZATION_ID}; found ${homepageOrganizations.length}.`,
    );
  }

  const homepageTargets = new Set();
  for (const href of homepage.anchorHrefs) {
    const target = internalTarget(href, "/");
    if (target && !target.malformed) {
      homepageTargets.add(canonicalUrl(target.path));
    }
  }

  const collectionPages = [];
  for (const document of homepage.jsonLd) {
    visitObjects(document, (object) => {
      if (hasType(object, "CollectionPage")) collectionPages.push(object);
    });
  }

  for (const collectionPage of collectionPages) {
    const itemLists = [];
    visitObjects(collectionPage.mainEntity, (object) => {
      if (hasType(object, "ItemList")) itemLists.push(object);
    });
    for (const itemList of itemLists) {
      const elements = Array.isArray(itemList.itemListElement)
        ? itemList.itemListElement
        : [];
      for (const element of elements) {
        const value =
          typeof element?.url === "string"
            ? element.url
            : typeof element?.item === "string"
              ? element.item
              : element?.item?.url;
        if (typeof value !== "string") {
          fail(
            "homepage-itemlist",
            "Homepage CollectionPage ItemList contains an item without a URL.",
          );
          continue;
        }
        let itemUrl;
        try {
          itemUrl = new URL(value, `${SITE_ORIGIN}/`);
        } catch {
          fail(
            "homepage-itemlist",
            `Homepage CollectionPage ItemList has an invalid URL: ${value}.`,
          );
          continue;
        }
        itemUrl.hash = "";
        itemUrl.search = "";
        if (!homepageTargets.has(itemUrl.href)) {
          fail(
            "homepage-itemlist",
            `Homepage ItemList URL is not present in a visible href: ${itemUrl.href}.`,
          );
        }
      }
    }
  }
}

if (!organizationIdentity) {
  fail(
    "organization",
    `No complete Organization definition found for ${ORGANIZATION_ID}.`,
  );
}

const sitemapEntries = parseSitemaps(SITEMAP_INDEX);
const sitemapLocations = new Set();
const futureToleranceMs = 5 * 60 * 1000;

for (const entry of sitemapEntries) {
  let location;
  try {
    location = new URL(entry.location);
  } catch {
    fail("sitemap", `${entry.source} has invalid loc: ${entry.location}.`);
    continue;
  }

  if (location.origin !== SITE_ORIGIN || location.search || location.hash) {
    fail(
      "sitemap",
      `${entry.source} has a non-canonical loc: ${entry.location}.`,
    );
  }
  if (sitemapLocations.has(location.href)) {
    fail("sitemap", `Duplicate sitemap loc: ${location.href}.`);
  }
  sitemapLocations.add(location.href);

  if (entry.lastmod) {
    const parsed = Date.parse(entry.lastmod);
    if (Number.isNaN(parsed)) {
      fail(
        "lastmod",
        `${location.href}: invalid lastmod ${entry.lastmod}.`,
      );
    } else if (parsed > Date.now() + futureToleranceMs) {
      fail(
        "lastmod",
        `${location.href}: future lastmod ${entry.lastmod}.`,
      );
    } else if (!location.pathname.startsWith("/posts/Alloys/")) {
      fail(
        "lastmod",
        `${location.href}: lastmod is only allowed where article frontmatter provides a verifiable date.`,
      );
    }
  }
}

const expectedSitemapLocations = new Set(
  [...indexableRoutes].map(canonicalUrl),
);

for (const expected of expectedSitemapLocations) {
  if (!sitemapLocations.has(expected)) {
    fail("sitemap-coverage", `Indexable URL is missing from sitemap: ${expected}.`);
  }
}
for (const actual of sitemapLocations) {
  if (!expectedSitemapLocations.has(actual)) {
    const route = new URL(actual).pathname;
    if (noindexRoutes.has(route)) {
      fail("sitemap-coverage", `Noindex URL is in sitemap: ${actual}.`);
    } else {
      fail("sitemap-coverage", `Non-indexable URL is in sitemap: ${actual}.`);
    }
  }
}

if (failures.size > 0) {
  const totalFailures = [...failures.values()].reduce(
    (total, messages) => total + messages.length,
    0,
  );
  console.error(
    `\nSEO check failed: ${totalFailures} issue(s) across ${failures.size} check(s).\n`,
  );

  for (const [check, messages] of failures) {
    console.error(`[${check}] ${messages.length} issue(s)`);
    for (const message of messages.slice(0, MAX_MESSAGES_PER_CHECK)) {
      console.error(`  - ${message}`);
    }
    if (messages.length > MAX_MESSAGES_PER_CHECK) {
      console.error(
        `  - ... ${messages.length - MAX_MESSAGES_PER_CHECK} more omitted`,
      );
    }
  }

  process.exit(1);
}

console.log(
  [
    "SEO check passed.",
    `${htmlFiles.length} HTML pages`,
    `${indexableRoutes.size} indexable URLs`,
    `${sitemapLocations.size} sitemap URLs`,
    `${internalLinkCount} internal links`,
    `${imageCount} images`,
  ].join(" | "),
);
