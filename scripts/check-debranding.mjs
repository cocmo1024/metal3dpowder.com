import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

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
}

if (findings.length) {
  console.error('Debranding check failed. Forbidden supplier identity or proprietary codes were found:');
  findings.forEach((finding) => console.error(`- ${finding}`));
  process.exit(1);
}

console.log(`Debranding check passed across ${files.length} generated text assets.`);
