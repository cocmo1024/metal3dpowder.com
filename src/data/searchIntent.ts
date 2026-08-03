export type ProductSearchIntent = {
  primaryQuery: string;
  seoTitle: string;
  metaDescription: string;
  buyerQueries: string[];
  designationGuidance: string;
  specificationPrompt: string;
};

export const productSearchIntents: Record<string, ProductSearchIntent> = {
  ti64: {
    primaryQuery: 'Ti6Al4V powder',
    seoTitle: 'Ti6Al4V Powder Supplier for LPBF & EBM | Metal 3D Powder',
    metaDescription:
      'Source Ti6Al4V Grade 5 powder for LPBF, EBM, or DED by PSD and lot evidence. Request supplier, price, availability, and document review.',
    buyerQueries: [
      'Ti6Al4V powder supplier',
      'Ti6Al4V powder for LPBF',
      'Ti6Al4V powder 15–45 µm',
      'Grade 5 titanium powder price',
    ],
    designationGuidance:
      'Use Ti6Al4V, Ti-6Al-4V, Ti64, or Grade 5 in international RFQs. Pair the regional TC4 designation with the governing chemistry rather than assuming equivalence.',
    specificationPrompt:
      'State the Grade 5, UNS, or customer chemistry basis, including interstitial limits and any program-specific revision.',
  },
  'ti64-grade-23': {
    primaryQuery: 'Ti6Al4V ELI powder',
    seoTitle: 'Ti6Al4V ELI Grade 23 Powder Supplier | Metal 3D Powder',
    metaDescription:
      'Source Ti6Al4V ELI Grade 23 powder for LPBF or EBM by PSD, interstitial limits, and lot evidence. Request a specification-led supplier RFQ.',
    buyerQueries: [
      'Ti6Al4V ELI powder supplier',
      'Grade 23 titanium powder for LPBF',
      'Ti6Al4V ELI powder 15–45 µm',
      'Grade 23 titanium powder price',
    ],
    designationGuidance:
      'Use Ti6Al4V ELI, Ti-6Al-4V ELI, Ti64 ELI, or Grade 23 for international sourcing. Treat TC4 ELI as a regional designation that still requires chemistry confirmation.',
    specificationPrompt:
      'State the Grade 23 or customer chemistry basis, required interstitial limits, and any part-program standard as separate acceptance inputs.',
  },
  'ti-grade-2': {
    primaryQuery: 'Grade 2 titanium powder',
    seoTitle: 'Grade 2 Titanium Powder Supplier | Metal 3D Powder',
    metaDescription:
      'Source CP titanium Grade 2 powder for LPBF or EBM by PSD, oxygen limits, and lot evidence. Request price, availability, and documents.',
    buyerQueries: [
      'Grade 2 titanium powder supplier',
      'CP titanium powder for LPBF',
      'Grade 2 titanium powder 15–45 µm',
      'CP-Ti Grade 2 powder price',
    ],
    designationGuidance:
      'Use Grade 2 titanium, CP-Ti Grade 2, or commercially pure titanium in international RFQs. Pair TA1 with the required chemistry because it is a regional designation.',
    specificationPrompt:
      'State the Grade 2, UNS, or customer chemistry basis, especially oxygen limits and any corrosion-service acceptance requirements.',
  },
  ta15: {
    primaryQuery: 'TA15 titanium powder',
    seoTitle: 'TA15 Titanium Powder Supplier for AM | Metal 3D Powder',
    metaDescription:
      'Source TA15 near-alpha titanium powder for LPBF, EBM, or DED by PSD, chemistry version, and lot evidence. Request a technical supplier RFQ.',
    buyerQueries: [
      'TA15 titanium powder supplier',
      'TA15 powder for LPBF',
      'TA15 powder for DED',
      'TA15 titanium powder price',
    ],
    designationGuidance:
      'TA15 is a chemistry-led regional designation. International RFQs should include the full governing composition, revision, and acceptance limits rather than the shorthand alone.',
    specificationPrompt:
      'Attach the governing TA15 chemistry or customer specification, plus the required interstitial and elevated-temperature test scope.',
  },
  '316l': {
    primaryQuery: '316L stainless steel powder',
    seoTitle: '316L Stainless Steel Powder Supplier | Metal 3D Powder',
    metaDescription:
      'Source 316L stainless steel powder for LPBF, DED, binder jet, or MIM by PSD and lot evidence. Request supplier pricing, availability, and documents.',
    buyerQueries: [
      '316L stainless steel powder supplier',
      '316L powder for LPBF',
      '316L powder for binder jet',
      '316L stainless steel powder price',
    ],
    designationGuidance:
      'Use 316L, UNS S31603, or EN 1.4404 as the starting designation. The governing chemistry, process route, and corrosion-service limits still need to be stated.',
    specificationPrompt:
      'State the 316L, UNS, EN, or customer chemistry basis and identify any ferrite, corrosion, or restricted-element acceptance limits.',
  },
  '17-4ph': {
    primaryQuery: '17-4PH stainless steel powder',
    seoTitle: '17-4PH Stainless Steel Powder Supplier | Metal 3D Powder',
    metaDescription:
      'Source 17-4PH stainless powder for LPBF, binder jet, or MIM by PSD, chemistry, heat-treatment plan, and lot evidence. Request a supplier RFQ.',
    buyerQueries: [
      '17-4PH stainless steel powder supplier',
      '17-4PH powder for LPBF',
      '17-4PH powder for binder jet',
      '17-4PH stainless powder price',
    ],
    designationGuidance:
      'Use 17-4PH, UNS S17400, or AISI 630 for international sourcing. Keep the powder chemistry requirement separate from the finished-part heat-treatment condition.',
    specificationPrompt:
      'State the UNS, AISI, or customer chemistry basis and define the intended build, sintering, and precipitation-hardening route.',
  },
  m300: {
    primaryQuery: 'M300 maraging steel powder',
    seoTitle: 'M300 18Ni300 Maraging Steel Powder Supplier | Metal 3D Powder',
    metaDescription:
      'Source M300, 18Ni300, or 1.2709 maraging steel powder for LPBF or DED by PSD and lot evidence. Request price, availability, and documents.',
    buyerQueries: [
      'M300 maraging steel powder supplier',
      '18Ni300 powder for LPBF',
      '1.2709 metal powder 15–45 µm',
      'maraging 300 powder price',
    ],
    designationGuidance:
      'M300, 18Ni300, maraging 300, and EN 1.2709 are common search designations. Confirm the governing chemistry because commercial naming can conceal different limits.',
    specificationPrompt:
      'State the M300, 18Ni300, EN, or customer chemistry basis together with the intended aging cycle and dimensional acceptance plan.',
  },
  h13: {
    primaryQuery: 'H13 tool steel powder',
    seoTitle: 'H13 Tool Steel Powder Supplier for LPBF & DED | Metal 3D Powder',
    metaDescription:
      'Source H13 tool steel powder for LPBF or DED by PSD, chemistry, preheat route, and lot evidence. Request supplier pricing, availability, and documents.',
    buyerQueries: [
      'H13 tool steel powder supplier',
      'H13 powder for LPBF',
      '1.2344 metal powder 15–45 µm',
      'H13 tool steel powder price',
    ],
    designationGuidance:
      'Use AISI H13, H13, or EN 1.2344 as the designation starting point. Confirm chemistry and heat-treatment expectations instead of assuming the names are interchangeable.',
    specificationPrompt:
      'State the AISI, EN, or customer chemistry basis plus preheat, crack-control, heat-treatment, and tooling acceptance requirements.',
  },
  in718: {
    primaryQuery: 'IN718 alloy powder',
    seoTitle: 'IN718 Alloy 718 Powder Supplier for LPBF & DED | Metal 3D Powder',
    metaDescription:
      'Source IN718 or Alloy 718 powder for LPBF or DED by PSD, chemistry, heat treatment, and lot evidence. Request a technical supplier RFQ.',
    buyerQueries: [
      'Inconel 718 powder supplier',
      'IN718 powder for LPBF',
      'Alloy 718 powder for DED',
      'IN718 metal powder price',
    ],
    designationGuidance:
      'IN718, Alloy 718, and UNS N07718 are common international designations. Pair GH4169 with the governing chemistry, and state any branded-material requirement explicitly.',
    specificationPrompt:
      'State the UNS, customer, or program chemistry basis plus the heat-treatment route and temperature-specific test requirements.',
  },
  in625: {
    primaryQuery: 'IN625 alloy powder',
    seoTitle: 'IN625 Alloy 625 Powder Supplier for LPBF & DED | Metal 3D Powder',
    metaDescription:
      'Source IN625 or Alloy 625 powder for LPBF or DED by PSD, service chemistry, and lot evidence. Request supplier pricing and documents.',
    buyerQueries: [
      'Inconel 625 powder supplier',
      'IN625 powder for LPBF',
      'Alloy 625 powder for DED',
      'IN625 metal powder price',
    ],
    designationGuidance:
      'IN625, Alloy 625, and UNS N06625 are common international designations. Pair GH3625 with the governing chemistry, and state any branded-material requirement explicitly.',
    specificationPrompt:
      'State the UNS, customer, or program chemistry basis together with the service environment, corrosion-test scope, and DED dilution limits where relevant.',
  },
  hastelloyx: {
    primaryQuery: 'Alloy X powder',
    seoTitle: 'Alloy X Powder Supplier for LPBF | Metal 3D Powder',
    metaDescription:
      'Source Alloy X powder for LPBF by PSD, chemistry, thermal exposure, and lot evidence. Request supplier price, availability, and documents.',
    buyerQueries: [
      'Hastelloy X powder supplier',
      'Alloy X powder for LPBF',
      'Alloy X powder 15–45 µm',
      'Hastelloy X metal powder price',
    ],
    designationGuidance:
      'Use Alloy X or UNS N06002 for chemistry-led sourcing. State a Hastelloy-branded requirement explicitly; it cannot be inferred from an alloy-equivalent search term.',
    specificationPrompt:
      'State the UNS, branded-source, customer, or program basis plus crack-control, thermal-exposure, and oxidation-test requirements.',
  },
  alsi10mg: {
    primaryQuery: 'AlSi10Mg powder',
    seoTitle: 'AlSi10Mg Powder Supplier for LPBF | Metal 3D Powder',
    metaDescription:
      'Source AlSi10Mg powder for LPBF by PSD, chemistry, handling, and lot evidence. Request supplier pricing, availability, and documents.',
    buyerQueries: [
      'AlSi10Mg powder supplier',
      'AlSi10Mg powder for LPBF',
      'AlSi10Mg powder 20–63 µm',
      'AlSi10Mg metal powder price',
    ],
    designationGuidance:
      'AlSi10Mg is the primary international procurement term. Include the governing chemistry, temper or post-process plan, and powder acceptance method in the RFQ.',
    specificationPrompt:
      'State the governing AlSi10Mg or customer chemistry, moisture and handling controls, and the intended heat-treatment condition.',
  },
  cucrzr: {
    primaryQuery: 'CuCrZr C18150 powder',
    seoTitle: 'CuCrZr C18150 Powder Supplier for AM | Metal 3D Powder',
    metaDescription:
      'Source CuCrZr, CuCr1Zr, or C18150 powder for LPBF by PSD, conductivity target, and lot evidence. Request a supplier RFQ.',
    buyerQueries: [
      'CuCrZr powder supplier',
      'C18150 copper powder for LPBF',
      'CuCrZr powder 15–45 µm',
      'CuCrZr metal powder price',
    ],
    designationGuidance:
      'CuCrZr, CuCr1Zr, and C18150 are common procurement searches, but the chemistry and condition should be confirmed before treating the designations as equivalent.',
    specificationPrompt:
      'State the governing chemistry or customer specification plus the required electrical or thermal conductivity and heat-treatment condition.',
  },
  cocrmo: {
    primaryQuery: 'CoCrMo powder',
    seoTitle: 'CoCrMo Powder Supplier for Dental & AM | Metal 3D Powder',
    metaDescription:
      'Source CoCrMo powder for dental, medical-development, or industrial AM by PSD, chemistry version, and lot evidence. Request a technical supplier RFQ.',
    buyerQueries: [
      'CoCrMo powder supplier',
      'CoCrMo dental powder for LPBF',
      'CoCrMo powder 15–45 µm',
      'cobalt chrome powder price',
    ],
    designationGuidance:
      'CoCrMo and cobalt-chromium-molybdenum cover multiple chemistry and program variants. State the governing standard, revision, and intended use instead of relying on the family name.',
    specificationPrompt:
      'State the exact chemistry or customer standard, intended dental, medical-development, or industrial use, and the responsible finished-part validation route.',
  },
};

export const getProductSearchIntent = (productId: string) => {
  const intent = productSearchIntents[productId];
  if (!intent) throw new Error(`Missing product search intent for ${productId}`);
  return intent;
};
