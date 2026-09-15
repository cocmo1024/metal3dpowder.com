import assert from 'node:assert/strict';
import test from 'node:test';
import { findMaterialBrandMentions } from './check-debranding.mjs';

test('rejects obvious material brands in public labels and metadata', () => {
  for (const label of ['HASTELLOY X', 'Inconel 718', 'Haynes 230', 'AerMet 100', 'Scalmalloy', 'CM247LC', 'CM 247 LC', 'MAR-M247', 'S136']) {
    assert.ok(findMaterialBrandMentions(`<meta name="description" content="${label} powder supplier">`).length, label);
  }
});

test('checks SVG text, JSON-LD, search aliases and dynamic form options', () => {
  for (const content of [
    '<svg><text>HASTELLOY X</text></svg>',
    '<script type="application/ld+json">{"additionalProperty":"Inconel 625"}</script>',
    '<div data-search="Haynes 188"></div>',
    '<script>const extra = ["Aermet 100"];</script>',
  ]) assert.ok(findMaterialBrandMentions(content).length);
});

test('recognizes case and character references', () => {
  for (const content of ['hAsTeLlOy', 'H&#65;STELLOY', 'H&#x41;STELLOY', 'CM&nbsp;247&nbsp;LC']) {
    assert.ok(findMaterialBrandMentions(content).length, content);
  }
});

test('allows established route and image references, not branded link text', () => {
  const link = '<a href="/posts/Alloys/hastelloy-x-powder/">Alloy X powder</a>';
  assert.deepEqual(findMaterialBrandMentions(link), []);
  assert.deepEqual(findMaterialBrandMentions('<img src="/images/products/hastelloyx.svg" alt="Alloy X">'), []);
  assert.deepEqual(findMaterialBrandMentions('<a href="/blog/tags/hastelloy-x/">Alloy X</a>'), []);
  assert.ok(findMaterialBrandMentions(link.replace('Alloy X powder', 'Hastelloy X powder')).length);
  assert.ok(findMaterialBrandMentions('<a href="/lp/hastelloy-new/">Powder</a>').length);
});

test('allows the reviewed primary-source URLs without exempting accompanying claims', () => {
  const url = 'https://haynesintl.com/en/alloys/alloy-portfolio/high-temperature-alloys/hastelloy-x/';
  assert.deepEqual(findMaterialBrandMentions(`<a href="${url}">Published Alloy X technical page</a>`), []);
  assert.ok(findMaterialBrandMentions(`<a href="${url}">Hastelloy powder supplier</a>`).length);
});

test('preserves specification-led designations and internal product identity', () => {
  assert.deepEqual(findMaterialBrandMentions('Alloy X UNS N06002 Alloy 718 UNS N07718 GH3230 GH5188 17-4PH UNS S17400 15-5PH'), []);
  assert.deepEqual(findMaterialBrandMentions('<button data-add-product="hastelloyx">Alloy X</button>'), []);
});
