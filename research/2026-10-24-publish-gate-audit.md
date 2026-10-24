# AION 2 existing-page publish gate audit — 2026-10-24

## Decision

This audit covers the site's 31 content routes. It judges whether each page completes a user task, not whether a keyword has reported volume or whether the page reaches an arbitrary word count.

- **`keep/index` — 15 pages:** the current page gives a direct, useful answer. Listed gaps are maintenance or enrichment work, not blockers.
- **`rebuild/noindex` — 15 pages:** the route represents a real task, but the current page does not meet that task's minimum content or tool requirement.
- **`remove/redirect` — 1 page:** the route adds no distinct answer beyond navigation already available elsewhere.
- `/404` should remain available and `noindex`; it is not counted as a content route.

The route contract is enforced in `src/p0-data.mjs`: all 15 `keep/index` routes and all 15 `rebuild/noindex` routes are listed explicitly, including every class detail page. The build and check scripts fail when a content route is missing from the contract, when its canonical does not exactly match its route, or when sitemap and robots state disagree.

Four dated pages also fail closed at build time. They remain indexable only through their current `indexUntil` value, after which the generated page becomes `noindex` and leaves the sitemap until a human verifies and refreshes it:

| Route | Current `indexUntil` | Refresh responsibility |
| --- | --- | --- |
| `/codes` | `2026-11-01T00:00:00Z` | Recheck active and expired Global coupons at least weekly. |
| `/guides/server-transfer` | `2026-10-28T06:30:00Z` | Confirm the launch-server transfer window has closed, then archive or replace the task. |
| `/guides/halloween-event` | `2026-11-04T23:00:00Z` | Confirm the event has ended and remove or archive time-sensitive instructions. |
| `/guides/launch-rewards` | `2026-12-09T07:30:00Z` | Confirm final mail expiry, then archive or noindex the claim workflow. |

Similarweb data was used to discover intent families only. Its global, multilingual and related-keyword rows contain pollution, and near-duplicate volumes must not be added together. No decision below is justified by volume alone.

## Core hubs and utilities

| Route | Decision | Query and user task | Minimum publish gate / current gap |
| --- | --- | --- | --- |
| `/` | `keep/index` | Brand/home navigation; reach the right task quickly | Keep the direct Download, PC Specs, Status, Codes, Builds, Classes, Guides and Updates paths. The next improvement is to feature genuinely complete benchmark content and a visible freshness signal, not more cards. |
| `/builds` | `rebuild/noindex` | `aion 2 builds`, class/PvE/PvP builds; reproduce a usable setup | Publish at least two complete, reproducible builds with mode and Global patch, skills, Stigmas, Daevanion, stats/gear, rotation or hotbar, macro limits, test conditions, evidence visuals, sources and changelog. A research coverage ledger is not a build hub. |
| `/classes` | `rebuild/noindex` | `aion 2 classes`, best class, class comparison; choose a class | Add an eight-class decision matrix covering official role, weapon, difficulty, playstyle and solo/group/PvE/PvP fit, plus links to usable class content. Research maturity must not be presented as class strength. |
| `/tier-list` | `rebuild/noindex` | Tier list, PvE/PvP/solo, best class; compare classes by mode | Keep noindex until there are separate Global-patch rankings for PvE group, solo/new player and PvP modes; explain every placement, comparable evidence and scoring, show relevant visuals, and support a `needs review` state after patches. |
| `/codes` | `keep/index` | Codes, coupons, redeem code; learn whether a valid Global code exists and redeem it | The page now gives the zero-active result, an expired record with reward and dates, the source trail and official redemption path. Keep the check date current; noindex immediately if freshness cannot be maintained. |
| `/status` | `keep/index` | Server status, maintenance today, is the game down; know whether login should work now | The rebuilt page now reads official NC maintenance and incident notices, converts the window to local time, shows all five official roster counts and labels Steam activity separately. Preserve fail-closed expiry logic and never imply per-server online state from the roster. |
| `/download` | `keep/index` | Download, Steam, PURPLE; install safely from an official source | Keep official deep links, launcher comparison, steps and platform/storage boundaries. Add the exact official account-linking path and error-specific Support links; never host installers. |
| `/system-requirements` | `keep/index` | System requirements, PC specs, size; decide whether a PC can run the game | Keep the sourced minimum/recommended table, FHD setting conditions, SSD/storage note and check date. Add a simple component-comparison checklist and specification change log; do not promise an FPS result. |
| `/resources` | `remove/redirect` | Generic resources navigation | Redirect to `/`, whose task strip already exposes Codes, Status, Download and PC Specs. If retained for product navigation, it should be noindex and rebuilt as a real, verified resource directory rather than four link cards. |
| `/updates` | `keep/index` | Update, patch notes, maintenance, update log; understand the latest changes and impact | The Oct 24/25 EU maintenance and Oct 23/24 account-restriction notices are now summarized with direct first-party links. Keep adding current notices, affected-guide backlinks, archive state and change history. |

## Class routes

All eight routes should remain `noindex` until a player can reproduce a mode-specific setup from the page.

| Route | Decision | Query and user task | Minimum publish gate / current gap |
| --- | --- | --- | --- |
| `/classes/assassin` | `rebuild/noindex` | Assassin build, macro, PvP; execute an opener and full setup | Replace two tooltips with PvE/PvP builds, opener and back-attack/Insignia conditions, skills, Stigmas, board, stats/gear, manual-skill limits, test evidence and screenshots. |
| `/classes/chanter` | `rebuild/noindex` | Chanter support/DPS build; choose party utility versus damage | Validate regional claims on Global, then provide support/DPS variants, Mantras and buffs, level breakpoints, rotation/procs, skills/Stigmas/board, gear/stats, visuals and changelog. |
| `/classes/cleric` | `rebuild/noindex` | Cleric healer/DPS/solo build; configure healing or damage | Replace the ambiguous seven-skill list with healer, DPS and solo variants, cleanse/survival duties, Stigma swaps, board, stats/gear, group responsibilities and skills that must stay manual. |
| `/classes/gladiator` | `rebuild/noindex` | Gladiator PvE/PvP build; reproduce a melee setup | Add mode-specific builds, complete single-target/AoE loops, skills/Stigmas/board, stats/gear and comparable boss or training-dummy evidence with visuals. |
| `/classes/ranger` | `rebuild/noindex` | Ranger build/macro/PvP; run a distance- and ping-aware sequence | Expand the three-skill opener into a full loop with movement/range, multi-hit, manual versus macro decisions, Stigmas/board, stats/gear and alternatives for mode and latency. |
| `/classes/sorcerer` | `rebuild/noindex` | Sorcerer build/macro/DPS; manage burst and resources | Turn one unexplained damage-share sample into reproducible tests and PvE/PvP variants with resource/burst loop, skills/Stigmas/board, stats/gear and manual-versus-macro guidance. |
| `/classes/spiritmaster` | `rebuild/noindex` | Spiritmaster/Elementalist/Summoner build; find the correct Global class setup | First verify the Global name and client mapping, then document summon/DoT/burst roles, PvE/PvP variants, Stigmas/board, stats/gear, rotation and real client evidence. |
| `/classes/templar` | `rebuild/noindex` | Templar tank/DPS/PvP build; hold threat and survive mechanics | Add threat, pull and mitigation guidance, tank/DPS/PvP variants, boss responsibilities, skills/Stigmas/board, stats/gear and explicit manual handling for movement/control skills. |

## Guides

| Route | Decision | Query and user task | Minimum publish gate / current gap |
| --- | --- | --- | --- |
| `/guides` | `keep/index` | Aion 2 guides; find the right task guide | The categorized library is useful navigation. Add current/expired/needs-review badges, patch/check dates and filters as the library grows; indexability of the hub must not mask weak detail pages. |
| `/guides/ariel-daevanion` | `rebuild/noindex` | Ariel board, fragments, best route; obtain and spend points correctly | Fragment conversion alone is insufficient. Require the Global board image, nodes and costs, goal/class routes, alternatives, reset/error cost, version and source trail. |
| `/guides/beginner-guide` | `rebuild/noindex` | Beginner guide/tips; make early-game decisions in the right order | Add an ordered first-session route, irreversible choices, progression/gear/currency checklist, verified unlock levels, real UI images and common failure recovery. Remove or verify the current `not confirmed` core steps. |
| `/guides/expedition-hard-mode` | `rebuild/noindex` | Krao Cave/Draupnir Hard Mode; clear the dungeon | Entry rules and rewards are not a walkthrough. Require boss phases, telegraphs, positioning and role duties, wipe causes, timeline, annotated arena/mechanic visuals, rewards, patch and sources. |
| `/guides/halloween-event` | `keep/index` | Halloween, Candy Keys, Pumpkin Coins, rewards; finish the live event | Steps, limits, reward table, merchant and expiry currently complete the task. Add an active/ended badge, local deadline/checklist and event UI evidence; archive or noindex promptly after the event ends. |
| `/guides/launch-rewards` | `keep/index` | Launch rewards, wishlist/pre-registration items; claim before expiry | Eligibility, mail deadline and reward inventory are sufficient. Add a short claim checklist, account/character/server scope and mail/chest visual; archive or noindex after the claim window. |
| `/guides/server-transfer` | `keep/index` | Server transfer, cost, times, requirements; decide and prepare a move | Dates, windows, cost and preparation checklist currently satisfy the task. Add a prominent open/closed state, local-time conversion, current server phase, non-transferable items and automatic archive behavior after the window closes. |
| `/guides/twitch-drops` | `rebuild/noindex` | Twitch Drops, rewards, end date, account linking; qualify and claim | Linking instructions alone miss the current campaign task. Require active/ended state, start/end, watch requirement, rewards, eligibility/delivery, official source and last check, followed by linking and troubleshooting. |

The single images on several guide pages are explicitly captioned as promotional scenes rather than UI, route or mechanic evidence. They do not satisfy the visual evidence gate for board, build or dungeon tasks.

## Brand and trust routes

These pages have narrow tasks; they do not need artificial length.

| Route | Decision | Query and user task | Minimum publish gate / current gap |
| --- | --- | --- | --- |
| `/about` | `keep/index` | Brand/about/methodology; judge editorial trust | Existing independence, evidence and correction policy is useful. Add editorial ownership, refresh expectations and media-use policy when available. |
| `/contact` | `keep/index` | Contact/correction; report an error or reach official support | The repository issue route and NC Support boundary complete the task. An issue template with page/source fields would improve submissions. |
| `/privacy` | `keep/index` | Privacy; understand data collection | The page now distinguishes static content from the small read-only status endpoint, states that the endpoint accepts no user input, and discloses local storage, host logs and Google Fonts. Update before adding analytics, ads, accounts or forms. |
| `/terms` | `keep/index` | Terms; understand usage boundaries | Current terms complete the simple task. Add an effective date and any needed licensing or jurisdiction detail as operations evolve. |
| `/disclaimer` | `keep/index` | Disclaimer; understand affiliation and ownership | Current non-affiliation, trademark and patch-risk statements are adequate. Link a fuller media/source policy when one exists. |

## Release order

1. Keep `noindex` on Builds, Classes, Tier List and the four thin guides until they cross their task-specific publication gates.
2. Produce one complete, reproducible class build and one illustrated dungeon walkthrough as the quality benchmarks.
3. Rebuild the Classes comparison and add a second complete build before indexing `/builds`.
4. Publish Tier List only after comparable Global evidence exists across all eight classes.
5. Maintain freshness and archive rules for Codes, Updates and every event/reward/transfer page before expanding route count.
