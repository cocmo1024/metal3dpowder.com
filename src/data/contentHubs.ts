export type HubGroup = 'materials' | 'applications' | 'processes';

export type HubDefinition = {
  group: HubGroup;
  slug: string;
  title: string;
  description: string;
  postIds: string[];
};

export type HubLandingDefinition = {
  title: string;
  description: string;
  path: string;
  hubs: HubDefinition[];
};

export const materialHubs: HubDefinition[] = [
  {
    group: 'materials',
    slug: 'titanium-powder',
    title: 'Titanium Powder',
    description: 'Ti64, Grade 23, Grade 2, and TA15 routes for structural, medical, and elevated-temperature AM parts.',
    postIds: [
      'titanium-powder-for-3d-printing-guide',
      'tc4-ti6al4v-powder',
      'ti64-grade-23-vs-grade-5-powder',
      'ti64-grade-23-powder-orthopedic-implants-and-medical-components',
      'ti64-grade-23-powder-spinal-cages-and-porous-implant-structures',
      'ti64-titanium-powder-aerospace-structures',
      'ti64-powder-evtol-brackets-and-lightweight-airframe-nodes',
      'ti64-powder-drone-landing-gear-brackets-and-support-nodes',
      'ta1-cp-titanium-powder',
      'ta15-near-alpha-titanium-powder',
    ],
  },
  {
    group: 'materials',
    slug: 'stainless-steel-powder',
    title: 'Stainless Steel Powder',
    description: '316L and 17-4PH powder routes for LPBF, MIM, binder jet, manifolds, fixtures, and industrial hardware.',
    postIds: [
      'steel-metal-powder-for-3d-printing-guide',
      '316l-stainless-steel-powder',
      '17-4ph-stainless-steel-powder',
      '316l-vs-17-4ph-powder',
      '316l-powder-semiconductor-gas-manifolds-and-sensor-housings',
      '316l-powder-pharmaceutical-fluid-manifolds-and-clean-flow-hardware',
      '316l-powder-metal-injection-molding-and-binder-jet-parts',
      '17-4ph-powder-metal-injection-molding-and-binder-jet-parts',
      '17-4ph-powder-stronger-binder-jet-industrial-parts',
      '17-4ph-powder-oil-gas-valve-components-and-pump-hardware',
    ],
  },
  {
    group: 'materials',
    slug: 'nickel-alloy-powder',
    title: 'Nickel Alloy Powder',
    description: 'IN718, IN625, and Hastelloy X powder guidance for hot-side, corrosion, and chemical hardware.',
    postIds: [
      'nickel-alloy-powder-for-3d-printing-guide',
      'gh4169-in718-powder',
      'gh3625-in625-powder',
      'hastelloy-x-powder',
      'in718-vs-in625-powder',
      'in718-powder-hot-side-structural-housings-and-casings',
      'in718-powder-turbomachinery-impellers-and-compressor-hardware',
      'in625-powder-chemical-nozzles-and-injector-blocks',
      'in625-vs-hastelloy-x-powder-chemical-hot-gas-hardware',
      'hastelloy-x-powder-hydrogen-burner-and-combustor-hardware',
    ],
  },
  {
    group: 'materials',
    slug: 'copper-alloy-powder',
    title: 'Copper Alloy Powder',
    description: 'CuCrZr powder pages for cold plates, RF heat spreaders, induction coils, conductive tooling, and rocket-side hardware.',
    postIds: [
      'copper-powder-for-3d-printing-guide',
      'cucrzr-copper-powder',
      'cucrzr-vs-pure-copper-powder',
      'cucrzr-powder-ai-data-center-cold-plates-and-gpu-liquid-cooling-manifolds',
      'cucrzr-powder-power-electronics-cooling-plates-and-busbar-hardware',
      'cucrzr-powder-ev-battery-welding-fixtures-and-conductive-tooling',
      'cucrzr-powder-rf-heat-spreaders-and-busbar-transition-hardware',
      'cucrzr-powder-cold-plates-and-heat-sinks',
      'cucrzr-powder-induction-coils-and-current-carrying-parts',
      'cucrzr-powder-rocket-engine-parts-and-heat-exchangers',
    ],
  },
  {
    group: 'materials',
    slug: 'tool-steel-powder',
    title: 'Tool Steel Powder',
    description: 'H13 and M300 powder content for conformal cooling, die-casting inserts, mold inserts, and production tooling.',
    postIds: [
      'steel-metal-powder-for-3d-printing-guide',
      'h13-tool-steel-powder',
      'm300-maraging-steel-powder',
      'h13-vs-m300-powder',
      'h13-powder-injection-molding-conformal-cooling-production-tools',
      'h13-powder-die-casting-inserts',
      'm300-powder-compact-mold-inserts-in-recurring-production',
    ],
  },
  {
    group: 'materials',
    slug: 'aluminum-powder',
    title: 'Aluminum Powder',
    description: 'AlSi10Mg powder pages for lightweight housings, UAV structures, motor mounts, and electronics frames.',
    postIds: [
      'aluminum-powder-for-additive-manufacturing-guide',
      'alsi10mg-powder',
      'alsi10mg-powder-lightweight-housings-and-brackets',
      'alsi10mg-powder-uav-structures-and-electronics-housings',
      'alsi10mg-powder-uav-motor-mounts-and-thermal-electronics-frames',
      'alsi10mg-powder-satellite-electronics-housings-and-rf-enclosures',
    ],
  },
  {
    group: 'materials',
    slug: 'cobalt-chrome-powder',
    title: 'Cobalt Chrome Powder',
    description: 'CoCrMo and CoCrW powder content for dental frameworks, wear hardware, pump sleeves, and valve-seat parts.',
    postIds: [
      'cocrmo-cocrw-powder',
      'cocrmo-powder-dental-frameworks-and-crowns',
      'cobalt-chrome-vs-titanium-powder-dental-am',
      'cocrmo-powder-wear-critical-industrial-parts',
      'cocrmo-powder-pump-sleeves-and-valve-seat-wear-hardware',
      'cocrmo-vs-stainless-powder-wear-critical-industrial-hardware',
    ],
  },
];

export const applicationHubs: HubDefinition[] = [
  {
    group: 'applications',
    slug: 'ai-liquid-cooling',
    title: 'AI Liquid Cooling',
    description: 'Copper powder topics for GPU cold plates, liquid-cooling manifolds, RF heat spreaders, and busbar transition hardware.',
    postIds: [
      'cucrzr-powder-ai-data-center-cold-plates-and-gpu-liquid-cooling-manifolds',
      'cucrzr-powder-power-electronics-cooling-plates-and-busbar-hardware',
      'cucrzr-powder-cold-plates-and-heat-sinks',
      'cucrzr-powder-rf-heat-spreaders-and-busbar-transition-hardware',
      'cucrzr-vs-pure-copper-powder-electrical-contact-hardware',
      '316l-powder-semiconductor-gas-manifolds-and-sensor-housings',
    ],
  },
  {
    group: 'applications',
    slug: 'aerospace-space',
    title: 'Aerospace and Space',
    description: 'Titanium and nickel powder content for lightweight structures, hot-side components, propulsion support, and flight hardware.',
    postIds: [
      'ti64-titanium-powder-aerospace-structures',
      'ti64-powder-evtol-brackets-and-lightweight-airframe-nodes',
      'ti64-powder-satellite-brackets-and-propulsion-support-hardware',
      'ti64-powder-drone-landing-gear-brackets-and-support-nodes',
      'ti64-powder-aircraft-hydraulic-manifolds-and-valve-blocks',
      'in718-powder-hot-side-structural-housings-and-casings',
      'in718-powder-turbomachinery-impellers-and-compressor-hardware',
      'ta15-powder-elevated-temperature-aerospace-structures',
    ],
  },
  {
    group: 'applications',
    slug: 'medical-implants',
    title: 'Medical and Dental',
    description: 'Ti64 Grade 23, CP titanium, and cobalt chrome pages for implant, spinal, dental, and medical component decisions.',
    postIds: [
      'ti64-grade-23-powder-orthopedic-implants-and-medical-components',
      'ti64-grade-23-powder-spinal-cages-and-porous-implant-structures',
      'ti64-grade-23-vs-grade-5-powder',
      'ta1-powder-chemical-and-biomedical-parts',
      'cocrmo-powder-dental-frameworks-and-crowns',
      'cobalt-chrome-vs-titanium-powder-dental-am',
    ],
  },
  {
    group: 'applications',
    slug: 'semiconductor-fluid-hardware',
    title: 'Semiconductor Fluid Hardware',
    description: 'Stainless, copper, and nickel powder routes for clean manifolds, sensor housings, heat spreaders, and chemical flow parts.',
    postIds: [
      '316l-powder-semiconductor-gas-manifolds-and-sensor-housings',
      '316l-powder-pharmaceutical-fluid-manifolds-and-clean-flow-hardware',
      '316l-powder-manifolds-and-fluid-path-parts',
      'cucrzr-powder-rf-heat-spreaders-and-busbar-transition-hardware',
      'in625-powder-chemical-nozzles-and-injector-blocks',
      '316l-vs-nickel-powder-for-corrosion-side-manifolds',
    ],
  },
  {
    group: 'applications',
    slug: 'power-electronics-and-ev',
    title: 'Power Electronics and EV Tooling',
    description: 'CuCrZr and aluminum powder pages for power electronics cooling, busbar hardware, EV battery tooling, and compact electronics structures.',
    postIds: [
      'cucrzr-powder-power-electronics-cooling-plates-and-busbar-hardware',
      'cucrzr-powder-ev-battery-welding-fixtures-and-conductive-tooling',
      'cucrzr-powder-rf-heat-spreaders-and-busbar-transition-hardware',
      'cucrzr-vs-pure-copper-powder-electrical-contact-hardware',
      'alsi10mg-powder-uav-motor-mounts-and-thermal-electronics-frames',
      'alsi10mg-powder-satellite-electronics-housings-and-rf-enclosures',
    ],
  },
  {
    group: 'applications',
    slug: 'energy-and-propulsion',
    title: 'Energy and Propulsion Hardware',
    description: 'Nickel, copper, and titanium powder content for rocket-side, turbine, combustor, hot-gas, and propulsion-support applications.',
    postIds: [
      'cucrzr-powder-rocket-engine-parts-and-heat-exchangers',
      'hastelloy-x-powder-hydrogen-burner-and-combustor-hardware',
      'in718-powder-turbomachinery-impellers-and-compressor-hardware',
      'in718-powder-hot-section-parts',
      'in625-powder-corrosion-heavy-hot-side-hardware',
      'ti64-powder-satellite-brackets-and-propulsion-support-hardware',
    ],
  },
  {
    group: 'applications',
    slug: 'tooling-and-mold-inserts',
    title: 'Tooling and Mold Inserts',
    description: 'H13 and M300 powder content for conformal cooling, compact inserts, die-casting tooling, and recurring production molds.',
    postIds: [
      'h13-powder-conformal-cooling-inserts',
      'h13-powder-injection-molding-conformal-cooling-production-tools',
      'h13-powder-die-casting-inserts',
      'm300-powder-mold-tooling-inserts',
      'm300-powder-core-inserts-and-compact-production-tooling',
      'm300-powder-compact-mold-inserts-in-recurring-production',
    ],
  },
  {
    group: 'applications',
    slug: 'mim-binder-jet-production',
    title: 'MIM and Binder Jet Production',
    description: '316L and 17-4PH powder content for scalable stainless production by MIM and binder jet routes.',
    postIds: [
      '316l-powder-metal-injection-molding-and-binder-jet-parts',
      '316l-powder-filters-and-corrosion-side-mim-parts',
      '17-4ph-powder-metal-injection-molding-and-binder-jet-parts',
      '17-4ph-powder-stronger-binder-jet-industrial-parts',
      '316l-vs-17-4ph-powder',
    ],
  },
];

export const processHubs: HubDefinition[] = [
  {
    group: 'processes',
    slug: 'lpbf',
    title: 'LPBF Powder',
    description: 'Laser powder bed fusion guidance around particle size, alloy fit, and common metal powder application routes.',
    postIds: [
      'lpbf-powder-particle-size-guide',
      'tc4-ti6al4v-powder',
      '316l-stainless-steel-powder',
      'gh4169-in718-powder',
      'cucrzr-copper-powder',
      'cucrzr-powder-power-electronics-cooling-plates-and-busbar-hardware',
    ],
  },
  {
    group: 'processes',
    slug: 'ebm',
    title: 'EBM Powder',
    description: 'Electron beam powder bed content focused on coarser powder behavior, titanium routes, and EBM process fit.',
    postIds: [
      'ebm-powder-size-guide',
      'tc4-ti6al4v-powder',
      'ti64-grade-23-vs-grade-5-powder',
      'ti64-grade-23-powder-orthopedic-implants-and-medical-components',
    ],
  },
  {
    group: 'processes',
    slug: 'ded',
    title: 'DED Powder',
    description: 'Directed energy deposition content for powder versus wire selection, larger structures, repairs, and nickel or titanium routes.',
    postIds: [
      'ded-powder-vs-wire-feedstock-guide',
      'tc4-ti6al4v-powder',
      'gh3625-in625-powder',
      'in718-powder-turbomachinery-impellers-and-compressor-hardware',
      'in625-powder-corrosion-heavy-hot-side-hardware',
    ],
  },
  {
    group: 'processes',
    slug: 'binder-jet',
    title: 'Binder Jet Powder',
    description: 'Binder jet powder pages for 316L and 17-4PH production parts, filters, and stronger stainless hardware.',
    postIds: [
      '316l-powder-metal-injection-molding-and-binder-jet-parts',
      '17-4ph-powder-metal-injection-molding-and-binder-jet-parts',
      '17-4ph-powder-stronger-binder-jet-industrial-parts',
      '316l-powder-filters-and-corrosion-side-mim-parts',
    ],
  },
  {
    group: 'processes',
    slug: 'mim',
    title: 'MIM Powder',
    description: 'Metal injection molding powder topics for 316L, 17-4PH, corrosion-side parts, and scalable stainless production.',
    postIds: [
      '316l-powder-metal-injection-molding-and-binder-jet-parts',
      '316l-powder-filters-and-corrosion-side-mim-parts',
      '17-4ph-powder-metal-injection-molding-and-binder-jet-parts',
      '316l-vs-17-4ph-powder',
    ],
  },
];

export const contentHubs = [...materialHubs, ...applicationHubs, ...processHubs];

export const hubLandings: Record<HubGroup, HubLandingDefinition> = {
  materials: {
    title: 'Metal Powder Material Centers',
    description: 'Organized entry points for titanium, stainless steel, nickel, copper, tool steel, aluminum, and cobalt chrome AM powder content.',
    path: '/materials/',
    hubs: materialHubs,
  },
  applications: {
    title: 'Metal Powder Application Centers',
    description: 'Industry and application pages that connect powder materials to high-value AM use cases.',
    path: '/applications/',
    hubs: applicationHubs,
  },
  processes: {
    title: 'Metal Powder Process Centers',
    description: 'Process-led powder guidance for LPBF, EBM, DED, binder jet, and MIM routes.',
    path: '/processes/',
    hubs: processHubs,
  },
};

export const comparisonPostIds = [
  'ti64-vs-grade-2-titanium-powder',
  'ti64-grade-23-vs-grade-5-powder',
  '316l-vs-17-4ph-powder',
  'in718-vs-in625-powder',
  'cucrzr-vs-pure-copper-powder',
  'cucrzr-vs-pure-copper-powder-electrical-contact-hardware',
  'h13-vs-m300-powder',
  'cocrmo-vs-stainless-powder-wear-critical-industrial-hardware',
  '316l-vs-nickel-powder-for-corrosion-side-manifolds',
  'in625-vs-hastelloy-x-powder-chemical-hot-gas-hardware',
  'in718-vs-hastelloy-x-powder-turbine-vs-furnace-hardware',
  'cobalt-chrome-vs-titanium-powder-dental-am',
];

export const knowledgePostIds = [
  'metal-powder-for-3d-printing-guide',
  'titanium-powder-for-3d-printing-guide',
  'nickel-alloy-powder-for-3d-printing-guide',
  'copper-powder-for-3d-printing-guide',
  'aluminum-powder-for-additive-manufacturing-guide',
  'additive-manufacturing-powder-supplier-guide',
  'metal-powder-for-3d-printing-price-guide',
  'steel-metal-powder-for-3d-printing-guide',
  'lpbf-powder-particle-size-guide',
  'ebm-powder-size-guide',
  'ded-powder-vs-wire-feedstock-guide',
  'titanium-oxygen-limit-discussion-guide',
  'tc4-ti6al4v-powder',
  '316l-stainless-steel-powder',
  'gh4169-in718-powder',
  'cucrzr-copper-powder',
];
