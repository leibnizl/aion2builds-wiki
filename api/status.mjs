import { getStatusSnapshot } from '../src/status-service.mjs';

const HEALTHY_CACHE_CONTROL = 'public, max-age=0, s-maxage=60, stale-while-revalidate=60';

export function cacheControlForSnapshot(snapshot) {
  const noticeSourceFailed = (snapshot?.sourceErrors || [])
    .some(error => error === 'official_notices' || error === 'official_notice_detail');
  return snapshot?.state === 'unknown' || noticeSourceFailed
    ? 'no-store'
    : HEALTHY_CACHE_CONTROL;
}

export function createStatusHandler({ getSnapshot = getStatusSnapshot } = {}) {
  return async function handler(request, response) {
    if (request.method !== 'GET') {
      response.setHeader('Allow', 'GET');
      return response.status(405).json({ error: 'Method not allowed' });
    }

    try {
      const snapshot = await getSnapshot();
      response.setHeader('Cache-Control', cacheControlForSnapshot(snapshot));
      response.setHeader('Content-Type', 'application/json; charset=utf-8');
      return response.status(200).json(snapshot);
    } catch {
      response.setHeader('Cache-Control', 'no-store');
      return response.status(503).json({
        state: 'unknown',
        checkedAt: new Date().toISOString(),
        error: 'Live source check failed',
      });
    }
  }
}

export default createStatusHandler();
