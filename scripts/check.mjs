import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { SITE } from '../src/data.mjs';
import { indexRoutes, noindexRoutes, indexLifecycle } from '../src/p0-data.mjs';
const banned = [/youtube/i,/\bships?\b/i,/shipping/i,/\bstub/i,/placeholder/i,/verified/i,/\bMVP\b/i,/competitor/i,/\brival/i,/editorial/i,/keyframe/i,/\bhonest/i,/do not claim/i,/no invented/i,/fabricat/i,/threshold/i,/roblox/i,/\b[A-Za-z0-9_-]{11}\b(?=.*video)/];
const vids = /\b(m2U09MbGu-o|sPYma2Jzy-Y|GdAakaOGPLo|qQ_WfcBnzpI|sJIZrF7GSn0|DjVa0HwRR8U|T_hjfJhYAdY|DrFuNtAIWmY|yYUH9mq7NQs|Rywb7Dbc8G0|mw1jyhWpQ1w|7mA80Ef3QyI)\b/;
const walk = (d) => readdirSync(d).flatMap(f => statSync(`${d}/${f}`).isDirectory() ? walk(`${d}/${f}`) : [`${d}/${f}`]);
let bad = 0;
for (const f of walk('dist').filter(f => /\.(html|xml|txt)$/.test(f))) {
  const t = readFileSync(f,'utf8').replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g,'');
  for (const re of [...banned.slice(0,-1), vids]) { const m = t.match(re); if (m) { console.error(`${f}: banned "${m[0]}"`); bad++; } }
  if (f.endsWith('.html') && !t.includes('class="crumbs"')) { console.error(`${f}: no breadcrumbs`); bad++; }
  if (f.endsWith('.html') && !t.includes('id="main" tabindex="-1"')) { console.error(`${f}: skip-link target is not focusable`); bad++; }
  if (f.endsWith('.html')) {
    const route = f === 'dist/index.html' ? '/' : f.slice('dist'.length, -'.html'.length);
    const expectedCanonical = SITE + (route === '/' ? '' : route);
    const canonicals = [...t.matchAll(/<link rel="canonical" href="([^"]+)">/g)].map(match => match[1]);
    if (canonicals.length !== 1 || canonicals[0] !== expectedCanonical) { console.error(`${f}: canonical must be exactly ${expectedCanonical}`); bad++; }
  }
  if (f.endsWith('.html') && !/id="nav-toggle"[^>]+aria-controls="main-nav"/.test(t)) { console.error(`${f}: mobile navigation control missing`); bad++; }
  if (f.endsWith('.html') && !/href="\/codes"[^>]*>Codes<\/a>[\s\S]*href="\/status"[^>]*>Status<\/a>[\s\S]*href="\/download"[^>]*>Download<\/a>[\s\S]*href="\/system-requirements"[^>]*>PC Specs<\/a>/.test(t)) { console.error(`${f}: task-first primary navigation missing or out of order`); bad++; }
  if (f.endsWith('.html') && !/id="explore-toggle"[^>]+data-label="Explore"[^>]+aria-label="Open Explore menu"[^>]+aria-expanded="false"[^>]+aria-controls="explore-menu"/.test(t)) { console.error(`${f}: Explore disclosure semantics missing`); bad++; }
  if (f.endsWith('.html') && !/<html[^>]+data-theme="dark"/.test(t)) { console.error(`${f}: dark default missing`); bad++; }
  if (f.endsWith('.html') && !/name="theme-color"[^>]+content="#0f1116"/.test(t)) { console.error(`${f}: dark browser chrome color missing`); bad++; }
  if (f.endsWith('.html') && !/id="theme"[^>]+aria-label="Switch to light theme"[^>]+aria-pressed="true"/.test(t)) { console.error(`${f}: theme state semantics missing`); bad++; }
  if (/dist\/classes\/[^/]+\.html$/.test(f) && !/href="\/classes" class="section-current"/.test(t)) { console.error(`${f}: Classes section state missing`); bad++; }
  if (f.endsWith('.html')) {
    const h1s = (t.match(/<h1\b/g) || []).length;
    if (h1s !== 1) { console.error(`${f}: expected one h1, found ${h1s}`); bad++; }
    const ids = [...t.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
    const repeated = [...new Set(ids.filter((id,index) => ids.indexOf(id) !== index))];
    if (repeated.length) { console.error(`${f}: duplicate ids ${repeated.join(', ')}`); bad++; }
    const main = (t.match(/<main\b[\s\S]*?<\/main>/) || [''])[0];
    for (const [,tag] of main.matchAll(/(<img\b[^>]*>)/g)) {
      const src = (tag.match(/\bsrc="([^"]+)"/) || [])[1];
      const alt = (tag.match(/\balt="([^"]*)"/) || [])[1];
      if (alt === undefined || alt.trim() === '') { console.error(`${f}: main image missing useful alt text`); bad++; }
      if (src?.startsWith('/') && !existsSync(`dist${src}`)) { console.error(`${f}: missing local image ${src}`); bad++; }
    }
  }
  if (f.endsWith('.html')) for (const [,href] of t.matchAll(/<a\b[^>]*href="([^"]+)"/g)) {
    if (!href.startsWith('/') && !href.startsWith('#')) continue;
    const [rawPath, hash=''] = href.split('#');
    const path = rawPath || (f === 'dist/index.html' ? '/' : f.slice(4,-5));
    const target = path === '/' ? 'dist/index.html' : `dist${path}.html`;
    if (!existsSync(target)) { console.error(`${f}: broken internal link ${href}`); bad++; continue; }
    if (hash && !readFileSync(target,'utf8').includes(`id="${hash}"`)) { console.error(`${f}: missing anchor ${href}`); bad++; }
  }
  if (f.endsWith('.html')) for (const [,script] of t.matchAll(/<script>([\s\S]*?)<\/script>/g)) {
    try { new Function(script); } catch (error) { console.error(`${f}: inline script syntax: ${error.message}`); bad++; }
  }
}
const sitemap = readFileSync('dist/sitemap.xml','utf8');
let buildAt;
try {
  buildAt = new Date(JSON.parse(readFileSync('dist/build-meta.json','utf8')).buildAt);
} catch {
  buildAt = new Date(Number.NaN);
}
if (!Number.isFinite(buildAt.getTime())) { console.error('dist/build-meta.json: valid buildAt is required'); bad++; }
const buildAtMs = buildAt.getTime();
const contractedRoutes = [...indexRoutes, ...noindexRoutes];
const uniqueContractedRoutes = new Set(contractedRoutes);
if (indexRoutes.length !== 15 || noindexRoutes.length !== 15) { console.error(`publication contract must contain 15 index and 15 noindex routes; found ${indexRoutes.length} and ${noindexRoutes.length}`); bad++; }
if (uniqueContractedRoutes.size !== contractedRoutes.length) { console.error('publication contract contains duplicate or overlapping routes'); bad++; }
const builtRoutes = walk('dist').filter(f => f.endsWith('.html') && f !== 'dist/404.html').map(f => f === 'dist/index.html' ? '/' : f.slice('dist'.length, -'.html'.length));
for (const route of contractedRoutes) {
  if (!builtRoutes.includes(route)) { console.error(`publication contract route missing from build: ${route}`); bad++; }
}
for (const route of builtRoutes) {
  if (!uniqueContractedRoutes.has(route)) { console.error(`built route missing publication contract: ${route}`); bad++; }
}
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1]);
if (new Set(sitemapUrls).size !== sitemapUrls.length) { console.error('sitemap contains duplicate URLs'); bad++; }
if (sitemap.includes('<lastmod>')) { console.error('sitemap must omit unsupported global lastmod values'); bad++; }
const requiredLifecycleRoutes = ['/codes','/guides/halloween-event','/guides/server-transfer','/guides/launch-rewards'];
for (const route of requiredLifecycleRoutes) {
  const lifecycle = indexLifecycle[route];
  if (!lifecycle || !Number.isFinite(Date.parse(lifecycle.indexUntil))) { console.error(`${route}: valid indexUntil lifecycle is required`); bad++; }
}
for (const [route, lifecycle] of Object.entries(indexLifecycle)) {
  if (!indexRoutes.includes(route)) { console.error(`${route}: lifecycle route must be in the index contract`); bad++; }
  if (!Number.isFinite(Date.parse(lifecycle.indexUntil))) { console.error(`${route}: invalid indexUntil ${lifecycle.indexUntil}`); bad++; }
}
for (const route of indexRoutes) {
  const file = route === '/' ? 'dist/index.html' : `dist${route}.html`;
  const html = readFileSync(file,'utf8');
  const lifecycle = indexLifecycle[route];
  const expired = lifecycle ? buildAtMs >= Date.parse(lifecycle.indexUntil) : false;
  const url = SITE + (route === '/' ? '' : route);
  const inSitemap = sitemapUrls.includes(url);
  const isNoindex = html.includes('name="robots" content="noindex,follow"');
  if (expired && (!isNoindex || inSitemap)) { console.error(`${route}: expired lifecycle route must be noindex and absent from sitemap`); bad++; }
  if (!expired && (isNoindex || !inSitemap)) { console.error(`${route}: active index route must be indexable and present in sitemap`); bad++; }
}
for (const route of noindexRoutes) {
  const html = readFileSync(`dist${route}.html`,'utf8');
  const url = SITE + route;
  if (sitemapUrls.includes(url)) { console.error(`sitemap: research route must stay out ${route}`); bad++; }
  if (!html.includes('name="robots" content="noindex,follow"')) { console.error(`dist${route}.html: research noindex missing`); bad++; }
}
const expectedSitemapUrls = indexRoutes.filter(route => !indexLifecycle[route] || buildAtMs < Date.parse(indexLifecycle[route].indexUntil)).map(route => SITE + (route === '/' ? '' : route));
for (const url of sitemapUrls) {
  if (!expectedSitemapUrls.includes(url)) { console.error(`sitemap: unexpected URL ${url}`); bad++; }
}
if (existsSync('dist/resources.html')) { console.error('dist/resources.html: removed hub must not be built'); bad++; }
const status = readFileSync('dist/status.html','utf8');
if (!status.includes('id="status-live"') || !status.includes('id="status-announcement" aria-live="polite"') || !status.includes("var url='/api/status'") || !status.includes('id="service-events"') || !status.includes('one-minute cache') || !status.includes('Incident update is stale') || !status.includes('Maintenance timing is unconfirmed') || !status.includes('North America East') || !status.includes('Steam players now; PURPLE excluded')) { console.error('dist/status.html: live status product contract missing'); bad++; }
if (status.includes('Live operational state: unknown') || status.includes('<strong>Japan</strong>')) { console.error('dist/status.html: retired placeholder state still present'); bad++; }
const codes = readFileSync('dist/codes.html','utf8');
if (!codes.includes('TAKEFLIGHTAION2') || !codes.includes('4 Odyle Energy') || !codes.includes('Official coupon page')) { console.error('dist/codes.html: active/expired coupon ledger missing'); bad++; }
if (!existsSync('api/status.mjs') || !existsSync('src/status-service.mjs')) { console.error('status API implementation missing'); bad++; }
const reqs = readFileSync('dist/system-requirements.html','utf8');
if (!reqs.includes('store.steampowered.com/app/3393110/AION_2/') || !reqs.includes('2026-10-23')) { console.error('dist/system-requirements.html: official source or checked date missing'); bad++; }
if (!/class="table-scroll" tabindex="0" role="region" aria-label="[^"]+"/.test(reqs)) { console.error('dist/system-requirements.html: keyboard-scrollable requirements table missing'); bad++; }
const download = readFileSync('dist/download.html','utf8');
if (!download.includes('store.steampowered.com/app/3393110/AION_2/') || !download.includes('purple.plaync.com/download')) { console.error('dist/download.html: official installers missing'); bad++; }
if (!/class="table-scroll download-comparison" tabindex="0" role="region" aria-label="Steam and PURPLE comparison"><table class="spec-table compare-table">/.test(download)) { console.error('dist/download.html: semantic keyboard-scrollable client comparison missing'); bad++; }
const notFound = readFileSync('dist/404.html','utf8');
if (!notFound.includes('name="robots" content="noindex,follow"')) { console.error('dist/404.html: noindex missing'); bad++; }
for (const f of walk('dist').filter(f => f.endsWith('.html') && !f.endsWith('404.html'))) {
  const t = readFileSync(f,'utf8'); if (/name="robots" content="noindex/.test(t)) continue;
  const legal = /\/(about|privacy|terms|disclaimer|contact)\.html$/.test(f);
  const dsc = (t.match(/<meta name="description" content="([^"]*)"/)||[])[1]||''; const og = (t.match(/<meta property="og:description" content="([^"]*)"/)||[])[1];
  const ttl = ((t.match(/<title>([^<]*)<\/title>/)||[])[1]||'').replace(/&amp;/g,'&');
  const dl = dsc.replace(/&amp;/g,'&').replace(/&quot;/g,'"').length;
  if (dsc !== og) { console.error(`${f}: og:description differs`); bad++; }
  if (!legal && (dl < 140 || dl > 160)) { console.error(`${f}: meta description ${dl} chars`); bad++; }
  if (!legal && (ttl.length < 45 || ttl.length > 60)) { console.error(`${f}: title ${ttl.length} chars`); bad++; }
  if (!/"@type":"VideoGame"/.test(t) || !/"@type":"Organization"/.test(t)) { console.error(`${f}: JSON-LD missing`); bad++; }
  console.log(`${String(ttl.length).padStart(3)} ${String(dl).padStart(3)} ${f}  | ${ttl}`);
}
if (bad) { console.error(`check failed: ${bad}`); process.exit(1); } console.log('check passed');
