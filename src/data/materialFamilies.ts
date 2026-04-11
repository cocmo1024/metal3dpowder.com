export type MaterialFamily = {
  slug: string;
  label: string;
  title: string;
  description: string;
  summary: string;
  lead: string;
  overview: string[];
  keypoints: string[];
  commonUses: string[];
  relatedProductIds: string[];
  relatedArticleSlugs: string[];
};

export const materialFamilies: MaterialFamily[] = [
  {
    slug: 'titanium-powder',
    label: 'Titanium Powder',
    title: 'Titanium Powder for Additive Manufacturing and Engineering Applications',
    description:
      'Titanium powder landing page covering Ti64 and Titanium Grade 2 for additive manufacturing, particle size selection, and engineering-focused sourcing.',
    summary:
      'Explore titanium powder grades used for lightweight, corrosion-resistant, aerospace, medical, and industrial additive manufacturing applications.',
    lead:
      'Titanium powder is commonly selected when weight reduction, corrosion resistance, and high specific strength matter more than simple material cost. This section groups the titanium grades on the site and connects them to practical buying and application guidance.',
    overview: [
      'Ti64 remains the default titanium route for many LPBF, EBM, and DED programs because the qualification path is mature and the performance balance is well understood.',
      'Commercially pure titanium such as Grade 2 becomes relevant when corrosion resistance and cleaner alloy chemistry are more important than peak strength.',
    ],
    keypoints: [
      'Common LPBF particle size windows include 15-45 um and 15-53 um.',
      'Oxygen, nitrogen, and packaging discipline are critical for reactive titanium powders.',
      'Titanium projects often require tighter process and documentation review than general stainless jobs.',
    ],
    commonUses: ['Aerospace brackets and housings', 'Dental and medical parts', 'Corrosion-resistant industrial components'],
    relatedProductIds: ['ti64', 'ti-grade-2'],
    relatedArticleSlugs: ['tc4-ti6al4v-powder', 'ta15-near-alpha-titanium-powder', 'ta1-cp-titanium-powder', 'titanium-grade-2-powder'],
  },
  {
    slug: 'nickel-alloy-powder',
    label: 'Nickel Alloy Powder',
    title: 'Nickel Alloy Powder for High-Temperature and Corrosion-Resistant AM Parts',
    description:
      'Nickel alloy powder landing page covering IN718, IN625, and Hastelloy X for additive manufacturing, high-temperature service, and corrosive environments.',
    summary:
      'Review nickel alloy powders used for turbine-adjacent hardware, corrosion-resistant components, and thermal or chemical-service AM parts.',
    lead:
      'Nickel alloy powder is typically selected when service temperature, oxidation resistance, or aggressive chemistry rules out common steels and aluminum alloys. The family includes precipitation-hardenable, solid-solution, and oxidation-focused routes.',
    overview: [
      'IN718 is widely used when the program needs a mature high-performance LPBF nickel alloy with an established post-processing path.',
      'IN625 and Hastelloy X are more often evaluated where corrosion resistance, oxidation resistance, or hot-section stability drive the material decision.',
    ],
    keypoints: [
      'Nickel alloy powders need consistent chemistry, PSD, and cleanliness to support qualification work.',
      'Post-processing requirements should be defined at RFQ stage, not after material purchase.',
      'Corrosion-driven and high-temperature projects often need more supporting data than standard prototype orders.',
    ],
    commonUses: ['Energy and turbine hardware', 'Chemical and marine components', 'High-temperature industrial parts'],
    relatedProductIds: ['in718', 'in625', 'hastelloyx'],
    relatedArticleSlugs: ['gh4169-in718-powder', 'gh3625-in625-powder', 'hastelloy-x-powder'],
  },
  {
    slug: 'stainless-steel-powder',
    label: 'Stainless Steel Powder',
    title: 'Stainless Steel Powder for Additive Manufacturing, Tooling, and Industrial Parts',
    description:
      'Stainless steel powder landing page covering 316L and 17-4PH for additive manufacturing, corrosion-resistant parts, and structural industrial applications.',
    summary:
      'Compare stainless steel powders used for repeatable LPBF production, corrosion-resistant parts, and higher-strength industrial AM applications.',
    lead:
      'Stainless steel powder remains one of the most practical entry points for metal additive manufacturing because it combines broad process compatibility with familiar industrial use cases. This family groups the stainless grades on the site together with supporting content.',
    overview: [
      '316L is usually the default stainless route for corrosion resistance, general industrial parts, and reliable LPBF process behavior.',
      '17-4PH is more often selected when the project needs higher strength after aging while still keeping stainless-like corrosion performance.',
    ],
    keypoints: [
      'Stainless projects still depend on PSD, morphology, chemistry, and reuse control.',
      '316L and 17-4PH serve different strength and corrosion priorities, so they should not be quoted interchangeably.',
      'These grades are common for fixtures, housings, tooling-adjacent parts, and industrial prototypes.',
    ],
    commonUses: ['Tooling and fixtures', 'Industrial housings and brackets', 'Corrosion-resistant production parts'],
    relatedProductIds: ['316l', '17-4ph'],
    relatedArticleSlugs: ['316l-stainless-steel-powder', '17-4ph-stainless-steel-powder'],
  },
  {
    slug: 'tool-steel-powder',
    label: 'Tool Steel Powder',
    title: 'Tool Steel Powder for Molds, Inserts, and Production Tooling',
    description:
      'Tool steel powder landing page covering M300 and H13 for additive manufacturing, molds, inserts, hot-work tooling, and industrial production support.',
    summary:
      'Review tool steel powders used for molds, inserts, dies, and durable production tooling in additive manufacturing workflows.',
    lead:
      'Tool steel powder is normally evaluated when the business case is not only geometry freedom but also tooling performance, turnaround speed, and manufacturing support. This family covers maraging and hot-work routes used in demanding industrial environments.',
    overview: [
      'M300 is often chosen for mold inserts and precision tooling where high strength and heat treatment response are important.',
      'H13 is relevant for hot-work tooling and die-related applications where thermal exposure and durability both matter.',
    ],
    keypoints: [
      'Tool steel buying decisions should consider post-build heat treatment from the start.',
      'Insert and mold applications often prioritize dimensional stability and turnaround over raw alloy novelty.',
      'Powder quality remains central even when final properties are developed after printing.',
    ],
    commonUses: ['Mold inserts', 'Hot-work dies', 'Production tooling'],
    relatedProductIds: ['m300', 'h13'],
    relatedArticleSlugs: ['m300-maraging-steel-powder', 'h13-tool-steel-powder'],
  },
  {
    slug: 'aluminum-powder',
    label: 'Aluminum Powder',
    title: 'Aluminum Powder for Lightweight Additive Manufacturing Components',
    description:
      'Aluminum powder landing page focused on AlSi10Mg for LPBF, lightweight metal parts, heat-transfer applications, and industrial prototyping.',
    summary:
      'Explore aluminum powder used for lightweight housings, thermal parts, and geometry-driven LPBF applications.',
    lead:
      'Aluminum powder for additive manufacturing is usually selected when lightweight design, thermal behavior, and geometry efficiency matter. On this site, AlSi10Mg is the primary aluminum route because it remains the most practical choice for many LPBF programs.',
    overview: [
      'AlSi10Mg is widely used because it balances printability with useful mechanical performance better than many alternative aluminum systems.',
      'Reflectivity, oxide behavior, and thermal conductivity make aluminum powder selection more process-sensitive than the alloy name alone suggests.',
    ],
    keypoints: [
      'Aluminum projects should define process route and PSD early to reduce parameter uncertainty.',
      'AlSi10Mg is commonly used for lightweight industrial, automotive, and thermal applications.',
      'Handling and oxide control matter throughout storage and use.',
    ],
    commonUses: ['Lightweight housings', 'Heat sinks and thermal parts', 'Automotive structures'],
    relatedProductIds: ['alsi10mg'],
    relatedArticleSlugs: ['alsi10mg-powder'],
  },
  {
    slug: 'copper-powder',
    label: 'Copper Powder',
    title: 'Copper Powder for High-Conductivity Additive Manufacturing Applications',
    description:
      'Copper powder landing page covering CuCrZr for additive manufacturing, thermal management, conductive tooling, and engineering components.',
    summary:
      'Review copper alloy powder used for conductive and thermal-performance additive manufacturing parts.',
    lead:
      'Copper powder is relevant when the application is driven by conductivity or heat transfer rather than general structural performance. CuCrZr is often the practical copper route because it balances conductivity and strength in a usable AM package.',
    overview: [
      'CuCrZr sits between pure copper and higher-strength, lower-conductivity alternatives, which makes it attractive for engineering use.',
      'The process capability of the target machine matters more for copper-family materials than many buyers initially expect.',
    ],
    keypoints: [
      'Conductivity-driven projects should state the real end-use requirement in the RFQ.',
      'Copper-family powders need clean handling and process-aware sourcing.',
      'CuCrZr is commonly considered for induction tooling, electronics, and thermal management.',
    ],
    commonUses: ['Thermal management components', 'Conductive tooling', 'Electrical and electronics hardware'],
    relatedProductIds: ['cucrzr'],
    relatedArticleSlugs: ['cucrzr-copper-powder'],
  },
  {
    slug: 'cobalt-chrome-powder',
    label: 'Cobalt Chrome Powder',
    title: 'Cobalt Chrome Powder for Wear- and Corrosion-Resistant AM Parts',
    description:
      'Cobalt chrome powder landing page covering CoCrMo for additive manufacturing, wear-resistant components, and corrosion-demanding applications.',
    summary:
      'Explore cobalt chrome powder for medical, wear-resistant, and corrosion-demanding additive manufacturing applications.',
    lead:
      'Cobalt chrome powder remains relevant when parts must tolerate wear, corrosion, or both under demanding service conditions. It is often considered for medical, dental, and industrial applications where stainless steel is not enough.',
    overview: [
      'CoCrMo is valued for the balance of passivation, hardness, and durability it can deliver when the process route is controlled.',
      'These powders are usually purchased for higher-consequence parts, so traceability and documentation matter alongside price.',
    ],
    keypoints: [
      'Wear and corrosion service should be described clearly in the RFQ.',
      'Medical or dental use requires project-specific qualification beyond general alloy supply.',
      'CoCr powders support demanding mixed-mechanism environments where simpler alloys may fail.',
    ],
    commonUses: ['Dental and medical parts', 'Wear-resistant components', 'Corrosion-demanding industrial hardware'],
    relatedProductIds: ['cocrmo'],
    relatedArticleSlugs: ['cocrmo-cocrw-powder'],
  },
];

export const materialFamilyMap = Object.fromEntries(materialFamilies.map((family) => [family.slug, family]));
