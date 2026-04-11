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
