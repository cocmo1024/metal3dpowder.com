import type { CollectionEntry } from 'astro:content';
import { siteInfo } from './site';

export type BlogPost = CollectionEntry<'blog'>;
export type BlogTagArchive = {
  label: string;
  slug: string;
  posts: BlogPost[];
};

export const POSTS_PER_PAGE = 15;

export const blogAuthorName = `${siteInfo.brand} Editorial`;
export const blogAuthorPath = '/about/';
export const blogCategoryPath = '/blog/';
export const tagArchiveRobots = 'noindex,follow,max-image-preview:large';

const blogPageViews: Record<string, number> = {
  'metal-powder-for-3d-printing-guide': 13200,
  'additive-manufacturing-powder-supplier-guide': 12100,
  'metal-powder-for-3d-printing-price-guide': 11600,
  'steel-metal-powder-for-3d-printing-guide': 10800,
  'tc4-ti6al4v-powder': 12400,
  'ti64-titanium-powder-aerospace-structures': 10800,
  'ti64-powder-satellite-brackets-and-propulsion-support-hardware': 8800,
  'ti64-powder-aircraft-hydraulic-manifolds-and-valve-blocks': 9700,
  'ti64-grade-23-powder-orthopedic-implants-and-medical-components': 9300,
  'ti64-grade-23-powder-spinal-cages-and-porous-implant-structures': 9100,
  'gh4169-in718-powder': 10100,
  'in718-powder-hot-side-structural-housings-and-casings': 8600,
  'in718-powder-hot-section-parts': 9400,
  'in718-powder-turbomachinery-impellers-and-compressor-hardware': 9100,
  '316l-stainless-steel-powder': 9600,
  '316l-powder-metal-injection-molding-and-binder-jet-parts': 9200,
  '316l-powder-corrosion-resistant-industrial-hardware': 8300,
  '316l-powder-manifolds-and-fluid-path-parts': 7800,
  '316l-powder-semiconductor-gas-manifolds-and-sensor-housings': 8400,
  '316l-powder-pharmaceutical-fluid-manifolds-and-clean-flow-hardware': 8400,
  '17-4ph-stainless-steel-powder': 8800,
  '17-4ph-powder-metal-injection-molding-and-binder-jet-parts': 8600,
  '17-4ph-powder-industrial-fixtures-and-tooling-hardware': 7900,
  '17-4ph-powder-oil-gas-valve-components-and-pump-hardware': 7800,
  'alsi10mg-powder': 8200,
  'alsi10mg-powder-lightweight-housings-and-brackets': 7600,
  'alsi10mg-powder-uav-structures-and-electronics-housings': 7200,
  'alsi10mg-powder-uav-motor-mounts-and-thermal-electronics-frames': 7600,
  'alsi10mg-powder-satellite-electronics-housings-and-rf-enclosures': 8300,
  'gh3625-in625-powder': 7600,
  'in625-powder-corrosion-heavy-hot-side-hardware': 6800,
  'in625-powder-marine-and-chemical-ducting': 6500,
  'in625-powder-chemical-nozzles-and-injector-blocks': 7600,
  'cucrzr-copper-powder': 6900,
  'cucrzr-powder-rocket-engine-parts-and-heat-exchangers': 7400,
  'cucrzr-powder-cold-plates-and-heat-sinks': 6500,
  'cucrzr-powder-ai-data-center-cold-plates-and-gpu-liquid-cooling-manifolds': 9800,
  'cucrzr-powder-power-electronics-cooling-plates-and-busbar-hardware': 9300,
  'cucrzr-powder-ev-battery-welding-fixtures-and-conductive-tooling': 8900,
  'cucrzr-powder-induction-coils-and-current-carrying-parts': 6100,
  'cucrzr-powder-conductive-tooling-and-welding-contacts': 6000,
  'cucrzr-powder-rf-heat-spreaders-and-busbar-transition-hardware': 8500,
  'ta15-near-alpha-titanium-powder': 6200,
  'ta15-powder-elevated-temperature-aerospace-structures': 6000,
  'ta1-cp-titanium-powder': 5700,
  'ta1-powder-chemical-and-biomedical-parts': 6100,
  'cocrmo-cocrw-powder': 5100,
  'cocrmo-powder-wear-critical-industrial-parts': 5900,
  'cocrmo-powder-pump-sleeves-and-valve-seat-wear-hardware': 7300,
  'cocrmo-vs-stainless-powder-wear-critical-industrial-hardware': 6100,
  'lpbf-powder-particle-size-guide': 4300,
  'in718-vs-in625-powder': 3900,
  'in718-vs-hastelloy-x-powder-turbine-vs-furnace-hardware': 6400,
  '316l-vs-17-4ph-powder': 3600,
  '316l-vs-nickel-powder-for-corrosion-side-manifolds': 6900,
  'ti64-vs-grade-2-titanium-powder': 3400,
  'h13-tool-steel-powder': 3100,
  'h13-powder-conformal-cooling-inserts': 6200,
  'h13-powder-die-casting-inserts': 6500,
  'h13-powder-injection-molding-conformal-cooling-production-tools': 7600,
  'm300-maraging-steel-powder': 2900,
  'm300-powder-mold-tooling-inserts': 6000,
  'm300-powder-core-inserts-and-compact-production-tooling': 6200,
  'm300-powder-compact-mold-inserts-in-recurring-production': 7400,
  'hastelloy-x-powder': 2700,
  'hastelloy-x-powder-furnace-and-hot-gas-hardware': 5600,
  'hastelloy-x-powder-hydrogen-burner-and-combustor-hardware': 8700,
  'h13-vs-m300-powder': 4400,
  'cucrzr-vs-pure-copper-powder': 4200,
  'cucrzr-vs-pure-copper-powder-electrical-contact-hardware': 6800,
  'ebm-powder-size-guide': 4000,
  'ti64-grade-23-vs-grade-5-powder': 5000,
  'ti64-powder-lattice-brackets-and-lightweight-structural-nodes': 9200,
  'ti64-powder-evtol-brackets-and-lightweight-airframe-nodes': 9000,
  'ti64-powder-drone-landing-gear-brackets-and-support-nodes': 8600,
  'ded-powder-vs-wire-feedstock-guide': 5300,
  'cobalt-chrome-vs-titanium-powder-dental-am': 5100,
  'cocrmo-powder-dental-frameworks-and-crowns': 5800,
  'titanium-oxygen-limit-discussion-guide': 5300,
  '17-4ph-powder-stronger-workholding-and-jig-hardware': 8200,
  '316l-powder-filters-and-corrosion-side-mim-parts': 7900,
  '17-4ph-powder-stronger-binder-jet-industrial-parts': 8100,
  'in625-vs-hastelloy-x-powder-chemical-hot-gas-hardware': 7000,
};

const blogPostImages: Record<string, string> = {
  'metal-powder-for-3d-printing-guide': '/og-image.svg',
  'additive-manufacturing-powder-supplier-guide': '/og-image.svg',
  'metal-powder-for-3d-printing-price-guide': '/og-image.svg',
  'steel-metal-powder-for-3d-printing-guide': '/images/products/316l.svg',
  'tc4-ti6al4v-powder': '/images/products/titanium.svg',
  'ti64-titanium-powder-aerospace-structures': '/images/products/titanium.svg',
  'ti64-powder-evtol-brackets-and-lightweight-airframe-nodes': '/images/products/titanium.svg',
  'ti64-powder-satellite-brackets-and-propulsion-support-hardware': '/images/products/titanium.svg',
  'ti64-powder-aircraft-hydraulic-manifolds-and-valve-blocks': '/images/products/titanium.svg',
  'ti64-grade-23-powder-orthopedic-implants-and-medical-components': '/images/products/titanium.svg',
  'ti64-grade-23-powder-spinal-cages-and-porous-implant-structures': '/images/products/titanium.svg',
  'ta1-cp-titanium-powder': '/images/products/ti-grade-2.svg',
  'ta15-near-alpha-titanium-powder': '/images/products/titanium.svg',
  '316l-stainless-steel-powder': '/images/products/316l.svg',
  '316l-powder-metal-injection-molding-and-binder-jet-parts': '/images/products/316l.svg',
  '316l-powder-corrosion-resistant-industrial-hardware': '/images/products/316l.svg',
  '316l-powder-manifolds-and-fluid-path-parts': '/images/products/316l.svg',
  '316l-powder-semiconductor-gas-manifolds-and-sensor-housings': '/images/products/316l.svg',
  '316l-powder-pharmaceutical-fluid-manifolds-and-clean-flow-hardware': '/images/products/316l.svg',
  '17-4ph-stainless-steel-powder': '/images/products/17-4ph.svg',
  '17-4ph-powder-metal-injection-molding-and-binder-jet-parts': '/images/products/17-4ph.svg',
  '17-4ph-powder-industrial-fixtures-and-tooling-hardware': '/images/products/17-4ph.svg',
  '17-4ph-powder-oil-gas-valve-components-and-pump-hardware': '/images/products/17-4ph.svg',
  'alsi10mg-powder': '/images/products/alsi10mg.svg',
  'alsi10mg-powder-lightweight-housings-and-brackets': '/images/products/alsi10mg.svg',
  'alsi10mg-powder-uav-structures-and-electronics-housings': '/images/products/alsi10mg.svg',
  'alsi10mg-powder-uav-motor-mounts-and-thermal-electronics-frames': '/images/products/alsi10mg.svg',
  'alsi10mg-powder-satellite-electronics-housings-and-rf-enclosures': '/images/products/alsi10mg.svg',
  'cocrmo-cocrw-powder': '/images/products/cocrmo.svg',
  'cocrmo-powder-dental-frameworks-and-crowns': '/images/products/cocrmo.svg',
  'cocrmo-powder-wear-critical-industrial-parts': '/images/products/cocrmo.svg',
  'cocrmo-powder-pump-sleeves-and-valve-seat-wear-hardware': '/images/products/cocrmo.svg',
  'cocrmo-vs-stainless-powder-wear-critical-industrial-hardware': '/images/products/cocrmo.svg',
  'cucrzr-copper-powder': '/images/products/cucrzr.svg',
  'cucrzr-powder-rocket-engine-parts-and-heat-exchangers': '/images/products/cucrzr.svg',
  'cucrzr-powder-cold-plates-and-heat-sinks': '/images/products/cucrzr.svg',
  'cucrzr-powder-ai-data-center-cold-plates-and-gpu-liquid-cooling-manifolds': '/images/products/cucrzr.svg',
  'cucrzr-powder-power-electronics-cooling-plates-and-busbar-hardware': '/images/products/cucrzr.svg',
  'cucrzr-powder-ev-battery-welding-fixtures-and-conductive-tooling': '/images/products/cucrzr.svg',
  'cucrzr-powder-induction-coils-and-current-carrying-parts': '/images/products/cucrzr.svg',
  'cucrzr-powder-conductive-tooling-and-welding-contacts': '/images/products/cucrzr.svg',
  'cucrzr-powder-rf-heat-spreaders-and-busbar-transition-hardware': '/images/products/cucrzr.svg',
  'gh3625-in625-powder': '/images/products/in625.svg',
  'in625-powder-corrosion-heavy-hot-side-hardware': '/images/products/in625.svg',
  'in625-powder-marine-and-chemical-ducting': '/images/products/in625.svg',
  'in625-powder-chemical-nozzles-and-injector-blocks': '/images/products/in625.svg',
  'gh4169-in718-powder': '/images/products/in718.svg',
  'in718-powder-hot-side-structural-housings-and-casings': '/images/products/in718.svg',
  'in718-powder-hot-section-parts': '/images/products/in718.svg',
  'in718-powder-turbomachinery-impellers-and-compressor-hardware': '/images/products/in718.svg',
  'in718-vs-hastelloy-x-powder-turbine-vs-furnace-hardware': '/images/products/in718.svg',
  'lpbf-powder-particle-size-guide': '/og-image.svg',
  'ta1-powder-chemical-and-biomedical-parts': '/images/products/ti-grade-2.svg',
  'ti64-vs-grade-2-titanium-powder': '/images/products/titanium.svg',
  'in718-vs-in625-powder': '/images/products/in718.svg',
  '316l-vs-17-4ph-powder': '/images/products/316l.svg',
  '316l-vs-nickel-powder-for-corrosion-side-manifolds': '/images/products/316l.svg',
  'h13-tool-steel-powder': '/images/products/h13.svg',
  'h13-powder-conformal-cooling-inserts': '/images/products/h13.svg',
  'h13-powder-die-casting-inserts': '/images/products/h13.svg',
  'h13-powder-injection-molding-conformal-cooling-production-tools': '/images/products/h13.svg',
  'm300-maraging-steel-powder': '/images/products/m300.svg',
  'm300-powder-mold-tooling-inserts': '/images/products/m300.svg',
  'm300-powder-core-inserts-and-compact-production-tooling': '/images/products/m300.svg',
  'm300-powder-compact-mold-inserts-in-recurring-production': '/images/products/m300.svg',
  'hastelloy-x-powder': '/images/products/hastelloyx.svg',
  'hastelloy-x-powder-furnace-and-hot-gas-hardware': '/images/products/hastelloyx.svg',
  'hastelloy-x-powder-hydrogen-burner-and-combustor-hardware': '/images/products/hastelloyx.svg',
  'h13-vs-m300-powder': '/images/products/h13.svg',
  'cucrzr-vs-pure-copper-powder': '/images/products/cucrzr.svg',
  'cucrzr-vs-pure-copper-powder-electrical-contact-hardware': '/images/products/cucrzr.svg',
  'ebm-powder-size-guide': '/images/products/titanium.svg',
  'ti64-grade-23-vs-grade-5-powder': '/images/products/titanium.svg',
  'ti64-powder-lattice-brackets-and-lightweight-structural-nodes': '/images/products/titanium.svg',
  'ti64-powder-drone-landing-gear-brackets-and-support-nodes': '/images/products/titanium.svg',
  'ded-powder-vs-wire-feedstock-guide': '/og-image.svg',
  'cobalt-chrome-vs-titanium-powder-dental-am': '/images/products/cocrmo.svg',
  'titanium-oxygen-limit-discussion-guide': '/images/products/titanium.svg',
  'ta15-powder-elevated-temperature-aerospace-structures': '/images/products/titanium.svg',
  '17-4ph-powder-stronger-workholding-and-jig-hardware': '/images/products/17-4ph.svg',
  '316l-powder-filters-and-corrosion-side-mim-parts': '/images/products/316l.svg',
  '17-4ph-powder-stronger-binder-jet-industrial-parts': '/images/products/17-4ph.svg',
  'in625-vs-hastelloy-x-powder-chemical-hot-gas-hardware': '/images/products/in625.svg',
};

export const getBlogPostPath = (postOrId: BlogPost | string) =>
  `/posts/Alloys/${typeof postOrId === 'string' ? postOrId : postOrId.id}/`;

export const slugifyTag = (value: string) => value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

export const getTagPath = (tagOrSlug: string) => `/blog/tags/${slugifyTag(tagOrSlug)}/`;

export const compareBlogPosts = (left: BlogPost, right: BlogPost) => {
  const dateDiff = right.data.pubDate.valueOf() - left.data.pubDate.valueOf();
  if (dateDiff !== 0) {
    return dateDiff;
  }

  if (left.data.featured !== right.data.featured) {
    return left.data.featured ? -1 : 1;
  }

  return left.data.title.localeCompare(right.data.title);
};

export const sortBlogPosts = (posts: BlogPost[]) => [...posts].sort(compareBlogPosts);

export const estimateReadingMinutes = (body: string) =>
  Math.max(1, Math.round(body.split(/\s+/).filter(Boolean).length / 220));

export const getBlogPageViews = (postOrId: BlogPost | string) =>
  blogPageViews[typeof postOrId === 'string' ? postOrId : postOrId.id] ?? 0;

export const getBlogPostImage = (postOrId: BlogPost | string) =>
  blogPostImages[typeof postOrId === 'string' ? postOrId : postOrId.id] ?? '/og-image.svg';

export const paginatePosts = (posts: BlogPost[], currentPage: number, pageSize = POSTS_PER_PAGE) => {
  const totalPages = Math.max(1, Math.ceil(posts.length / pageSize));
  const normalizedPage = Math.min(Math.max(currentPage, 1), totalPages);
  const startIndex = (normalizedPage - 1) * pageSize;

  return {
    currentPage: normalizedPage,
    totalPages,
    posts: posts.slice(startIndex, startIndex + pageSize),
  };
};

export const getAdjacentBlogPosts = (posts: BlogPost[], currentId: string) => {
  const currentIndex = posts.findIndex((post) => post.id === currentId);

  return {
    previousPost: currentIndex > 0 ? posts[currentIndex - 1] : null,
    nextPost: currentIndex >= 0 && currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null,
  };
};

export const getRelatedBlogPosts = (posts: BlogPost[], currentPost: BlogPost, count = 6) => {
  const currentTags = new Set(currentPost.data.tags.map((tag) => tag.toLowerCase()));

  const sameTagPosts = posts
    .filter((post) => post.id !== currentPost.id)
    .map((post) => {
      const sharedTagCount = post.data.tags.filter((tag) => currentTags.has(tag.toLowerCase())).length;
      return {
        post,
        sharedTagCount,
        pageViews: getBlogPageViews(post),
      };
    })
    .filter((item) => item.sharedTagCount > 0)
    .sort((left, right) => {
      if (right.pageViews !== left.pageViews) {
        return right.pageViews - left.pageViews;
      }

      if (right.sharedTagCount !== left.sharedTagCount) {
        return right.sharedTagCount - left.sharedTagCount;
      }

      return compareBlogPosts(left.post, right.post);
    })
    .map((item) => item.post);

  if (sameTagPosts.length >= count) {
    return sameTagPosts.slice(0, count);
  }

  const usedIds = new Set(sameTagPosts.map((post) => post.id));
  usedIds.add(currentPost.id);

  const fallbackPosts = posts
    .filter((post) => !usedIds.has(post.id))
    .sort((left, right) => {
      if (right.data.category === currentPost.data.category && left.data.category !== currentPost.data.category) {
        return 1;
      }

      if (left.data.category === currentPost.data.category && right.data.category !== currentPost.data.category) {
        return -1;
      }

      if (getBlogPageViews(right) !== getBlogPageViews(left)) {
        return getBlogPageViews(right) - getBlogPageViews(left);
      }

      return compareBlogPosts(left, right);
    });

  return [...sameTagPosts, ...fallbackPosts].slice(0, count);
};

export const getTagArchives = (posts: BlogPost[]) => {
  const archives = new Map<string, BlogTagArchive>();

  posts.forEach((post) => {
    post.data.tags.forEach((tag) => {
      const slug = slugifyTag(tag);
      const existing = archives.get(slug);

      if (existing) {
        existing.posts.push(post);
        return;
      }

      archives.set(slug, {
        label: tag,
        slug,
        posts: [post],
      });
    });
  });

  return [...archives.values()]
    .map((archive) => ({
      ...archive,
      posts: sortBlogPosts(archive.posts),
    }))
    .sort((left, right) => left.label.localeCompare(right.label));
};
