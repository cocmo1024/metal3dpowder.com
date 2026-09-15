import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const outputRoot = path.resolve('dist');
const textExtensions = new Set(['.css', '.html', '.js', '.json', '.svg', '.txt', '.xml']);
const decodeRule = (encoded) => Buffer.from(encoded, 'base64').toString('utf8');
const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const exactPattern = (encoded, flags = 'giu') => new RegExp(escapeRegExp(decodeRule(encoded)), flags);
const forbidden = [
  { label: 'supplier name A', pattern: exactPattern('5aiB5ouJ6YeM') },
  { label: 'supplier brand A', pattern: exactPattern('dmlsb3J5') },
  { label: 'supplier domain A', pattern: exactPattern('d2xseGNs') },
  { label: 'supplier name B', pattern: exactPattern('5Lit6Iiq6L+I54m5') },
  { label: 'supplier brand B', pattern: exactPattern('YXZpbWV0YWw=') },
  { label: 'supplier product brand B', pattern: exactPattern('bWV0YWxhbQ==') },
  { label: 'supplier SKU prefix', pattern: exactPattern('Vk1QLQ==', 'gu') },
  ...['UFcwMQ==', 'QTYwWA==', 'Q29DcjAx', 'Q29DcjAy'].map((encoded) => ({
    label: 'proprietary brochure grade',
    pattern: exactPattern(encoded, 'gu'),
  })),
];

// Keep published URLs and primary-source links stable, not their former marketing labels.
const stableReferences = [
  '/blog/tags/hastelloy-x/',
  '/images/blog/hastelloy-x-powder-hypersonic-wind-tunnel-hot-gas-test-hardware.webp',
  '/images/products/hastelloyx.svg',
  '/posts/Alloys/hastelloy-x-powder-furnace-and-hot-gas-hardware/',
  '/posts/Alloys/hastelloy-x-powder/',
  'https://haynesintl.com/en/alloys/alloy-portfolio/high-temperature-alloys/hastelloy-x/',
  'https://www.specialmetals.com/documents/technical-bulletins/inconel/inconel-alloy-625.pdf',
];

const materialBrandRules = [
  { label: 'third-party alloy brand', pattern: /\b(?:hastelloy|inconel|haynes|aermet|scalmalloy)\b/i },
  { label: 'proprietary high-temperature alloy name', pattern: /\b(?:cm[\s-]*247[\s-]*lc|mar[\s-]*m[\s-]*247)\b/i },
  { label: 'proprietary tool-steel grade name', pattern: /\bs[\s-]*136\b/i },
];

const decodeEntities = (content) => content
  .replace(/&#(x[0-9a-f]+|\d+);?/gi, (match, code) => {
    const value = code.toLowerCase().startsWith('x') ? parseInt(code.slice(1), 16) : Number(code);
    return value <= 0x10ffff ? String.fromCodePoint(value) : match;
  })
  .replace(/&nbsp;/gi, ' ')
  .replace(/&amp;/gi, '&');

export const findMaterialBrandMentions = (content) => {
  const decoded = decodeEntities(content);
  const checked = stableReferences.reduce((text, reference) => text.replaceAll(reference, ''), decoded);
  return materialBrandRules.filter(({ pattern }) => pattern.test(checked)).map(({ label }) => label);
};

const collectTextFiles = async (directory) => {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(
    entries.map(async (entry) => {
      const target = path.join(directory, entry.name);
      if (entry.isDirectory()) return collectTextFiles(target);
      return textExtensions.has(path.extname(entry.name).toLowerCase()) ? [target] : [];
    }),
  );
  return nested.flat();
};

const checkOutput = async () => {
  const files = await collectTextFiles(outputRoot);
  const findings = [];

  for (const file of files) {
    const content = await readFile(file, 'utf8');
    for (const rule of forbidden) {
      rule.pattern.lastIndex = 0;
      if (rule.pattern.test(content)) {
        findings.push(`${path.relative(outputRoot, file)}: ${rule.label}`);
      }
    }
    for (const label of findMaterialBrandMentions(content)) {
      findings.push(`${path.relative(outputRoot, file)}: ${label}`);
    }
  }

  if (findings.length) {
    console.error('Debranding check failed. Supplier identity or third-party material branding was found:');
    findings.forEach((finding) => console.error(`- ${finding}`));
    process.exitCode = 1;
    return;
  }

  console.log(`Debranding check passed across ${files.length} generated text assets.`);
};

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await checkOutput();
}
