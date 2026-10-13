import { mkdirSync, writeFileSync, cpSync, rmSync } from 'node:fs';
import { dirname } from 'node:path';
import { SITE, NAME, LAST, STEAM, classes } from '../src/data.mjs';
const OUT = 'dist'; rmSync(OUT,{recursive:true,force:true}); cpSync('public',OUT,{recursive:true});
const INDEXNOW_KEY = 'a2b7c41e9d3f4b6a8e2c5d1f0a9b8c7d';
writeFileSync(`${OUT}/${INDEXNOW_KEY}.txt`, INDEXNOW_KEY);
const esc = (t) => t.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
const guides = [
 { slug:'beginner-guide', title:'Beginner Guide' },
 { slug:'server-transfer', title:'Server Transfer Guide' },
 { slug:'launch-rewards', title:'Launch Rewards Guide' },
];
const top = [ ['/', 'Home'], ['/classes','Classes'], ['/updates','Update Log'], ['/about','About'] ];
const pages = [];
function page(path, title, desc, crumbs, body, opts={}) { pages.push({ path, title, desc, crumbs, body, ...opts }); }
function render(p) {
  const url = SITE + (p.path === '/' ? '' : p.path);
  const cur = (h) => (h === p.path ? ' aria-current="page"' : '');
  const nav = top.slice(0,2).map(([h,l])=>`<a href="${h}"${cur(h)}>${l}</a>`).join('') +
    `<div class="dd"><button type="button" aria-haspopup="true">Guides ▾</button><div class="dd-menu">${guides.map(g=>`<a href="/guides/${g.slug}"${cur('/guides/'+g.slug)}>${g.title}</a>`).join('')}</div></div>` +
    top.slice(2).map(([h,l])=>`<a href="${h}"${cur(h)}>${l}</a>`).join('');
  const trail = p.crumbs.slice(0,-1).map(([n,h])=>`<a href="${h}">${n}</a> › `).join('') + esc(p.crumbs.at(-1)[0]);
  const bc = { '@context':'https://schema.org','@type':'BreadcrumbList', itemListElement: p.crumbs.map(([n,h],i)=>({ '@type':'ListItem', position:i+1, name:n, item: SITE + (h==='/'?'':h) })) };
  const ws = { '@context':'https://schema.org','@type':'WebSite', name:NAME, url:SITE };
  const org = { '@context':'https://schema.org','@type':'Organization', name:NAME, url:SITE, logo:`${SITE}/logo.svg` };
  const vg = { '@context':'https://schema.org','@type':'VideoGame', name:'Aion 2', publisher:{ '@type':'Organization', name:'NC' }, gamePlatform:'PC', genre:'MMORPG', url:STEAM, sameAs:[STEAM] };
  return `<!doctype html><html lang="en" style="--hue:222"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>${esc(p.title)}</title><meta name="description" content="${esc(p.desc)}"><link rel="canonical" href="${url}">
<meta property="og:type" content="website"><meta property="og:site_name" content="${NAME}"><meta property="og:title" content="${esc(p.title)}"><meta property="og:description" content="${esc(p.desc)}"><meta property="og:url" content="${url}"><meta property="og:image" content="${SITE}/og/${p.og||({'/':'home','/classes':'classes','/updates':'updates'})[p.path]||'default'}.png"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630">${p.noindex?'<meta name="robots" content="noindex,follow">':''}<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.svg" type="image/svg+xml"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Figtree:wght@500;700;900&family=IBM+Plex+Mono:wght@400;500;600&display=swap"><link rel="stylesheet" href="/style.css">
<script>try{if(localStorage.getItem('theme')==='dark')document.documentElement.setAttribute('data-theme','dark')}catch(e){}</script>
${(p.path==='/'?[ws,org,vg]:[bc,ws,org,vg]).map(x=>`<script type="application/ld+json">${JSON.stringify(x)}</script>`).join('')}
</head><body><a class="skip" href="#main">Skip to content</a>
<header class="topbar"><div class="shell topbar-in"><a class="brand" href="/"><img class="brand-mark" src="/logo.svg" width="26" height="26" alt="">${NAME}</a><nav class="main" aria-label="Main">${nav}</nav>
<div class="tools"><button class="icon-btn ic" id="theme" type="button" aria-label="Switch theme" onclick="var d=document.documentElement,k=d.getAttribute('data-theme')!=='dark';d.setAttribute('data-theme',k?'dark':'light');try{localStorage.setItem('theme',k?'dark':'light')}catch(e){}"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21.3 14.6A9.2 9.2 0 0 1 9.4 2.7a.75.75 0 0 0-1-.9 10.7 10.7 0 1 0 13.8 13.8.75.75 0 0 0-.9-1z"/></svg></button></div></div></header>
<main class="shell" id="main"><nav class="crumbs" aria-label="Breadcrumb">${trail}</nav>${p.body}</main>
<footer><div class="shell f-top"><div class="f-about"><span class="brand"><i></i>${NAME}</span><p>Independent fan guide for AION 2, the MMORPG by NC on Steam and PURPLE. Not affiliated with NC.</p></div>
<nav class="f-col" aria-label="Browse"><h4 class="mlab">Browse</h4><a href="/">Home</a><a href="/classes">Classes</a><a href="/updates">Update log</a></nav>
<nav class="f-col" aria-label="Guides"><h4 class="mlab">Guides</h4>${guides.map(g=>`<a href="/guides/${g.slug}">${g.title}</a>`).join('')}</nav>
<nav class="f-col" aria-label="About"><h4 class="mlab">About</h4><a href="/about">About</a><a href="/privacy">Privacy</a><a href="/terms">Terms</a><a href="/disclaimer">Disclaimer</a><a href="/contact">Contact</a></nav>
<nav class="f-col" aria-label="Game links"><h4 class="mlab">Game</h4><a href="${STEAM}" rel="noopener nofollow" target="_blank">AION 2 on Steam</a><a href="https://aion2.plaync.com/" rel="noopener nofollow" target="_blank">Official site</a></nav></div>
<div class="shell f-legal"><p>${NAME} is an independent fan-made reference and is not endorsed by, sponsored by, or affiliated with NC or its affiliates. <em>AION 2</em> and all related names and visual assets are trademarks and copyrights of their respective owners.</p></div>
<div class="shell f-bot"><span>© 2026 ${NAME}</span><span class="mlab">Last checked ${LAST}</span></div></footer></body></html>`;
}
const H = [['Home','/']];
// Home
page('/', 'Aion 2 Builds: Class Notes, Beginner Guide and Patch Log', 'Aion 2 class build notes for all 8 classes with cited sources, a beginner guide for the global Steam launch and a dated update log from official NC notices.', [['Home','/']], `
<div class="hero"><div><div class="mlab">AION 2 fan guide · NC MMORPG on Steam</div><h1>Aion 2 <em>Builds</em></h1>
<p>Class build notes taken from what creators actually show on screen, a beginner guide for the global launch, and an update log built from official notices. Every number cites where it came from.</p>
<div class="ctas"><a class="cta pri" href="/classes">Class builds</a><a class="cta" href="/guides/beginner-guide">Beginner guide</a><a class="cta" href="/updates">Update log</a></div>
<p class="hero-type-links"><span class="mlab">Browse</span>${classes.slice(0,4).map(c=>`<a href="/classes/${c.slug}">${c.name}</a>`).join('')}<a href="#browse-wiki">All classes</a></p>
<div class="stats"><div class="stat"><b>${classes.length}</b><span class="mlab">Classes</span></div><div class="stat"><b>Oct 5</b><span class="mlab">Global launch</span></div><div class="stat"><b>${guides.length}</b><span class="mlab">Guides</span></div><div class="stat"><b>Oct 13</b><span class="mlab">Last checked</span></div></div></div>
<div class="keyart"><div class="keyart-img"><img src="/img/aion2-header.jpg" alt="AION 2 official key art" width="460" height="215" loading="eager"></div><div class="keyart-cap"><span class="mlab">Official art · NC</span><b>Classes, builds, guides and patch notes</b></div></div></div>
<div class="block"><div class="block-head"><h2>What Aion 2 is</h2></div><div class="prose"><p>AION 2 is a free-to-play MMORPG from NC (formerly NCSOFT), built on Unreal Engine 5 for Windows PC. It launched globally on Steam and PURPLE on October 5, 2026, after Early Access opened on September 30. You pick a faction, Elyos or Asmodian, and fight a faction war in the skies of Atreia.</p><p>Each Elyos server is paired with an Asmodian server for cross-faction modes such as Spacetime Rifts and the Abyss, and pairings are updated over time.</p></div></div>
<div class="block" id="browse-wiki"><div class="block-head"><h2>Browse classes</h2><a href="/classes">All classes →</a></div><div class="gcards browse-grid">${classes.map(c=>`<a class="gcard browse-card" href="/classes/${c.slug}"><span class="gcard-t">${c.name}</span><span class="gcard-j">${esc(c.blurb)}</span></a>`).join('')}</div></div>
<div class="block"><div class="block-head"><h2>Latest update</h2><a href="/updates">Full update log →</a></div><div class="prose"><p><strong>Oct 6 PDT / Oct 7 CEST patch:</strong> Founder's Pack items usable across characters and servers, a weekly limit of 20 Morphs per server for Sealed Wings into Enhance Stones, higher Raw Leather drop rates, and Resurrection Spiritstones for 25,000 Kina (10 per server per week). No class balance changes.</p></div></div>
<div class="block"><div class="block-head"><h2>Guides</h2></div><div class="gcards">${guides.map(g=>`<a class="gcard" href="/guides/${g.slug}"><span class="gcard-t">${g.title}</span><span class="mlab">Updated ${LAST}</span></a>`).join('')}</div></div>
<div class="block"><div class="block-head"><h2>Common questions</h2></div><div class="prose">
<h3>Is Aion 2 free?</h3><p>Yes. The global version is free to play on Steam and PURPLE.</p>
<h3>How many classes are there?</h3><p>Eight are covered here: Gladiator, Templar, Assassin, Ranger, Sorcerer, Spiritmaster, Cleric and Chanter. One Korean chart also lists a ninth class, so the full global roster is (not confirmed).</p>
<h3>Which class is strongest?</h3><p>We have no global damage data yet. A Korean-server chart exists, but its unit is not labelled, so we do not rank classes from it.</p></div></div>`);
// Classes
page('/classes','Aion 2 Classes List: All 8 Classes With Build Notes','All 8 Aion 2 classes in one list: Gladiator, Templar, Assassin, Ranger, Sorcerer, Spiritmaster, Cleric and Chanter, with sourced skill orders and macros.',[...H,['Classes','/classes']],`
<h1>Aion 2 classes</h1><div class="prose"><p>Each class page lists only what we could read directly in creator guides or official notes. Stat priority is (not confirmed) for every class: no source showed a readable list.</p></div>
<div class="gcards">${classes.map(c=>`<a class="gcard" href="/classes/${c.slug}"><span class="gcard-t">${c.name}</span><span class="gcard-j">${esc(c.blurb)}</span></a>`).join('')}</div>`);
for (const c of classes) page(`/classes/${c.slug}`,`Aion 2 ${c.name} Build Notes`,c.desc,[...H,['Classes','/classes'],[c.name,`/classes/${c.slug}`]],`<h1>Aion 2 ${c.name} build</h1><div class="prose">${c.body}<p class="mlab">Last checked ${LAST}</p></div>`,{noindex:true,og:`class-${c.slug}`});
// Guides
const G = [...H,['Guides','/guides/beginner-guide']];
page('/guides/beginner-guide','Aion 2 Beginner Guide: Tips for New Players (2026)','Aion 2 beginner guide for new players: how to start free on Steam, picking a faction and server, Stigma and Daevanion basics, and mistakes that get you banned.',[...H,['Guides','/guides/beginner-guide'],['Beginner Guide','/guides/beginner-guide']],`
<h1>Aion 2 beginner guide</h1><div class="prose">
<h2>Getting in</h2><p>AION 2 is free on Steam and on NC's PURPLE launcher; both share the same servers. Global launch was October 5, 2026 at 6:00 PDT / 15:00 CEST. Early Access servers opened September 30.</p>
<h2>Pick a faction and server</h2><p>Elyos and Asmodians live on separate servers. Each Elyos server is paired with an Asmodian server, and those are the enemies you meet in the Abyss and Spacetime Rifts. Pairings change periodically. Instanced content, including dungeons, is cross-server, so a newer server does not lock you out of group content. New EU servers (Nathara and Tassin) opened on October 8.</p>
<h2>Pick a class</h2><p>See the <a href="/classes">class list</a>. If you want the most documented class right now, the Chanter page has the most sourced detail.</p>
<h2>Systems you will meet early</h2><ul><li><strong>Stigma skills</strong>: extra skills you slot as you level. Slots are reported to open at levels 22, 27, 32 and 37 (not confirmed).</li><li><strong>Daevanion board</strong>: a node board for each class. Creator guides show 300 points spent on a full board (not confirmed).</li><li><strong>Theostones and Manastones</strong>: gear add-ons covered by several creator guides; exact values are (not confirmed).</li></ul>
<h2>Things to avoid</h2><ul><li>Buying currency from third parties. NC has posted warnings and restricts accounts for gold farming, bots, macros run by unauthorized programs and real-money trading.</li><li>Ignoring a security lock. A temporary lock is not a penalty; contact NC Customer Support to restore access.</li></ul>
<h2>Free launch rewards</h2><p>Log in before the December 1 maintenance to collect pre-registration and wishlist rewards. Details in the <a href="/guides/launch-rewards">launch rewards guide</a>.</p>
<p class="src">Sources: official Steam news posts from NC, Oct 4 to Oct 13, 2026. Last checked ${LAST}.</p></div>`,{og:'guide-beginner-guide'});
page('/guides/server-transfer','Aion 2 Server Transfer Guide: Dates, Cost and Hours','Aion 2 server transfer guide: Early Access and launch server dates in October, Quna cost per character and slot, and the daily transfer windows for each region.',[...H,['Guides','/guides/beginner-guide'],['Server Transfer Guide','/guides/server-transfer']],`
<h1>Aion 2 server transfer guide</h1><div class="prose">
<h2>When</h2><ul><li><strong>Early Access servers:</strong> after maintenance on Tuesday Oct 13 PDT / Wednesday Oct 14 CEST, until before maintenance on Oct 20 PDT / Oct 21 CEST.</li><li><strong>Launch servers:</strong> after maintenance on Oct 20 PDT / Oct 21 CEST, until before maintenance on Oct 27 PDT / Oct 28 CET.</li></ul>
<h2>Cost</h2><table class="t"><tr><th>Item</th><th>Price</th><th>Limit</th></tr><tr><td>Base cost</td><td>0 Quna</td><td>Once per account</td></tr><tr><td>Per character transferred</td><td>0 Quna</td><td>-</td></tr><tr><td>Extra character slot on destination</td><td>1,000 Quna per slot</td><td>-</td></tr></table>
<p>Example from the notice: moving 6 characters to a server where only 4 slots are free costs 2,000 Quna for the extra slots.</p>
<h2>Daily windows</h2><ul><li>North America East and West, South America: 09:00 to 13:00 and 15:00 to 19:00 PDT.</li><li>Europe: 03:00 to 07:00 and 09:00 to 13:00 PDT (12:00 to 16:00 and 18:00 to 22:00 CEST).</li><li>Asia: (not confirmed) by this page.</li></ul>
<p class="src">Source: NC, "Server Transfer Products Info" and "Server Transfer Q&amp;A", posted Oct 9, 2026 on Steam. Last checked ${LAST}.</p></div>`,{og:'guide-server-transfer'});
page('/guides/launch-rewards','Aion 2 Launch Rewards: Pre-Registration and Wishlist Items','Aion 2 launch rewards explained: the free Pagati pet chest, every item in the Steam wishlist chest, and the December 1 login deadline to claim them by mail.',[...H,['Guides','/guides/beginner-guide'],['Launch Rewards Guide','/guides/launch-rewards']],`
<h1>Aion 2 launch rewards guide</h1><div class="prose"><p>NC extended the pre-registration and Steam wishlist rewards to every player who creates an account and logs in before maintenance on December 1, 2026 (23:30 PST). Rewards arrive by in-game mail, which expires December 8, 2026 at 23:30 PST.</p>
<h2>Advance: Pet Chest</h2><ul><li>Pet: Pagati</li><li>Pick one of Papis, Silver Blade Rotan, Konutin Worker or Black Smoke Murute</li></ul>
<h2>Advance: Wishlist Chest</h2><table class="t"><tr><th>Item</th><th>Qty</th></tr><tr><td>Resurrection Spiritstone (Bound)</td><td>10</td></tr><tr><td>Life Potion (Bound)</td><td>100</td></tr><tr><td>Healing Potion (Bound)</td><td>50</td></tr><tr><td>Return Scroll (Bound)</td><td>50</td></tr><tr><td>Courage Scroll (Bound)</td><td>50</td></tr><tr><td>Speed Scroll (Bound)</td><td>50</td></tr><tr><td>Benediction Scroll (Bound)</td><td>50</td></tr></table>
<p class="src">Source: NC, "Launch Rewards", posted Oct 4, 2026 on Steam. Last checked ${LAST}.</p></div>`,{og:'guide-launch-rewards'});
// Updates
page('/updates','Aion 2 Update Log and Patch Notes (October 2026)','Aion 2 update log and patch notes for October 2026: the Oct 7 patch, maintenance, new EU servers, outage compensation and server transfer notices, all dated.',[...H,['Update Log','/updates']],`
<h1>Aion 2 update log</h1><div class="prose">
<h2>Oct 13 PDT / Oct 14 CEST: maintenance</h2><p>Scheduled maintenance at 23:30 PDT, about 3 hours 30 minutes. Patch details were not published at the time of writing (not confirmed). Server transfers for Early Access servers open after this maintenance.</p>
<h2>Oct 12 PDT: account restrictions</h2><p>Another wave of restrictions for gold farming, bots, unauthorized programs and real-money trading. A similar wave was posted Oct 10 PDT.</p>
<h2>Oct 9: known issues and server transfer details</h2><p>Known issue on NA West server Nezekan (character select and latency). Server transfer pricing and Q&amp;A posted; see the <a href="/guides/server-transfer">server transfer guide</a>.</p>
<h2>Oct 8: EU outage and new EU servers</h2><p>A cloud outage hit EU servers. Compensation: 1 day of membership and pet auto loot for active users, plus a supply chest with 20 Life Crystals, 10 Resurrection Spiritstones, 20 Battle Enhance Scrolls, 5 Content Usage Ticket Selection Chests and 5 Odyle Energy (all bound). New EU servers Nathara (Elyos) and Tassin (Asmodian) opened.</p>
<h2>Oct 6 PDT / Oct 7 CEST: patch notes</h2><ul><li>Founder's Pack skins, titles and items usable on other characters and servers; a free Founder's Pack shop for items you do not own yet.</li><li>Weekly limit of 20 Morphs per server for turning Sealed Wings into Enhance Stones.</li><li>Higher Raw Leather drop rates in Chaotic Lower Reshanta, Verteron and Altgard (exact rate not given).</li><li>Wind Breeze Merchants sell Resurrection Spiritstone (Season 1) for 25,000 Kina, 10 per server per week, until Dec 15.</li><li>Fixes: up to 30 Map Pins, the "Daeva of Glorious Deeds" weekly mission, duplicate Movement Controls setting, emote commands.</li><li>No class or skill balance changes.</li></ul>
<h2>Oct 5: global launch</h2><p>AION 2 launched globally, free on Steam and PURPLE.</p>
<h2>Sep 30: Early Access</h2><p>Early Access opened for Founder's Pack owners.</p>
<p class="src">Sources: NC notices on the AION 2 Steam news feed. Last checked ${LAST}.</p></div>`);
// Info pages
const info = (slug,title,h1,desc,body) => page(`/${slug}`,title,desc,[...H,[h1,`/${slug}`]],`<h1>${h1}</h1><div class="prose">${body}</div>`);
info('about','About Aion 2 Builds','About','About Aion 2 Builds, an independent fan guide.',`<p>Aion 2 Builds is a small, independent fan guide for AION 2. We write down only what we can trace to a source: official NC notices, or a specific moment in a creator guide, cited as "Channel (video posted date), time". Anything we could not trace is marked (not confirmed).</p><p>Pages carry a "Last checked" date. If something is wrong or out of date, see <a href="/contact">Contact</a>.</p>`);
info('privacy','Privacy Policy | Aion 2 Builds','Privacy','Privacy policy for Aion 2 Builds.',`<p>Aion 2 Builds is a static site. We do not run accounts, comments or forms, and we do not set cookies ourselves. One small setting (light or dark theme) is stored in your browser's local storage.</p><p>Our host, Vercel, may keep standard server logs such as IP address and user agent for security and operations. Fonts load from Google Fonts, which may receive your IP address. If we add analytics or ads later, this page will be updated first.</p><p>Last checked ${LAST}.</p>`);
info('terms','Terms of Use | Aion 2 Builds','Terms','Terms of use for Aion 2 Builds.',`<p>Content here is provided as-is for general information. Game data changes with patches; use it at your own risk. You may link to and quote short parts of our pages with attribution. Game names, art and trademarks belong to their owners. We may change these terms at any time by updating this page.</p><p>Last checked ${LAST}.</p>`);
info('disclaimer','Disclaimer | Aion 2 Builds','Disclaimer','Disclaimer for Aion 2 Builds.',`<p>Aion 2 Builds is not affiliated with, endorsed by or sponsored by NC (formerly NCSOFT). AION 2 and related names and images are trademarks or copyrights of NC. The header art is official promotional art from the game's Steam store page.</p><p>Build notes reflect what individual creators showed at a given time and may not match the current patch.</p>`);
info('contact','Contact | Aion 2 Builds','Contact','Contact Aion 2 Builds.',`<p>Found an error, or have a source we should add? Open an issue on our public repository: <a href="https://github.com/leibnizl/aion2builds-wiki/issues" rel="noopener">github.com/leibnizl/aion2builds-wiki/issues</a>. Please include the page and a link or time reference for your source.</p><p>For game account problems, contact NC Customer Support; we cannot help with accounts.</p>`);
// 404
const notFound = { path:'/404', title:'Page not found | Aion 2 Builds', desc:'Page not found.', crumbs:[...H,['Not found','/404']], body:'<h1>Page not found</h1><div class="prose"><p>Try the <a href="/">home page</a> or the <a href="/classes">class list</a>.</p></div>' };
for (const p of [...pages, notFound]) { const f = p.path==='/'?`${OUT}/index.html`:`${OUT}${p.path}.html`; mkdirSync(dirname(f),{recursive:true}); writeFileSync(f, render(p)); }
writeFileSync(`${OUT}/sitemap.xml`, `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${pages.filter(p=>!p.noindex).map(p=>`<url><loc>${SITE}${p.path==='/'?'':p.path}</loc><lastmod>${LAST}</lastmod></url>`).join('\n')}\n</urlset>\n`);
writeFileSync(`${OUT}/robots.txt`, `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);
writeFileSync(`${OUT}/urls.txt`, pages.filter(p=>!p.noindex).map(p=>SITE+(p.path==='/'?'':p.path)).join('\n'));
console.log(`built ${pages.length} pages`);
