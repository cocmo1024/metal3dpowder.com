import { getPostHubs, type HubDefinition } from './contentHubs';
import { products, type Product } from './products';

const materialHubProductIds: Record<string, string[]> = {
  'titanium-powder': ['ti64', 'ti64-grade-23', 'ti-grade-2', 'ta15'],
  'stainless-steel-powder': ['316l', '17-4ph'],
  'nickel-alloy-powder': ['in718', 'in625', 'hastelloyx'],
  'copper-alloy-powder': ['cucrzr'],
  'tool-steel-powder': ['h13', 'm300'],
  'aluminum-powder': ['alsi10mg'],
  'cobalt-chrome-powder': ['cocrmo'],
};

const applicationHubProductIds: Record<string, string[]> = {
  'ai-liquid-cooling': ['cucrzr', '316l', 'alsi10mg'],
  'photonics-and-rf-hardware': ['cucrzr', 'alsi10mg', '316l'],
  'aerospace-space': ['ti64', 'ta15', 'in718', 'hastelloyx', 'alsi10mg'],
  'defense-sustainment-mission-hardware': ['ti64', '17-4ph', 'in718', 'alsi10mg'],
  'uav-and-sensor-payloads': ['alsi10mg', 'ti64', 'ta15'],
  'medical-implants': ['ti64-grade-23', 'ti-grade-2', 'cocrmo', '316l'],
  'semiconductor-fluid-hardware': ['316l', 'cucrzr', 'in625'],
  'hydrogen-and-fuel-cell-hardware': ['316l', 'in625', 'cucrzr', 'ti-grade-2'],
  'power-electronics-and-ev': ['cucrzr', 'alsi10mg', '316l'],
  'energy-and-propulsion': ['in718', 'in625', 'hastelloyx', 'cucrzr', 'ti64'],
  'oil-gas-and-sour-service-hardware': ['in625', '17-4ph', 'cocrmo', '316l'],
  'carbon-capture-and-co2-processing-hardware': ['in625', '316l', 'hastelloyx'],
  'nuclear-and-smr-support-hardware': ['316l', 'in625', 'hastelloyx', '17-4ph'],
  'geothermal-and-brine-energy-hardware': ['in625', '316l'],
  'marine-and-desalination-hardware': ['in625', '316l', 'cocrmo'],
  'fusion-high-heat-flux-hardware': ['cucrzr', 'in718', 'hastelloyx', 'ti64'],
  'tooling-and-mold-inserts': ['h13', 'm300', '17-4ph', 'cucrzr'],
  'industrial-automation-robotics': ['17-4ph', 'm300', 'ti64', '316l'],
  'humanoid-and-robot-joint-hardware': ['ti64', '17-4ph', 'm300', 'alsi10mg'],
  'mim-binder-jet-production': ['316l', '17-4ph', 'cocrmo'],
};

const processHubProcessLabels: Record<string, string[]> = {
  'pm-hip': ['HIP'],
  lpbf: ['LPBF'],
  ebm: ['EBM'],
  ded: ['DED'],
  'binder-jet': ['Binder jet'],
  mim: ['MIM'],
};

const postProductOverrides: Record<string, string[]> = {
  'metal-powder-specification-guide-psd-oxygen-flowability': ['316l', 'ti64', 'alsi10mg'],
  'additive-manufacturing-powder-supplier-guide': ['316l', 'ti64', 'in718'],
  'metal-powder-for-3d-printing-price-guide': ['316l', 'ti64', 'alsi10mg'],
  'metal-powder-selection-by-application': ['ti64', '316l', 'in625'],
  '316l-vs-nickel-powder-for-corrosion-side-manifolds': ['316l', 'in625'],
  'ti64-vs-grade-2-titanium-powder': ['ti64', 'ti-grade-2'],
  'ti64-grade-23-vs-grade-5-powder': ['ti64-grade-23', 'ti64'],
  'ti64-vs-17-4ph-powder-humanoid-robot-joints': ['ti64', '17-4ph'],
  '316l-vs-17-4ph-powder': ['316l', '17-4ph'],
  'in718-vs-in625-powder': ['in718', 'in625'],
  'h13-vs-m300-powder': ['h13', 'm300'],
  'cocrmo-vs-stainless-powder-wear-critical-industrial-hardware': ['cocrmo', '316l', '17-4ph'],
  '316l-in625-powder-pm-hip-nuclear-pressure-components': ['316l', 'in625'],
  'cucrzr-vs-pure-copper-powder': ['cucrzr'],
  'tc4-ti6al4v-powder': ['ti64', 'ti64-grade-23'],
};

const productOrder = new Map(products.map((product, index) => [product.id, index]));
const productById = new Map(products.map((product) => [product.id, product]));

const resolveProductIds = (ids: string[]) => {
  return [...new Set(ids)].map((id) => productById.get(id)).filter((product): product is Product => Boolean(product));
};

const gradePostPrefixes: Array<[string, string]> = [
  ['ti64-grade-23-', 'ti64-grade-23'], ['ti64-', 'ti64'], ['tc4-', 'ti64'],
  ['ta1-', 'ti-grade-2'], ['ta15-', 'ta15'], ['316l-', '316l'], ['17-4ph-', '17-4ph'],
  ['alsi10mg-', 'alsi10mg'], ['cucrzr-', 'cucrzr'], ['cocrmo-', 'cocrmo'],
  ['in718-', 'in718'], ['gh4169-', 'in718'], ['in625-', 'in625'], ['gh3625-', 'in625'],
  ['hastelloy-x-', 'hastelloyx'], ['m300-', 'm300'], ['h13-', 'h13'],
];

export const getProductsForHub = (hub: HubDefinition, limit = 4): Product[] => {
  let matches: Product[] = [];

  if (hub.group === 'materials') {
    matches = resolveProductIds(materialHubProductIds[hub.slug] ?? []);
  } else if (hub.group === 'applications') {
    matches = resolveProductIds(applicationHubProductIds[hub.slug] ?? []);
  } else {
    const processLabels = processHubProcessLabels[hub.slug] ?? [];
    matches = products.filter((product) =>
      product.processes.some((process) => processLabels.includes(process)),
    );
  }

  return matches.slice(0, limit);
};

export const getProductsForPost = (postId: string, limit = 3): Product[] => {
  const explicitIds = postProductOverrides[postId];
  if (explicitIds) return resolveProductIds(explicitIds).slice(0, limit);

  // A grade-led article should not send buyers to a different alloy just because it shares a hub.
  const gradeMatch = gradePostPrefixes.find(([prefix]) => `${postId}-`.startsWith(prefix));
  if (gradeMatch) return resolveProductIds([gradeMatch[1]]).slice(0, limit);

  const scores = new Map<string, number>();
  const exactKnowledgePath = `/posts/Alloys/${postId}/`;

  for (const product of products) {
    if (product.knowledgePath === exactKnowledgePath) {
      scores.set(product.id, 10);
    }
  }

  for (const hub of getPostHubs(postId)) {
    const weight = hub.group === 'materials' ? 5 : hub.group === 'applications' ? 3 : 2;
    for (const product of getProductsForHub(hub, products.length)) {
      scores.set(product.id, (scores.get(product.id) ?? 0) + weight);
    }
  }

  return products
    .filter((product) => (scores.get(product.id) ?? 0) > 0)
    .sort(
      (a, b) =>
        (scores.get(b.id) ?? 0) - (scores.get(a.id) ?? 0) ||
        (productOrder.get(a.id) ?? 0) - (productOrder.get(b.id) ?? 0),
    )
    .slice(0, limit);
};
