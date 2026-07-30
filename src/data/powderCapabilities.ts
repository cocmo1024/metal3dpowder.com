export type ReviewedPowderMetric = {
  label: string;
  value: string;
  qualification?: string;
};

export type ReviewedPowderWindow = {
  productId: string;
  route: string;
  basis: string;
  metrics: ReviewedPowderMetric[];
};

export const reviewedPowderWindows: ReviewedPowderWindow[] = [
  {
    productId: 'ti64',
    route: 'LPBF screening window',
    basis: 'One reviewed Ti6Al4V powder data set; not a universal or lot-release specification.',
    metrics: [
      { label: 'D10', value: '≥15 µm', qualification: 'Laser-distribution screening value' },
      { label: 'D50', value: '30–40 µm', qualification: 'Reviewed source window' },
      { label: 'D90', value: '≤63 µm', qualification: 'Reviewed source window' },
      { label: 'Sphericity', value: '≥0.90', qualification: 'Method to be confirmed' },
      { label: 'Apparent density', value: '≥2.4 g/cm³', qualification: 'Test method to be confirmed' },
      { label: 'Tap density', value: '≥2.8 g/cm³', qualification: 'Test method to be confirmed' },
      { label: 'Flow', value: '≤35 s/50 g', qualification: 'Method and conditioning to be confirmed' },
    ],
  },
  {
    productId: 'ti-grade-2',
    route: 'LPBF screening window',
    basis: 'One reviewed commercially pure titanium powder data set; grade and interstitial limits control the quote.',
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
    productId: 'ta15',
    route: 'LPBF screening window',
    basis: 'One reviewed TA15 powder data set; the governing chemistry version and test method must be stated in the RFQ.',
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
    basis: 'One reviewed 316L powder data set; chemistry, PSD method, and the delivered lot remain controlling.',
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
    basis: 'One reviewed 17-4PH powder data set; heat-treatment condition is not implied by powder conformance.',
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
    basis: 'One reviewed 18Ni300 powder data set; aging and printed-part performance are separate qualification layers.',
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
    basis: 'One reviewed IN718/GH4169 powder data set; final chemistry, PSD, and test methods are source- and lot-specific.',
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
    basis: 'One reviewed IN625/GH3625 powder data set; corrosion and DED performance require separate test conditions.',
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
    basis: 'One reviewed Alloy X/GH3536 powder data set; build cracking and thermal exposure remain process-level risks.',
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
    basis: 'One reviewed AlSi10Mg powder data set; moisture, sampling, and safe handling affect usable results.',
    metrics: [
      { label: 'D10', value: '≥15 µm' },
      { label: 'D50', value: '30–45 µm' },
      { label: 'D90', value: '≤70 µm' },
      { label: 'Sphericity', value: '≥0.90', qualification: 'Method to be confirmed' },
      { label: 'Apparent density', value: '≥1.3 g/cm³' },
      { label: 'Tap density', value: '≥1.5 g/cm³' },
    ],
  },
  {
    productId: 'cucrzr',
    route: 'LPBF screening window',
    basis: 'One reviewed CuCrZr powder data set; conductivity, strength, and laser coupling depend on the complete process route.',
    metrics: [
      { label: 'D10', value: '≥15 µm' },
      { label: 'D50', value: '30–40 µm' },
      { label: 'D90', value: '≤60 µm' },
      { label: 'Sphericity', value: '≥0.90', qualification: 'Method to be confirmed' },
    ],
  },
  {
    productId: 'cocrmo',
    route: 'LPBF / EBM screening window',
    basis: 'One reviewed CoCrMo powder data set; the exact chemistry version and medical or dental release scope must be confirmed.',
    metrics: [
      { label: 'D10', value: '≥12 µm' },
      { label: 'D50', value: '25–40 µm' },
      { label: 'D90', value: '≤65 µm' },
      { label: 'Sphericity', value: '≥0.85', qualification: 'Method to be confirmed' },
      { label: 'Apparent density', value: '≥4.0 g/cm³' },
      { label: 'Tap density', value: '≥4.5 g/cm³' },
      { label: 'Flow', value: '≤25 s/50 g', qualification: 'Method and conditioning to be confirmed' },
    ],
  },
];

export const getReviewedPowderWindow = (productId: string) =>
  reviewedPowderWindows.find((window) => window.productId === productId);

export const atomizationRoutes = [
  {
    route: 'VIGA / inert-gas atomization',
    bestFit: 'Fe-, Ni-, Co-, Al-, and Cu-base alloys',
    candidatePsd: '15–45, 15–53, and 53–150 µm',
    reviewedWindow: '10–500 kg crucible range; a reviewed 316L route reported 8–10 kg/min atomization output.',
    confirm: 'Crucible compatibility, melt size, gas, PSD yield, oxygen control, and the actual production source.',
  },
  {
    route: 'EIGA / electrode induction gas atomization',
    bestFit: 'Reactive titanium alloys, selected superalloys, and intermetallics',
    candidatePsd: '15–53, 53–150, 75–200, and 100–250 µm',
    reviewedWindow: '30–100 mm electrode range and 15–30 kg/h were documented across one reviewed equipment route.',
    confirm: 'Electrode chemistry, diameter, melt cleanliness, gas, interstitial limits, yield, and lot size.',
  },
  {
    route: 'PREP / plasma rotating electrode',
    bestFit: 'High-sphericity titanium and selected nickel-alloy routes',
    candidatePsd: 'Mid-to-coarse spherical fractions; source- and alloy-dependent',
    reviewedWindow:
      'A reviewed route used 50 or 75 mm electrodes at up to 30,000 rpm and reported 6–10 kg/h under specified conditions.',
    confirm: 'Electrode source, rotation conditions, PSD yield, oxygen pickup, morphology method, and production scale.',
  },
  {
    route: 'PA / plasma atomization',
    bestFit: 'Reactive and specialty alloys requiring a plasma-based route',
    candidatePsd: 'Quote-defined; commonly screened for fine AM fractions',
    reviewedWindow: 'Route access was documented; equipment and lot limits vary by the selected source.',
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
    candidatePsd: 'Often 45–105 or 53–150 µm; quote-defined',
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
