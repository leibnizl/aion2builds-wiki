# Research evidence

This directory preserves the publishable reports used for the 2026-10-22 and 2026-10-23 content-expansion research. Raw third-party exports and generated keyword tables stay local and gitignored; the public repository keeps the decisions and reproducible parser without redistributing the source dataset.

## Reports

- `2026-10-23-similarweb-intent-plan.md` — current synthesis: 70,770 unique keywords, page/product decisions, information architecture, publication waves and media/tool contracts.
- `2026-10-23-intent-builds-classes.md` — 18 representative SERPs across classes, builds, tier lists, skills, planners and macro safety.
- `2026-10-23-intent-tools-liveops.md` — 16 representative SERPs across status, maintenance, timers, codes, access, maps, meters and troubleshooting.
- `2026-10-23-intent-guides-entities.md` — 20 representative SERPs across visual guides, dungeons, tasks, items, pets, presets, cosmetics and maps.
- `2026-10-22-wiki-expansion-roadmap.md` — synthesis and staged implementation plan for turning the prototype into a usable Wiki/companion product.
- `competitor-content-inventory.md` — named competitor inventory across editorial, database, tools and community layers.
- `keyword-serp-gap-analysis.md` — Google/SERP intent map, product gaps and evidence-based build order.
- `visual-editorial-benchmark.md` — visual/content benchmarks and minimum release contracts for each page type.
- `2026-10-22-content-opportunity.md` — demand, intent, competition and operating implications.
- `2026-10-22-competitor-audit.md` — concrete result formats and the evidence bar derived from them.
- Local-only `data/keywords/serp-opportunity-progress.md` — query-by-query action ledger used during research.

## Raw files (local only)

- `research/raw/` is intentionally gitignored in this public repository. It contains evidence snapshots used to reproduce the reports without publishing third-party exports.
- `aion-2-similarweb-keywords-2026-10-23.md` — full 3ue/Similarweb Keyword Generator export: 79,740 rows across phrase match, questions, related and popular tabs; Google Worldwide, 2026-09-22 through 2026-10-19.
- `google-trends-aion2-7d-*` and `google-trends-aion2-30d-*` — direct Google Trends CSV downloads, Worldwide, collected 2026-10-22.
- `google-autocomplete-20261022.csv` / `.json` — 29 suggestion requests and 381 unique returned phrases, collected 2026-10-22.
- `similarweb-phrase-match-top100-20261009.csv` — earlier Similarweb phrase-match export; deliberately labelled stale because the fresh 3ue route displayed a human-verification challenge.
- `google-serp-top5-20261011.csv` — earlier exact Google top-five observations, retained for comparison.
- `google-trends-rising-clustered-20261011.csv` — earlier clustered trend export.
- `steam-news-aion2-20261022.json` — official Steam News API response for app 3393110, including NC's Oct 20/21 patch and Trick or Treat notice.

## Generated keyword data (local only)

- `../scripts/analyze-similarweb-keywords.mjs` parses the full Markdown export, normalizes duplicates, assigns every keyword to an intent/action cluster, and preserves uncertain terms for manual review.
- `../data/` is intentionally gitignored because its tables are derived directly from the local export.
- `../data/keywords/similarweb-2026-10-23/all-classified.csv` contains all 70,770 normalized unique keywords.
- `../data/keywords/similarweb-2026-10-23/summary.json` records exact source counts, action counts and cluster summaries.
- `../data/keywords/similarweb-2026-10-23/top-actionable.csv` and `top-questions.csv` provide review queues; `clusters/` contains per-cluster slices.
- `../data/keywords/serp-opportunity-progress.md` is the canonical decision and research-batch ledger.

## UTB / Grok deliverable

- `grok/UTB_IMAGE_RICH_GUIDE_BRIEF.md` is the required evidence-rich package contract for future UTB assignments.
- The original downloaded archive and its extracted copy remain local and gitignored. They were incomplete research inputs, not publishable guides.
- UTB independently confirmed the official Hard Mode and Ariel facts. Its YouTube transcript retrieval was rate-limited, so the Gladiator and Cleric files intentionally contain unknowns rather than a publishable build. Those incomplete recommendations were not promoted into the site.

## Interpretation guardrails

- Trends indices are relative, not monthly searches.
- Autocomplete is suggestion evidence, not a volume measurement.
- Similarweb values are estimates and cannot predict attainable traffic.
- Search result order changes by time, location and personalization.
- Creator advice must be tagged by date, region and version before it is promoted into an indexed build page.
