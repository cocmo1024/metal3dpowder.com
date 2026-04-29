# Google Search Console Performance Audit

Source: `metal3dpowder.com-Performance-on-Search-2026-04-29.xlsx`

Date range: past 3 months

## Readout

- Total visible query rows: 115.
- Total visible page rows: 10.
- Most impressions still land on the homepage, not article pages.
- The site is already being tested by Google for broad powder procurement searches, but average positions are mostly page 6 to page 9.
- Current stage: indexing and topical authority building, not CTR polishing.

## Highest-Signal Queries

- `metal powders for 3d printing`: 117 impressions, average position 73.21.
- `3d printing powder`: 65 impressions, average position 80.57.
- `additive manufacturing powder suppliers`: 63 impressions, average position 79.14.
- `metal powder for 3d printing`: 44 impressions, average position 71.18.
- `3d printing metal powder manufacturer`: 25 impressions, 1 click, average position 80.64.
- `steel metal powder for 3d printing`: 20 impressions, average position 59.25.
- `titanium powder for 3d printing`: 17 impressions, average position 62.00.
- `3d printing metal powder price`: 7 impressions, average position 68.14.

## Issues

- The homepage title did not match the strongest visible query cluster closely enough.
- There was no strong pillar article for the exact broad search intent: metal powder for 3D printing.
- Price/cost intent was visible but had no dedicated educational article.
- Supplier/manufacturer intent exists in the data, but content should remain product-focused and avoid generic supplier marketing.
- Steel powder queries deserve a consolidated page connecting 316L, 17-4PH, H13, and M300.
- `www` and non-`www` URLs both appear in GSC. Canonicals point to the non-`www` domain, but the deployment/domain layer should still enforce a host-level 301 redirect from `www` to apex.

## Actions Taken

- Updated homepage SEO title and description to align with the visible top query cluster.
- Added a broad 3D printing metal powder pillar guide.
- Added an AM powder supplier selection guide focused on product and application fit.
- Added a metal powder price/cost guide.
- Added a steel metal powder for 3D printing guide.
- Connected the new articles to Knowledge, Materials, and internal recommendation logic.

## Next Data-Driven Round

- Build narrower article pages for titanium powder for 3D printing, nickel powder for 3D printing, aluminum powder for additive manufacturing, and 3D printing metal powder price by alloy family.
- Monitor whether impressions begin moving from homepage-only to article and hub pages.
- If the same broad queries remain stuck below position 50 after indexing, strengthen the relevant hub pages rather than creating more near-duplicate articles.

