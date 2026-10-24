# UTB brief: evidence-rich AION 2 guide package

Use this brief when assigning an AION 2 guide to the Grok YouTube/UTB bot. A pure prose article, generic HTML preview or decorative-image bundle is not an acceptable result.

## Assignment

Research and package a publishable AION 2 guide for: **[TOPIC]**.

Target reader: **[PLAYER AND TASK]**
Region: **Global unless explicitly stated otherwise**
Required patch/client version: **[VERSION]**
Checked date: **[YYYY-MM-DD]**

The package must let an editor verify every important gameplay claim and identify the exact visual needed to explain it. Do not fill gaps with inference.

## Required research behavior

1. Define the search intent and the single task the reader must complete.
2. Prefer official/current sources; supplement them with at least three independent, relevant creator sources when the subject depends on gameplay practice.
3. For every YouTube claim, record the exact video URL and timestamp range.
4. Record region, server/client version, patch and publication date whenever available.
5. Separate confirmed facts, creator recommendations, conflicts and unknowns.
6. If the available evidence is from KR/TW while the page targets Global, label the mismatch; do not silently transfer the claim.
7. Do not download or repackage creator video or competitor images. Provide embed URLs and an editorial shot list.

## Required ZIP structure

```text
[topic-slug]/
├── README.md
├── guide.md
├── outline.md
├── claims.csv
├── sources.csv
├── video-chapters.csv
├── screenshot-shot-list.csv
├── tables/
│   └── *.csv
├── diagrams/
│   └── diagram-briefs.md
├── conflicts-and-unknowns.md
├── rights-and-attribution.md
└── preview.html
```

Do not include a `frames/` directory unless the assets are first-party captures or their right to reuse has been explicitly verified. For creator footage, the deliverable is the URL, timestamp, embed recommendation and shot description—not a downloaded frame.

## File requirements

### `README.md`

- topic and primary intent;
- target reader;
- region/version/checked date;
- what is complete;
- what remains unverified;
- publish/no-publish recommendation and reason.

### `guide.md`

Write an editorial draft with:

- direct answer/summary above the fold;
- prerequisites;
- numbered task flow;
- mechanics or decision sections;
- failure states and troubleshooting;
- reward/result section where applicable;
- FAQ based on real query or source evidence;
- internal-link suggestions;
- inline claim IDs such as `[C014]` that map to `claims.csv`;
- media slots such as `[SHOT-03]` that map to the screenshot shot list.

Do not add filler history, generic game descriptions or repeated conclusions to reach a word count.

### `claims.csv`

Columns:

```text
claim_id,claim,claim_type,source_id,url,timestamp_start,timestamp_end,region,patch,published_at,checked_at,confidence,conflict_id,notes
```

`claim_type` must distinguish official fact, observed mechanic, creator recommendation and inference. Inferences are not publishable as facts.

### `sources.csv`

Columns:

```text
source_id,title,publisher_or_creator,url,source_type,region,patch,published_at,checked_at,primary_or_secondary,reuse_note
```

### `video-chapters.csv`

Columns:

```text
source_id,url,chapter_title,timestamp_start,timestamp_end,what_it_proves,embed_recommended
```

### `screenshot-shot-list.csv`

Columns:

```text
shot_id,section,user_question,required_visual,source_id,url,timestamp,region,patch,annotation_needed,caption,alt_text,capture_owner,rights_status
```

Each shot must explain an action, UI state, route, mechanic, reward, comparison or failure state. Generic character art is not instructional media.

Aim for 6–12 meaningful visuals for a substantial guide when the evidence supports them. Do not manufacture a quota with repeated icons or decorative images.

### `tables/*.csv`

Deliver structured source data for comparisons, rewards, materials, skills, gear, timings or steps. Include units and source IDs.

### `diagrams/diagram-briefs.md`

For any rotation, route, phase flow or system relationship, describe an original diagram that the site can draw. Include nodes, arrows, labels, state changes and supporting claim IDs.

### `conflicts-and-unknowns.md`

For every unresolved item, state:

- the conflicting claims;
- sources on each side;
- likely reason, such as region or patch;
- whether the guide can publish without resolving it;
- the exact follow-up needed.

### `rights-and-attribution.md`

List every proposed visual or embed, owner/creator, source URL, intended use, attribution text and reuse status. Mark uncertain rights as `DO NOT REHOST`.

### `preview.html`

Render the draft structure for review. It may use labeled empty media slots, but it must not create AI game screenshots, fake UI, fake maps or unlicensed copied images. The preview is not a publishable final page.

## Topic-specific coverage

### Dungeon or boss guide

Must include entry/unlock, recommended preparation, route or phase order, every material mechanic, telegraph or UI evidence, failure/recovery, rewards and a concise checklist.

### Class/build guide

Must include use case, PvE/PvP scope, strengths/weaknesses, skills, Stigmas/Daevanion/Arcana where applicable, rotation, board/hotbar, gear/stat priorities, alternatives, matchups or party role, patch sensitivity and a reproducible build summary.

### Event/codes guide

Must include region, start/end/expiry in absolute dates and timezone, eligibility, active/expired state, rewards, redemption or participation steps, official source, last verification and troubleshooting.

## Rejection criteria

Reject the package if any of the following is true:

- it contains only prose;
- material claims lack URL/timestamp/region/patch metadata;
- screenshots are generic key art or unexplained thumbnails;
- competitor or creator assets are downloaded without verified permission;
- Global and KR/TW facts are blended without labels;
- conflicts are hidden;
- a tool-intent keyword is answered with prose instead of a functional product requirement;
- the bot claims the guide is publishable while its core mechanic cannot be visually or textually verified.

## Final answer format from UTB

Return one ZIP file and a short summary containing:

1. package name;
2. confirmed source count;
3. videos and exact chapters reviewed;
4. proposed meaningful visual count;
5. unresolved blockers;
6. publish/no-publish recommendation.
