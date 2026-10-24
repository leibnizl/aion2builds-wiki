import test from 'node:test';
import assert from 'node:assert/strict';
import { createStatusHandler } from '../api/status.mjs';
import { createPreviewHandler } from './preview.mjs';
import { getStatusSnapshot, parseOfficialNotice, statusInternals } from '../src/status-service.mjs';

function jsonResponse(value, status = 200) {
  return new Response(JSON.stringify(value), {
    status,
    headers: { 'content-type': 'application/json' },
  });
}

function createUpstreamFetch({ notices = [], details = {}, hasMore = false } = {}) {
  const regionBases = { nae: 1100, naw: 1200, eu: 1300, la: 1400, as: 1500 };
  return async function upstreamFetch(input) {
    const url = new URL(String(input));
    if (url.hostname === 'api-global-community.plaync.com' && url.pathname.endsWith('/article')) {
      return jsonResponse({ contentList: notices, hasMore });
    }
    if (url.hostname === 'api-global-community.plaync.com' && url.pathname.includes('/article/')) {
      const id = url.pathname.split('/').at(-1);
      const detail = details[id];
      if (!detail) return jsonResponse({ error: 'missing fixture' }, 404);
      if (detail.raw) return jsonResponse(detail.raw);
      return jsonResponse({ article: { contentMeta: detail.meta, content: { content: detail.body } } });
    }
    if (url.hostname === 'api.steampowered.com') {
      return jsonResponse({ response: { result: 1, player_count: 123456 } });
    }
    if (url.hostname === 'aion2.plaync.com' && url.pathname.endsWith('/api/gameinfo/servers')) {
      const region = url.searchParams.get('region');
      const base = regionBases[region];
      return jsonResponse({ serverList: [{ serverId: base + 1, serverName: `${region}-one` }] });
    }
    throw new Error(`Unexpected test URL: ${url}`);
  };
}

function createNodeResponse() {
  return {
    headers: new Map(),
    statusCode: 200,
    body: null,
    setHeader(name, value) { this.headers.set(name.toLowerCase(), value); },
    writeHead(value, headers = {}) {
      this.statusCode = value;
      for (const [name, headerValue] of Object.entries(headers)) this.setHeader(name, headerValue);
      return this;
    },
    status(value) { this.statusCode = value; return this; },
    json(value) { this.body = value; return this; },
    end(value = '') { this.body = value; return this; },
  };
}

test('parses the current EU maintenance window into UTC', () => {
  const meta = {
    id: 'abc123',
    title: '[Notice] Temporary Maintenance (EU) | Oct 24 PDT / Oct 25 CEST',
    timestamps: { publishedAt: '2026-10-24T00:00:00.001Z' },
  };
  const body = `Details: When: October 24, 2026 at 17:30 PDT / October 25, 2026 at 2:30 CEST
    Duration: 2 hours 30 minutes Affected Services: Game Servers Main Update Details:`;
  const result = parseOfficialNotice(meta, body, new Date('2026-10-24T14:00:00Z'));
  assert.equal(result.state, 'scheduled');
  assert.equal(result.startAt, '2026-10-25T00:30:00.000Z');
  assert.equal(result.endAt, '2026-10-25T03:00:00.000Z');
  assert.equal(result.durationMinutes, 150);
  assert.deepEqual(result.regions, ['eu']);
  assert.equal(result.affectedServices, 'Game Servers');
});

test('does not turn a completed notice into an active incident', () => {
  const result = parseOfficialNotice(
    { id: 'done', title: '[Notice] Maintenance (Completed)' },
    'When: October 20, 2026 at 23:30 PDT Duration: 4 hours Affected Services: Game servers',
    new Date('2026-10-21T08:00:00Z'),
  );
  assert.equal(result.state, 'historical');
});

test('strips upstream HTML before parsing or returning text fields', () => {
  assert.equal(statusInternals.cleanText('<div>Duration:&nbsp;<b>2 hours</b></div>'), 'Duration: 2 hours');
});

test('expires an unconfirmed maintenance after a bounded grace window', () => {
  const result = parseOfficialNotice(
    { id: 'old', title: '[Notice] Maintenance (EU)', timestamps: { updatedAt: '2026-10-25T03:00:00Z' } },
    'When: October 25, 2026 at 2:30 CEST Duration: 2 hours 30 minutes Affected Services: Game Servers',
    new Date('2026-10-25T06:00:01Z'),
  );
  assert.equal(result.state, 'stale');
  assert.equal(result.staleReason, 'completion_overdue');
});

test('does not keep a maintenance with no duration active forever', () => {
  const result = parseOfficialNotice(
    { id: 'open-ended', title: '[Notice] Emergency Maintenance', timestamps: { publishedAt: '2026-10-01T00:00:00Z' } },
    'When: October 1, 2026 at 00:30 UTC Affected Services: Game Servers',
    new Date('2026-10-24T00:00:00Z'),
  );
  assert.equal(result.state, 'stale');
  assert.equal(result.staleReason, 'missing_end_time');
});

test('does not keep an undated incident active after its update is stale', () => {
  const result = parseOfficialNotice(
    { id: 'issue', title: '[Notice] Server Issue', timestamps: { updatedAt: '2026-10-01T00:00:00Z' } },
    'Some game servers are unavailable.',
    new Date('2026-10-24T00:00:00Z'),
  );
  assert.equal(result.state, 'stale');
  assert.equal(result.staleReason, 'incident_update_stale');
});

test('collects every explicitly named region from the title', () => {
  const result = parseOfficialNotice(
    { id: 'multi', title: '[Notice] Maintenance (EU / NA East)' },
    'When: October 25, 2026 at 00:30 UTC Duration: 2 hours Affected Services: Game Servers',
    new Date('2026-10-24T00:00:00Z'),
  );
  assert.deepEqual(result.regions, ['nae', 'eu']);
});

test('candidate classifier includes server and login issue wording', () => {
  assert.equal(statusInternals.isNoticeCandidate({ title: '[Notice] Server Issue' }), true);
  assert.equal(statusInternals.isNoticeCandidate({ title: '[Notice] Login Issue' }), true);
  assert.equal(statusInternals.isNoticeCandidate({ title: '[Notice] Known Issues' }), true);
  assert.equal(statusInternals.isNoticeCandidate({ title: '[Notice] Connection Issues' }), true);
  assert.equal(statusInternals.isNoticeCandidate({ title: '[Notice] Emergency Server Check' }), true);
  assert.equal(statusInternals.isNoticeCandidate({ title: '[Notice] Store Sale' }), false);
});

test('classifies current known connection issues as an incident', () => {
  const result = parseOfficialNotice(
    { id: 'known', title: '[Notice] Known Connection Issues', timestamps: { publishedAt: '2026-10-25T00:30:00Z' } },
    'Some players are experiencing connection issues while logging in.',
    new Date('2026-10-25T01:00:00Z'),
  );
  assert.equal(result.type, 'incident');
  assert.equal(result.state, 'active');
  assert.deepEqual(result.regions, []);
});

test('does not turn a generic known-issues post into a service incident', () => {
  const result = parseOfficialNotice(
    { id: 'known-ui', title: '[Notice] Known Issues', timestamps: { publishedAt: '2026-10-25T00:30:00Z' } },
    'The map pin label can overlap another interface element.',
    new Date('2026-10-25T01:00:00Z'),
  );
  assert.equal(result, null);
});

test('classifies a known issue with service-impact wording as an incident', () => {
  const result = parseOfficialNotice(
    { id: 'known-server', title: '[Notice] Known Issues and Server Transfer Details', timestamps: { publishedAt: '2026-10-25T00:30:00Z' } },
    'Known issue on the NA West server Nezekan affecting character selection and causing high latency.',
    new Date('2026-10-25T01:00:00Z'),
  );
  assert.equal(result.type, 'incident');
  assert.equal(result.state, 'active');
  assert.deepEqual(result.regions, ['naw']);
});

test('classifies an emergency server check as maintenance', () => {
  const result = parseOfficialNotice(
    { id: 'check', title: '[Notice] Emergency Server Check' },
    'When: October 25, 2026 at 02:00 UTC Duration: 1 hour Affected Services: Game Servers',
    new Date('2026-10-25T01:00:00Z'),
  );
  assert.equal(result.type, 'maintenance');
  assert.equal(result.state, 'scheduled');
});

test('marks summary fallback quality explicitly', () => {
  const result = parseOfficialNotice(
    { id: 'fallback', title: '[Notice] Maintenance', timestamps: { publishedAt: '2026-10-24T00:00:00Z' } },
    'When: October 24, 2026 at 23:30 UTC',
    new Date('2026-10-24T01:00:00Z'),
    { sourceQuality: 'summary_fallback' },
  );
  assert.equal(result.sourceQuality, 'summary_fallback');
});

test('does not invent an affected service when the notice omits it', () => {
  const result = parseOfficialNotice(
    { id: 'login', title: '[Notice] Login Issue', timestamps: { publishedAt: '2026-10-25T00:00:00Z' } },
    'Some players are unable to log in.',
    new Date('2026-10-25T01:00:00Z'),
  );
  assert.equal(result.affectedServices, 'Not specified');
});

test('fails closed when the first notice page does not cover the latest 72 hours', async (t) => {
  t.mock.method(globalThis, 'fetch', async () => {
    throw new Error('real network is forbidden in tests');
  });
  const now = new Date('2026-10-25T12:00:00Z');
  const notices = [
    { id: 'new', title: 'Account Restrictions', timestamps: { publishedAt: '2026-10-25T11:00:00Z' } },
    { id: 'old', title: 'Launch Rewards', timestamps: { publishedAt: '2026-10-25T09:00:00Z' } },
  ];
  const snapshot = await getStatusSnapshot({
    now,
    fetchImpl: createUpstreamFetch({ notices, hasMore: true }),
  });

  assert.equal(snapshot.state, 'unknown');
  assert.equal(snapshot.stateReason, 'coverage_incomplete');
  assert.equal(snapshot.noticeCoverage.completeness, 'coverage_incomplete');
  assert.equal(snapshot.noticeCoverage.sufficientForClear, false);
  assert.equal(snapshot.noticeCoverage.windowHours, 72);
});

test('marks summary fallback when a notice detail response has an unexpected schema', async (t) => {
  t.mock.method(globalThis, 'fetch', async () => {
    throw new Error('real network is forbidden in tests');
  });
  const now = new Date('2026-10-25T12:00:00Z');
  const notice = {
    id: 'broken-detail',
    title: '[Notice] Known Issues',
    summary: 'Some players are experiencing connection issues.',
    timestamps: { publishedAt: '2026-10-25T11:00:00Z' },
  };
  const snapshot = await getStatusSnapshot({
    now,
    fetchImpl: createUpstreamFetch({
      notices: [notice],
      details: { 'broken-detail': { raw: { article: {} } } },
    }),
  });

  assert.equal(snapshot.state, 'incident_declared');
  assert.equal(snapshot.current.sourceQuality, 'summary_fallback');
  assert.ok(snapshot.sourceErrors.includes('official_notice_detail'));
});

test('allows a recent-window clear when the first page spans at least 72 hours', async (t) => {
  t.mock.method(globalThis, 'fetch', async () => {
    throw new Error('real network is forbidden in tests');
  });
  const now = new Date('2026-10-25T12:00:00Z');
  const notices = [
    { id: 'new', title: 'Account Restrictions', timestamps: { publishedAt: '2026-10-25T11:00:00Z' } },
    { id: 'old', title: 'Launch Rewards', timestamps: { publishedAt: '2026-10-21T00:00:00Z' } },
  ];
  const snapshot = await getStatusSnapshot({
    now,
    fetchImpl: createUpstreamFetch({ notices, hasMore: true }),
  });

  assert.equal(snapshot.state, 'no_active_official_notice');
  assert.equal(snapshot.stateReason, 'recent_window_clear');
  assert.equal(snapshot.noticeCoverage.completeness, 'recent_window_complete');
  assert.equal(snapshot.noticeCoverage.sufficientForClear, true);
});

test('returns all current events in incident-first priority order', async (t) => {
  t.mock.method(globalThis, 'fetch', async () => {
    throw new Error('real network is forbidden in tests');
  });
  const now = new Date('2026-10-25T01:00:00Z');
  const maintenance = {
    id: 'maintenance',
    title: '[Notice] Maintenance (EU)',
    summary: 'Maintenance notice',
    timestamps: { publishedAt: '2026-10-24T20:00:00Z' },
  };
  const incident = {
    id: 'incident',
    title: '[Notice] Server Issue (NA East)',
    summary: 'Some servers are unavailable.',
    timestamps: { publishedAt: '2026-10-25T00:30:00Z' },
  };
  const scheduled = {
    id: 'scheduled',
    title: '[Notice] Maintenance (NA West)',
    summary: 'Maintenance notice',
    timestamps: { publishedAt: '2026-10-25T00:40:00Z' },
  };
  const awaiting = {
    id: 'awaiting',
    title: '[Notice] Maintenance (Asia)',
    summary: 'Maintenance notice',
    timestamps: { publishedAt: '2026-10-24T22:00:00Z' },
  };
  const snapshot = await getStatusSnapshot({
    now,
    fetchImpl: createUpstreamFetch({
      notices: [maintenance, incident, scheduled, awaiting],
      details: {
        maintenance: {
          meta: maintenance,
          body: 'When: October 25, 2026 at 00:00 UTC Duration: 2 hours Affected Services: Game Servers',
        },
        incident: { meta: incident, body: 'Some game servers are unavailable.' },
        scheduled: {
          meta: scheduled,
          body: 'When: October 25, 2026 at 03:00 UTC Duration: 1 hour Affected Services: Game Servers',
        },
        awaiting: {
          meta: awaiting,
          body: 'When: October 24, 2026 at 23:00 UTC Duration: 1 hour Affected Services: Game Servers',
        },
      },
    }),
  });

  assert.equal(snapshot.state, 'incident_declared');
  assert.deepEqual(snapshot.currentEvents.map(event => event.id), ['incident', 'maintenance', 'scheduled', 'awaiting']);
  assert.equal(snapshot.current.id, 'incident');
  assert.equal(snapshot.additionalEventCount, 3);
});

test('uses short caching only for healthy status snapshots', async () => {
  const cases = [
    {
      snapshot: { state: 'maintenance_declared', sourceErrors: [] },
      expected: 'public, max-age=0, s-maxage=60, stale-while-revalidate=60',
    },
    {
      snapshot: { state: 'unknown', sourceErrors: [] },
      expected: 'no-store',
    },
    {
      snapshot: { state: 'no_active_official_notice', sourceErrors: ['official_notice_detail'] },
      expected: 'no-store',
    },
  ];

  for (const { snapshot, expected } of cases) {
    const handler = createStatusHandler({ getSnapshot: async () => snapshot });
    const response = createNodeResponse();
    await handler({ method: 'GET' }, response);
    assert.equal(response.statusCode, 200);
    assert.equal(response.headers.get('cache-control'), expected);
  }
});

test('returns 400 for a malformed preview URL without crashing the handler', async () => {
  const handler = createPreviewHandler({
    rootDir: '/does-not-need-to-exist',
    getSnapshot: async () => ({ state: 'unknown', sourceErrors: [] }),
  });
  const response = createNodeResponse();

  await handler({
    method: 'GET',
    url: '/%E0%A4%A',
    headers: { host: '127.0.0.1' },
  }, response);

  assert.equal(response.statusCode, 400);
  assert.equal(response.body, 'Bad Request');
});

test('returns a plain 404 when the preview fallback file is unavailable', async () => {
  const handler = createPreviewHandler({ rootDir: `/tmp/aion2-preview-missing-${process.pid}` });
  const response = createNodeResponse();
  await handler({ method: 'GET', url: '/missing', headers: { host: '127.0.0.1' } }, response);
  assert.equal(response.statusCode, 404);
  assert.equal(response.body, 'Not Found');
});
