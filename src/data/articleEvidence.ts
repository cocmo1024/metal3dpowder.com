export interface EvidenceSource {
  label: string;
  href: string;
  scope: string;
}

export interface ArticleEvidenceProfile {
  powderEvidence: string[];
  boundary: string;
  sources: EvidenceSource[];
}

const powderStandard: EvidenceSource = {
  label: 'ISO/ASTM 52907:2019',
  href: 'https://www.iso.org/standard/73565.html',
  scope: 'Metal-powder documentation, traceability, sampling, PSD, chemistry, density, morphology, flow, contamination, packaging, and storage.',
};

const criticalPbfStandard: EvidenceSource = {
  label: 'ISO/ASTM 52904:2024',
  href: 'https://www.iso.org/standard/82919.html',
  scope: 'Process controls for metal powder bed fusion used in critical applications.',
};

const powderLifecycleStandard: EvidenceSource = {
  label: 'ISO/ASTM 52928:2024',
  href: 'https://www.iso.org/standard/78527.html',
  scope: 'Lifecycle controls for virgin and used metal powder, including quality assurance and test strategy.',
};

const defaultEvidence: ArticleEvidenceProfile = {
  powderEvidence: [
    'Lot-specific chemistry and the referenced alloy specification',
    'PSD results with sampling method, measurement method, and reporting basis',
    'Powder production route, condition, traceability, packaging, and change notification',
    'Available TDS/SDS, COA, morphology or SEM evidence, and process-specific test data',
  ],
  boundary:
    'Powder data can support feedstock selection and lot acceptance. It does not qualify a machine parameter set, certify a finished part, or replace application-specific testing.',
  sources: [powderStandard, powderLifecycleStandard],
};

const profiles: Record<string, ArticleEvidenceProfile> = {
  Aerospace: {
    powderEvidence: [
      'Lot chemistry, interstitial limits, PSD method, morphology, and contamination controls',
      'Powder genealogy, reuse status, retained-sample plan, and supplier change notification',
      'Machine, parameter set, orientation, support, heat treatment, HIP, and machining route',
      'Coupon plan, critical-zone NDE, fatigue basis, dimensional inspection, and configuration control',
    ],
    boundary:
      'Aerospace suitability belongs to the controlled powder-to-part route. An alloy name, a COA, or a successful density coupon alone does not establish flight acceptance.',
    sources: [
      powderStandard,
      criticalPbfStandard,
      {
        label: 'NASA-STD-6030',
        href: 'https://standards.nasa.gov/standard/NASA/NASA-STD-6030',
        scope: 'NASA requirements for additively manufactured spaceflight hardware.',
      },
    ],
  },
  Aluminum: {
    powderEvidence: [
      'AlSi10Mg chemistry, oxygen or contamination controls, powder route, and lot identity',
      'Machine-compatible PSD with method, fines and oversize reporting, and packaging condition',
      'Heat-treatment condition, orientation, surface finishing, and dimensional strategy',
      'Available COA, TDS/SDS, morphology or SEM evidence, and representative build data',
    ],
    boundary:
      'AlSi10Mg powder can support a lightweight LPBF route, but powder acceptance does not prove fatigue, thermal, pressure, or environmental performance of the final housing or bracket.',
    sources: [powderStandard, criticalPbfStandard],
  },
  CoCr: {
    powderEvidence: [
      'Exact CoCrMo or CoCrW designation, chemistry limits, powder route, and lot traceability',
      'PSD method, morphology, flow or spreadability evidence, and reuse condition',
      'Heat treatment, finishing, wear or corrosion test basis, and final surface requirements',
      'Available COA, TDS/SDS, SEM evidence, and application-specific qualification records',
    ],
    boundary:
      'A cobalt-chromium powder designation does not establish wear life, corrosion performance, biocompatibility, or medical-device acceptance. Those conclusions require the finished route and governing requirements.',
    sources: [
      powderStandard,
      {
        label: 'ASTM F3213-17(2025)',
        href: 'https://store.astm.org/f3213-17r25.html',
        scope: 'Finished-part specification for cobalt-28 chromium-6 molybdenum produced by powder bed fusion.',
      },
    ],
  },
  Copper: {
    powderEvidence: [
      'Exact CuCrZr or pure-copper designation, chemistry, oxygen control, and production route',
      'Machine and laser compatibility, PSD method, morphology, density, and spreadability evidence',
      'Solution and aging route plus conductivity and mechanical test condition',
      'Available COA, TDS/SDS, SEM or PSD data, and leak or pressure evidence where channels are involved',
    ],
    boundary:
      'Copper-family conductivity and strength depend on alloy identity and the complete thermal history. Data from pure copper, CuCrZr, GRCop, or another copper alloy must not be transferred between materials.',
    sources: [
      powderStandard,
      {
        label: 'NASA C18150 and GRCop AM process development',
        href: 'https://ntrs.nasa.gov/citations/20170000424',
        scope: 'Program-specific process-development evidence for additively manufactured copper alloys; not a universal powder specification.',
      },
    ],
  },
  Knowledge: defaultEvidence,
  Medical: {
    powderEvidence: [
      'Exact alloy grade, chemistry and interstitial limits, powder genealogy, and lot traceability',
      'PSD, morphology, reuse controls, contamination controls, and cleaning strategy',
      'Validated build, post-processing, sterilization, biocompatibility, and mechanical test route',
      'Available COA, TDS/SDS, SEM or PSD evidence, and device-specific regulatory documentation',
    ],
    boundary:
      'Powder selection is one input to a medical manufacturing route. It does not establish device safety, biocompatibility, sterilization validity, or regulatory clearance.',
    sources: [
      powderStandard,
      {
        label: 'FDA technical considerations for additive manufactured medical devices',
        href: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents/technical-considerations-additive-manufactured-medical-devices',
        scope: 'FDA guidance covering design, manufacturing, and device-testing considerations for additive manufacturing.',
      },
    ],
  },
  Nickel: {
    powderEvidence: [
      'Exact IN718, IN625, or Hastelloy X designation, chemistry, powder route, and lot identity',
      'PSD method, morphology, contamination control, flow or feed evidence, and reuse state',
      'Build process, heat treatment or HIP route, machining allowance, and inspection plan',
      'Available COA, TDS/SDS, SEM or PSD evidence, and service-specific corrosion or temperature data',
    ],
    boundary:
      'Nickel-alloy powder chemistry does not by itself qualify corrosion, creep, fatigue, pressure, or hot-gas service. The machine route, thermal history, defects, and final acceptance plan remain decisive.',
    sources: [powderStandard, criticalPbfStandard],
  },
  Process: {
    powderEvidence: [
      'Alloy, production route, PSD method and distribution, morphology, and powder condition',
      'Machine or feeder family, layer or feed settings, atmosphere, and parameter-set status',
      'Sampling, reuse, sieving, blending, exposure, packaging, and change-control rules',
      'Available COA, TDS/SDS, SEM or PSD evidence, and the agreed process trial or coupon plan',
    ],
    boundary:
      'A nominal particle-size range is not a universal process grade. Powder acceptance must be tied to the actual machine, feeding or recoating system, parameter window, and application.',
    sources: [powderStandard, powderLifecycleStandard, criticalPbfStandard],
  },
  Steel: {
    powderEvidence: [
      'Exact 316L or 17-4PH designation, chemistry, powder route, and lot identity',
      'PSD method, morphology, contamination, density, flow or spreadability evidence',
      'Build route, heat treatment, corrosion or strength target, and finishing requirements',
      'Available COA, TDS/SDS, SEM or PSD evidence, and leak, pressure, or mechanical test data where required',
    ],
    boundary:
      'Stainless powder acceptance does not establish corrosion performance, pressure integrity, cleanliness, heat-treatment response, or final mechanical properties for the printed part.',
    sources: [
      powderStandard,
      {
        label: 'ASTM F3184-16(2023)',
        href: 'https://store.astm.org/f3184-16r23.html',
        scope: 'Finished-part specification for powder-bed-fused UNS S31603 stainless steel.',
      },
    ],
  },
  Titanium: {
    powderEvidence: [
      'Grade 5, Grade 23, CP titanium, or TA15 identity with chemistry and interstitial limits',
      'Powder route, PSD method, morphology, reuse history, and contamination controls',
      'Machine route, parameter status, heat treatment or HIP, surface condition, and inspection plan',
      'Available COA, TDS/SDS, SEM or PSD evidence, and application-specific build or coupon data',
    ],
    boundary:
      'Titanium powder identity and oxygen limits are necessary inputs, but they do not qualify fatigue, fracture, implant, aerospace, or high-temperature performance of the finished part.',
    sources: [
      powderStandard,
      {
        label: 'ASTM F2924-14(2021)',
        href: 'https://store.astm.org/f2924-14.html',
        scope: 'Finished-part specification for Ti-6Al-4V produced by powder bed fusion.',
      },
      {
        label: 'ASTM F3001-14(2021)',
        href: 'https://store.astm.org/f3001-14.html',
        scope: 'Finished-part specification for Ti-6Al-4V ELI produced by powder bed fusion.',
      },
    ],
  },
  Tooling: {
    powderEvidence: [
      'H13 or M300 identity, chemistry, powder production route, and lot traceability',
      'Machine-compatible PSD, morphology, flow or spreadability, and reuse condition',
      'Heat-treatment sequence, hardness target, machining stock, cooling-channel cleaning, and inspection',
      'Available COA, TDS/SDS, SEM or PSD evidence, and tool-life or thermal-cycle evidence for the actual route',
    ],
    boundary:
      'Powder data cannot establish tool life, thermal-fatigue resistance, hardness uniformity, or cooling performance. Those outcomes depend on design, build, heat treatment, finishing, and service trials.',
    sources: [
      powderStandard,
      {
        label: 'ASTM F3607-22',
        href: 'https://store.astm.org/f3607-22.html',
        scope: 'Finished-part specification for maraging steel produced by powder bed fusion.',
      },
    ],
  },
};

export const getArticleEvidenceProfile = (category: string) => profiles[category] ?? defaultEvidence;
