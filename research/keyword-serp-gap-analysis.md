# AION 2 keyword, SERP and product-gap analysis

Checked: 2026-10-22
Scope: English-language `aion 2` / `aion2` demand, Google-visible result patterns, competitor page types and the local site's missing coverage.
Fresh search volume: **unknown**. This report does not convert autocomplete presence, result counts or competitor coverage into a fabricated search-volume estimate.

> **Superseded priority and baseline note:** this 2026-10-22 pass predates both the full 2026-10-23 Similarweb export and the implementation audited on 2026-10-24. Its recommendation to keep Codes at Watch/P2 is superseded by [`2026-10-23-similarweb-intent-plan.md`](./2026-10-23-similarweb-intent-plan.md), which adds direct demand evidence and promotes `/codes` to P0. All present-tense statements below about missing local pages describe the pre-implementation 2026-10-22 baseline; current route and index status is recorded in [`2026-10-24-publish-gate-audit.md`](./2026-10-24-publish-gate-audit.md).

## Executive conclusion

The current site is not close to the coverage model users and Google are already rewarding. The market is not limited to a handful of prose guides. The visible competitors provide four distinct products:

1. **Versioned editorial answers** — codes, system requirements, tier lists, class builds, dungeon mechanics, currency and event pages.
2. **Queryable game databases** — items, skills, Stigmas, NPCs, monsters, quests, recipes, drops, dungeons, titles and pets.
3. **Task tools** — interactive maps, live timers, daily/weekly checklists, crafting calculators, build planners and server-status views.
4. **Freshness surfaces** — patch notes, events, maintenance, server transfers, active/expired coupons and server population.

The site's current six guide pages and eight incomplete class research notes cover only a small part of category 1. It has no codes page, tier list, real builds hub, database, map, planner, calculator, timer, checklist or server-status product.

The most important correction to the roadmap is therefore:

> Do not treat AION 2 as a card-based article site. Treat it as a game companion whose content layer, data layer and utility layer reinforce each other.

## Method and evidence limits

- Google result pages were checked in a real signed-in Chromium session with personalization disabled in the query (`pws=0`). The browser location shown by Google was District of Columbia; rankings will vary by location and over time.
- Google Suggest was queried through Google's public suggestion endpoint for the head term, A-Z prefixes and named topic seeds.
- Competitor pages were opened and inspected for actual coverage and page/product structure.
- Result-page presence proves that Google has a result set and that publishers are competing; it does **not** prove a specific volume.
- Suggestions prove that Google exposes a query association; they do **not** provide monthly searches.
- No KD, CPC or current Similarweb volume was available in this pass, so those fields remain unknown.

Evidence entry points:

- [Google: aion 2](https://www.google.com/search?q=aion+2&num=10&pws=0)
- [Google Suggest: aion 2](https://suggestqueries.google.com/complete/search?client=firefox&q=aion%202)
- [Google Suggest: aion2](https://suggestqueries.google.com/complete/search?client=firefox&q=aion2%20)
- [Google Suggest: A-Z sample](https://suggestqueries.google.com/complete/search?client=firefox&q=aion%202%20c)

### Existing export cross-check

The repository already contains a 2026-10-09 Similarweb phrase-match Top 100 export. It is not fresh enough to present as current truth, but it strongly confirms the relative dominance of the build cluster: all 100 rows are build/builder variants. Its largest estimates are `aion 2 builds`, then class builds for Gladiator, Ranger, Spiritmaster, Sorcerer, Cleric, Templar, Assassin and Chanter. It also includes PvE/PvP, leveling, skill, Daevanion and builder/planner variants.

Those figures are third-party estimates with high zero-click shares and no usable current KD/CPC fields. This report uses the export only to rank clusters relative to one another, not as a traffic forecast. Its absence of codes/coupon/redeem reinforces the decision not to promote codes to P0.

## What Google itself exposes

### Head-term and prefix discoveries

The head-term suggestion endpoint returned:

- `aion 2 release date`
- `aion 2 classes`
- `aion 2 server transfer`
- `aion 2 steam charts`
- `aion 2 patch notes`
- `aion 2 reddit`
- `aion 2 player count`
- `aion 2 cleric build`
- `aion 2 gladiator build`
- `aion 2 builds`

The `aion2` spelling separately returned `server transfer time`, `maintenance`, `market`, `player count`, `steam charts` and `patch notes`. This means both spaced and unspaced forms must be represented in titles, copy or synonym handling; they are not interchangeable only at the branding layer.

The A-Z expansion produced multiple action-oriented clusters:

| Prefix | Representative suggestions | Product implied |
| --- | --- | --- |
| `aion 2 a` | assassin build, assassin macro, abyss points, Ariel board | Build page, macro section, system guide |
| `aion 2 b` | builds, best class, boss timer, best solo class | Build hub, tier list, live timer |
| `aion 2 c` | classes, cleric build, class tier list, cube map | Class IA, build page, ranking, map |
| `aion 2 d` | DPS meter, DPS tier list, Daevanion board, database, damage calculator | Tool/database intent |
| `aion 2 f` | Fire Temple guide, Ferocious Horn Den guide, field boss timer | Illustrated mechanics guide, timer |
| `aion 2 h` | hidden cube locations/map, Halloween keys/rewards, how to get Quna | Map, event answer, currency guide |
| `aion 2 i` | interactive map, pay to win, free to play | Tool plus explanatory content |
| `aion 2 k` | Kina/Kinah, Kina farming, Krao Cave hard mode | Currency and dungeon cluster |
| `aion 2 p` | patch notes today, player count, pet map, pet tracker | Freshness surface and tool |
| `aion 2 s` | server status, server population, transfer schedule/times, builds | Live operations and builds |
| `aion 2 t` | timers, tier list, Templar build/macro, transcendence guide | Tool, rankings, class and dungeon |
| `aion 2 w` | world boss timer, wiki, where to spend Oath Coins | Timer, database, currency lookup |

Source examples: [A](https://suggestqueries.google.com/complete/search?client=firefox&q=aion%202%20a), [C](https://suggestqueries.google.com/complete/search?client=firefox&q=aion%202%20c), [D](https://suggestqueries.google.com/complete/search?client=firefox&q=aion%202%20d), [H](https://suggestqueries.google.com/complete/search?client=firefox&q=aion%202%20h), [S](https://suggestqueries.google.com/complete/search?client=firefox&q=aion%202%20s), [T](https://suggestqueries.google.com/complete/search?client=firefox&q=aion%202%20t), [W](https://suggestqueries.google.com/complete/search?client=firefox&q=aion%202%20w).

## Priority keyword and intent map

Priority is based on the combination of Google suggestion evidence, existence and quality of a dedicated SERP, recurring usefulness and the feasibility of satisfying the intent. It is not based on invented volume.

| Priority | Cluster | Representative queries | Intent | SERP/product shape | Current-site gap | Recommended response |
| --- | --- | --- | --- | --- | --- | --- |
| Watch / P2 | Codes/coupons | codes, codes global, active codes, redeem code, gift codes, coupon code | Fresh transactional-information | Dated code trackers with active/expired tables and redeem steps | Entirely absent | Keep a low-cost sourced status page or launch it when a new official code appears; do not outrank proven build/tool work based only on a seeded suggestion |
| P0 | Class builds | builds, builds PvE/PvP, eight class builds, macros, skills | Information + decision + reference | Build hubs, planners, creator-backed class pages | Eight pages are incomplete research notes and noindex | One real hub plus mode-specific class builds with skills, Stigmas, board, gear, rotation, macros, alternatives and patch/source labels |
| P0 | Tier lists | class tier list, PvE, PvP, DPS, solo, best class | Decision/comparison | Large editorial brands, community debate, ranking tools | Absent | Separate PvE/PvP/solo tables; explain role, investment, ping and patch assumptions instead of one universal grade |
| P0 | Patch/events/live ops | patch notes today, update notes, Halloween rewards, maintenance, transfer schedule | Time-sensitive | Official notices, fast publishers, community summaries | One update log and three event/update guides | A dated news/event architecture with status, start/end time, task checklist and change history |
| P0 | Dungeons | dungeon list/guide, Fire Temple, Horn Den, Krao, Draupnir, Transcendence | Task completion | Boss mechanic pages and video guides, often with diagrams | Only Hard Mode rules; no encounter walkthroughs | Per-dungeon illustrated mechanics pages with arena diagrams, boss telegraphs, role responsibilities, wipes and rewards |
| P0 | System requirements/download | system requirements, download PC, size, Steam/PURPLE, minimum requirements | Navigation + compatibility | Official Steam page plus high-authority explainers | Absent | Official-spec comparison, download routes, size/storage, launcher choice and troubleshooting; keep specs dated |
| P0 | Currency/progression | Kina/Kinah farm, Quna, exchange, Abyss points, Oath coins, where to spend | Information + calculation | Guides and videos; several names/region traps | Absent | Currency glossary plus legitimate earn/spend routes, caps, exchange explanation and cost tables |
| P1 | Live tools | Rift timer, boss timer, server status, checklist, resets | Utility + fresh | Dedicated live tools; prose is secondary | Entirely absent | Start with reset/checklist and status aggregation; do not ship a static article pretending to be a timer |
| P1 | Interactive map | interactive map, hidden cubes, pet map, resources, mobs | Utility | Purpose-built maps with filters and saved progress | Absent | Only enter if the site can maintain coordinates, filtering, patch/version and user progress |
| P1 | Crafting | crafting guide, calculator, recipes, professions, materials | Utility + information | Calculators/database entries plus guides | Absent | Crafting overview plus recipe/material calculator; individual recipes should come from structured data |
| P1 | Skills/Stigmas/Daevanion | skills list/builder/database, Stigma guide, board planner | Lookup + tool | Structured databases and planners | A few prose observations only | Data-backed class skill pages and a planner; prose alone will not satisfy builder intent |
| P1 | Pets/Genus | pet locations, pet guide, pet list, pet map, pet system | Lookup + progression | Guides, trackers and maps | Absent | Illustrated system guide plus searchable pet table; map integration later |
| P2 | Items/quests/NPCs | item database/list, quest list/guide, NPCs, drops | Lookup | Thousands of programmatic pages and global search | Absent | Database feature, not manually authored thin pages; prioritize exact item/quest queries after data ingestion |
| P2 | Reviews/comparisons | Aion 2 vs Lost Ark/BDO/WoW/GW2, is it P2W, review | Investigation | Editorial/video results | Absent | Useful later, but weaker retention and less aligned with a companion site's core moat |

## Codes: a real SERP, but not proven high demand

When `aion 2 codes` is deliberately used as the seed, Google Suggest exposes `codes global`, `code redeem`, `code coupon`, `gift codes`, `active codes`, regional codes and character/UI codes: [source](https://suggestqueries.google.com/complete/search?client=firefox&q=aion%202%20codes). This is conditional expansion evidence, not independent proof that codes are a top query family.

More importantly, `codes`, `coupon` and `redeem` do **not** appear in the saved 381-suggestion neutral/broader autocomplete export (`research/raw/google-autocomplete-20261022.csv`) or the Similarweb phrase-match Top 100 (`research/raw/similarweb-phrase-match-top100-20261009.csv`). The currently documented Global coupon is expired. Therefore this cluster should not be labeled P0 or high volume.

The actual Google result page for [`aion 2 codes`](https://www.google.com/search?q=aion+2+codes&num=10&pws=0) nevertheless showed dedicated pages from Game8, Steam Community, TheGamer, GameRant, SkyCoach and PCGamesN, plus Reddit. This proves that a standalone SERP and competitor page format exist; it does not establish attractive demand for a new domain.

Current competitor examples:

- [Destructoid — AION 2 codes](https://www.destructoid.com/aion-2-codes/) uses a monthly freshness title, active/expired sections, reward detail and illustrated redemption steps.
- [Vi.ki — Codes and Coupons](https://aion2.vi.ki/codes-and-coupons) adds region separation, exact validity dates, free rewards that do not require a code, failure troubleshooting and primary sources.
- [Daeva Guides — Global coupons](https://daevaguides.com/en/guides/codes/) adds scam warnings and explains why KR/TW codes fail on Global.

There is an exploitable weakness if a new official code appears: pages disagree after expiry. Older pages still label `TAKEFLIGHTAION2` active while fresher pages move it to expired. A useful page must put **status, region, checked timestamp and source** beside every code and keep an archived history. The value is freshness and trust, not word count.

Minimum useful page design, if the site chooses the low-cost completeness play or a new code activates demand:

- Current status banner: active count and last checked time.
- Active table: code, region/service, reward, expiry, source.
- Expired archive with dates.
- In-game redemption route with annotated screenshots.
- “Why it failed” troubleshooting.
- Global versus KR/TW warning.
- Related live freebies: launch mail, events and Twitch Drops, clearly separated from coupon codes.

## Actual Google SERP samples

These are observed result shapes, not an exhaustive rank tracker.

### Builds

Observed on [Google](https://www.google.com/search?q=aion+2+builds&num=10&pws=0):

1. [Mobalytics — Aion 2 Class Builds](https://mobalytics.gg/gamebase/guides/aion-2-builds)
2. [AION2 Hub — Builds](https://aion2hub.com/builds)
3. [QuestLog — Character Builder](https://questlog.gg/aion-2/en/character-builder)
4. Reddit discussion
5. [Game8 — Best Builds](https://game8.co/games/Aion-2/archives/614114)
6. Mythic Store
7. [MetaRoad — Build Guides](https://metaroad.gg/aion2/build-guides)
8. [Fextralife — Builds](https://aion2.wiki.fextralife.com/Builds)

Related searches exposed `website`, `PvE`, `PvP`, `global`, `Assassin`, `Sorcerer`, `tier list` and `reddit`. Mobalytics' hub is itself fairly short, but it links into creator-attributed, per-class build pages. A new domain cannot copy the thin hub and expect the same authority; it needs deeper destinations and original evidence.

### Tier list

Observed on [Google](https://www.google.com/search?q=aion+2+tier+list&num=10&pws=0):

1. [Mobalytics PvE tier list](https://mobalytics.gg/gamebase/guides/aion-2-pve-tier-list)
2. [Game8 class tier list](https://game8.co/games/Aion-2/archives/612015)
3. [IGN class tier list](https://www.ign.com/wikis/aion-2/Class_Tier_List:_How_to_Choose_Your_Class)
4. Reddit debate
5. YouTube ranking video
6. PlayerAuctions
7. [Shugo PvP tier list](https://shugo.gg/tierlist/pvp)

Google related searches split the intent into PvP, Global, DPS, solo, class popularity and Reddit. A single “overall” list would undersatisfy the query and age badly.

### Interactive map

Observed on [Google](https://www.google.com/search?q=aion+2+interactive+map&num=10&pws=0):

1. [InteractiveMap.app](https://interactivemap.app/aion2/maps/)
2. [QuestLog map](https://questlog.gg/aion-2/en/map)
3. [Fextralife map](https://aion2.wiki.fextralife.com/Interactive_Map)
4. [TH.GL maps](https://aion2.th.gl/)
5. [A2DB map](https://a2db.ru/en/maps)
6. Reddit
7. [MetaRoad map](https://metaroad.gg/aion2/map)

Related searches ask for Hidden Cubes, Altgard, Global, pets, resources and mobs. This is unambiguously tool intent.

### System requirements

Observed on [Google](https://www.google.com/search?q=aion+2+system+requirements&num=10&pws=0):

1. [Official Steam listing](https://store.steampowered.com/app/3393110/AION_2/)
2. System Requirements Lab
3. Reddit
4. [Game8 requirements and file size](https://game8.co/games/Aion-2/archives/615453)
5. TimeSaver
6. Fextralife
7. LagZapper
8. Technical City

The official Steam page now publishes both minimum and recommended rows. Some older wiki pages still claim those values are not announced, creating a low-risk editorial opening for a current, source-dated page.

## Competitor product audit

### 1. Aion2.gg: a database and tool suite, not a blog

[Aion2.gg database](https://aion2.gg/database) states 23,158 entries and exposes:

- Items, skills, drop rates, gear families, buffs/debuffs, Theostones and classes.
- NPCs/monsters, quests, dungeons, zones, world objects, events, seasons and servers.
- Recipes, gathering, supply requests and shops.
- Titles, achievements, skins, wings, pets and 3D models.
- Item comparison, gear matrix, enhancement planner, soul-binding odds, Daevanion planner, build planner and crafting calculator.
- An interactive map.

Implication: “wiki” users expect searchable entities and cross-links, not just article cards.

### 2. DBAion2: exhaustive navigation plus calculators

[DBAion2](https://www.dbaion2.online/en/) provides items by equipment/material/consumable subtype, NPCs by faction and location, quests, crafting, dungeons, maps, skill/Stigma calculators, player builds, rankings, event schedule, promo codes, checklist, glossary, server maintenance and a farm tracker/DPS meter.

Implication: codes, events and servers are first-class navigation, not footer afterthoughts. The local site's information architecture is missing entire user jobs.

### 3. Aion2Builds.com: a focused companion model

[Aion2Builds.com](https://aion2builds.com/) combines:

- Mode-specific tier lists.
- PvE/PvP builds for every class.
- Rift/reset timers.
- Guides for leveling, Stigmas, gear score, checklists, pets, cubes and gathering.
- Skills, Stigmas, items, wings, pets and titles databases.
- Codes, stats, updates and methodology.

It also labels sample size, patch date and evidence type. This is the closest strategic competitor because it combines editorial pages with data and tools under the same topic authority.

### 4. Aion2Data: repeat-use utilities

[Aion2Data's daily and weekly checklist](https://aion2data.com/checklist) is a true application surface: it filters by player level and faction, saves ticks, handles resets and connects every activity to rewards and source fields. Its top navigation also includes items, classes, builds, Daevanion, planner, map, timers, monsters, dungeons, crafting, rankings, characters and news.

Implication: recurring visits are earned by stateful utility. A prose checklist is materially weaker.

### 5. Aion2 Atlas: map plus guides plus progress

[Aion2 Atlas](https://aion2atlas.app/map/) exposes map layers, search, saved collection progress, shareable progress, alerts, daily routes, zone pages and separate landing pages for cubes, traces, pets, bosses and gathering resources.

Implication: the map is a product family. A generic “Aion 2 map” article with a screenshot cannot compete with the actual task flow.

### 6. AION2 Guidance: visual dungeon mechanics

[AION2 Guidance dungeons](https://www.aion2guidance.com/en/dungeons/) covers Krao Cave, Draupnir, Urugugu Canyon, Vakron Sky Island, Fire Temple, Ferocious Horn Den, Deus Research Base, Shattered Arkanis and Nightmare Zikel. Listings expose boss counts, mechanic counts and arena-diagram counts.

Implication: the user's criticism about text-only guides is validated by the market. Dungeon intent needs annotated encounter visuals and sequence diagrams, not only paragraphs.

## Category-by-category decision

### Classes, builds and skills

Demand evidence is strong: every class appears in build suggestions, and `builds PvE/PvP/Global` recur. Competition is also strong. Existing local class pages that show two tooltips or one video observation do not meet the SERP's minimum useful depth.

Winning requirements:

- Global patch/version and date.
- PvE, PvP and role variant.
- Active skills, passives, Stigmas and Daevanion board.
- Gear/Arcana/stat priorities.
- Rotation and macro with conditions, not only a linear list.
- Alternatives by investment and group role.
- At least one annotated in-game UI screenshot and one compact build diagram.
- Source provenance and regional conflicts.

### Items, quests and NPCs

Generic item and quest suggestions exist, while direct generic NPC demand is weaker (`aion 2 npcs` is the main suggestion). Competitors win through structured client data, not editorial scale.

Decision: do not manually create hundreds of thin entity pages. Build/import a verified data model first, then let exact entity pages surface only when they contain acquisition, location, prerequisites, rewards and cross-links. Until then, focus editorial effort on items with a real decision or route.

### Maps

Strong tool intent and a crowded SERP. A static map guide is not a credible substitute. Only pursue after obtaining a maintainable coordinate source and implementing filters, versioning and correction flow.

### Servers, timers and status

Suggestions include server status, maintenance, server down, server population, transfer schedules, transfer times, Rift timer, boss timer and world boss timer: [server-status suggestions](https://suggestqueries.google.com/complete/search?client=firefox&q=aion%202%20server%20status).

Competitors already provide live surfaces, for example [AION 2 Global server status](https://aion2.gaming.tools/server-status) and Aion2Data timers/checklists. A useful first move is a sourced maintenance/status aggregator and local-time reset view. Population claims require a defensible data source; do not infer them from queue anecdotes.

### Download and system requirements

Suggestions cover PC, download size, PURPLE, mobile, Android, English and Global: [download suggestions](https://suggestqueries.google.com/complete/search?client=firefox&q=aion%202%20download), [requirements suggestions](https://suggestqueries.google.com/complete/search?client=firefox&q=aion%202%20system%20requirements).

This is a relatively easy editorial win because the [official Steam listing](https://store.steampowered.com/app/3393110/AION_2/) supplies current specifications. The page should distinguish official PC requirements from KR/TW/mobile claims and link only official download routes.

### Crafting and currencies

Suggestions cover crafting calculator, professions, materials, recipes, leveling, Kina/Kinah, Quna, exchange and money farm. Competitor examples include [AION2 Hub's crafting calculator](https://aion2hub.com/tools/crafting-calculator), [Vi.ki's Kina guide](https://aion2.vi.ki/kina-farming-guide) and [Mobalytics' Kina guide](https://mobalytics.gg/gamebase/guides/aion-2-kina-farming).

This should be a cluster, not one generic guide:

- Currency glossary and spend priorities.
- Kina/Kinah farming and bound/unbound distinction.
- Quna and exchange explanation.
- Abyss Points and event-token pages.
- Crafting professions and progression.
- Recipe/material calculator after structured data exists.

### Events and patch coverage

The local site has made a start, but competitors connect events to timers, checklists, rewards, currencies and archived status. Event pages should include visual reward tables, a date timeline, daily/weekly action list, expiry warnings and an archived state after the event ends.

## Where competitors are weak enough to attack

1. **Freshness contradictions:** codes and system-requirements pages become wrong quickly. A visible checked timestamp and source diff can beat larger but stale pages.
2. **Region confusion:** KR/TW and Global information is routinely mixed. Region badges and versioned source fields are a genuine differentiator.
3. **Thin authoritative hubs:** large publishers often rank a short hub because of domain authority, but their per-class coverage is uneven. A new site must win long-tail pages with substantially deeper, demonstrated answers.
4. **Video-only mechanics:** users still search for text guides, while YouTube holds much of the expertise. Turning verified footage into annotated screenshots, arena diagrams and timestamped instructions serves a real gap.
5. **Tool explanation:** databases and planners are good at “what,” weaker at “why.” Editorial explanations can connect a tool output to player decisions.
6. **Transparent uncertainty:** many sites publish universal “best” claims without patch, mode, sample or cost. Mode-specific rankings with evidence labels are more defensible.

## Recommended information architecture

The top-level navigation should eventually describe user jobs, not the site's current small inventory:

```text
Home
├── Builds
│   ├── All classes
│   ├── PvE
│   ├── PvP
│   └── Class build pages
├── Tier List
├── Database
│   ├── Skills / Stigmas
│   ├── Items / Drops
│   ├── Quests / NPCs
│   ├── Dungeons
│   ├── Pets / Titles
│   └── Recipes
├── Tools
│   ├── Timers / resets
│   ├── Daily-weekly checklist
│   ├── Server status
│   ├── Interactive map
│   ├── Build planner
│   └── Crafting calculator
├── Guides
│   ├── Beginner / progression
│   ├── Systems / currencies
│   ├── Dungeons
│   └── Events
├── Codes
└── Updates
```

Do not expose empty top-level sections merely to look complete. The architecture is a roadmap; each section should launch only when it satisfies its intent.

## Build order based on evidence and feasibility

### First release wave: clear editorial gaps

1. `/builds` plus the first two genuinely complete class builds; keep incomplete notes out of the main promise.
2. `/tier-list` — separate PvE/PvP/solo views with patch and methodology.
3. `/system-requirements` and `/download` — official PC data and official entry routes.
4. Currency/Kina/Quna guide cluster.
5. Dungeon hub plus the first illustrated encounter guide.
6. Update/event page templates with dates, visuals, checklist and archive state.
7. `/codes` only as a low-cost completeness page, or when a new official code appears; it should not delay the build/tool work above.

### Second wave: repeat-use utility

1. Local-time daily/weekly reset and checklist.
2. Official maintenance/server-status aggregation.
3. Rift and boss timers only after schedules can be maintained.
4. Structured skills/Stigmas tables feeding builds.
5. Crafting recipe/material calculator.

### Third wave: data-intensive products

1. Searchable items/quests/NPCs/drops database.
2. Interactive map with saved progress.
3. Build/Daevanion planner.
4. Character/armory integrations if a permitted and stable data source exists.

## Acceptance bar for future pages

An article should not ship merely because a keyword exists. A useful page needs:

- A primary user question and explicit intent type.
- Region, client version/patch and last-checked date.
- A clear answer above the fold.
- Original task structure: steps, table, comparison, checklist, diagram or tool.
- Relevant in-game/official imagery with source/license handling; dungeon/build pages need annotated visuals.
- Primary source or timestamped creator evidence for claims.
- Related entity/system links that help the user continue the task.
- A planned refresh trigger when a patch, code or event changes.

For tool-intent queries, the acceptance bar is the working tool. A card linking to prose is not completion.

## Bottom line

The user's skepticism was justified. Competitors are not publishing only a few guides; they are building broad companion products with tens of thousands of entities, complete class build systems, maps, timers, planners, calculators, status pages, checklists and codes trackers. The current site is missing most of the search surface.

The fastest defensible expansion is not to imitate the full databases immediately. It is to close the proven editorial gaps (full builds, tier lists, specs/download, currencies and illustrated dungeons), then add one maintainable repeat-use utility at a time. Codes should be monitored and covered cheaply rather than promoted as a demand pillar without evidence. Database and map pages should wait for a structured, refreshable data source rather than becoming thousands of thin pages.
