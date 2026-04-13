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
  'tc4-ti6al4v-powder': 12400,
  'gh4169-in718-powder': 10100,
  '316l-stainless-steel-powder': 9600,
  '17-4ph-stainless-steel-powder': 8800,
  'alsi10mg-powder': 8200,
  'gh3625-in625-powder': 7600,
  'cucrzr-copper-powder': 6900,
  'ta15-near-alpha-titanium-powder': 6200,
  'ta1-cp-titanium-powder': 5700,
  'cocrmo-cocrw-powder': 5100,
  'metal-am-powder-price-guide': 4800,
  'metal-powder-rfq-checklist': 4500,
  'lpbf-powder-particle-size-guide': 4300,
  'metal-powder-coa-certificate-guide': 4100,
  'in718-vs-in625-powder': 3900,
  '316l-vs-17-4ph-powder': 3600,
  'ti64-vs-grade-2-titanium-powder': 3400,
  'h13-tool-steel-powder': 3100,
  'm300-maraging-steel-powder': 2900,
  'hastelloy-x-powder': 2700,
  'aerospace-powder-qualification-checklist': 5200,
  'export-document-checklist-metal-powder': 5000,
  'metal-powder-reuse-policy-guide': 4700,
  'h13-vs-m300-powder': 4400,
  'cucrzr-vs-pure-copper-powder': 4200,
  'ebm-powder-size-guide': 4000,
  'medical-dental-powder-documentation-guide': 3800,
  'compare-metal-powder-quotes': 5800,
  'prototype-vs-production-powder-specification': 5600,
  'metal-powder-storage-shelf-life-guide': 5400,
  'incoterms-guide-metal-powder-buyers': 5200,
  'ti64-grade-23-vs-grade-5-powder': 5000,
  'dental-lab-cobalt-chrome-sourcing-checklist': 4600,
};

const blogPostImages: Record<string, string> = {
  'tc4-ti6al4v-powder': '/images/products/titanium.svg',
  'ta1-cp-titanium-powder': '/images/products/ti-grade-2.svg',
  'ta15-near-alpha-titanium-powder': '/images/products/titanium.svg',
  '316l-stainless-steel-powder': '/images/products/316l.svg',
  '17-4ph-stainless-steel-powder': '/images/products/17-4ph.svg',
  'alsi10mg-powder': '/images/products/alsi10mg.svg',
  'cocrmo-cocrw-powder': '/images/products/cocrmo.svg',
  'cucrzr-copper-powder': '/images/products/cucrzr.svg',
  'gh3625-in625-powder': '/images/products/in625.svg',
  'gh4169-in718-powder': '/images/products/in718.svg',
  'metal-am-powder-price-guide': '/og-image.svg',
  'metal-powder-rfq-checklist': '/og-image.svg',
  'lpbf-powder-particle-size-guide': '/og-image.svg',
  'metal-powder-coa-certificate-guide': '/og-image.svg',
  'ti64-vs-grade-2-titanium-powder': '/images/products/titanium.svg',
  'in718-vs-in625-powder': '/images/products/in718.svg',
  '316l-vs-17-4ph-powder': '/images/products/316l.svg',
  'h13-tool-steel-powder': '/images/products/h13.svg',
  'm300-maraging-steel-powder': '/images/products/m300.svg',
  'hastelloy-x-powder': '/images/products/hastelloyx.svg',
  'aerospace-powder-qualification-checklist': '/images/products/titanium.svg',
  'export-document-checklist-metal-powder': '/og-image.svg',
  'metal-powder-reuse-policy-guide': '/og-image.svg',
  'h13-vs-m300-powder': '/images/products/h13.svg',
  'cucrzr-vs-pure-copper-powder': '/images/products/cucrzr.svg',
  'ebm-powder-size-guide': '/images/products/titanium.svg',
  'medical-dental-powder-documentation-guide': '/images/products/cocrmo.svg',
  'compare-metal-powder-quotes': '/og-image.svg',
  'prototype-vs-production-powder-specification': '/og-image.svg',
  'metal-powder-storage-shelf-life-guide': '/og-image.svg',
  'incoterms-guide-metal-powder-buyers': '/og-image.svg',
  'ti64-grade-23-vs-grade-5-powder': '/images/products/titanium.svg',
  'dental-lab-cobalt-chrome-sourcing-checklist': '/images/products/cocrmo.svg',
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
