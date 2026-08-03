import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const PRODUCT_ROOT = path.join(ROOT, 'dist', 'products');
const failures = [];

const expectedProcesses = {
  ti64: ['LPBF', 'EBM', 'DED'],
  'ti64-grade-23': ['LPBF', 'EBM'],
  'ti-grade-2': ['LPBF', 'EBM'],
  ta15: ['LPBF', 'EBM', 'DED'],
  '316l': ['LPBF', 'DED', 'Binder jet', 'MIM'],
  '17-4ph': ['LPBF', 'Binder jet', 'MIM'],
  m300: ['LPBF', 'DED'],
  h13: ['LPBF', 'DED'],
  in718: ['LPBF', 'DED'],
  in625: ['LPBF', 'DED'],
  hastelloyx: ['LPBF'],
  alsi10mg: ['LPBF'],
  cucrzr: ['LPBF'],
  cocrmo: ['LPBF', 'EBM', 'MIM'],
};

const commonTitanium = {
  D10: '≥15 µm',
  D50: '30–40 µm',
  D90: '≤63 µm',
  Sphericity: '≥0.90',
  'Apparent density': '≥2.4 g/cm³',
  'Tap density': '≥2.8 g/cm³',
  Flow: '≤35 s/50 g',
};

const commonSteel = {
  D10: '≥15 µm',
  D50: '30–40 µm',
  D90: '≤60 µm',
  Sphericity: '≥0.90',
  'Apparent density': '≥4.0 g/cm³',
  'Tap density': '≥4.5 g/cm³',
  Flow: '≤20 s/50 g',
};

const commonNickel = {
  D10: '≥15 µm',
  D50: '30–40 µm',
  D90: '≤60 µm',
  Sphericity: '≥0.90',
  'Apparent density': '≥4.4 g/cm³',
  'Tap density': '≥5.0 g/cm³',
  Flow: '≤18 s/50 g',
};

const expectedScreeningMetrics = {
  ti64: commonTitanium,
  ta15: commonTitanium,
  '316l': commonSteel,
  '17-4ph': commonSteel,
  m300: commonSteel,
  in718: commonNickel,
  in625: commonNickel,
  hastelloyx: commonNickel,
  alsi10mg: {
    D10: '≥15 µm',
    D50: '30–45 µm',
    D90: '≤70 µm',
    Sphericity: '≥0.90',
    'Apparent density': '≥1.35 g/cm³',
    'Tap density': '≥1.6 g/cm³',
  },
  cucrzr: {
    D10: '≥15 µm',
    D50: '30–40 µm',
    D90: '≤60 µm',
    Sphericity: '≥0.90',
    'Apparent density': '≥4.4 g/cm³',
    'Tap density': '≥5.2 g/cm³',
    Flow: '≤22 s/50 g',
  },
  cocrmo: {
    D10: '≥12 µm',
    D50: '25–40 µm',
    D90: '≤65 µm',
    Sphericity: '≥0.85',
    'Apparent density': '≥4.4 g/cm³',
    'Tap density': '≥5.0 g/cm³',
    Flow: '≤25 s/50 g',
  },
};

const excludedSchemaAliases = {
  ti64: ['TC4'],
  'ti64-grade-23': ['TC4 ELI'],
  'ti-grade-2': ['TA1'],
  in718: ['GH4169', 'Inconel 718'],
  in625: ['GH3625', 'Inconel 625'],
  hastelloyx: ['GH3536', 'Hastelloy X'],
  cucrzr: ['UNS C18150'],
};

const decode = (value = '') =>
  value
    .replaceAll('&amp;', '&')
    .replaceAll('&quot;', '"')
    .replaceAll('&#39;', "'")
    .replaceAll('&lt;', '<')
    .replaceAll('&gt;', '>')
    .trim();

const schemasFromHtml = (html, route) => {
  const schemas = [];
  for (const match of html.matchAll(/<script\b[^>]*type=(?:"application\/ld\+json"|'application\/ld\+json')[^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      schemas.push(JSON.parse(decode(match[1])));
    } catch (error) {
      failures.push(`${route}: invalid JSON-LD (${error.message}).`);
    }
  }
  return schemas;
};

const visit = (value, callback) => {
  if (Array.isArray(value)) return value.forEach((item) => visit(item, callback));
  if (!value || typeof value !== 'object') return;
  callback(value);
  Object.values(value).forEach((item) => visit(item, callback));
};

if (!fs.existsSync(PRODUCT_ROOT)) {
  console.error('Powder-data check failed: dist/products does not exist. Run the build first.');
  process.exit(1);
}

for (const [productId, expected] of Object.entries(expectedProcesses)) {
  const route = `/products/${productId}/`;
  const file = path.join(PRODUCT_ROOT, productId, 'index.html');
  if (!fs.existsSync(file)) {
    failures.push(`${route}: generated product page is missing.`);
    continue;
  }

  const html = fs.readFileSync(file, 'utf8');
  const objects = [];
  schemasFromHtml(html, route).forEach((schema) => visit(schema, (object) => objects.push(object)));
  const productSchemas = objects.filter((object) => object['@type'] === 'Product');
  if (productSchemas.length !== 1) {
    failures.push(`${route}: expected one Product schema, found ${productSchemas.length}.`);
    continue;
  }

  const product = productSchemas[0];
  const properties = Array.isArray(product.additionalProperty) ? product.additionalProperty : [];
  const processProperty = properties.find((property) => property?.name === 'Candidate manufacturing processes');
  const actualProcesses = String(processProperty?.value ?? '')
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean);
  if (JSON.stringify(actualProcesses) !== JSON.stringify(expected)) {
    failures.push(`${route}: process routes are ${actualProcesses.join(', ') || 'missing'}; expected ${expected.join(', ')}.`);
  }

  const blockedAliases = excludedSchemaAliases[productId] ?? [];
  const schemaAliases = Array.isArray(product.alternateName) ? product.alternateName : [];
  for (const alias of blockedAliases) {
    if (schemaAliases.includes(alias)) {
      failures.push(`${route}: cautioned designation ${alias} must not be emitted as an exact Product alternateName.`);
    }
  }

  const screeningProperties = properties.filter((property) =>
    String(property?.name ?? '').startsWith('Indicative screening value: '),
  );
  const expectedMetrics = expectedScreeningMetrics[productId];
  if (!expectedMetrics) {
    if (screeningProperties.length) failures.push(`${route}: must not publish a grade-specific screening window.`);
    continue;
  }

  const actualMetrics = Object.fromEntries(
    screeningProperties.map((property) => [String(property.name).replace('Indicative screening value: ', ''), property.value]),
  );
  if (JSON.stringify(actualMetrics) !== JSON.stringify(expectedMetrics)) {
    failures.push(`${route}: screening metrics do not match the locked grade-specific data map.`);
  }
  for (const property of screeningProperties) {
    if (!String(property.description ?? '').trim()) {
      failures.push(`${route}: ${property.name} is missing its qualification description in Product JSON-LD.`);
    }
  }
}

if (failures.length) {
  console.error(`Powder-data check failed: ${failures.length} issue(s).`);
  failures.forEach((failure) => console.error(`  - ${failure}`));
  process.exit(1);
}

console.log(
  `Powder-data check passed. ${Object.keys(expectedProcesses).length} product process maps and ${Object.keys(expectedScreeningMetrics).length} grade-specific screening windows verified.`,
);
