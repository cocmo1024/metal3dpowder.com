import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://metal3dpowder.com',
  integrations: [sitemap()],
  compressHTML: true,
  trailingSlash: 'always',
});
