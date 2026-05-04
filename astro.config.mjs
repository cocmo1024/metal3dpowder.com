import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';
import { basename, join } from 'node:path';

const siteUrl = 'https://metal3dpowder.com';
const staticPageLastmod = new Date('2026-04-11T00:00:00.000Z');

const getFrontmatterDate = (frontmatter, key) => {
  const match = frontmatter.match(new RegExp(`^${key}:\\s*"?([^"\\r\\n]+)"?`, 'm'));
  return match ? new Date(match[1].trim()) : null;
};

const loadBlogLastmodMap = () => {
  const contentDir = join(process.cwd(), 'src', 'content', 'blog');
  const entries = readdirSync(contentDir).filter((file) => file.endsWith('.md'));
  const dates = new Map();

  entries.forEach((file) => {
    const raw = readFileSync(join(contentDir, file), 'utf8');
    const frontmatter = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/)?.[1] ?? '';
    const date = getFrontmatterDate(frontmatter, 'updatedDate') ?? getFrontmatterDate(frontmatter, 'pubDate');

    if (date && !Number.isNaN(date.valueOf())) {
      dates.set(`/posts/Alloys/${basename(file, '.md')}/`, date);
    }
  });

  return dates;
};

const blogLastmodByPath = loadBlogLastmodMap();
const latestContentLastmod = new Date(Math.max(...blogLastmodByPath.values()));

const getPageLastmod = (pathname) => {
  if (blogLastmodByPath.has(pathname)) {
    return blogLastmodByPath.get(pathname);
  }

  if (
    pathname === '/' ||
    pathname.startsWith('/blog/') ||
    pathname.startsWith('/materials/') ||
    pathname.startsWith('/applications/') ||
    pathname.startsWith('/processes/') ||
    pathname.startsWith('/knowledge/') ||
    pathname.startsWith('/comparisons/')
  ) {
    return latestContentLastmod;
  }

  return staticPageLastmod;
};

export default defineConfig({
  site: siteUrl,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/blog/tags/'),
      serialize: (item) => {
        const pathname = new URL(item.url).pathname;
        item.lastmod = getPageLastmod(pathname);
        return item;
      },
    }),
  ],
  compressHTML: true,
  trailingSlash: 'always',
});
