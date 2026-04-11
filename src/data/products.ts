export type Product = {
  id: string;
  name: string;
  code: string;
  price: number;
  priceLabel: string;
  particleSize: string;
  leadTime: string;
  description: string;
  image: string;
  accent: string;
  applications: string[];
};

export const products: Product[] = [
  {
    id: 'ti64',
    name: 'Titanium Ti6Al4V',
    code: 'Ti64',
    price: 89,
    priceLabel: 'From USD 89/kg',
    particleSize: '15-45 um',
    leadTime: '7-12 days',
    description: 'Low oxygen titanium powder for lightweight aerospace, dental, and medical builds.',
    image: '/images/products/titanium.svg',
    accent: '#8fe4d9',
    applications: ['LPBF', 'medical', 'aerospace'],
  },
  {
    id: '316l',
    name: 'Stainless Steel 316L',
    code: '316L',
    price: 39,
    priceLabel: 'From USD 39/kg',
    particleSize: '15-53 um',
    leadTime: '5-10 days',
    description: 'Reliable stainless feedstock for tooling, fixtures, industrial parts, and prototypes.',
    image: '/images/products/316l.svg',
    accent: '#b9c6d1',
    applications: ['LPBF', 'tooling', 'industrial'],
  },
  {
    id: 'in718',
    name: 'Inconel 718',
    code: 'IN718',
    price: 76,
    priceLabel: 'From USD 76/kg',
    particleSize: '15-45 um',
    leadTime: '10-15 days',
    description: 'Nickel superalloy powder for high-temperature applications and aggressive environments.',
    image: '/images/products/in718.svg',
    accent: '#ffb177',
    applications: ['turbines', 'energy', 'high-temp'],
  },
  {
    id: 'alsi10mg',
    name: 'AlSi10Mg',
    code: 'AlSi10Mg',
    price: 43,
    priceLabel: 'From USD 43/kg',
    particleSize: '20-63 um',
    leadTime: '7-12 days',
    description: 'Lightweight aluminum powder for complex housings, heat sinks, and automotive structures.',
    image: '/images/products/alsi10mg.svg',
    accent: '#8dc5ff',
    applications: ['automotive', 'thermal', 'lightweight'],
  },
  {
    id: 'cucrzr',
    name: 'Copper CuCrZr',
    code: 'CuCrZr',
    price: 68,
    priceLabel: 'From USD 68/kg',
    particleSize: '15-53 um',
    leadTime: '10-18 days',
    description: 'Conductive powder for induction tooling, electronics, and thermal management components.',
    image: '/images/products/cucrzr.svg',
    accent: '#ffa06a',
    applications: ['conductive', 'electronics', 'thermal'],
  },
  {
    id: 'cocrmo',
    name: 'Cobalt Chrome CoCrMo',
    code: 'CoCrMo',
    price: 84,
    priceLabel: 'From USD 84/kg',
    particleSize: '15-45 um',
    leadTime: '10-15 days',
    description: 'High-wear powder for dental frameworks, medical parts, and demanding metal components.',
    image: '/images/products/cocrmo.svg',
    accent: '#d2d3ff',
    applications: ['dental', 'medical', 'wear resistant'],
  },
];
