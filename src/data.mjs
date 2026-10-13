export const SITE = 'https://aion2builds.wiki';
export const NAME = 'Aion 2 Builds';
export const LAST = '2026-10-13';
export const STEAM = 'https://store.steampowered.com/app/3393110/';
const s = (ch, d, t) => `${ch} (video posted ${d}), ${t}`;
export const classes = [
 { slug:'chanter', name:'Chanter', blurb:'The best-sourced class so far: skill levels, passive order and two Korean-server changes.',
   body:`<p>The Chanter evidence comes from one text-card guide that cites Korean-server notes and community consensus. Treat everything below as secondary until it shows up in official global patch notes.</p>
<h2>Skill levels people are aiming for</h2>
<table class="t"><tr><th>Skill</th><th>Target level</th></tr>
<tr><td>Dark Crush</td><td>Lv 20 (specs 3, 4, 5 lit)</td></tr><tr><td>Onslaught</td><td>Lv 20</td></tr>
<tr><td>Spinning Strike</td><td>Lv 20 (specs 1, 3, 5 lit)</td></tr><tr><td>Incandescent Blow</td><td>Lv 16</td></tr>
<tr><td>Impactful Crush</td><td>Lv 12 to 16</td></tr><tr><td>Recuperation</td><td>Lv 20</td></tr></table>
<p class="src">Source: ${s('Antochi','Oct 7','2:10')}. Labelled as "Korean consensus" on screen.</p>
<h2>Passive order</h2><ol><li>Wind's Promise</li><li>Impact Hit</li><li>Attack Preparation</li><li>Earth's Promise</li></ol>
<p>The same card notes that Guardian Blessing multiplies the effect by 1.5.</p><p class="src">Source: ${s('Antochi','Oct 7','2:40')}.</p>
<h2>Korean-server changes</h2><ul><li>Spinning Strike became a 20 m ranged area attack, PvE damage +50%, cooldown 15 to 30 s (KR, Sep 2).</li><li>Incandescent Blow gained +40% and then another +50% PvE damage (KR, Aug 26 and Sep 2). The card says this is already in the global client (not confirmed).</li></ul>
<p class="src">Source: ${s('Antochi','Oct 7','1:55 and 2:02')}. The official global patch notes for Oct 6 / Oct 7 list no class changes.</p>
<h2>Stat priority</h2><p>Not shown on screen in any source we checked (not confirmed).</p>` },
 { slug:'cleric', name:'Cleric', blurb:'A seven-skill numbered list from a Daevanion board overview.',
   body:`<h2>Numbered skill list</h2><ol><li>Judgment Thunder</li><li>A mark skill (name unclear on screen)</li><li>Divine Aura</li><li>Chain of Torment</li><li>Condemnation</li><li>Bolt</li><li>Empyrean Lord</li></ol>
<p>The frame does not say whether this is a priority or a rotation order (not confirmed).</p><p class="src">Source: 지혜jinxan (video posted Oct 10), 2:24.</p>
<h2>Stat priority</h2><p>Not shown on screen in any source we checked (not confirmed).</p>` },
 { slug:'ranger', name:'Ranger', blurb:'A three-skill opening macro from an endgame guide.',
   body:`<h2>Macro 1</h2><ol><li>Gale Arrow</li><li>Drill Dart</li><li>Burst Arrow</li></ol><p>Each step had a 0 ms delay in the shown macro. The guide also showed a skill priority row (5 active, 4 Stigma, 8 passive), but only as icons, so skill names are (not confirmed).</p>
<p class="src">Source: ${s('Fubgun','Oct 9','6:06')}.</p><h2>Stat priority</h2><p>(not confirmed)</p>` },
 { slug:'sorcerer', name:'Sorcerer', blurb:'A damage-share breakdown from one player\'s training-dummy test.',
   body:`<p>This is what one player pressed in a test, not a recommended rotation.</p>
<table class="t"><tr><th>Skill</th><th>Damage share</th></tr><tr><td>Hellfire</td><td>25%</td></tr><tr><td>Blaze</td><td>19%</td></tr><tr><td>Cold Storm</td><td>11%</td></tr><tr><td>Firestorm</td><td>10%</td></tr><tr><td>Fire Wall</td><td>9%</td></tr><tr><td>Bittercold Wind</td><td>7%</td></tr><tr><td>Pyroclasm, Fire Mark, Delayed Explosion, Burst</td><td>3% each</td></tr></table>
<p class="src">Source: ${s('AstralLight_TV','Oct 10','2:32')}. Total DPS on that screen was too small to read (not confirmed).</p><h2>Stat priority</h2><p>(not confirmed)</p>` },
 { slug:'gladiator', name:'Gladiator', blurb:'Greatsword class; skill tooltips and one stat panel, no order shown yet.',
   body:`<h2>Skill tooltips seen</h2><ul><li><strong>Lifestealing Blade</strong>: hits up to 4 enemies within 4 m, absorbs 10% HP, 20 Stagger Gauge damage, MP 200, instant cast, 1 min 30 s cooldown, Greatsword.</li><li><strong>Keen Strike</strong> (Lv 9): hits up to 4 enemies within 4 m, lowers Ruinous Blow's cooldown by 1 s on hit, restores 100 MP.</li></ul>
<p class="src">Sources: ${s('Ulfhednar','Oct 9','2:48')}; ${s('Kanon','Oct 9','9:20')}.</p><h2>Rotation and stat priority</h2><p>No ordered list was readable on screen (not confirmed).</p>` },
 { slug:'templar', name:'Templar', blurb:'Longsword tank class; Judgment and Punishment tooltips.',
   body:`<h2>Skill tooltips seen</h2><ul><li><strong>Judgment</strong> (Lv 10 +6): damage within 4 m plus extra damage on hit, 5 Stagger Gauge damage.</li><li><strong>Punishment</strong> (Lv 10 +6): hits up to 4 enemies within 4 m, damage over time every 0.5 s for 3 s, +30% Skill Speed, MP 200, 30 s cooldown, 20 m range, Longsword.</li></ul>
<p class="src">Sources: ${s('Xia','Oct 9','1:52')}; ${s('StingKnight','Oct 10','2:00')}.</p><h2>Rotation and stat priority</h2><p>(not confirmed)</p>` },
 { slug:'assassin', name:'Assassin', blurb:'Dagger class; back-attack and Stagger follow-up tooltips.',
   body:`<h2>Skill tooltips seen</h2><ul><li><strong>Ambush</strong>: +30% damage as a back attack, absorbs 3% HP, engraves 2 Insignias for 10 s, MP 100, 10 s cooldown.</li><li><strong>Storm Rampage</strong>: hits a target afflicted with Stagger within 4 m, absorbs 5% HP, restores 120 MP on hit, lands as Multi-Hit, Dagger.</li></ul>
<p class="src">Sources: Shikku (video posted Oct 9), 5:08; ${s('Nellan97','Oct 10','7:58')}.</p><h2>Rotation and stat priority</h2><p>(not confirmed)</p>` },
 { slug:'spiritmaster', name:'Spiritmaster', blurb:'Water and spirit caster; Cold Shock tooltip.',
   body:`<h2>Skill tooltip seen</h2><ul><li><strong>Cold Shock</strong> (Lv 10 +6): Water damage within 20 m, restores 100 MP, +50% Multi-Hit chance.</li></ul>
<p>Some sites list this class under another name; the global naming is (not confirmed).</p>
<p class="src">Source: 스토리텔러 (Storyteller) (video posted Oct 10), 2:24.</p><h2>Rotation and stat priority</h2><p>(not confirmed)</p>` },
];
