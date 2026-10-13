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
if (bad) { console.error(`check failed: ${bad}`); process.exit(1); } console.log('check passed');
