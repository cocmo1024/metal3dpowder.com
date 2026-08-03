export type ProductFamily =
  | 'titanium'
  | 'stainless-steel'
  | 'tool-steel'
  | 'nickel-alloy'
  | 'aluminum'
  | 'copper-alloy'
  | 'cobalt-chrome';

export type Product = {
  id: string;
  name: string;
  code: string;
  family: ProductFamily;
  familyLabel: string;
  aliases: string[];
  schemaAliases: string[];
  summary: string;
  image: string;
  accent: string;
  particleSizes: string[];
  processes: string[];
  applications: string[];
  bestFor: string[];
  watchItems: string[];
  documentOptions: string[];
  availabilityLabel: string;
  orderLabel: string;
  knowledgePath: string;
  featured?: boolean;
};

export const productFamilies: Array<{
  id: ProductFamily;
  label: string;
  description: string;
  accent: string;
  hubPath: string;
}> = [
  {
    id: 'titanium',
    label: 'Titanium',
    description: 'Lightweight, corrosion-resistant powders for LPBF, EBM, medical, and aerospace programs.',
    accent: '#34d0c5',
    hubPath: '/materials/titanium-powder/',
  },
  {
    id: 'stainless-steel',
    label: 'Stainless steel',
    description: 'Versatile corrosion-resistant powders for AM, binder jet, MIM, and industrial hardware.',
    accent: '#99a9b7',
    hubPath: '/materials/stainless-steel-powder/',
  },
  {
    id: 'nickel-alloy',
    label: 'Nickel alloys',
    description: 'High-temperature and corrosion-resistant powders for energy, aerospace, and process equipment.',
    accent: '#f29b54',
    hubPath: '/materials/nickel-alloy-powder/',
  },
  {
    id: 'tool-steel',
    label: 'Tool & maraging steel',
    description: 'Powders for conformal cooling, tooling inserts, dies, and high-strength production hardware.',
    accent: '#65ab8b',
    hubPath: '/materials/tool-steel-powder/',
  },
  {
    id: 'aluminum',
    label: 'Aluminum',
    description: 'Lightweight powder for housings, brackets, thermal structures, and transportation applications.',
    accent: '#579be2',
    hubPath: '/materials/aluminum-powder/',
  },
  {
    id: 'copper-alloy',
    label: 'Copper alloys',
    description: 'Conductive powders for thermal, electrical, RF, and high-heat-flux components.',
    accent: '#f07c46',
    hubPath: '/materials/copper-alloy-powder/',
  },
  {
    id: 'cobalt-chrome',
    label: 'Cobalt chrome',
    description: 'Wear- and corrosion-resistant powder for dental, medical, and industrial wear components.',
    accent: '#858bd9',
    hubPath: '/materials/cobalt-chrome-powder/',
  },
];

const commonDocuments = ['Lot-specific COA', 'Particle-size report', 'Safety data sheet'];

export const products: Product[] = [
  {
    id: 'ti64',
    name: 'Titanium Ti6Al4V',
    code: 'Ti64 · Grade 5',
    family: 'titanium',
    familyLabel: 'Titanium',
    aliases: ['Ti-6Al-4V', 'Ti64', 'Grade 5', 'UNS R56400', 'TC4'],
    schemaAliases: ['Ti-6Al-4V', 'Ti64', 'Grade 5', 'UNS R56400'],
    summary:
      'A widely used titanium alloy powder for lightweight structural AM parts where strength-to-weight performance matters.',
    image: '/images/products/titanium.svg',
    accent: '#34d0c5',
    particleSizes: ['15–45 µm', '15–53 µm', '45–105 µm'],
    processes: ['LPBF', 'EBM', 'DED'],
    applications: ['Aerospace', 'Energy', 'Industrial'],
    bestFor: ['Lightweight brackets and housings', 'Structural AM parts', 'Corrosion-resistant hardware'],
    watchItems: ['Oxygen and nitrogen limits', 'Powder reuse plan', 'Heat treatment and HIP scope'],
    documentOptions: [...commonDocuments, 'Chemistry and interstitial report'],
    availabilityLabel: 'Availability on request',
    orderLabel: 'Quote by specification',
    knowledgePath: '/posts/Alloys/tc4-ti6al4v-powder/',
    featured: true,
  },
  {
    id: 'ti64-grade-23',
    name: 'Titanium Ti64 ELI',
    code: 'Ti64 · Grade 23',
    family: 'titanium',
    familyLabel: 'Titanium',
    aliases: ['Ti-6Al-4V ELI', 'Ti64 ELI', 'Grade 23', 'UNS R56407', 'TC4 ELI'],
    schemaAliases: ['Ti-6Al-4V ELI', 'Ti64 ELI', 'Grade 23', 'UNS R56407'],
    summary:
      'Extra-low-interstitial titanium powder for projects that require tighter chemistry control and qualification evidence.',
    image: '/images/products/titanium.svg',
    accent: '#4ed8ce',
    particleSizes: ['15–45 µm', '15–53 µm', '45–105 µm'],
    processes: ['LPBF', 'EBM'],
    applications: ['Medical', 'Aerospace', 'Research'],
    bestFor: ['Porous structures', 'Medical hardware evaluation', 'Qualification-led titanium programs'],
    watchItems: ['Interstitial limits', 'Regulatory responsibility', 'Build and post-process validation'],
    documentOptions: [...commonDocuments, 'Interstitial chemistry report'],
    availabilityLabel: 'Availability on request',
    orderLabel: 'Quote by specification',
    knowledgePath: '/posts/Alloys/ti64-grade-23-powder-orthopedic-implants-and-medical-components/',
    featured: true,
  },
  {
    id: 'ti-grade-2',
    name: 'Titanium Grade 2',
    code: 'CP Titanium · Grade 2',
    family: 'titanium',
    familyLabel: 'Titanium',
    aliases: ['CP-Ti Grade 2', 'UNS R50400', 'Commercially pure titanium', 'TA1'],
    schemaAliases: ['CP-Ti Grade 2', 'UNS R50400', 'Grade 2 titanium'],
    summary:
      'Commercially pure titanium powder for corrosion-led parts where ductility and chemical compatibility lead the decision.',
    image: '/images/products/ti-grade-2.svg',
    accent: '#66d6bd',
    particleSizes: ['15–45 µm', '15–53 µm', '45–105 µm'],
    processes: ['LPBF', 'EBM'],
    applications: ['Chemical', 'Medical', 'Industrial'],
    bestFor: ['Chemical-service hardware', 'Corrosion-led components', 'Ductility-sensitive applications'],
    watchItems: ['Oxygen limits', 'Service chemistry', 'Finished-part validation'],
    documentOptions: [...commonDocuments, 'Interstitial chemistry report'],
    availabilityLabel: 'Availability on request',
    orderLabel: 'Quote by specification',
    knowledgePath: '/posts/Alloys/ta1-cp-titanium-powder/',
  },
  {
    id: 'ta15',
    name: 'TA15 Near-Alpha Titanium',
    code: 'TA15',
    family: 'titanium',
    familyLabel: 'Titanium',
    aliases: ['TA15', 'Near-alpha titanium'],
    schemaAliases: ['TA15', 'Near-alpha TA15 titanium'],
    summary:
      'Near-alpha titanium powder for elevated-temperature structural programs and aerospace development work.',
    image: '/images/products/titanium.svg',
    accent: '#27b8aa',
    particleSizes: ['15–53 µm', '45–105 µm'],
    processes: ['LPBF', 'EBM', 'DED'],
    applications: ['Aerospace', 'Energy', 'Research'],
    bestFor: ['Elevated-temperature structures', 'Hot-side brackets', 'Aerospace development programs'],
    watchItems: ['Chemistry version', 'Temperature-specific evidence', 'Heat treatment route'],
    documentOptions: [...commonDocuments, 'Chemistry report'],
    availabilityLabel: 'Availability on request',
    orderLabel: 'Quote by specification',
    knowledgePath: '/posts/Alloys/ta15-near-alpha-titanium-powder/',
  },
  {
    id: '316l',
    name: 'Stainless Steel 316L',
    code: '316L · S31603',
    family: 'stainless-steel',
    familyLabel: 'Stainless steel',
    aliases: ['316L', 'UNS S31603', 'EN 1.4404'],
    schemaAliases: ['316L', 'UNS S31603', 'EN 1.4404'],
    summary:
      'A widely used corrosion-resistant powder for manifolds, fluid hardware, industrial parts, MIM, and binder jet.',
    image: '/images/products/316l.svg',
    accent: '#99a9b7',
    particleSizes: ['15–45 µm', '15–53 µm', '45–106 µm'],
    processes: ['LPBF', 'DED', 'Binder jet', 'MIM'],
    applications: ['Industrial', 'Chemical', 'Medical'],
    bestFor: ['Fluid manifolds and fittings', 'Corrosion-resistant hardware', 'General industrial AM'],
    watchItems: ['Chemistry standard', 'Corrosion environment', 'Process-specific PSD'],
    documentOptions: [...commonDocuments, 'Chemistry report'],
    availabilityLabel: 'Availability on request',
    orderLabel: 'Quote by lot',
    knowledgePath: '/posts/Alloys/316l-stainless-steel-powder/',
    featured: true,
  },
  {
    id: '17-4ph',
    name: 'Stainless Steel 17-4PH',
    code: '17-4PH · S17400',
    family: 'stainless-steel',
    familyLabel: 'Stainless steel',
    aliases: ['17-4PH', 'UNS S17400', 'AISI 630'],
    schemaAliases: ['17-4PH', 'UNS S17400', 'AISI 630'],
    summary:
      'Precipitation-hardening stainless powder for higher-strength tooling, fixtures, housings, and production hardware.',
    image: '/images/products/17-4ph.svg',
    accent: '#aebdca',
    particleSizes: ['15–45 µm', '15–53 µm', '45–106 µm'],
    processes: ['LPBF', 'Binder jet', 'MIM'],
    applications: ['Industrial', 'Tooling', 'Transportation'],
    bestFor: ['Fixtures and workholding', 'Structural housings', 'Higher-strength stainless parts'],
    watchItems: ['Heat treatment condition', 'Copper and niobium chemistry', 'Dimensional change'],
    documentOptions: [...commonDocuments, 'Chemistry report'],
    availabilityLabel: 'Availability on request',
    orderLabel: 'Quote by lot',
    knowledgePath: '/posts/Alloys/17-4ph-stainless-steel-powder/',
  },
  {
    id: 'm300',
    name: 'Maraging Steel M300',
    code: '18Ni300 · 1.2709',
    family: 'tool-steel',
    familyLabel: 'Tool & maraging steel',
    aliases: ['M300', '18Ni300', 'Maraging 300', 'EN 1.2709'],
    schemaAliases: ['M300', '18Ni300', 'Maraging 300', 'EN 1.2709'],
    summary:
      'High-strength maraging steel powder for mold inserts, precision tooling, and age-hardened production components.',
    image: '/images/products/m300.svg',
    accent: '#7ca6d8',
    particleSizes: ['15–45 µm', '15–53 µm', '45–106 µm'],
    processes: ['LPBF', 'DED'],
    applications: ['Tooling', 'Industrial', 'Transportation'],
    bestFor: ['Mold inserts', 'Precision tooling', 'Age-hardened structural parts'],
    watchItems: ['Aging cycle', 'Machining sequence', 'Dimensional acceptance'],
    documentOptions: [...commonDocuments, 'Chemistry report'],
    availabilityLabel: 'Availability on request',
    orderLabel: 'Quote by lot',
    knowledgePath: '/posts/Alloys/m300-maraging-steel-powder/',
    featured: true,
  },
  {
    id: 'h13',
    name: 'H13 Tool Steel',
    code: 'H13 · 1.2344',
    family: 'tool-steel',
    familyLabel: 'Tool & maraging steel',
    aliases: ['AISI H13', 'EN 1.2344', 'Hot-work tool steel'],
    schemaAliases: ['AISI H13', 'EN 1.2344', 'H13 tool steel'],
    summary:
      'Hot-work tool steel powder for die-casting inserts, conformal cooling, and thermally cycled tooling.',
    image: '/images/products/h13.svg',
    accent: '#65ab8b',
    particleSizes: ['15–45 µm', '15–53 µm', '45–106 µm'],
    processes: ['LPBF', 'DED'],
    applications: ['Tooling', 'Industrial', 'Automotive'],
    bestFor: ['Conformal cooling inserts', 'Hot-work dies', 'Thermally cycled tooling'],
    watchItems: ['Preheat and crack control', 'Heat treatment', 'Tool-life acceptance'],
    documentOptions: [...commonDocuments, 'Chemistry report'],
    availabilityLabel: 'Availability on request',
    orderLabel: 'Quote by lot',
    knowledgePath: '/posts/Alloys/h13-tool-steel-powder/',
  },
  {
    id: 'in718',
    name: 'Nickel Alloy 718',
    code: 'IN718 · GH4169',
    family: 'nickel-alloy',
    familyLabel: 'Nickel alloy',
    aliases: ['Alloy 718', 'IN718', 'Inconel 718', 'UNS N07718', 'GH4169'],
    schemaAliases: ['Alloy 718', 'IN718', 'UNS N07718'],
    summary:
      'Precipitation-hardenable nickel alloy powder for high-temperature structures, turbines, and energy hardware.',
    image: '/images/products/in718.svg',
    accent: '#f29b54',
    particleSizes: ['15–45 µm', '15–53 µm', '45–106 µm'],
    processes: ['LPBF', 'DED'],
    applications: ['Aerospace', 'Energy', 'Industrial'],
    bestFor: ['Turbomachinery hardware', 'High-temperature structures', 'Hot-side housings'],
    watchItems: ['Heat treatment', 'Laves phase and segregation control', 'Temperature-specific testing'],
    documentOptions: [...commonDocuments, 'Chemistry report'],
    availabilityLabel: 'Availability on request',
    orderLabel: 'Quote by lot',
    knowledgePath: '/posts/Alloys/gh4169-in718-powder/',
    featured: true,
  },
  {
    id: 'in625',
    name: 'Nickel Alloy 625',
    code: 'IN625 · GH3625',
    family: 'nickel-alloy',
    familyLabel: 'Nickel alloy',
    aliases: ['Alloy 625', 'IN625', 'Inconel 625', 'UNS N06625', 'GH3625'],
    schemaAliases: ['Alloy 625', 'IN625', 'UNS N06625'],
    summary:
      'Solid-solution nickel alloy powder for corrosion-heavy chemical, marine, energy, and hot-side hardware.',
    image: '/images/products/in625.svg',
    accent: '#f1aa65',
    particleSizes: ['15–45 µm', '15–53 µm', '45–106 µm'],
    processes: ['LPBF', 'DED'],
    applications: ['Chemical', 'Marine', 'Energy'],
    bestFor: ['Corrosion-heavy hardware', 'Chemical nozzles and manifolds', 'Repair and overlay routes'],
    watchItems: ['Service chemistry', 'DED dilution', 'Corrosion-test scope'],
    documentOptions: [...commonDocuments, 'Chemistry report'],
    availabilityLabel: 'Availability on request',
    orderLabel: 'Quote by lot',
    knowledgePath: '/posts/Alloys/gh3625-in625-powder/',
  },
  {
    id: 'hastelloyx',
    name: 'Nickel Alloy X',
    code: 'Hastelloy X · GH3536',
    family: 'nickel-alloy',
    familyLabel: 'Nickel alloy',
    aliases: ['Alloy X', 'Hastelloy X', 'GH3536', 'UNS N06002'],
    schemaAliases: ['Alloy X', 'UNS N06002'],
    summary:
      'Oxidation-resistant nickel alloy powder for combustion, furnace, hot-gas, and high-temperature hardware.',
    image: '/images/products/hastelloyx.svg',
    accent: '#e68a43',
    particleSizes: ['15–45 µm', '15–53 µm', '45–106 µm'],
    processes: ['LPBF'],
    applications: ['Aerospace', 'Energy', 'Industrial'],
    bestFor: ['Combustion hardware', 'Furnace components', 'Hot-gas structures'],
    watchItems: ['Crack sensitivity', 'Thermal exposure', 'Oxidation-test conditions'],
    documentOptions: [...commonDocuments, 'Chemistry report'],
    availabilityLabel: 'Availability on request',
    orderLabel: 'Quote by lot',
    knowledgePath: '/posts/Alloys/hastelloy-x-powder/',
  },
  {
    id: 'alsi10mg',
    name: 'Aluminum AlSi10Mg',
    code: 'AlSi10Mg',
    family: 'aluminum',
    familyLabel: 'Aluminum',
    aliases: ['AlSi10Mg', 'Aluminum-silicon-magnesium'],
    schemaAliases: ['AlSi10Mg', 'Al-Si10-Mg alloy powder'],
    summary:
      'Lightweight aluminum powder for housings, brackets, thermal structures, and transportation hardware.',
    image: '/images/products/alsi10mg.svg',
    accent: '#579be2',
    particleSizes: ['20–63 µm', '15–53 µm', '45–106 µm'],
    processes: ['LPBF'],
    applications: ['Aerospace', 'Transportation', 'Electronics'],
    bestFor: ['Lightweight housings', 'Brackets and frames', 'Thermal and electronics structures'],
    watchItems: ['Moisture handling', 'Powder safety', 'Heat treatment and dimensional stability'],
    documentOptions: [...commonDocuments, 'Chemistry report'],
    availabilityLabel: 'Availability on request',
    orderLabel: 'Quote by lot',
    knowledgePath: '/posts/Alloys/alsi10mg-powder/',
    featured: true,
  },
  {
    id: 'cucrzr',
    name: 'Copper Alloy CuCrZr',
    code: 'CuCrZr · C18150',
    family: 'copper-alloy',
    familyLabel: 'Copper alloy',
    aliases: ['CuCrZr', 'CuCr1Zr', 'UNS C18150'],
    schemaAliases: ['CuCrZr', 'CuCr1Zr'],
    summary:
      'Conductive copper-alloy powder for thermal, electrical, RF, tooling, and high-heat-flux components.',
    image: '/images/products/cucrzr.svg',
    accent: '#f07c46',
    particleSizes: ['15–45 µm', '15–53 µm', '45–106 µm'],
    processes: ['LPBF'],
    applications: ['Electronics', 'Energy', 'Tooling'],
    bestFor: ['Cold plates and heat exchangers', 'Induction and electrical hardware', 'Conductive tooling'],
    watchItems: ['Conductivity versus strength target', 'Heat treatment', 'Laser compatibility'],
    documentOptions: [...commonDocuments, 'Chemistry report'],
    availabilityLabel: 'Availability on request',
    orderLabel: 'Quote by specification',
    knowledgePath: '/posts/Alloys/cucrzr-copper-powder/',
    featured: true,
  },
  {
    id: 'cocrmo',
    name: 'Cobalt Chrome CoCrMo',
    code: 'CoCrMo',
    family: 'cobalt-chrome',
    familyLabel: 'Cobalt chrome',
    aliases: ['CoCrMo', 'Cobalt chromium molybdenum'],
    schemaAliases: ['CoCrMo', 'Cobalt chromium molybdenum'],
    summary:
      'Wear- and corrosion-resistant cobalt alloy powder for dental, medical-development, and industrial wear parts.',
    image: '/images/products/cocrmo.svg',
    accent: '#858bd9',
    particleSizes: ['15–45 µm', '15–53 µm', '45–106 µm'],
    processes: ['LPBF', 'EBM', 'MIM'],
    applications: ['Medical', 'Dental', 'Industrial'],
    bestFor: ['Dental frameworks', 'Wear-critical hardware', 'Valve and pump wear components'],
    watchItems: ['Exact chemistry version', 'Biocompatibility responsibility', 'Finished-part validation'],
    documentOptions: [...commonDocuments, 'Chemistry report'],
    availabilityLabel: 'Availability on request',
    orderLabel: 'Quote by specification',
    knowledgePath: '/posts/Alloys/cocrmo-cocrw-powder/',
  },
];

export const getProductPath = (product: Product) => `/products/${product.id}/`;

export const getProductById = (id: string) => products.find((product) => product.id === id);

export const productProcesses = Array.from(new Set(products.flatMap((product) => product.processes))).sort();

export const productApplications = Array.from(new Set(products.flatMap((product) => product.applications))).sort();
