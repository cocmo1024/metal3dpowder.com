import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdirSync, readFileSync } from 'node:fs';
import { basename, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const siteUrl = 'https://metal3dpowder.com';

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

export default defineConfig({
  site: siteUrl,
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/blog/tags/') && !page.includes('/blog/page/'),
      serialize: (item) => {
        const pathname = new URL(item.url).pathname;
        const verifiedLastmod = blogLastmodByPath.get(pathname);

        if (verifiedLastmod) {
          item.lastmod = verifiedLastmod;
        }

        return item;
      },
    }),
  ],
  compressHTML: true,
  trailingSlash: 'always',
  vite: {
    resolve: {
      alias: {
        picomatch: fileURLToPath(new URL('./scripts/picomatch-esm.mjs', import.meta.url)),
      },
    },
    build: {
      assetsInlineLimit: (filePath) => (filePath.endsWith('.js') ? false : undefined),
      rollupOptions: {
        output: {
          assetFileNames: '_astro/[hash][extname]',
        },
      },
    },
  },
});
