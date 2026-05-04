# SEO Technical Audit - 2026-05-04

## Scope

The audit covered crawlability, URL structure, canonical signals, sitemap output, robots policy, structured data, internal links, archive handling, and content-depth risk across the Astro static build.

## Findings Fixed

- Basic pages used mixed-case URLs: `/FAQ/`, `/Contact/`, and `/Terms/`. The site now uses lowercase canonical routes: `/faq/`, `/contact/`, and `/terms/`.
- Legacy mixed-case basic-page URLs now have 301 redirect rules in `public/_redirects` so old links do not become dead links.
- The generated sitemap had no `lastmod` values. Sitemap output now assigns article-level `lastmod` from `updatedDate` or `pubDate`, and uses the latest content date for hub/archive pages.
- Homepage product structured data used product objects directly in an `ItemList`. It now uses `ListItem` entries with nested `Product` data.

## Findings Kept Intentionally

- Article URLs remain under `/posts/Alloys/` because the legacy article URL structure is intentionally preserved for migration and backlink continuity.
- Tag archive pages remain `noindex,follow` and are excluded from the sitemap. They support users and internal discovery without competing with primary article, material, process, and application pages.
- Short application articles were not mechanically inflated. Some pages are concise, but content expansion should be done only where it improves search intent satisfaction and technical usefulness.

## Post-Fix Checks

- `npm run build` passes.
- Static output has 295 HTML pages.
- Indexed sitemap entries contain `lastmod`.
- No broken internal links were found in generated HTML.
- No non-legacy uppercase URLs remain in generated HTML.

## Next Content Risk To Address

Several older application articles are under 400 words. That is not automatically an SEO defect, but the highest-value ones should be expanded when they target real buyer intent. Priority expansion candidates:

- `cocrmo-powder-pump-sleeves-and-valve-seat-wear-hardware`
- `m300-powder-core-inserts-and-compact-production-tooling`
- `in625-powder-corrosion-heavy-hot-side-hardware`
- `h13-powder-die-casting-inserts`
- `cucrzr-powder-induction-coils-and-current-carrying-parts`
- `in718-powder-hot-side-structural-housings-and-casings`
- `ti64-powder-satellite-brackets-and-propulsion-support-hardware`
- `h13-powder-injection-molding-conformal-cooling-production-tools`

