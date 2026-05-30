# Internal Link Inventory - 2026-05-23

Purpose: tighten internal linking without rewriting content or changing existing article URLs.

## Baseline

- Build output before this pass: 310 static pages.
- Current article inventory: 94 blog articles under `/posts/Alloys/{slug}/`.
- Initial hub coverage gap: 10 recent application/case pages were not assigned to any material, application, or process hub.
- Initial article-to-hub gap: detail hubs existed, but article pages did not link back to their matching hubs. This left most hub detail pages with only about one non-global inlink.

## Actions

- Expanded existing material hubs for titanium, stainless steel, nickel alloy, copper alloy, and aluminum powder.
- Expanded existing application hubs for aerospace, tooling, and energy/propulsion.
- Added two focused application hubs:
  - `/applications/uav-and-sensor-payloads/`
  - `/applications/industrial-automation-robotics/`
- Added article-level Topic Paths links that point each article back to its relevant material, application, and process centers.
- Added helper functions in `contentHubs.ts` so article templates can resolve hub paths from the central hub data.

## After-build Audit

Command: `npm run build`

- Result: 0 Astro errors, 0 warnings, 0 hints.
- Static pages generated: 312.
- Sitemap entries: 129.
- Blog articles: 94.
- Article pages with Topic Paths: 94.
- Articles not assigned to any hub: 0.
- Broken internal link pairs in built HTML: 0.
- Basic HTML SEO issues checked in built HTML: 0 missing titles, descriptions, canonical links, or H1s.

## Link Graph Notes

- Detail hubs now receive article backlinks from their own articles, not only from top-level navigation or landing pages.
- Stronger hub inlink counts after optimization:
  - `/processes/lpbf/`: 17 inlinks.
  - `/materials/titanium-powder/`: 15 inlinks.
  - `/materials/stainless-steel-powder/`: 15 inlinks.
  - `/materials/nickel-alloy-powder/`: 14 inlinks.
  - `/materials/copper-alloy-powder/`: 13 inlinks.
  - `/applications/aerospace-space/`: 11 inlinks.
  - `/applications/energy-and-propulsion/`: 10 inlinks.
  - `/applications/tooling-and-mold-inserts/`: 10 inlinks.

## Google-Friendly Rationale

The implementation uses crawlable `<a href>` links with descriptive anchor text and keeps canonical URLs unchanged. This follows Google Search Central guidance that pages should be reachable through crawlable links and that anchor text should describe the linked page.
