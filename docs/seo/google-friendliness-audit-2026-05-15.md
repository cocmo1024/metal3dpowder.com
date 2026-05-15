# Google Friendliness Audit - 2026-05-15

## Scope

This audit checked the generated Astro static site against practical Google Search requirements: crawlability, indexability, metadata, canonical URLs, sitemap quality, internal links, structured data, mobile-friendly rendering basics, and lightweight performance risk.

## Google References Used

- SEO Starter Guide: https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- Helpful, reliable, people-first content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Title links: https://developers.google.com/search/docs/appearance/title-link
- Core Web Vitals: https://developers.google.com/search/docs/appearance/core-web-vitals
- Mobile-first indexing: https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing

## Generated-Site Checks

- Built pages checked: 303 HTML pages.
- Indexable pages checked: 124.
- Sitemap URLs checked: 124.
- `npm run build`: passed with 0 errors and 0 warnings.
- Canonical checks: all generated indexable URLs have matching canonical URLs.
- Sitemap checks: no noindex pages in sitemap; no indexable pages missing from sitemap.
- Internal link checks: no broken internal HTML links found in generated pages.
- Metadata checks: no missing titles, descriptions, robots meta tags, or canonical tags found.
- Heading checks: indexable pages have one H1.
- Image checks: no missing `alt` attributes or missing image assets found.
- JSON-LD checks: all JSON-LD parsed successfully.
- Archive handling: tag and paginated archive pages remain noindex/follow and excluded from sitemap.

## Optimizations Applied

- Updated article page title generation so long article titles are not forced to append the site brand. This reduces Google title-link truncation and avoids boilerplate-heavy titles.
- Shortened several overlong article titles while preserving material, powder, process, and application intent.
- Shortened overlong meta descriptions on `/blog/`, `/materials/`, and selected article pages.
- Kept article URLs unchanged under `/posts/Alloys/` for migration and backlink continuity.
- Kept visible article H1s aligned with revised article titles.

## Performance And Mobile Notes

- Local preview homepage returned 200 and loaded with 2 CSS files plus lightweight SVG product assets.
- Local preview article page returned 200 and loaded HTML plus 2 CSS files, with no page-level blocking JavaScript.
- Built CSS assets are small: largest CSS file is about 11.8 KB.
- Average generated HTML file is about 15.2 KB; largest generated HTML file is about 26.8 KB.
- The site uses responsive layouts and keeps the same content/metadata in the generated HTML for mobile and desktop.

## Current Result

The generated-site audit now reports 0 technical SEO issues and 0 metadata-length warnings under the local audit thresholds used in this check.

## Remaining Operational Watch Item

Google Search Console previously showed both `www` and apex host variants. The codebase uses apex canonicals, but host-level redirects should still be verified in the deployment layer after any DNS or Cloudflare changes.
