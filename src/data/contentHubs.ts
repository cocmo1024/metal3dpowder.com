export type HubGroup = 'materials' | 'applications' | 'processes';

export type HubDefinition = {
  group: HubGroup;
  slug: string;
  title: string;
  description: string;
  postIds: string[];
  decisionGuide?: {
    title: string;
    introduction: string;
    checkpoints: Array<{
      title: string;
      description: string;
    }>;
    conclusion: string;
  };
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
      'titanium-oxygen-limit-discussion-guide',
      'tc4-ti6al4v-powder',
      'ti64-vs-grade-2-titanium-powder',
      'ti64-grade-23-vs-grade-5-powder',
      'ti64-grade-23-powder-orthopedic-implants-and-medical-components',
      'ti64-grade-23-powder-surgical-guides-and-instrument-hardware',
      'ti64-titanium-powder-aerospace-structures',
      'ti64-powder-robotic-arm-brackets-and-end-effector-hardware',
      'ti64-vs-17-4ph-powder-humanoid-robot-joints',
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
      '316l-in625-powder-pm-hip-nuclear-pressure-components',
      'metal-powder-hip-canister-large-reactor-valves-pump-casings',
      'metal-powder-high-temperature-gas-liquid-sodium-reactor-hardware',
      '316l-stainless-steel-powder',
      '17-4ph-stainless-steel-powder',
      '316l-vs-17-4ph-powder',
      '316l-powder-ai-data-center-coolant-distribution-manifolds',
      '316l-powder-hydrogen-electrolyzer-flow-field-plates',
      '316l-powder-smr-auxiliary-fluid-manifolds-and-nuclear-support-hardware',
      '316l-powder-direct-air-capture-auxiliary-manifolds-and-sensor-blocks',
      '316l-powder-manifolds-and-fluid-path-parts',
      '316l-powder-semiconductor-wet-process-chemical-manifolds',
      '316l-powder-metal-injection-molding-and-binder-jet-parts',
      '17-4ph-powder-stronger-workholding-and-jig-hardware',
      '17-4ph-powder-industrial-automation-actuator-housings-and-latch-hardware',
      'ti64-vs-17-4ph-powder-humanoid-robot-joints',
      '17-4ph-powder-metal-injection-molding-and-binder-jet-parts',
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
      '316l-in625-powder-pm-hip-nuclear-pressure-components',
      'metal-powder-hip-canister-large-reactor-valves-pump-casings',
      'in625-powder-molten-salt-reactor-flow-hardware-heat-exchangers',
      'metal-powder-high-temperature-gas-liquid-sodium-reactor-hardware',
      'gh4169-in718-powder',
      'gh3625-in625-powder',
      'hastelloy-x-powder',
      'in718-vs-in625-powder',
      'in718-powder-turbomachinery-impellers-and-compressor-hardware',
      'in718-powder-gas-turbine-fuel-nozzles-and-combustor-swirler-hardware',
      'in625-powder-seawater-desalination-pump-valve-and-brine-hardware',
      'in625-powder-geothermal-brine-heat-exchanger-and-valve-hardware',
      'in625-powder-carbon-capture-amine-service-and-co2-compression-hardware',
      'in625-powder-sour-gas-valves-chokes-and-downhole-flow-hardware',
      'in625-ded-powder-repair-overlays-and-oilfield-corrosion-hardware',
      'hastelloy-x-powder-furnace-and-hot-gas-hardware',
      'nickel-alloy-powder-rocket-chamber-jackets-and-hot-fire-hardware',
    ],
  },
  {
    group: 'materials',
    slug: 'copper-alloy-powder',
    title: 'Copper Alloy Powder',
    description: 'CuCrZr powder selection guidance for cold plates, RF heat spreaders, induction coils, conductive tooling, and rocket-side hardware.',
    postIds: [
      'cucrzr-vs-pure-copper-powder',
      'cucrzr-copper-powder',
      'cucrzr-powder-cold-plates-and-heat-sinks',
      'cucrzr-powder-fusion-high-heat-flux-cooling-components',
      'cucrzr-powder-conductive-tooling-and-welding-contacts',
      'cucrzr-powder-rocket-engine-parts-and-heat-exchangers',
    ],
  },
  {
    group: 'materials',
    slug: 'tool-steel-powder',
    title: 'Tool Steel Powder',
    description: 'H13 and M300 powder selection guidance for conformal cooling, die-casting inserts, mold inserts, robot tooling, and production tooling.',
    postIds: [
      'steel-metal-powder-for-3d-printing-guide',
      'h13-tool-steel-powder',
      'm300-maraging-steel-powder',
      'h13-vs-m300-powder',
      'h13-powder-conformal-cooling-inserts',
      'm300-powder-mold-tooling-inserts',
      'm300-powder-injection-mold-sliders-and-lifters',
      'm300-powder-robot-gripper-jaws-and-end-of-arm-tooling',
    ],
  },
  {
    group: 'materials',
    slug: 'aluminum-powder',
    title: 'Aluminum Powder',
    description: 'AlSi10Mg powder selection guidance for lightweight housings, UAV structures, motor mounts, and electronics frames.',
    decisionGuide: {
      title: 'Build the aluminum powder specification around the LPBF route',
      introduction:
        'AlSi10Mg is the main commercial route in this catalog, but the grade name is only the starting point. A useful RFQ connects the powder lot to the machine, geometry, final thermal condition, inspection, and actual duty of the lightweight part.',
      checkpoints: [
        {
          title: 'Confirm AlSi10Mg is the right alloy family',
          description:
            'Use it where low mass, LPBF process maturity, castable geometry, and practical strength matter. Compare copper for conductivity-led parts and another alloy family for high-wear or sustained hot-side duty.',
        },
        {
          title: 'Define powder-to-machine compatibility',
          description:
            'State the referenced chemistry, atomization route, lot, PSD result and method, morphology, density, flow or spreadability evidence, contamination controls, packaging, and the intended machine or laser family.',
        },
        {
          title: 'Specify the final material condition',
          description:
            'Identify stress relief or heat treatment, orientation, support and powder removal, machining, surface finishing, density or defect method, dimensional inspection, and the condition behind mechanical or thermal values.',
        },
        {
          title: 'Match evidence to the component function',
          description:
            'A housing, bracket, UAV frame, motor mount, and electronics enclosure can share the powder route while requiring different vibration, fatigue, sealing, thermal, corrosion, grounding, and interface evidence.',
        },
      ],
      conclusion:
        'The quotation should therefore identify one AlSi10Mg lot and one intended LPBF route, then list the documents, finished-part tests, quantity, packaging, destination, and change-control requirements needed for approval.',
    },
    postIds: [
      'alsi10mg-powder',
      'alsi10mg-powder-lightweight-housings-and-brackets',
      'gas-atomized-metal-powder-for-additive-manufacturing',
      'metal-powder-specification-guide-psd-oxygen-flowability',
    ],
  },
  {
    group: 'materials',
    slug: 'cobalt-chrome-powder',
    title: 'Cobalt Chrome Powder',
    description: 'CoCrMo and CoCrW powder selection guidance for dental frameworks, wear hardware, pump sleeves, and valve-seat parts.',
    postIds: [
      'cocrmo-cocrw-powder',
      'cocrmo-powder-dental-frameworks-and-crowns',
      'cocrmo-vs-stainless-powder-wear-critical-industrial-hardware',
    ],
  },
];

export const applicationHubs: HubDefinition[] = [
  {
    group: 'applications',
    slug: 'ai-liquid-cooling',
    title: 'AI Liquid Cooling',
    description: 'Copper and stainless powder selection guidance for GPU cold plates, coolant distribution manifolds, liquid-cooling sensor hardware, RF heat spreaders, and busbar transition hardware.',
    postIds: [
      '316l-powder-ai-data-center-coolant-distribution-manifolds',
      'cucrzr-powder-cold-plates-and-heat-sinks',
    ],
  },
  {
    group: 'applications',
    slug: 'photonics-and-rf-hardware',
    title: 'Photonics and RF Hardware',
    description: 'Copper, aluminum, and stainless powder selection guidance for co-packaged optics cooling, RF heat spreaders, electronics housings, and signal-adjacent thermal hardware.',
    postIds: [
      'cucrzr-powder-cold-plates-and-heat-sinks',
      'alsi10mg-powder-lightweight-housings-and-brackets',
    ],
  },
  {
    group: 'applications',
    slug: 'aerospace-space',
    title: 'Aerospace and Space',
    description: 'Titanium and nickel powder selection guidance for lightweight structures, hot-side components, propulsion support, and flight hardware.',
    postIds: [
      'ti64-titanium-powder-aerospace-structures',
      'cucrzr-powder-rocket-engine-parts-and-heat-exchangers',
      'nickel-alloy-powder-rocket-chamber-jackets-and-hot-fire-hardware',
      'metal-powder-rocket-injectors-cryogenic-valves-feed-manifolds',
      'in718-powder-gas-turbine-fuel-nozzles-and-combustor-swirler-hardware',
    ],
  },
  {
    group: 'applications',
    slug: 'defense-sustainment-mission-hardware',
    title: 'Defense Sustainment and Mission Hardware',
    description: 'LPBF powder selection guidance for readiness-sensitive spares, sensor payloads, flight brackets, thermal hardware, and propulsion-side mission parts.',
    postIds: [
      'lpbf-metal-powder-defense-sustainment-spares',
    ],
  },
  {
    group: 'applications',
    slug: 'uav-and-sensor-payloads',
    title: 'UAV and Sensor Payloads',
    description: 'AlSi10Mg and Ti64 powder selection guidance for UAV structures, sensor housings, motor mounts, and lightweight payload support hardware.',
    postIds: [
      'alsi10mg-powder-lightweight-housings-and-brackets',
      'ti64-titanium-powder-aerospace-structures',
    ],
  },
  {
    group: 'applications',
    slug: 'medical-implants',
    title: 'Medical and Dental',
    description: 'Ti64 Grade 23, CP titanium, and cobalt chrome pages for implant, spinal, surgical guide, instrument, dental, and medical component decisions.',
    postIds: [
      'ti64-grade-23-powder-orthopedic-implants-and-medical-components',
      'ti64-grade-23-powder-surgical-guides-and-instrument-hardware',
      'cocrmo-powder-dental-frameworks-and-crowns',
    ],
  },
  {
    group: 'applications',
    slug: 'semiconductor-fluid-hardware',
    title: 'Semiconductor Fluid Hardware',
    description: '316L and CuCrZr powder routes for semiconductor gas and wet-process manifolds, equipment cooling plates, sensor housings, and RF thermal hardware.',
    postIds: [
      '316l-powder-semiconductor-wet-process-chemical-manifolds',
    ],
  },
  {
    group: 'applications',
    slug: 'hydrogen-and-fuel-cell-hardware',
    title: 'Hydrogen and Fuel Cell Hardware',
    description: 'Stainless, titanium, nickel, and copper powder selection guidance for electrolyzer flow fields, fuel-cell plates, hydrogen-side manifolds, and clean energy hardware.',
    postIds: [
      '316l-powder-hydrogen-electrolyzer-flow-field-plates',
      'metal-powder-fuel-cell-balance-of-plant-hardware',
    ],
  },
  {
    group: 'applications',
    slug: 'power-electronics-and-ev',
    title: 'Power Electronics and EV Tooling',
    description: 'CuCrZr and aluminum powder selection guidance for power electronics cooling, busbar hardware, EV battery tooling, and compact electronics structures.',
    postIds: [
      'cucrzr-powder-cold-plates-and-heat-sinks',
      'cucrzr-powder-conductive-tooling-and-welding-contacts',
      'alsi10mg-powder-lightweight-housings-and-brackets',
    ],
  },
  {
    group: 'applications',
    slug: 'energy-and-propulsion',
    title: 'Energy and Propulsion Hardware',
    description: 'Powder selection guidance for high-temperature, corrosive, and conductive components used in energy, propulsion, and thermal systems.',
    postIds: [
      'hastelloy-x-powder-furnace-and-hot-gas-hardware',
    ],
  },
  {
    group: 'applications',
    slug: 'oil-gas-and-sour-service-hardware',
    title: 'Oil, Gas, and Sour-Service Hardware',
    description: 'IN625, 17-4PH, CoCrMo, and stainless powder selection guidance for sour gas, valve, choke, downhole, pump, and corrosion-side oilfield hardware.',
    postIds: [
      'in625-powder-sour-gas-valves-chokes-and-downhole-flow-hardware',
      'in625-ded-powder-repair-overlays-and-oilfield-corrosion-hardware',
      '17-4ph-powder-oil-gas-valve-components-and-pump-hardware',
    ],
  },
  {
    group: 'applications',
    slug: 'carbon-capture-and-co2-processing-hardware',
    title: 'Carbon Capture and CO2 Processing Hardware',
    description: 'IN625, 316L, nickel, and stainless powder selection guidance for amine-service, direct air capture auxiliary manifolds, CO2 conditioning, compression-skid, solvent-loop, and corrosion-side CCUS hardware.',
    postIds: [
      'in625-powder-carbon-capture-amine-service-and-co2-compression-hardware',
      '316l-powder-direct-air-capture-auxiliary-manifolds-and-sensor-blocks',
    ],
  },
  {
    group: 'applications',
    slug: 'nuclear-and-smr-support-hardware',
    title: 'Nuclear and SMR Support Hardware',
    description: '316L, IN625, Hastelloy X, 17-4PH, and copper powder guidance for molten-salt, helium, liquid-sodium, PM-HIP, SMR auxiliary, test-loop, and qualification-led hardware decisions.',
    postIds: [
      'in625-powder-molten-salt-reactor-flow-hardware-heat-exchangers',
      'metal-powder-high-temperature-gas-liquid-sodium-reactor-hardware',
      '316l-in625-powder-pm-hip-nuclear-pressure-components',
      'metal-powder-hip-canister-large-reactor-valves-pump-casings',
      '316l-powder-smr-auxiliary-fluid-manifolds-and-nuclear-support-hardware',
    ],
  },
  {
    group: 'applications',
    slug: 'geothermal-and-brine-energy-hardware',
    title: 'Geothermal and Brine Energy Hardware',
    description: 'IN625, 316L, and nickel powder selection guidance for geothermal brine, heat-exchanger, valve, pump, and corrosion-side energy hardware.',
    decisionGuide: {
      title: 'Start with the brine chemistry and pressure boundary',
      introduction:
        'Geothermal service is not a single corrosion environment. Temperature, chlorides, dissolved gases, pH, scaling, solids, pressure, velocity, cleaning, and upset conditions determine whether 316L, IN625, another alloy, or a conventional route deserves evaluation.',
      checkpoints: [
        {
          title: 'Characterize the real fluid envelope',
          description:
            'Provide brine composition, chloride level, H2S and CO2 exposure, pH, temperature-time profile, pressure, flow velocity, solids, scaling, cleaning chemistry, oxygen ingress, and shutdown conditions.',
        },
        {
          title: 'Classify the component and failure mode',
          description:
            'Separate pressure-retaining manifolds and heat-exchanger sections from valve trim, pump hardware, sensor blocks, test articles, repair features, and non-pressure support parts. Rank corrosion, erosion, fatigue, wear, leak, and fouling risks.',
        },
        {
          title: 'Compare 316L and IN625 on evidence',
          description:
            '316L may fit moderate service with a stronger cost and fabrication case. IN625 enters when corrosion margin and difficult chemistry justify it. Neither choice should be made from a generic alloy ranking.',
        },
        {
          title: 'Prove the additive route adds value',
          description:
            'Use AM where internal flow paths, compact manifolds, thermal integration, repair, part consolidation, or low-volume geometry create measurable value. Keep code, pressure, joining, NDE, and qualification requirements explicit.',
        },
      ],
      conclusion:
        'A useful RFQ links the powder lot and manufacturing route to the stated brine envelope, final material condition, corrosion or exposure plan, pressure or leak test, dimensions, NDE, documentation, and destination requirements.',
    },
    postIds: [
      'in625-powder-geothermal-brine-heat-exchanger-and-valve-hardware',
      '316l-vs-nickel-powder-for-corrosion-side-manifolds',
      'gh3625-in625-powder',
    ],
  },
  {
    group: 'applications',
    slug: 'marine-and-desalination-hardware',
    title: 'Marine and Desalination Hardware',
    description: 'IN625, 316L, and CoCrMo powder selection guidance for seawater, brine, pump, valve, ducting, and corrosion-side flow hardware.',
    postIds: [
      'in625-powder-seawater-desalination-pump-valve-and-brine-hardware',
    ],
  },
  {
    group: 'applications',
    slug: 'fusion-high-heat-flux-hardware',
    title: 'Fusion and High-Heat-Flux Hardware',
    description: 'Copper, nickel, and titanium powder selection guidance for fusion-adjacent cooling parts, high-heat-flux mockups, hot-side structures, and thermal hardware.',
    postIds: [
      'cucrzr-powder-fusion-high-heat-flux-cooling-components',
    ],
  },
  {
    group: 'applications',
    slug: 'tooling-and-mold-inserts',
    title: 'Tooling and Mold Inserts',
    description: 'H13 and M300 powder selection guidance for conformal cooling, compact inserts, die-casting tooling, robot EOAT tooling, and recurring production molds.',
    postIds: [
      'h13-powder-conformal-cooling-inserts',
      '17-4ph-powder-stronger-workholding-and-jig-hardware',
      'cucrzr-powder-conductive-tooling-and-welding-contacts',
      'm300-powder-mold-tooling-inserts',
      'm300-powder-injection-mold-sliders-and-lifters',
    ],
  },
  {
    group: 'applications',
    slug: 'industrial-automation-robotics',
    title: 'Industrial Automation and Robotics',
    description: '17-4PH, Ti64, M300, 316L, CoCrMo, and CuCrZr powder selection guidance for robotic arms, actuator hardware, gripper tooling, fixtures, wear parts, and conductive tooling.',
    postIds: [
      'm300-powder-robot-gripper-jaws-and-end-of-arm-tooling',
      '17-4ph-powder-industrial-automation-actuator-housings-and-latch-hardware',
      'ti64-powder-robotic-arm-brackets-and-end-effector-hardware',
    ],
  },
  {
    group: 'applications',
    slug: 'humanoid-and-robot-joint-hardware',
    title: 'Humanoid and Robot Joint Hardware',
    description: 'Titanium, 17-4PH, M300, aluminum, and copper powder selection guidance for lightweight robot joints, actuator housings, wrist hardware, sensor payloads, gripper tooling, and end-effector support parts.',
    postIds: [
      'ti64-vs-17-4ph-powder-humanoid-robot-joints',
    ],
  },
  {
    group: 'applications',
    slug: 'mim-binder-jet-production',
    title: 'MIM and Binder Jet Production',
    description: '316L and 17-4PH powder selection guidance for scalable stainless production by MIM and binder jetting.',
    postIds: [
      '316l-powder-metal-injection-molding-and-binder-jet-parts',
      '17-4ph-powder-metal-injection-molding-and-binder-jet-parts',
    ],
  },
];

export const processHubs: HubDefinition[] = [
  {
    group: 'processes',
    slug: 'pm-hip',
    title: 'PM-HIP Powder',
    description: 'Powder metallurgy hot isostatic pressing guidance for nuclear pressure-component route selection, HIP canisters, powder lots, filling, consolidation, and qualification records.',
    decisionGuide: {
      title: 'Control the complete powder-to-consolidated-part route',
      introduction:
        'PM-HIP is not a particle-size label or an automatic substitute for forging, casting, or LPBF. The route combines alloy selection, powder manufacture, lot sampling, canister design, cleaning, filling, evacuation, sealing, HIP cycle, heat treatment, can removal, machining, and qualification.',
      checkpoints: [
        {
          title: 'Set the route-selection gate',
          description:
            'Define component size, geometry, buy-to-fly or material utilization, production volume, pressure-boundary status, code basis, alloy maturity, conventional alternatives, and the economic reason to use PM-HIP.',
        },
        {
          title: 'Specify powder and canister controls',
          description:
            'Identify alloy specification, production route, chemistry, PSD and sampling methods, cleanliness, morphology, lot traceability, filling density, canister material, welds, cleaning, evacuation, leak testing, and retained samples.',
        },
        {
          title: 'Define consolidation and downstream processing',
          description:
            'State HIP pressure-temperature-time cycle, monitoring, furnace records, heat treatment, can removal, machining allowance, distortion strategy, joining, surface condition, and any repair restrictions.',
        },
        {
          title: 'Write a part-level acceptance plan',
          description:
            'Agree density and defect methods, chemistry, microstructure, mechanical properties, witness locations, NDE, dimensional inspection, pressure or leak tests, traceability, configuration control, and qualification ownership.',
        },
      ],
      conclusion:
        'Powder approval is only the first gate. A PM-HIP quotation should state which party controls each record from powder lot and canister fabrication through consolidation, heat treatment, machining, inspection, and final acceptance.',
    },
    postIds: [
      '316l-in625-powder-pm-hip-nuclear-pressure-components',
      'metal-powder-hip-canister-large-reactor-valves-pump-casings',
      'gh3625-in625-powder',
      'metal-powder-specification-guide-psd-oxygen-flowability',
    ],
  },
  {
    group: 'processes',
    slug: 'lpbf',
    title: 'LPBF Powder',
    description: 'Laser powder bed fusion guidance around particle size, alloy fit, and common metal powder application routes.',
    postIds: [
      'lpbf-powder-particle-size-guide',
      'lpbf-metal-powder-defense-sustainment-spares',
      'metal-powder-for-3d-printing-guide',
      'metal-powder-for-3d-printing-price-guide',
      'additive-manufacturing-powder-supplier-guide',
      'gas-atomized-metal-powder-for-additive-manufacturing',
      'metal-powder-specification-guide-psd-oxygen-flowability',
      'am-metal-powder-lot-sampling-for-psd',
      'laser-diffraction-vs-dynamic-image-analysis-metal-powder-psd',
      'metal-powder-flowability-tests-hall-carney-rheology',
      'lpbf-powder-spreadability-and-layer-density',
      'tc4-ti6al4v-powder',
      'ti64-grade-23-powder-surgical-guides-and-instrument-hardware',
      'ti64-titanium-powder-aerospace-structures',
      'ti64-powder-robotic-arm-brackets-and-end-effector-hardware',
      'ti64-vs-17-4ph-powder-humanoid-robot-joints',
      'm300-powder-robot-gripper-jaws-and-end-of-arm-tooling',
      'm300-powder-injection-mold-sliders-and-lifters',
      '316l-stainless-steel-powder',
      '316l-powder-ai-data-center-coolant-distribution-manifolds',
      '316l-powder-hydrogen-electrolyzer-flow-field-plates',
      'metal-powder-fuel-cell-balance-of-plant-hardware',
      '316l-powder-smr-auxiliary-fluid-manifolds-and-nuclear-support-hardware',
      'in625-powder-molten-salt-reactor-flow-hardware-heat-exchangers',
      'metal-powder-high-temperature-gas-liquid-sodium-reactor-hardware',
      '316l-powder-direct-air-capture-auxiliary-manifolds-and-sensor-blocks',
      '316l-powder-semiconductor-wet-process-chemical-manifolds',
      'gh4169-in718-powder',
      'in718-powder-turbomachinery-impellers-and-compressor-hardware',
      'in625-powder-seawater-desalination-pump-valve-and-brine-hardware',
      'in625-powder-geothermal-brine-heat-exchanger-and-valve-hardware',
      'in625-powder-carbon-capture-amine-service-and-co2-compression-hardware',
      'in625-powder-sour-gas-valves-chokes-and-downhole-flow-hardware',
      'in718-powder-gas-turbine-fuel-nozzles-and-combustor-swirler-hardware',
      'hastelloy-x-powder-furnace-and-hot-gas-hardware',
      'alsi10mg-powder-lightweight-housings-and-brackets',
      'cucrzr-copper-powder',
      'cucrzr-powder-cold-plates-and-heat-sinks',
      'cucrzr-powder-fusion-high-heat-flux-cooling-components',
      'cucrzr-powder-rocket-engine-parts-and-heat-exchangers',
      'nickel-alloy-powder-rocket-chamber-jackets-and-hot-fire-hardware',
      'metal-powder-rocket-injectors-cryogenic-valves-feed-manifolds',
    ],
  },
  {
    group: 'processes',
    slug: 'ebm',
    title: 'EBM Powder',
    description: 'Electron beam powder bed content focused on coarser powder behavior, titanium routes, and EBM process fit.',
    postIds: [
      'ebm-powder-size-guide',
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
      'in625-ded-powder-repair-overlays-and-oilfield-corrosion-hardware',
    ],
  },
  {
    group: 'processes',
    slug: 'binder-jet',
    title: 'Binder Jet Powder',
    description: 'Binder jetting powder selection guidance for 316L and 17-4PH production parts, filters, and higher-strength stainless hardware.',
    postIds: [
      '316l-powder-metal-injection-molding-and-binder-jet-parts',
      '17-4ph-powder-metal-injection-molding-and-binder-jet-parts',
    ],
  },
  {
    group: 'processes',
    slug: 'mim',
    title: 'MIM Powder',
    description: 'Metal injection molding powder selection guidance for 316L, 17-4PH, corrosion-side parts, and scalable stainless production.',
    postIds: [
      '316l-powder-metal-injection-molding-and-binder-jet-parts',
      '17-4ph-powder-metal-injection-molding-and-binder-jet-parts',
      '316l-vs-17-4ph-powder',
    ],
  },
];

export const contentHubs = [...materialHubs, ...applicationHubs, ...processHubs];

export const getHubPath = (hub: HubDefinition) => `/${hub.group}/${hub.slug}/`;

export const getPostHubs = (postId: string) => contentHubs.filter((hub) => hub.postIds.includes(postId));

export const hubLandings: Record<HubGroup, HubLandingDefinition> = {
  materials: {
    title: 'Metal Powder by Alloy Family and Grade',
    description: 'Move from titanium, stainless steel, nickel, copper, tool steel, aluminum, or cobalt-chromium families to exact grade pages with international aliases, process and PSD routes, evidence requirements, and RFQ inputs.',
    path: '/materials/',
    hubs: materialHubs,
  },
  applications: {
    title: 'Metal Powder by Application',
    description: 'Use service environment and component requirements to shortlist material families, then move to the exact alloy-grade page for supplier, PSD, evidence, and quotation intent.',
    path: '/applications/',
    hubs: applicationHubs,
  },
  processes: {
    title: 'Metal Powder by AM Process',
    description: 'Compare particle-size, flow, morphology, chemistry, and qualification requirements for LPBF, EBM, DED, binder jetting, MIM, and powder HIP, then evaluate eligible alloy grades.',
    path: '/processes/',
    hubs: processHubs,
  },
};

export const comparisonPostIds = [
  'ti64-vs-17-4ph-powder-humanoid-robot-joints',
  'ti64-vs-grade-2-titanium-powder',
  'ti64-grade-23-vs-grade-5-powder',
  '316l-vs-17-4ph-powder',
  'in718-vs-in625-powder',
  'cucrzr-vs-pure-copper-powder',
  'h13-vs-m300-powder',
  'cocrmo-vs-stainless-powder-wear-critical-industrial-hardware',
  '316l-vs-nickel-powder-for-corrosion-side-manifolds',
  'nickel-alloy-powder-for-3d-printing-guide',
  'cocrmo-powder-dental-frameworks-and-crowns',
];

export const knowledgePostIds = [
  'metal-powder-for-3d-printing-guide',
  'metal-powder-selection-by-application',
  'titanium-powder-for-3d-printing-guide',
  'nickel-alloy-powder-for-3d-printing-guide',
  'cucrzr-vs-pure-copper-powder',
  'alsi10mg-powder',
  'lpbf-metal-powder-defense-sustainment-spares',
  'additive-manufacturing-powder-supplier-guide',
  'metal-powder-for-3d-printing-price-guide',
  'steel-metal-powder-for-3d-printing-guide',
  'gas-atomized-metal-powder-for-additive-manufacturing',
  'metal-powder-specification-guide-psd-oxygen-flowability',
  'am-metal-powder-lot-sampling-for-psd',
  'laser-diffraction-vs-dynamic-image-analysis-metal-powder-psd',
  'metal-powder-flowability-tests-hall-carney-rheology',
  'lpbf-powder-spreadability-and-layer-density',
  'lpbf-powder-particle-size-guide',
  'ebm-powder-size-guide',
  'ded-powder-vs-wire-feedstock-guide',
  'titanium-oxygen-limit-discussion-guide',
  'tc4-ti6al4v-powder',
  '316l-stainless-steel-powder',
  'gh4169-in718-powder',
  'cucrzr-copper-powder',
];
