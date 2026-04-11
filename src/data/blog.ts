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
