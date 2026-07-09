# Search-To-Inquiry Optimization - 2026-07-09

## Goal

Improve the path from long-tail organic traffic to qualified powder inquiries without creating duplicate pages, changing existing URLs, or weakening the site as a technical powder knowledge base.

## Inventory Snapshot

- Current content base: 114 Markdown articles in `src/content/blog`.
- Core public entry paths remain homepage, material hubs, application hubs, process hubs, article pages, blog listing, and contact page.
- Article pages already include summary, article body, topic paths, tags, adjacent articles, related articles, canonical metadata, BlogPosting schema, and breadcrumb schema.
- Content hub pages already group relevant powder pages and articles by material, application, or process intent.
- The main gap was not crawlability; it was the conversion bridge from technical reading to an actionable RFQ.

## Optimization Applied

- Added a reusable `RfqCta` component with compact powder-specific RFQ guidance.
- Inserted the RFQ CTA after every article body and before topic paths, tags, pagination, and related articles.
- Inserted the RFQ CTA at the end of each content hub page so high-intent material, application, and process visitors have a clear inquiry route.
- Added ContactPage and Organization structured data to the contact page, including the official sales email and worldwide service scope.
- Updated the handoff file so future work starts from the current article count and conversion-path state.

## SEO Rationale

- The CTA is specific to powder specification work, not generic marketing copy.
- The wording asks for alloy grade, process route, particle size, chemistry/document needs, quantity, destination, and timing, which matches real buyer intent.
- The component improves inquiry routing on existing high-value pages instead of adding thin pages.
- Internal navigation is preserved: topic paths, tags, previous/next, related articles, and contact links all remain available.

## Next Watch Items

- Review Google Search Console pages with impressions but low conversion path engagement.
- Continue adding articles only after checking existing intent overlap.
- Prioritize pages that combine material, process, application, and specification terms likely to generate RFQs.
