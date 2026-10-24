export const official = {
  steam: 'https://store.steampowered.com/app/3393110/AION_2/',
  purple: 'https://purple.plaync.com/download',
  site: 'https://aion2.plaync.com/en-us/',
  notices: 'https://aion2.plaync.com/en-us/board/notice/list?redirect=false',
  launchFaq: 'https://lounge.plaync.com/feed/82939?country=US&locale=en-US',
  twitch: 'https://aion2.plaync.com/en-us/twitchdrops/index',
  twitchNotice: 'https://aion2.plaync.com/en-us/board/notice/view?articleId=6ab30633fa7da41c727d632c',
  couponNotice: 'https://aion2.plaync.com/en-us/board/notice/view?articleId=6abd5fe5fa7da41c727d63c6',
  couponRedeem: 'https://nshop.plaync.com/shop/aion2global/coupon?locale=en-US',
  launchRewards: 'https://aion2.plaync.com/en-us/board/notice/view?articleId=6abd4e20fa34c1011d6279e3',
};

export const screenshots = {
  worldBoss: {
    src: '/img/official/world-boss.jpg',
    alt: 'AION 2 characters fighting a giant creature beneath a red sky',
    source: official.steam,
  },
  blueCavern: {
    src: '/img/official/blue-cavern.jpg',
    alt: 'A dark AION 2 fortress beneath an orange sky',
    source: official.steam,
  },
  fortress: {
    src: '/img/official/raid-group.jpg',
    alt: 'An AION 2 character gliding above a bright tropical coastline',
    source: official.steam,
  },
  fieldCombat: {
    src: '/img/official/fortress.jpg',
    alt: 'An AION 2 character fighting colorful birdlike creatures',
    source: official.steam,
  },
  fireBoss: {
    src: '/img/official/field-combat.jpg',
    alt: 'An AION 2 character facing a fiery winged boss',
    source: official.steam,
  },
  raidGroup: {
    src: '/img/official/fire-boss.jpg',
    alt: 'A large AION 2 party facing a purple boss',
    source: official.steam,
  },
};

export const requirements = [
  ['Operating system', 'Windows 10 64-bit', 'Windows 10 or 11 64-bit'],
  ['Processor', 'AMD Ryzen 5 2600 or Intel Core i5-10500', 'AMD Ryzen 7 3700X or Intel Core i7-11700'],
  ['Memory', '8 GB RAM', '16 GB RAM'],
  ['Graphics', 'NVIDIA GeForce GTX 1050 Ti 4 GB', 'NVIDIA GeForce RTX 2070 8 GB'],
  ['DirectX', 'Version 12', 'Version 12'],
  ['Network', 'Broadband internet connection', 'Broadband internet connection'],
  ['Storage', '100 GB available space', '100 GB available space'],
  ['Additional note', 'SSD recommended; target shown as FHD / Very Low', 'SSD required in the Steam note; target shown as FHD / Low'],
];

export const classFacts = {
  gladiator: ['Melee', 'Greatsword', 'Early research'],
  templar: ['Melee', 'Longsword', 'Early research'],
  assassin: ['Melee', 'Dagger', 'Early research'],
  ranger: ['Ranged', 'Bow', 'Partial evidence'],
  sorcerer: ['Ranged', 'Spellcaster', 'Partial evidence'],
  spiritmaster: ['Ranged', 'Spirit caster', 'Early research'],
  cleric: ['Support', 'Magic', 'Partial evidence'],
  chanter: ['Support', 'Melee / support', 'Developing'],
};

// Search publication is an explicit route contract, not an incidental result of
// whichever page options happen to be passed to the builder.
export const indexRoutes = [
  '/',
  '/about',
  '/codes',
  '/contact',
  '/disclaimer',
  '/download',
  '/guides',
  '/guides/halloween-event',
  '/guides/launch-rewards',
  '/guides/server-transfer',
  '/privacy',
  '/status',
  '/system-requirements',
  '/terms',
  '/updates',
];

export const noindexRoutes = [
  '/builds',
  '/classes',
  '/classes/assassin',
  '/classes/chanter',
  '/classes/cleric',
  '/classes/gladiator',
  '/classes/ranger',
  '/classes/sorcerer',
  '/classes/spiritmaster',
  '/classes/templar',
  '/tier-list',
  '/guides/ariel-daevanion',
  '/guides/beginner-guide',
  '/guides/expedition-hard-mode',
  '/guides/twitch-drops',
];

// These otherwise-indexable pages answer a dated task. A build after the
// deadline fails closed to noindex until its content and deadline are reviewed.
export const indexLifecycle = {
  '/codes': {
    indexUntil: '2026-11-01T00:00:00Z',
    reason: 'Coupon availability snapshot must be rechecked at least weekly.',
  },
  '/guides/halloween-event': {
    indexUntil: '2026-11-04T23:00:00Z',
    reason: 'The Global Trick or Treat event ends with the Nov 3 PDT / Nov 4 CET maintenance.',
  },
  '/guides/server-transfer': {
    indexUntil: '2026-10-28T06:30:00Z',
    reason: 'Launch-server transfers close before the Oct 27 PDT / Oct 28 CET maintenance.',
  },
  '/guides/launch-rewards': {
    indexUntil: '2026-12-09T07:30:00Z',
    reason: 'The final reward mail expires Dec 8 at 23:30 PST.',
  },
};
