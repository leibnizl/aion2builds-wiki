import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { extname, join, normalize, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { cacheControlForSnapshot } from '../api/status.mjs';
import { getStatusSnapshot } from '../src/status-service.mjs';

const port = Number(process.env.PORT || 4173);
const types = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.jpg': 'image/jpeg',
  '.js': 'text/javascript; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
};

function sendJson(response, statusCode, value, cacheControl = 'no-store') {
  response.writeHead(statusCode, {
    'Cache-Control': cacheControl,
    'Content-Type': 'application/json; charset=utf-8',
  });
  response.end(JSON.stringify(value));
}

async function serveFile(pathname, response, root) {
  let decoded;
  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    return 'bad_request';
  }
  if (decoded.includes('\0') || decoded.split('/').includes('..')) return false;
  const clean = normalize(decoded).replace(/^\/+/, '');
  const candidates = clean === ''
    ? ['index.html']
    : extname(clean) ? [clean] : [`${clean}.html`, join(clean, 'index.html')];
  for (const candidate of candidates) {
    const file = join(root, candidate);
    if (!file.startsWith(`${root}/`) && file !== join(root, 'index.html')) continue;
    try {
      const info = await stat(file);
      if (!info.isFile()) continue;
      const body = await readFile(file);
      response.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream' });
      response.end(body);
      return true;
    } catch {}
  }
  return false;
}

export function createPreviewHandler({
  rootDir = join(process.cwd(), 'dist'),
  getSnapshot = getStatusSnapshot,
} = {}) {
  return async function previewHandler(request, response) {
    let url;
    try {
      url = new URL(request.url, `http://${request.headers.host || '127.0.0.1'}`);
    } catch {
      response.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
      return response.end('Bad Request');
    }
    if (url.pathname === '/api/status') {
      if (request.method !== 'GET') {
        response.setHeader('Allow', 'GET');
        return sendJson(response, 405, { error: 'Method not allowed' });
      }
      try {
        const snapshot = await getSnapshot();
        return sendJson(response, 200, snapshot, cacheControlForSnapshot(snapshot));
      } catch {
        return sendJson(response, 503, { state: 'unknown', checkedAt: new Date().toISOString(), error: 'Live source check failed' });
      }
    }
    if (request.method !== 'GET' && request.method !== 'HEAD') {
      response.writeHead(405, { Allow: 'GET, HEAD' });
      return response.end();
    }
    if (url.pathname === '/resources') {
      response.writeHead(308, { Location: '/' });
      return response.end();
    }
    const fileResult = await serveFile(url.pathname, response, rootDir);
    if (fileResult === 'bad_request') {
      response.writeHead(400, { 'Content-Type': 'text/plain; charset=utf-8' });
      return response.end('Bad Request');
    }
    if (fileResult) return;
    try {
      const notFound = await readFile(join(rootDir, '404.html'));
      response.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      return response.end(notFound);
    } catch {
      response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      return response.end('Not Found');
    }
  };
}

export function createPreviewServer(options) {
  return createServer(createPreviewHandler(options));
}

const isDirectRun = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isDirectRun) {
  const server = createPreviewServer();
  server.listen(port, '127.0.0.1', () => {
    console.log(`Aion 2 preview: http://127.0.0.1:${port}`);
  });
}
