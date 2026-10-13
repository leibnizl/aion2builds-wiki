import { readdirSync, readFileSync, statSync } from 'node:fs';
const banned = [/youtube/i,/\bships?\b/i,/shipping/i,/\bstub/i,/placeholder/i,/verified/i,/\bMVP\b/i,/competitor/i,/\brival/i,/editorial/i,/keyframe/i,/\bhonest/i,/do not claim/i,/no invented/i,/fabricat/i,/threshold/i,/roblox/i,/\.json\b/i,/\/api\//i,/\b[A-Za-z0-9_-]{11}\b(?=.*video)/];
const vids = /\b(m2U09MbGu-o|sPYma2Jzy-Y|GdAakaOGPLo|qQ_WfcBnzpI|sJIZrF7GSn0|DjVa0HwRR8U|T_hjfJhYAdY|DrFuNtAIWmY|yYUH9mq7NQs|Rywb7Dbc8G0|mw1jyhWpQ1w|7mA80Ef3QyI)\b/;
const walk = (d) => readdirSync(d).flatMap(f => statSync(`${d}/${f}`).isDirectory() ? walk(`${d}/${f}`) : [`${d}/${f}`]);
let bad = 0;
for (const f of walk('dist').filter(f => /\.(html|xml|txt)$/.test(f))) {
  const t = readFileSync(f,'utf8').replace(/<script type="application\/ld\+json">[\s\S]*?<\/script>/g,'');
  for (const re of [...banned.slice(0,-1), vids]) { const m = t.match(re); if (m) { console.error(`${f}: banned "${m[0]}"`); bad++; } }
  if (f.endsWith('.html') && !t.includes('class="crumbs"')) { console.error(`${f}: no breadcrumbs`); bad++; }
  if (f.endsWith('.html') && !t.includes('rel="canonical" href="https://aion2builds.wiki')) { console.error(`${f}: canonical`); bad++; }
}
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
