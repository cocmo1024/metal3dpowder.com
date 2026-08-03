export type PowderScreeningMetric = {
  label: string;
  value: string;
  qualification?: string;
};

export type PowderScreeningWindow = {
  productId: string;
  route: string;
  basis: string;
  metrics: PowderScreeningMetric[];
};

export const powderScreeningWindows: PowderScreeningWindow[] = [
  {
    productId: 'ti64',
    route: 'LPBF screening window',
    basis: 'A grade-specific Ti6Al4V screening basis; not a universal or lot-release specification.',
    metrics: [
      { label: 'D10', value: '≥15 µm', qualification: 'Laser-distribution screening value' },
      { label: 'D50', value: '30–40 µm', qualification: 'Grade-specific screening window' },
      { label: 'D90', value: '≤63 µm', qualification: 'Grade-specific screening window' },
      { label: 'Sphericity', value: '≥0.90', qualification: 'Method to be confirmed' },
      { label: 'Apparent density', value: '≥2.4 g/cm³', qualification: 'Test method to be confirmed' },
      { label: 'Tap density', value: '≥2.8 g/cm³', qualification: 'Test method to be confirmed' },
      { label: 'Flow', value: '≤35 s/50 g', qualification: 'Method and conditioning to be confirmed' },
    ],
  },
  {
    productId: 'ta15',
    route: 'LPBF screening window',
    basis: 'A TA15 screening basis; the governing chemistry version and test method must be stated in the RFQ.',
    metrics: [
      { label: 'D10', value: '≥15 µm' },
      { label: 'D50', value: '30–40 µm' },
      { label: 'D90', value: '≤63 µm' },
      { label: 'Sphericity', value: '≥0.90', qualification: 'Method to be confirmed' },
      { label: 'Apparent density', value: '≥2.4 g/cm³' },
      { label: 'Tap density', value: '≥2.8 g/cm³' },
      { label: 'Flow', value: '≤35 s/50 g', qualification: 'Method and conditioning to be confirmed' },
    ],
  },
  {
    productId: '316l',
    route: 'LPBF screening window',
    basis: 'A 316L screening basis; chemistry, PSD method, and the delivered lot remain controlling.',
    metrics: [
      { label: 'D10', value: '≥15 µm' },
      { label: 'D50', value: '30–40 µm' },
      { label: 'D90', value: '≤60 µm' },
      { label: 'Sphericity', value: '≥0.90', qualification: 'Method to be confirmed' },
      { label: 'Apparent density', value: '≥4.0 g/cm³' },
      { label: 'Tap density', value: '≥4.5 g/cm³' },
      { label: 'Flow', value: '≤20 s/50 g', qualification: 'Method and conditioning to be confirmed' },
    ],
  },
  {
    productId: '17-4ph',
    route: 'LPBF screening window',
    basis: 'A 17-4PH screening basis; heat-treatment condition is not implied by powder conformance.',
    metrics: [
      { label: 'D10', value: '≥15 µm' },
      { label: 'D50', value: '30–40 µm' },
      { label: 'D90', value: '≤60 µm' },
      { label: 'Sphericity', value: '≥0.90', qualification: 'Method to be confirmed' },
      { label: 'Apparent density', value: '≥4.0 g/cm³' },
      { label: 'Tap density', value: '≥4.5 g/cm³' },
      { label: 'Flow', value: '≤20 s/50 g', qualification: 'Method and conditioning to be confirmed' },
    ],
  },
  {
    productId: 'm300',
    route: 'LPBF screening window',
    basis: 'An 18Ni300 screening basis; aging and printed-part performance are separate qualification layers.',
    metrics: [
      { label: 'D10', value: '≥15 µm' },
      { label: 'D50', value: '30–40 µm' },
      { label: 'D90', value: '≤60 µm' },
      { label: 'Sphericity', value: '≥0.90', qualification: 'Method to be confirmed' },
      { label: 'Apparent density', value: '≥4.0 g/cm³' },
      { label: 'Tap density', value: '≥4.5 g/cm³' },
      { label: 'Flow', value: '≤20 s/50 g', qualification: 'Method and conditioning to be confirmed' },
    ],
  },
  {
    productId: 'in718',
    route: 'LPBF screening window',
    basis: 'An Alloy 718 screening basis; final chemistry, PSD, and test methods are production- and lot-specific.',
    metrics: [
      { label: 'D10', value: '≥15 µm' },
      { label: 'D50', value: '30–40 µm' },
      { label: 'D90', value: '≤60 µm' },
      { label: 'Sphericity', value: '≥0.90', qualification: 'Method to be confirmed' },
      { label: 'Apparent density', value: '≥4.4 g/cm³' },
      { label: 'Tap density', value: '≥5.0 g/cm³' },
      { label: 'Flow', value: '≤18 s/50 g', qualification: 'Method and conditioning to be confirmed' },
    ],
  },
  {
    productId: 'in625',
    route: 'LPBF screening window',
    basis: 'An Alloy 625 screening basis; corrosion and DED performance require separate test conditions.',
    metrics: [
      { label: 'D10', value: '≥15 µm' },
      { label: 'D50', value: '30–40 µm' },
      { label: 'D90', value: '≤60 µm' },
      { label: 'Sphericity', value: '≥0.90', qualification: 'Method to be confirmed' },
      { label: 'Apparent density', value: '≥4.4 g/cm³' },
      { label: 'Tap density', value: '≥5.0 g/cm³' },
      { label: 'Flow', value: '≤18 s/50 g', qualification: 'Method and conditioning to be confirmed' },
    ],
  },
  {
    productId: 'hastelloyx',
    route: 'LPBF screening window',
    basis: 'An Alloy X screening basis; build cracking and thermal exposure remain process-level risks.',
    metrics: [
      { label: 'D10', value: '≥15 µm' },
      { label: 'D50', value: '30–40 µm' },
      { label: 'D90', value: '≤60 µm' },
      { label: 'Sphericity', value: '≥0.90', qualification: 'Method to be confirmed' },
      { label: 'Apparent density', value: '≥4.4 g/cm³' },
      { label: 'Tap density', value: '≥5.0 g/cm³' },
      { label: 'Flow', value: '≤18 s/50 g', qualification: 'Method and conditioning to be confirmed' },
    ],
  },
  {
    productId: 'alsi10mg',
    route: 'LPBF screening window',
    basis: 'An AlSi10Mg screening basis; moisture, sampling, and safe handling affect usable results.',
    metrics: [
      { label: 'D10', value: '≥15 µm' },
      { label: 'D50', value: '30–45 µm' },
      { label: 'D90', value: '≤70 µm' },
      { label: 'Sphericity', value: '≥0.90', qualification: 'Method to be confirmed' },
      { label: 'Apparent density', value: '≥1.35 g/cm³' },
      { label: 'Tap density', value: '≥1.6 g/cm³' },
    ],
  },
  {
    productId: 'cucrzr',
    route: 'LPBF screening window',
    basis: 'A CuCrZr screening basis; conductivity, strength, and laser coupling depend on the complete process route.',
    metrics: [
      { label: 'D10', value: '≥15 µm' },
      { label: 'D50', value: '30–40 µm' },
      { label: 'D90', value: '≤60 µm' },
      { label: 'Sphericity', value: '≥0.90', qualification: 'Method to be confirmed' },
      { label: 'Apparent density', value: '≥4.4 g/cm³' },
      { label: 'Tap density', value: '≥5.2 g/cm³' },
      { label: 'Flow', value: '≤22 s/50 g', qualification: 'Method and conditioning to be confirmed' },
    ],
  },
  {
    productId: 'cocrmo',
    route: 'LPBF / EBM screening window',
    basis: 'A CoCrMo screening basis; the exact chemistry version and medical or dental release scope must be confirmed.',
    metrics: [
      { label: 'D10', value: '≥12 µm' },
      { label: 'D50', value: '25–40 µm' },
      { label: 'D90', value: '≤65 µm' },
      { label: 'Sphericity', value: '≥0.85', qualification: 'Method to be confirmed' },
      { label: 'Apparent density', value: '≥4.4 g/cm³' },
      { label: 'Tap density', value: '≥5.0 g/cm³' },
      { label: 'Flow', value: '≤25 s/50 g', qualification: 'Method and conditioning to be confirmed' },
    ],
  },
];

export const getPowderScreeningWindow = (productId: string) =>
  powderScreeningWindows.find((window) => window.productId === productId);

export const atomizationRoutes = [
  {
    route: 'VIGA / inert-gas atomization',
    bestFit: 'Fe-, Ni-, Co-, Al-, and Cu-base alloys',
    candidatePsd: '15–45, 15–53, and 53–150 µm',
    capabilityWindow: '10–500 kg crucible range; an applicable 316L route can be screened around 8–10 kg/min output.',
    confirm: 'Crucible compatibility, melt size, gas, PSD yield, oxygen control, and the actual production source.',
  },
  {
    route: 'EIGA / electrode induction gas atomization',
    bestFit: 'Reactive titanium alloys, selected superalloys, and intermetallics',
    candidatePsd: '15–53, 53–150, 75–200, and 100–250 µm',
    capabilityWindow: '30–100 mm electrode range and 15–30 kg/h are candidate equipment and throughput boundaries.',
    confirm: 'Electrode chemistry, diameter, melt cleanliness, gas, interstitial limits, yield, and lot size.',
  },
  {
    route: 'PREP / plasma rotating electrode',
    bestFit: 'High-sphericity titanium and selected nickel-alloy routes',
    candidatePsd: 'Mid-to-coarse spherical fractions; source- and alloy-dependent',
    capabilityWindow:
      'Candidate equipment uses 50 or 75 mm electrodes at up to 30,000 rpm, with 6–10 kg/h considered under specified conditions.',
    confirm: 'Electrode source, rotation conditions, PSD yield, oxygen pickup, morphology method, and production scale.',
  },
  {
    route: 'PA / plasma atomization',
    bestFit: 'Reactive and specialty alloys requiring a plasma-based route',
    candidatePsd: 'Quote-defined; commonly screened for fine AM fractions',
    capabilityWindow: 'Equipment, feedstock, capacity, and lot limits vary by the selected production route.',
    confirm: 'Feedstock form, chemistry loss, interstitials, PSD yield, morphology, capacity, and test package.',
  },
];

export const processPowderWindows = [
  {
    process: 'LPBF / SLM',
    candidatePsd: '15–45, 15–53, or 20–63 µm',
    materialExamples: 'Ti, stainless, tool steel, Ni superalloy, Al, Cu, and CoCr',
    rfqControl: 'Machine, layer thickness, laser wavelength, spreadability, oxygen/moisture, and reuse policy.',
  },
  {
    process: 'EBM',
    candidatePsd: '45–105 or 53–150 µm',
    materialExamples: 'Titanium and selected CoCr routes',
    rfqControl: 'Machine generation, preheat behavior, charge control, PSD method, and reused-powder plan.',
  },
  {
    process: 'DED / laser cladding',
    candidatePsd: '20–53, 38–75, 38–105, 53–105, or 53–150 µm',
    materialExamples: 'Ni-, Fe-, and Co-base overlay, repair, and additive grades',
    rfqControl: 'Feeder, deposition head, dilution, target hardness, substrate, corrosion/wear environment, and finishing.',
  },
  {
    process: 'HIP / powder metallurgy',
    candidatePsd: 'Quote-defined; coarse fractions are evaluated against filling and consolidation requirements',
    materialExamples: 'FGH-series superalloys plus selected Ti and Ni alloys',
    rfqControl: 'Can size, fill density, cleanliness, degassing, HIP cycle, inspection, and part-level qualification.',
  },
  {
    process: 'MIM',
    candidatePsd: 'Fine powder including 0–20 µm routes, or qualified feedstock',
    materialExamples: '316L, 17-4PH, 420, 440C, Ti6Al4V, TA15, and F75-type CoCr',
    rfqControl: 'Powder or feedstock basis, binder, melt-flow index, shrinkage, debinding, sintering, and final chemistry.',
  },
  {
    process: 'Thermal spray',
    candidatePsd: '15–45, 45–90, or 45–105 µm',
    materialExamples: 'MCrAlY, C276, IN625, IN718, YSZ, CrC-NiCr, and WC-Co',
    rfqControl: 'APS, VPS, or HVOF route; substrate, coating architecture, porosity, adhesion, oxide, and finish.',
  },
];

export const extendedAlloyMatrix = [
  {
    family: 'Titanium and intermetallics',
    grades: [
      'Commercially pure Ti',
      'Ti6Al4V / Grade 5',
      'Ti6Al4V ELI / Grade 23',
      'TA15 / BT20',
      'TC11',
      'TA19',
      'TC19',
      'Ti31',
      'Ti65',
      'Ti-48Al-2Cr-2Nb',
      'Ti2AlNb',
      'NiTi50',
    ],
    routes: 'LPBF, EBM, DED, HIP, MIM',
    procurementFocus: 'Interstitial limits, atomization route, heat treatment, and temperature-specific evidence.',
  },
  {
    family: 'Nickel and high-temperature alloys',
    grades: [
      'IN718 / GH4169',
      'IN625 / GH3625',
      'Hastelloy X / GH3536',
      'Haynes 230 / GH3230',
      'Haynes 188 / GH5188',
      'GH4099',
      'IN738 / K438',
      'X-40',
      'MAR-M247',
      'IN939',
      'IN939G',
      'CM247LC',
      'FGH91',
      'FGH95',
      'FGH96',
      'FGH97',
      'FGH99',
    ],
    routes: 'LPBF, DED, laser cladding, HIP, thermal spray',
    procurementFocus: 'Chemistry segregation, oxygen, PSD, crack risk, thermal condition, and route-specific coupon data.',
  },
  {
    family: 'Stainless steels',
    grades: ['304L', '316L', '15-5PH', '17-4PH', '310S', '410', '420', '440C'],
    routes: 'LPBF, binder jet, MIM, DED, laser cladding',
    procurementFocus: 'Governing standard, carbon, ferrite/phase needs, corrosion condition, and heat treatment.',
  },
  {
    family: 'Tool, maraging, and high-strength steels',
    grades: [
      '18Ni300 / M300 / 1.2709',
      'H13 / 1.2344',
      'S136',
      '12Cr9Ni',
      'Aermet 100',
      '300M',
      '30CrMnSiA',
      '40CrMnSiMoVA',
    ],
    routes: 'LPBF, DED, laser cladding',
    procurementFocus: 'Crack control, preheat, aging or tempering cycle, machining allowance, and tool-life evidence.',
  },
  {
    family: 'Aluminum alloys',
    grades: [
      'AlSi7Mg',
      'AlSi10Mg',
      'AlSi12',
      '2024',
      '2219',
      '6061',
      'Er/Zr-modified Al-Mg',
      'Er/Zr-modified Al-Mn',
    ],
    routes: 'LPBF and selected DED routes',
    procurementFocus: 'Moisture and oxide control, PSD, safe handling, heat treatment, and dimensional stability.',
  },
  {
    family: 'Copper and copper alloys',
    grades: [
      'Pure copper',
      'CuCrZr / C18150',
      'CuCrNb',
      'GRCop-42',
      'GRCop-84',
      'CuSn10',
      'CuAlNiFe',
      'CuNi2SiCr',
    ],
    routes: 'LPBF, DED, laser cladding',
    procurementFocus: 'Laser coupling, oxygen, conductivity-strength balance, heat treatment, and test temperature.',
  },
  {
    family: 'Cobalt and nickel-chromium alloys',
    grades: ['CoCrMo', 'CoCrMoW', 'CoCrW', 'NiCr'],
    routes: 'LPBF, EBM, MIM, laser cladding, thermal spray',
    procurementFocus: 'Exact chemistry version, wear/corrosion condition, medical responsibility, and coating or part validation.',
  },
];

export const testingCoverage = [
  {
    layer: 'Chemistry',
    methods: 'ICP-OES, spark OES, O/N/H analysis, C/S analysis, and sample preparation',
    releaseQuestion: 'Which standard, elements, interstitial limits, sampling basis, and lab report control acceptance?',
  },
  {
    layer: 'PSD and morphology',
    methods: 'Laser particle-size analysis, powder-image analysis, sphericity review, and optical microscopy',
    releaseQuestion: 'Is acceptance based on sieve limits, D10/D50/D90, image statistics, or a customer method?',
  },
  {
    layer: 'Powder behavior',
    methods: 'Flow, apparent density, tap density, conditioning, and repeatability review',
    releaseQuestion: 'Which test method and conditioning state correlate with the buyer’s feed and recoating system?',
  },
  {
    layer: 'Material and coupon testing',
    methods: 'Metallography, hardness, room/high-temperature tensile, and creep or rupture testing where scoped',
    releaseQuestion: 'Are the machine, orientation, heat treatment, specimen, and test temperature explicitly linked?',
  },
  {
    layer: 'Application validation',
    methods: 'Build-coupon production, process development, heat treatment, post-processing, and small-batch part trials',
    releaseQuestion: 'Is the evidence a powder-screening result or part of the customer’s qualified production route?',
  },
  {
    layer: 'Batch control',
    methods: 'Feedstock/bar review, process control, screening, powder tests, build validation, release, and retained records',
    releaseQuestion: 'Can each result be traced to the proposed producer, route, lot, sample, document, and delivered container?',
  },
];

export const extendedGradeCount = new Set(extendedAlloyMatrix.flatMap((group) => group.grades)).size;
