const APP_ID = 3393110;
const NOTICE_LIST = 'https://api-global-community.plaync.com/aion2_global/board/notice_en/article?page_size=20&direction=DESC';
const NOTICE_DETAIL = 'https://api-global-community.plaync.com/aion2_global/board/notice_en/article/';
const OFFICIAL_NOTICE_PAGE = 'https://aion2.plaync.com/en-us/board/notice/list?redirect=false';
const STEAM_PLAYERS = `https://api.steampowered.com/ISteamUserStats/GetNumberOfCurrentPlayers/v1/?appid=${APP_ID}`;
const MAINTENANCE_GRACE_MS = 2 * 60 * 60 * 1000;
const MAINTENANCE_MAX_MS = 12 * 60 * 60 * 1000;
const INCIDENT_MAX_MS = 6 * 60 * 60 * 1000;
const OVERDUE_DISPLAY_MS = 24 * 60 * 60 * 1000;
const NOTICE_COVERAGE_MS = 72 * 60 * 60 * 1000;
const NOTICE_LIST_TIMEOUT_MS = 2200;
const NOTICE_DETAIL_TIMEOUT_MS = 2500;
const AUXILIARY_TIMEOUT_MS = 3000;
const eventTerms = /maintenance|emergency server check|outage|service interruption|server issue|connection issues?|known issues?|login issue|unavailable|degraded|servers are back online|service restored/i;

export const statusRegions = [
  { id: 'nae', label: 'North America East' },
  { id: 'naw', label: 'North America West' },
  { id: 'eu', label: 'Europe' },
  { id: 'la', label: 'South America' },
  { id: 'as', label: 'Asia' },
];

const zoneOffsets = { PDT: -7, PST: -8, CEST: 2, CET: 1, UTC: 0 };
const monthIndex = new Map([
  'january','february','march','april','may','june',
  'july','august','september','october','november','december',
].map((month, index) => [month, index]));

function cleanText(value = '') {
  return String(value)
    .replace(/<br\s*\/?\s*>/gi, '\n')
    .replace(/<\/(?:div|p|li|tr|td|th|table|ul|ol)>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;|&#160;/gi, ' ')
    .replace(/&amp;/gi, '&')
    .replace(/&quot;|&#34;/gi, '"')
    .replace(/&#39;|&apos;/gi, "'")
    .replace(/\u200b|\ufeff/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function parseDate(text) {
  const match = cleanText(text).match(/(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2}),\s+(\d{4})\s+at\s+(\d{1,2})(?::|h)(\d{2})\s+(PDT|PST|CEST|CET|UTC)/i);
  if (!match) return null;
  const [, month, day, year, hour, minute, zone] = match;
  const offset = zoneOffsets[zone.toUpperCase()];
  const timestamp = Date.UTC(Number(year), monthIndex.get(month.toLowerCase()), Number(day), Number(hour) - offset, Number(minute));
  return Number.isFinite(timestamp) ? new Date(timestamp) : null;
}

function parseDuration(text) {
  const value = cleanText(text);
  const hours = value.match(/Duration\s*:?\s*(\d+(?:\.\d+)?)\s*(?:hours?|hrs?|h)\b/i);
  const minutes = value.match(/Duration\s*:?[^.]{0,80}?(\d+)\s*(?:minutes?|mins?|min)\b/i);
  if (!hours && !minutes) return null;
  return Math.round((Number(hours?.[1] || 0) * 60) + Number(minutes?.[1] || 0));
}

function affectedRegions(title, text) {
  const body = cleanText(text);
  const explicit = body.match(/Affected Regions?\s*:?\s*(.{1,120}?)(?=Affected Services|Main Update|Additional Notice|Details|Duration|$)/i)?.[1];
  const scope = cleanText(explicit || `${title} ${body}`);
  if (/\b(?:all regions|global)\b/i.test(scope)) return statusRegions.map(region => region.id);
  const found = [];
  if (/\b(?:na east|north america east|nae)\b/i.test(scope)) found.push('nae');
  if (/\b(?:na west|north america west|naw)\b/i.test(scope)) found.push('naw');
  if (/\b(?:eu|europe)\b/i.test(scope)) found.push('eu');
  if (/\b(?:south america|latin america|latam|la)\b/i.test(scope)) found.push('la');
  if (/\b(?:asia|jp|japan)\b/i.test(scope)) found.push('as');
  return [...new Set(found)];
}

function affectedServices(text) {
  const match = cleanText(text).match(/Affected Services\s*:?\s*([^:]{1,90}?)(?=Main Update|Additional Notice|Details of|$)/i);
  return match ? match[1].trim() : 'Not specified';
}

function noticeAnchor(meta, start) {
  const value = meta?.timestamps?.updatedAt || meta?.timestamps?.publishedAt || meta?.timestamps?.postedAt;
  const timestamp = value ? new Date(value) : start;
  return timestamp && Number.isFinite(timestamp.getTime()) ? timestamp : null;
}

function isNoticeCandidate(meta) {
  return eventTerms.test(`${meta?.title || ''} ${meta?.summary || ''}`);
}

export function parseOfficialNotice(meta, html, now = new Date(), { sourceQuality = 'detail' } = {}) {
  const title = cleanText(meta?.title);
  const text = cleanText(html || meta?.summary);
  const lower = `${title} ${text}`.toLowerCase();
  const completed = /\((?:maintenance\s+)?complete(?:d)?\)|\bmaintenance (?:is |has been )?(?:complete|completed|over)\b|\bservers are back online\b|\bissue (?:has been|is) resolved\b|\bservice (?:has been|is) restored\b/i.test(`${title} ${text}`);
  const cancelled = /\b(?:maintenance|incident) (?:is |has been )?cancelled\b/i.test(`${title} ${text}`);
  const isMaintenance = /maintenance|emergency server check/.test(lower) && !/patch notes/.test(title.toLowerCase());
  const isIncident = /outage|service interruption|server issue|connection issues?|login issue|unavailable|degraded|latency|character selection|disconnect(?:ed|ion)?|cannot (?:log in|connect|enter)|unable to (?:log in|connect|enter)/.test(lower) && !completed;
  if (!isMaintenance && !isIncident) return null;

  const start = parseDate(text) || parseDate(title);
  const durationMinutes = parseDuration(text);
  const end = start && durationMinutes ? new Date(start.getTime() + durationMinutes * 60_000) : null;
  const anchor = noticeAnchor(meta, start);
  let state = completed || cancelled ? 'historical' : 'stale';
  let staleReason = null;
  if (!completed && !cancelled && isMaintenance && start) {
    if (now < start) state = 'scheduled';
    else if (end && now <= end) state = 'active';
    else if (end && now <= new Date(end.getTime() + MAINTENANCE_GRACE_MS)) state = 'awaiting_confirmation';
    else if (!end && now <= new Date(start.getTime() + MAINTENANCE_MAX_MS)) state = 'active';
    else staleReason = end ? 'completion_overdue' : 'missing_end_time';
  } else if (!completed && !cancelled && isIncident) {
    const incidentStart = start || anchor;
    if (incidentStart && now < incidentStart) state = 'scheduled';
    else if (incidentStart && now.getTime() - incidentStart.getTime() <= INCIDENT_MAX_MS) state = 'active';
    else staleReason = 'incident_update_stale';
  } else if (!completed && !cancelled && isMaintenance && anchor) {
    if (now.getTime() - anchor.getTime() <= INCIDENT_MAX_MS) state = 'awaiting_confirmation';
    else staleReason = 'missing_schedule';
  }

  return {
    id: meta?.id || '',
    type: isIncident && !isMaintenance ? 'incident' : 'maintenance',
    state,
    title,
    startAt: start?.toISOString() || null,
    endAt: end?.toISOString() || null,
    durationMinutes,
    regions: affectedRegions(title, text),
    affectedServices: affectedServices(text),
    publishedAt: meta?.timestamps?.publishedAt || meta?.timestamps?.postedAt || null,
    updatedAt: meta?.timestamps?.updatedAt || null,
    sourceQuality,
    staleReason,
    url: meta?.id ? `https://aion2.plaync.com/en-us/board/notice/view?articleId=${encodeURIComponent(meta.id)}` : OFFICIAL_NOTICE_PAGE,
  };
}

async function fetchJson(url, { timeoutMs = AUXILIARY_TIMEOUT_MS, fetchImpl = globalThis.fetch } = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetchImpl(url, {
      headers: {
        accept: 'application/json',
        'user-agent': 'Aion2BuildsWiki/1.0 (+https://aion2builds.wiki/about)',
      },
      signal: controller.signal,
    });
    if (!response.ok) throw new Error(`upstream ${response.status}`);
    return await response.json();
  } finally {
    clearTimeout(timer);
  }
}

async function fetchNotices(now, fetchImpl) {
  const list = await fetchJson(NOTICE_LIST, { timeoutMs: NOTICE_LIST_TIMEOUT_MS, fetchImpl });
  if (!Array.isArray(list?.contentList)) throw new Error('notice schema changed');
  const candidates = list.contentList
    .filter(isNoticeCandidate)
    .slice(0, 10);
  const detailErrors = [];
  const details = await Promise.all(candidates.map(async meta => {
    try {
      const detail = await fetchJson(`${NOTICE_DETAIL}${encodeURIComponent(meta.id)}`, {
        timeoutMs: NOTICE_DETAIL_TIMEOUT_MS,
        fetchImpl,
      });
      const detailMeta = detail?.article?.contentMeta;
      const detailBody = detail?.article?.content?.content;
      if (!detailMeta || typeof detailBody !== 'string') throw new Error('notice detail schema changed');
      return parseOfficialNotice(detailMeta, detailBody, now);
    } catch {
      detailErrors.push(meta.id || 'unknown');
      return parseOfficialNotice(meta, meta.summary, now, { sourceQuality: 'summary_fallback' });
    }
  }));
  const published = list.contentList
    .map(item => item?.timestamps?.publishedAt || item?.timestamps?.postedAt)
    .filter(Boolean)
    .map(value => new Date(value))
    .filter(value => Number.isFinite(value.getTime()))
    .sort((a, b) => b - a);
  const hasMore = Boolean(list.hasMore);
  const windowStart = new Date(now.getTime() - NOTICE_COVERAGE_MS);
  const oldestPublished = published.at(-1) || null;
  const sufficientForClear = !hasMore || Boolean(oldestPublished && oldestPublished <= windowStart);
  return {
    notices: details.filter(Boolean),
    detailErrors,
    coverage: {
      itemCount: list.contentList.length,
      hasMore,
      newestPublishedAt: published[0]?.toISOString() || null,
      oldestPublishedAt: oldestPublished?.toISOString() || null,
      windowHours: NOTICE_COVERAGE_MS / 3_600_000,
      windowStartAt: windowStart.toISOString(),
      sufficientForClear,
      completeness: !hasMore
        ? 'full_history'
        : sufficientForClear ? 'recent_window_complete' : 'coverage_incomplete',
      clearScope: sufficientForClear
        ? hasMore ? 'latest_72_hours' : 'available_history'
        : null,
    },
  };
}

async function fetchRoster(region, fetchImpl) {
  const url = `https://aion2.plaync.com/en-us/api/gameinfo/servers?region=${region.id}&lang=en-US`;
  const data = await fetchJson(url, { timeoutMs: AUXILIARY_TIMEOUT_MS, fetchImpl });
  if (!Array.isArray(data?.serverList)) throw new Error(`roster schema changed for ${region.id}`);
  const serverIds = data.serverList.map(server => String(server.serverId || '')).filter(Boolean).sort();
  if (!serverIds.length) throw new Error(`empty roster for ${region.id}`);
  return { ...region, serverCount: data.serverList.length, source: url, signature: serverIds.join('|') };
}

function eventPriority(notice) {
  if (notice.state === 'active' && notice.type === 'incident') return 0;
  if (notice.state === 'active') return 1;
  if (notice.state === 'scheduled') return 2;
  if (notice.state === 'awaiting_confirmation') return 3;
  return 4;
}

export async function getStatusSnapshot({ now = new Date(), fetchImpl = globalThis.fetch } = {}) {
  const checkedAt = now.toISOString();
  const [noticeResult, playerResult, ...rosterResults] = await Promise.allSettled([
    fetchNotices(now, fetchImpl),
    fetchJson(STEAM_PLAYERS, { timeoutMs: AUXILIARY_TIMEOUT_MS, fetchImpl }),
    ...statusRegions.map(region => fetchRoster(region, fetchImpl)),
  ]);

  const sourceErrors = [];
  const noticeData = noticeResult.status === 'fulfilled' ? noticeResult.value : { notices: [], detailErrors: [], coverage: null };
  const notices = noticeData.notices;
  if (noticeResult.status === 'rejected') sourceErrors.push('official_notices');
  if (noticeData.detailErrors.length) sourceErrors.push('official_notice_detail');
  const actionable = notices
    .filter(notice => ['active', 'scheduled', 'awaiting_confirmation'].includes(notice.state))
    .sort((a, b) => eventPriority(a) - eventPriority(b)
      || new Date(a.startAt || a.publishedAt || 0) - new Date(b.startAt || b.publishedAt || 0));
  const currentEvents = actionable;
  const actionableCurrent = currentEvents[0] || null;
  const recentOverdue = notices
    .filter(notice => notice.state === 'stale')
    .sort((a, b) => new Date(b.endAt || b.updatedAt || b.publishedAt || 0) - new Date(a.endAt || a.updatedAt || a.publishedAt || 0))
    .find(notice => {
      const anchor = new Date(notice.endAt || notice.updatedAt || notice.publishedAt || 0).getTime();
      return Number.isFinite(anchor) && now.getTime() - anchor <= OVERDUE_DISPLAY_MS;
    }) || null;
  const current = actionableCurrent || recentOverdue;
  const latestResolved = notices
    .filter(notice => notice.state === 'historical')
    .sort((a, b) => new Date(b.updatedAt || b.publishedAt || 0) - new Date(a.updatedAt || a.publishedAt || 0))[0] || null;

  const playerCount = playerResult.status === 'fulfilled' && playerResult.value?.response?.result === 1
    ? Number(playerResult.value.response.player_count)
    : null;
  if (!Number.isFinite(playerCount)) sourceErrors.push('steam_players');

  const rawRegions = rosterResults.map((result, index) => {
    if (result.status === 'fulfilled') return result.value;
    sourceErrors.push(`roster_${statusRegions[index].id}`);
    return { ...statusRegions[index], serverCount: null, source: null, signature: null };
  });
  const signatureCounts = new Map();
  for (const region of rawRegions) if (region.signature) signatureCounts.set(region.signature, (signatureCounts.get(region.signature) || 0) + 1);
  const regions = rawRegions.map(({ signature, ...region }) => {
    if (signature && signatureCounts.get(signature) > 1) {
      sourceErrors.push(`roster_${region.id}`);
      return { ...region, serverCount: null, source: null };
    }
    return region;
  });

  let state = 'no_active_official_notice';
  let stateReason = noticeData.coverage?.clearScope === 'latest_72_hours'
    ? 'recent_window_clear'
    : 'available_history_clear';
  if (noticeResult.status === 'rejected') {
    state = 'unknown';
    stateReason = 'official_notices_unavailable';
  } else if (recentOverdue && !actionableCurrent) {
    state = 'unknown';
    stateReason = recentOverdue.staleReason || 'completion_overdue';
  } else if (actionableCurrent?.type === 'incident') {
    state = 'incident_declared';
    stateReason = 'official_incident';
  } else if (actionableCurrent) {
    state = 'maintenance_declared';
    stateReason = 'official_maintenance';
  } else if (noticeData.detailErrors.length) {
    state = 'unknown';
    stateReason = 'official_notice_detail_unavailable';
  } else if (!noticeData.coverage?.sufficientForClear) {
    state = 'unknown';
    stateReason = 'coverage_incomplete';
  }

  return {
    state,
    stateReason,
    checkedAt,
    current,
    currentEvents,
    additionalEventCount: Math.max(0, currentEvents.length - 1),
    latestResolved,
    steam: {
      playerCount: Number.isFinite(playerCount) ? playerCount : null,
      scope: 'Steam players only; PURPLE players are not included.',
      source: STEAM_PLAYERS,
    },
    regions,
    totalServers: regions.every(region => Number.isFinite(region.serverCount))
      ? regions.reduce((sum, region) => sum + region.serverCount, 0)
      : null,
    sourceErrors: [...new Set(sourceErrors)],
    noticeCoverage: noticeData.coverage,
    sources: {
      notices: OFFICIAL_NOTICE_PAGE,
      serverRoster: 'https://aion2.plaync.com/en-us/',
      steam: `https://store.steampowered.com/app/${APP_ID}/AION_2/`,
    },
    method: 'Maintenance and incidents follow official NC notices. Region counts come from NC server rosters. Steam current players are an aggregate activity signal, not a per-server health probe.',
  };
}

export const statusInternals = { cleanText, parseDate, parseDuration, affectedRegions, isNoticeCandidate };
