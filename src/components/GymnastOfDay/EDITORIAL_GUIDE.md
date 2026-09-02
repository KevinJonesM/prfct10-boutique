# Gymnast of the Day editorial guide

Data version: `2.0.0`. Daily timezone: `America/New_York`. A mission contains five gymnasts and permits ten total answer attempts.

## Publication gate

No source, no relationship, no publication. `review.publishable` can be true only when every factual claim has a primary source, both locales are reviewed, media commercial rights are cleared, three valid distractor IDs are present, and the technical relationship is classified without inference.

Use `NO_DOCUMENTED_RELATION` when a story concerns a competitive moment rather than an eponymous element. Never pair a gymnast with an element simply because she performs the same apparatus.

## Sources and media

Each source stores its direct URL, title, publisher, access date, type, and the exact fields it supports. Wikipedia may aid discovery but cannot be a final source. Unknown media rights means `PENDING`.

The MVP uses a generic, non-identifying SVG figure and no athlete photographs. Its dated originality declaration is stored in `public/images/play/GYMNAST_OF_DAY_ORIGINALITY.md`. Before adding a photo or derived silhouette, record creator, original source, license, commercial-use permission, evidence path, and bilingual neutral alt text.

## Catalog and rotation

The master registry contains stable IDs `GYM-001` through `GYM-100`. Batch 01 is researched and cleared; batches 02–10 remain staging records and cannot enter production. Selection is deterministic by New York date and only sees validated publishable records.

