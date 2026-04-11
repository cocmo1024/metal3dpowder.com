import type { CollectionEntry } from 'astro:content';
import { siteInfo } from './site';

export type BlogPost = CollectionEntry<'blog'>;

export const blogAuthorName = `${siteInfo.brand} Editorial`;

export const getBlogPostPath = (postOrId: BlogPost | string) =>
  `/posts/Alloys/${typeof postOrId === 'string' ? postOrId : postOrId.id}/`;

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

export const getAdjacentBlogPosts = (posts: BlogPost[], currentId: string) => {
  const currentIndex = posts.findIndex((post) => post.id === currentId);

  return {
    previousPost: currentIndex > 0 ? posts[currentIndex - 1] : null,
    nextPost: currentIndex >= 0 && currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null,
  };
};

export const getRelatedBlogPosts = (posts: BlogPost[], currentPost: BlogPost, count = 3) => {
  const currentTags = new Set(currentPost.data.tags.map((tag) => tag.toLowerCase()));

  return posts
    .filter((post) => post.id !== currentPost.id)
    .map((post) => {
      const sharedTags = post.data.tags.filter((tag) => currentTags.has(tag.toLowerCase())).length;
      const sameCategory = post.data.category === currentPost.data.category ? 4 : 0;

      return {
        post,
        score: sameCategory + sharedTags * 2,
      };
    })
    .sort((left, right) => {
      if (right.score !== left.score) {
        return right.score - left.score;
      }

      return compareBlogPosts(left.post, right.post);
    })
    .slice(0, count)
    .map(({ post }) => post);
};
