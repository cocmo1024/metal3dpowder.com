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
  'metal-powder-selection-by-application': ['ti64', '316l', 'in625'],
  '316l-vs-nickel-powder-for-corrosion-side-manifolds': ['316l', 'in625'],
};

const productOrder = new Map(products.map((product, index) => [product.id, index]));

const resolveProductIds = (ids: string[]) => {
  const idSet = new Set(ids);
  return products.filter((product) => idSet.has(product.id));
};

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
  const scores = new Map<string, number>();
  const exactKnowledgePath = `/posts/Alloys/${postId}/`;

  for (const product of resolveProductIds(postProductOverrides[postId] ?? [])) {
    scores.set(product.id, 8);
  }

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
