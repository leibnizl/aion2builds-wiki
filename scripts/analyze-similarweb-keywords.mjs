import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const [sourcePath, outputRoot] = process.argv.slice(2);

if (!sourcePath || !outputRoot) {
  console.error('Usage: node scripts/analyze-similarweb-keywords.mjs <source.md> <output-dir>');
  process.exit(1);
}

const sectionNames = new Map([
  ['语句匹配', 'phrase_match'],
  ['相关关键词', 'related'],
  ['热门关键词', 'popular'],
  ['问题查询', 'questions'],
]);

const parseNumber = (value) => {
  const cleaned = String(value ?? '').replaceAll(',', '').replaceAll('%', '').trim();
  if (!cleaned || cleaned === '-') return null;
  const number = Number(cleaned);
  return Number.isFinite(number) ? number : null;
};

const cleanCell = (value) => value.trim().replaceAll('\\|', '|');

const parseRow = (line, section) => {
  if (!line.startsWith('|') || /^\|\s*:?-{3,}/.test(line)) return null;
  const cells = line.slice(1, line.endsWith('|') ? -1 : undefined).split(/(?<!\\)\|/).map(cleanCell);
  if (cells[0] === '关键词' || cells.length < 11) return null;

  return {
    keyword: cells[0],
    volume28d: parseNumber(cells[1]),
    averageVolume: parseNumber(cells[2]),
    change: cells[3],
    clicks: parseNumber(cells[4]),
    cpc: parseNumber(cells[5]),
    zeroClickRate: parseNumber(cells[6]),
    difficulty: parseNumber(cells[7]),
    suppliedIntent: cells[8] === '-' ? '' : cells[8],
    leadingSite: cells[9] === '-' ? '' : cells[9],
    yearlyTrend: cells[10] === '-' ? '' : cells[10],
    section,
  };
};

const normalizeKeyword = (keyword) => keyword
  .normalize('NFKC')
  .toLowerCase()
  .replace(/[’‘]/g, "'")
  .replace(/[‐‑‒–—]/g, '-')
  .replace(/\s+/g, ' ')
  .trim();

const containsNonLatinScript = (keyword) => /[\p{Script=Han}\p{Script=Hiragana}\p{Script=Katakana}\p{Script=Hangul}\p{Script=Cyrillic}\p{Script=Arabic}\p{Script=Thai}]/u.test(keyword);

const likelyNonEnglishLatin = (keyword) => {
  const phrase = ` ${keyword} `;
  return /\b(?:como|cuándo|cuando|dónde|donde|mejor|mejores|clase|clases|guía|guia|requisitos|servidor|servidores|fecha de|cómo|cuál|cual|warum|welche|welcher|wann|wie|wo|beste|besten|klasse|klassen|anfänger|rechner|quelle|guida|migliore|quando|dove|requisiti|classe|classi|prezzo|jogar|melhor|melhores|servidor|requisitos|preço|gratis|gratuito|quelle|prix|jouer|classement|meilleure|meilleur|serveur|configuration)\b/u.test(phrase);
};

const matches = (keyword, pattern) => pattern.test(keyword);

const classify = (row) => {
  const { keyword, leadingSite = '' } = row;
  if (containsNonLatinScript(keyword) || likelyNonEnglishLatin(keyword)) {
    return { cluster: 'non_english', action: 'skip_language', intent: 'non-English or unclear-language query' };
  }

  const hasAion2Token = /\baion\s*2\b|\baion2\b/.test(keyword);
  if (!hasAion2Token) {
    return {
      cluster: 'unrelated_or_ambiguous_related',
      action: 'verify_or_skip',
      intent: 'related-tab suggestion without an explicit AION 2 token',
    };
  }

  if (/^(?:aion\s*2|aion2)$/.test(keyword)) {
    return { cluster: 'brand_core', action: 'homepage_and_primary_hubs', intent: 'reach or understand AION 2' };
  }

  if (matches(keyword, /\b(?:hack|cheats?|dupe|exploit|bots?|private server|nude|porn|boobs|crack|torrent|gold buy|buy kinah|kinah buy|g2g|for sale|account sale|sell account|boosting service|rmt)\b/)) {
    return { cluster: 'unsafe_marketplace', action: 'skip', intent: 'exploit, modification, automation or marketplace intent' };
  }

  if (matches(keyword, /\b(?:steam charts?|steamcharts|steamdb)\b/)) {
    return { cluster: 'liveops_servers_codes', action: 'tool_or_freshness_page', intent: 'current state, schedule, maintenance, codes or events' };
  }

  if (matches(keyword, /\b(?:release(?: date| time)?|come out|launch|early access|playtest|beta|global|steam|download|install|system requirements?|requirements|specs?|pc requirements?|mobile|android|ios|ps5|xbox|geforce now|controller support|price|subscription|membership|free to play|is aion 2 free|f2p|pay to win|p2w|founder'?s? packs?|purple|netherlands|belgium|europe|region lock|platforms?)\b/)) {
    return { cluster: 'access_release_platform', action: 'new_or_enrich_access_hub', intent: 'availability, access, platform, compatibility or price' };
  }

  if (matches(keyword, /\b(?:server status|server population|server maintenance|maintenance today|maintenance|patch notes?|update log|news|servers?|server transfer|world boss timer|boss timer|timers?|reset timer|daily reset|weekly reset|player count|codes?|coupon codes?|coupons?|redeem|twitch drops?|events?|festival|halloween|pre register|newsletter|countdown)\b/)) {
    return { cluster: 'liveops_servers_codes', action: 'tool_or_freshness_page', intent: 'current state, schedule, maintenance, codes or events' };
  }

  if (matches(keyword, /\b(?:tier ?list|best class(?:es)?|best class in|all classes|classes|class|gladiator|cleric|chanter|templar|ranger|assassin|sorcerer|spiritmaster|brawler|luminist|painter|builds?|pve build|pvp build|leveling build)\b/)) {
    return { cluster: 'classes_builds_tier', action: 'build_hub_or_class_cluster', intent: 'choose, compare or reproduce a class build' };
  }

  if (matches(keyword, /\b(?:skills?|stigma|daevanion|arcana|rotation|hotbar|skill chain|skill tree|passive|macro|macros|combo|combos|stat priority|stats?|manastone|enchantment)\b/)) {
    return { cluster: 'skills_build_systems', action: 'enrich_build_or_system_page', intent: 'configure skills, progression boards or combat sequence' };
  }

  if (matches(keyword, /\b(?:dungeons?|expedition|raid|boss|world boss|hard mode|fire temple|draupnir|kromede|steel rake|adma|theobomos|crucible|dimensional invasion|philosopher'?s stone)\b/)) {
    return { cluster: 'dungeons_bosses', action: 'illustrated_walkthrough', intent: 'enter, prepare for or clear group content' };
  }

  if (matches(keyword, /\b(?:map|maps|interactive map|location|locations|locati0n|where to find|where is|hidden cube|hidden cubes|cube locations?|rift|rifts|spacetime rift|space time rift|route|coordinates?|spawn|teleport|verteron|altgard)\b/)) {
    return { cluster: 'maps_locations_rifts', action: 'map_or_location_index', intent: 'find a place, route, spawn or scheduled location' };
  }

  if (matches(keyword, /\b(?:kinah|kina|currency|quna|gold|farm|farming|leveling|level up|max level|level cap|progression|combat power|gear|old gear|equipment|weapon|armor|armour|craft|crafting|recipe|material|refining stone|splendid ruby|splendent ruby|empyrean trace|essence extraction|morph|morphing|item|items|drop|drops|quest|quests|daily|weekly|abyss points?|ap farm|runes?|soul crystal|soul binding|odyle|energy system|enhance stone|amplify stone|transfer stone|storage|auto loot|trading)\b/)) {
    return { cluster: 'progression_items_economy', action: 'guide_or_structured_entity', intent: 'progress, earn, craft, upgrade or dispose of an item' };
  }

  if (matches(keyword, /\b(?:character creation|character creator|character presets?|presets?|appearance|skins?|style shop|costume|cosmetics?|outfits?|customization|pets?|pet transform|genus insight|mounts?|wings?|wallpaper|characters?)\b/)) {
    return { cluster: 'characters_cosmetics_pets', action: 'visual_gallery_or_entity_hub', intent: 'customize, collect or inspect a character or companion' };
  }

  if (matches(keyword, /\b(?:elyos|asmodian|factions?|races?|elyos or asmodian|asmodian vs elyos)\b/)) {
    return { cluster: 'factions_world_lore', action: 'comparison_or_world_guide', intent: 'choose a faction or understand world differences' };
  }

  if (matches(keyword, /\b(?:reddit|discord|twitter|twitch|youtube|community|forum|newsletter|official site)\b/)) {
    return { cluster: 'community_navigation', action: 'resource_link_or_skip', intent: 'reach a community or official resource' };
  }

  if (matches(keyword, /\b(?:questlog|aion2hub|aion2index|notmeter|not meter|damage meter|dps meter|steamdb|wiki|database|codex|planner|builder|calculator|index)\b/)) {
    return { cluster: 'tools_competitors_navigation', action: 'tool_requirement_or_skip_brand', intent: 'reach a named tool, database, meter or competing site' };
  }

  if (matches(keyword, /\b(?:mods?|addons?|support|mouse sensitivity|best settings|graphics settings|settings|stutter(?:ing)?|crash(?:ing|es)?|check ping|ping|show fps|fps|dlss|launcher|controller|mac|console|screenshot folder|performance|lag|error|black screen|ui)\b/)) {
    return { cluster: 'technical_troubleshooting', action: 'support_hub_or_official_link', intent: 'install, configure, optimize or troubleshoot the client' };
  }

  if (matches(keyword, /\b(?:official website|website|ncsoft|plaync|developer)\b/)) {
    return { cluster: 'official_navigation', action: 'resource_link_or_skip', intent: 'reach the official publisher or game website' };
  }

  if (matches(keyword, /\b(?:pvp|abyss|strongholds?|conquest|incursion|flight power|leaderboards?|rankings?|party size|marriage system|market|marketplace)\b/)) {
    return { cluster: 'game_modes_world_systems', action: 'system_guide_or_data_page', intent: 'understand a game mode, social system or competitive system' };
  }

  if (matches(keyword, /\b(?:guide|guides|beginner|tips?|how to|what is|review|reviews|gameplay)\b/)) {
    return { cluster: 'generic_guides_reviews', action: 'hub_or_enrich_existing', intent: 'broad learning or evaluation' };
  }

  if (/(?:game8\.co|aion2\.wiki\.fextralife\.com|aion2maps\.com|interactivemap\.app|shugo\.gg|questlog\.gg)/.test(leadingSite)) {
    return { cluster: 'entity_quest_lookup', action: 'structured_entity_or_quest_page', intent: 'look up a named item, title, NPC, quest or objective' };
  }

  return { cluster: 'other_verify', action: 'verify_first', intent: 'unclassified entity or task' };
};

const csvEscape = (value) => {
  const string = value == null ? '' : String(value);
  return /[",\n]/.test(string) ? `"${string.replaceAll('"', '""')}"` : string;
};

const toCsv = (rows, columns) => [
  columns.map(({ label }) => csvEscape(label)).join(','),
  ...rows.map((row) => columns.map(({ key }) => csvEscape(row[key])).join(',')),
].join('\n') + '\n';

const sourceText = await readFile(sourcePath, 'utf8');
const sourceLines = sourceText.split(/\r?\n/);
let currentSection = '';
const parsedRows = [];

for (const line of sourceLines) {
  const heading = line.match(/^##\s+(.+?)\s*$/);
  if (heading) currentSection = sectionNames.get(heading[1]) ?? '';
  if (!currentSection) continue;
  const row = parseRow(line, currentSection);
  if (row) parsedRows.push(row);
}

const deduplicated = new Map();
for (const row of parsedRows) {
  const normalized = normalizeKeyword(row.keyword);
  const current = deduplicated.get(normalized);
  if (!current) {
    deduplicated.set(normalized, {
      ...row,
      keyword: normalized,
      sections: new Set([row.section]),
      occurrences: 1,
    });
    continue;
  }

  current.sections.add(row.section);
  current.occurrences += 1;
  const currentVolume = current.volume28d ?? -1;
  const candidateVolume = row.volume28d ?? -1;
  if (candidateVolume > currentVolume) {
    const { sections, occurrences } = current;
    Object.assign(current, row, { keyword: normalized, sections, occurrences });
  }
}

const classifiedRows = [...deduplicated.values()].map((row) => {
  const classification = classify(row);
  return {
    ...row,
    ...classification,
    sections: [...row.sections].sort().join(';'),
  };
}).sort((a, b) => (b.volume28d ?? -1) - (a.volume28d ?? -1) || (b.clicks ?? -1) - (a.clicks ?? -1) || a.keyword.localeCompare(b.keyword));

const clusterMap = new Map();
for (const row of classifiedRows) {
  const rows = clusterMap.get(row.cluster) ?? [];
  rows.push(row);
  clusterMap.set(row.cluster, rows);
}

const countBy = (rows, key) => Object.fromEntries(
  [...rows.reduce((counts, row) => {
    const value = row[key] || '(blank)';
    counts.set(value, (counts.get(value) ?? 0) + 1);
    return counts;
  }, new Map()).entries()].sort((a, b) => b[1] - a[1]),
);

const quantile = (values, fraction) => {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.min(sorted.length - 1, Math.floor((sorted.length - 1) * fraction))];
};

const clusterSummaries = [...clusterMap.entries()].map(([cluster, rows]) => {
  const positiveVolumes = rows.map((row) => row.volume28d).filter((value) => value != null && value > 0);
  const zeroClickRates = rows.map((row) => row.zeroClickRate).filter((value) => value != null);
  const difficulties = rows.map((row) => row.difficulty).filter((value) => value != null);
  return {
    cluster,
    keywords: rows.length,
    questionKeywords: rows.filter((row) => row.sections.includes('questions')).length,
    positiveVolumeKeywords: positiveVolumes.length,
    rawVolumeSumNonAdditive: positiveVolumes.reduce((sum, value) => sum + value, 0),
    maxVolume28d: positiveVolumes.length ? Math.max(...positiveVolumes) : null,
    medianPositiveVolume28d: quantile(positiveVolumes, 0.5),
    medianZeroClickRate: quantile(zeroClickRates, 0.5),
    medianDifficulty: quantile(difficulties, 0.5),
    topKeywords: rows.slice(0, 12).map((row) => ({ keyword: row.keyword, volume28d: row.volume28d, clicks: row.clicks })),
    action: rows[0]?.action ?? '',
    intent: rows[0]?.intent ?? '',
  };
}).sort((a, b) => b.rawVolumeSumNonAdditive - a.rawVolumeSumNonAdditive);

const columns = [
  { key: 'keyword', label: 'keyword' },
  { key: 'volume28d', label: 'volume_28d' },
  { key: 'averageVolume', label: 'average_volume' },
  { key: 'clicks', label: 'clicks' },
  { key: 'cpc', label: 'cpc' },
  { key: 'zeroClickRate', label: 'zero_click_rate' },
  { key: 'difficulty', label: 'difficulty' },
  { key: 'suppliedIntent', label: 'supplied_intent' },
  { key: 'leadingSite', label: 'leading_site' },
  { key: 'sections', label: 'source_sections' },
  { key: 'occurrences', label: 'source_occurrences' },
  { key: 'cluster', label: 'cluster' },
  { key: 'intent', label: 'interpreted_intent' },
  { key: 'action', label: 'recommended_action' },
];

await mkdir(outputRoot, { recursive: true });
await mkdir(path.join(outputRoot, 'clusters'), { recursive: true });

await writeFile(path.join(outputRoot, 'all-classified.csv'), toCsv(classifiedRows, columns));
const excludedFromQuestionQueue = new Set([
  'brand_core',
  'community_navigation',
  'non_english',
  'official_navigation',
  'unrelated_or_ambiguous_related',
  'unsafe_marketplace',
]);
await writeFile(
  path.join(outputRoot, 'top-questions.csv'),
  toCsv(classifiedRows.filter((row) => row.sections.includes('questions') && !excludedFromQuestionQueue.has(row.cluster)).slice(0, 2000), columns),
);
const excludedFromActionable = new Set([
  'brand_core',
  'community_navigation',
  'non_english',
  'official_navigation',
  'other_verify',
  'unrelated_or_ambiguous_related',
  'unsafe_marketplace',
]);
await writeFile(
  path.join(outputRoot, 'top-actionable.csv'),
  toCsv(classifiedRows.filter((row) => !excludedFromActionable.has(row.cluster)).slice(0, 5000), columns),
);
await writeFile(path.join(outputRoot, 'summary.json'), JSON.stringify({
  sourcePath,
  sourceRows: parsedRows.length,
  uniqueKeywords: classifiedRows.length,
  duplicateSectionOccurrences: parsedRows.length - classifiedRows.length,
  sourceSectionRows: countBy(parsedRows, 'section'),
  actionCounts: countBy(classifiedRows, 'action'),
  clusterSummaries,
}, null, 2) + '\n');

for (const [cluster, rows] of clusterMap) {
  const topRows = rows.slice(0, 500);
  const questionRows = rows.filter((row) => row.sections.includes('questions')).slice(0, 250);
  const combined = [...topRows];
  const seen = new Set(combined.map((row) => row.keyword));
  for (const row of questionRows) {
    if (!seen.has(row.keyword)) combined.push(row);
  }
  await writeFile(path.join(outputRoot, 'clusters', `${cluster}.csv`), toCsv(combined, columns));
}

console.log(JSON.stringify({
  sourceRows: parsedRows.length,
  uniqueKeywords: classifiedRows.length,
  duplicateSectionOccurrences: parsedRows.length - classifiedRows.length,
  clusters: clusterSummaries.map(({ cluster, keywords, positiveVolumeKeywords, maxVolume28d }) => ({
    cluster,
    keywords,
    positiveVolumeKeywords,
    maxVolume28d,
  })),
}, null, 2));
