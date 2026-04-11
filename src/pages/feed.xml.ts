import { getCollection } from 'astro:content';
import { getBlogPostPath, sortBlogPosts } from '../data/blog';
import { siteInfo } from '../data/site';

const xmlEscape = (value: string) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');

export async function GET({ site }: { site: URL | undefined }) {
  const base = site ?? new URL('https://metal3dpowder.com');
  const posts = sortBlogPosts(await getCollection('blog'));
  const latestBuildDate = posts[0]?.data.updatedDate ?? posts[0]?.data.pubDate ?? new Date();

  const items = posts
    .map((post) => {
      const url = new URL(getBlogPostPath(post), base).toString();
      const pubDate = post.data.pubDate.toUTCString();

      return `<item>
  <title>${xmlEscape(post.data.title)}</title>
  <link>${url}</link>
  <guid>${url}</guid>
  <description>${xmlEscape(post.data.description)}</description>
  <pubDate>${pubDate}</pubDate>
</item>`;
    })
    .join('\n');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
  <title>${xmlEscape(`${siteInfo.brand} Blog`)}</title>
  <link>${base.toString()}</link>
  <description>${xmlEscape('Technical articles on metal powders, additive manufacturing, and powder buying considerations.')}</description>
  <language>en-us</language>
  <lastBuildDate>${latestBuildDate.toUTCString()}</lastBuildDate>
  <atom:link href="${new URL('/feed.xml', base).toString()}" rel="self" type="application/rss+xml" />
${items}
</channel>
</rss>`;

  return new Response(rss, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
    },
  });
}
