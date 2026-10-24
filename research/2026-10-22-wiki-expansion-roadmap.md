# AION 2 Wiki expansion roadmap

Date: 2026-10-22
Status: research-backed implementation brief; no production changes are implied by this document.

## Decision

The current site is not ready to be treated as a finished AION 2 Wiki. It is a useful research prototype with honest source notes, but its public promise is wider than its delivered product:

- The home page is mostly a directory of similarly styled cards.
- Six guides contain roughly 115–335 words each and no instructional images.
- Most class pages contain roughly 106–140 words and no build, skill, gear, board, hotbar or rotation visuals.
- The entire built site has one non-logo editorial image, no `figure`, video or embed, and nine tables.
- The top-level navigation exposes only Home, Classes, Guides, Update Log and About, while competitor demand spans builds, tier lists, databases, maps, timers, checklists, planners, codes, events and server status.

The next release should not spread another thin visual pass across every page. It should establish one complete, evidence-bearing page model, use that model to rebuild the home page, and only then expand the information architecture.

## Evidence behind the decision

The three focused audits are the working evidence base:

1. [Competitor content inventory](./competitor-content-inventory.md) — what named competitors actually publish and operate.
2. [Keyword and SERP gap analysis](./keyword-serp-gap-analysis.md) — what Google surfaces, the intent behind it, and which pages deserve priority.
3. [Visual and editorial benchmark](./visual-editorial-benchmark.md) — what a publishable home page, guide, build, update, codes page and database page need.

The older research was not absent, but it did not become a sufficiently broad site plan. It identified keyword clusters and a few guides; the implementation then over-selected short, time-sensitive editorial pages and under-built the build/tool/database side of the product.

## What competitors prove

Competitors are building four connected products, not a single blog:

| Product layer | User job | Typical competitor implementation | Current site |
| --- | --- | --- | --- |
| Editorial | Learn a class, system, dungeon or event | Versioned long-form guides, screenshots, diagrams, video chapters, tables | Short text notes |
| Structured data | Look up a skill, item, NPC, quest or dungeon | Searchable entities, icons, drops, locations, related records | Not present |
| Utilities | Complete a repeated task | Timers, checklist, map, planner, calculator, server status | Not present |
| Community/current state | Reuse a build or know what changed | Public builds, creator/video metadata, patches, codes and events | Small update log only |

Examples from direct competitor pages:

- Aion2Builds.com exposes Builds, Tier List, Guides, Database and Tools; its tools include reset/rift timers and build planners.
- Aion2.gg reports 23,158 database entries and connects class pages to builds, skills and tools.
- DBAion2 spans items, quests, NPCs, dungeons, maps, builders, rankings, codes, checklists and calculators.
- AION2 Wiki & Tools reports 9,322 items, 1,450 monsters, 1,053 quests, 575 NPCs, 221 dungeons and 10 maps.
- QuestLog adds user-generated builds, armory data, planners, comments, videos and a DPS overlay product.

Those numbers are breadth references, not short-term targets. Copying the navigation without a maintainable data source would only create more thin pages.

## Product direction

### Target information architecture

```text
Home
├── Builds
│   ├── All classes
│   ├── PvE builds
│   ├── PvP builds
│   └── Complete class build pages
├── Tier List
├── Guides
│   ├── Beginner and progression
│   ├── Systems and currencies
│   ├── Dungeons and bosses
│   └── Events
├── Tools
│   ├── Daily and weekly reset
│   ├── Checklist
│   ├── Server status
│   └── Later: map, planner and calculator
├── Database
│   └── Launch only after a versioned, refreshable source exists
├── Codes
└── Updates
```

Do not expose an empty top-level section merely to imitate a competitor. A section launches only when its first page satisfies the corresponding user intent.

### What the home page should become

The home page should answer four questions in order:

1. What can I search or look up?
2. What matters today or this week?
3. Which task am I trying to complete: choose a class/build, progress, or clear content?
4. What is the best finished page that proves this site is useful?

Recommended structure:

1. Compact hero with site search and three task routes.
2. Today/This week strip: patch, event, code state, maintenance or reset.
3. Featured complete build and featured illustrated guide.
4. Visual class navigation using real, attributable class/weapon/skill media.
5. Latest updates as a timeline, not a grid of equal cards.
6. Editorial trust block: region, client version, checked date, sources and correction route.

Cards remain appropriate for choosing a destination. They should not wrap every paragraph, procedure, comparison, source or timeline.

## Release plan

### P0 — establish a publishable model

1. Create a shared rich-page shell:
   - breadcrumb, title, dek, region/patch/checked metadata;
   - concise answer above the fold;
   - sticky or compact table of contents;
   - full-width prose sections rather than one card per section;
   - figure/caption/source component;
   - comparison tables, callouts and an update/source ledger.
2. Publish one illustrated dungeon walkthrough as the editorial quality benchmark. Use a dungeon for which entry, mechanic, reward and failure-state visuals can be sourced and verified.
3. Publish one complete class/build cluster:
   - overview;
   - PvE and PvP variants;
   - skills/Stigmas/Daevanion choices;
   - rotation/hotbar/board;
   - gear and stat priorities;
   - patch/source ledger.
4. Add `/builds` and a versioned `/tier-list`; incomplete class notes must not masquerade as finished builds.
5. Rebuild the home page around search, current state, task paths and the two complete benchmark pages.
6. Add `/system-requirements`, `/download` and the first currency/progression cluster from official or directly verifiable sources.

### P1 — add repeat-use value

1. Daily/weekly reset display in the user's local time.
2. Maintainable checklist tied to actual reset rules.
3. Official maintenance/server-status aggregation.
4. Structured skill/Stigma data that feeds build pages.
5. Update/event pages with dates, eligibility, rewards, checklist and archive state.

### P2 — data products

Only after a stable, permitted and refreshable source exists:

1. Items, quests, NPCs, drops and recipes.
2. Interactive map with saved progress.
3. Build/Daevanion planner and crafting calculator.
4. Armory integration.

## Codes decision

`/codes` is a legitimate SERP page type and is cheap to make honestly, but it is not the site's strongest proven demand cluster:

- the saved 381 neutral Google autocomplete suggestions contained no code/coupon/redeem query;
- the saved SimilarWeb Top 100 was dominated by build/builder variants;
- a codes SERP exists, but the known Global code is expired.

Therefore Codes should be a small, actively verified utility with Active/Expired state, region, reward, expiry, source, last-checked time and redemption steps. It should not displace Builds, Tier List, progression or illustrated dungeon work.

## Media standard

“More images” is not the acceptance criterion. Every visual must help the user perform an action or understand a relationship.

Use:

- team-captured, privacy-reviewed client screenshots;
- official media only after checking the applicable use terms;
- YouTube embeds with creator, URL and timestamps instead of downloaded creator footage;
- original diagrams for rotations, routes and comparisons, with facts traced to sources;
- captions that explain what to notice.

Do not use:

- competitor CDN images or copied composite boards/hotbars;
- AI-generated game UI, maps, icons or fake screenshots;
- decorative key art as a substitute for an instructional screenshot;
- placeholders that make an unfinished guide look complete.

## Page-level release gates

No page should ship only because a keyword exists. At minimum it needs:

- one clear primary intent and a direct answer;
- region, patch/client version and last-checked date;
- the structure appropriate to the task: steps, table, checklist, diagram or working tool;
- relevant, attributable evidence media where the task is visual;
- source URLs and timestamped creator evidence for material claims;
- explicit conflicts and unknowns;
- internal links to the next user task;
- a refresh trigger for patches, codes and events.

For tool-intent queries, a prose article or a card linking to prose is not completion. The tool must work.

## Definition of the next successful release

The next release is successful when:

1. A new visitor can search or choose a task without decoding a wall of cards.
2. At least one dungeon guide can be completed by following the page and its annotated evidence.
3. At least one class build can be reproduced from the page, including skills, board/hotbar, rotation and gear priorities.
4. Every published claim declares region/version and has a source trail.
5. Thin research notes are visibly separated from complete guides/builds.
6. Automated checks reject missing image metadata, placeholders and broken internal links.
