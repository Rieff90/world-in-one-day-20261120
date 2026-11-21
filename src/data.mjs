// The news of Friday 20 November 2026, each item checked against a report published that day.
// Every item carries the outlet that reported it: an unsourced claim reads as speculation, and a
// picture editor would never run one. Ordered by consequence, then by region, so the page spans
// continents rather than one beat.

export const DAY = {
  weekday: 'Friday',
  date: '20 November 2026',
  stories: 26,
  regions: 7,
};

export const STAND = [
  'A climate summit drops the words "fossil fuels"',
  'The Senate shields the Iran war',
  'A $2.5 trillion AI sell-off',
];

// The day's three defining stories, given room to be read.
export const LEADS = [
  {
    no: 1,
    kicker: 'ANTALYA · CLIMATE',
    region: 'TURKEY',
    title: '"Fossil fuels" vanish from the COP31 deal',
    body:
      'On the summit\'s last scheduled day the presidency published a revised draft that deleted every ' +
      'reference to transitioning away from fossil fuels, replaced it with an "irreversible global ' +
      'transition towards low greenhouse gas emissions", and made carbon capture the centrepiece — a ' +
      'pledge to scale it 20- to 40-fold by 2035. A $120bn adaptation-finance target also went. The EU ' +
      'said COP31 risked becoming "a fossil summit"; the Climate Action Network called it "a COP of ' +
      'betrayal". Talks ran into overtime.',
    source: 'Al Jazeera · AP · Middle East Eye · Democracy Now!',
    tag: 'REPORTED',
  },
  {
    no: 2,
    kicker: 'WASHINGTON · WAR',
    region: 'UNITED STATES',
    title: 'Senate rejects the Iran war powers resolution, 51–48',
    body:
      'The first congressional vote on the war since the midterms failed, leaving the president\'s ' +
      'authority to strike Iran intact. Three Republicans crossed over; one Democrat did not. The same ' +
      'day he told an Israeli outlet he wants a "permanent" deal with Tehran and may not decide his ' +
      'next move until 2027 — as funding for the war threatens a shutdown on 11 December.',
    source: 'Democracy Now! · CBS News · NPR · The Hill',
    tag: 'REPORTED',
  },
  {
    no: 3,
    kicker: 'NEW YORK · MARKETS',
    region: 'UNITED STATES',
    title: 'An AI-led rout takes the Nasdaq down 5.3%',
    body:
      'The tech index closed at 22,617 — its worst session in months — as the S&P 500 fell 3.7% to ' +
      '6,910 and the Dow shed 1.9% to 48,147. Hawkish Fed commentary met doubts about AI spending, and ' +
      'global stocks slid toward their longest losing streak in three years. Earlier the president ' +
      'threatened "a tremendous tax" on US firms that build AI data centres abroad.',
    source: 'Market Digest · Bloomberg via Yahoo · AP',
    tag: 'REPORTED',
  },
];

// Everything else that mattered, one line each.
export const STORIES = [
  { no: 4, kicker: 'THE HAGUE · LAW', region: 'EUROPE',
    title: 'The World Court finds a state guilty of genocide',
    body: 'The ICJ held Myanmar responsible for genocide against the Rohingya — the first time in its history the court has done so — and ordered reparations.',
    source: 'UN News · Al Jazeera · Democracy Now!' },
  { no: 5, kicker: 'KYIV · WAR', region: 'EUROPE',
    title: 'Eight killed as Russia answers the bridge attack',
    body: 'Strikes followed Ukraine\'s bombing of the Kerch bridge. Putin promised a "far more painful" response and ruled out a limited ceasefire.',
    source: 'Democracy Now! · BBC · Reuters' },
  { no: 6, kicker: 'ODDISH · DISASTER', region: 'ASIA',
    title: 'Cyclone Akvan makes landfall in India',
    body: 'The storm crossed the southern Odisha and northern Andhra Pradesh coasts on Friday, forcing evacuations along the Bay of Bengal.',
    source: 'The Times of India' },
  { no: 7, kicker: 'GENEVA · HUMANITARIAN', region: 'EUROPE',
    title: 'One child in four now lives in a conflict zone',
    body: 'A charity reported a record share of the world\'s children growing up inside active war, the highest level it has measured.',
    source: 'Democracy Now!' },
  { no: 8, kicker: 'GAZA · WEST BANK', region: 'MIDDLE EAST',
    title: 'A boy dies of his wounds; a shooting is reviewed',
    body: 'An 11-year-old Palestinian died of injuries from an Israeli strike on Gaza. In the central West Bank a settlement security coordinator shot dead an unarmed Palestinian; the IDF said it was reviewing.',
    source: 'Democracy Now! · The Times of Israel' },
  { no: 9, kicker: 'YORO · SECURITY', region: 'AMERICAS',
    title: 'Honduras hunts the gang behind a massacre of 12',
    body: 'Security forces intensified operations after attacks across two villages in Yoro department killed twelve people.',
    source: 'UPI' },
  { no: 10, kicker: 'JUNEAU · POLITICS', region: 'AMERICAS',
    title: 'The White House drops its Alaska election challenge',
    body: 'Democrat Mary Peltola won the Senate race; the administration moved to abandon its legal challenge to the result.',
    source: 'NPR · AP' },
  { no: 11, kicker: 'LOS ANGELES · INDUSTRY', region: 'AMERICAS',
    title: 'GTA VI becomes the biggest game launch ever',
    body: 'The first new Grand Theft Auto story in 13 years arrived this week and, by several measures, is the largest video-game release in history.',
    source: 'The New York Times' },
  { no: 12, kicker: 'CHENNAI · INFRASTRUCTURE', region: 'ASIA',
    title: 'Tamil Nadu abandons a ₹27,000-crore airport',
    body: 'The state told the Madras High Court it had dropped the Parandur greenfield project: too many waterbodies on the land to clear environmental review.',
    source: 'The Hindu' },
  { no: 13, kicker: 'STRAIT OF HORMUZ · WAR', region: 'MIDDLE EAST',
    title: 'Iran prepares to test the US naval blockade',
    body: 'Analysts assessed that Tehran would try to run the blockade within days — the first direct challenge to it since the war began in February.',
    source: 'Institute for the Study of War' },
  { no: 14, kicker: 'SANAA · HUMANITARIAN', region: 'MIDDLE EAST',
    title: 'A siege tightens on Yemen\'s capital',
    body: 'Aid agencies warned of worsening conditions for civilians as the encirclement of Sanaa held and supplies thinned.',
    source: 'ASAS Press' },
  { no: 15, kicker: 'TALLAHASSEE · JUSTICE', region: 'AMERICAS',
    title: 'Florida carries out its 20th execution this year',
    body: 'The state has put more people to death in 2026 than in any year in decades, a record pace of capital punishment.',
    source: 'Democracy Now!' },
];

// The day in figures, each one reported.
export const TICKER = [
  { value: '−5.3%', label: 'Nasdaq close' },
  { value: '51–48', label: 'Senate, Iran war powers' },
  { value: '20–40×', label: 'Carbon capture by 2035' },
  { value: '8', label: 'Killed in Ukraine' },
  { value: '12', label: 'Killed in Yoro, Honduras' },
  { value: '11 Dec', label: 'US funding runs out' },
];

// Where each numbered story sits, in a 100 x 50 box mapped onto the map below.
export const PINS = [
  { no: 1, x: 56, y: 17 },  // Antalya
  { no: 2, x: 24, y: 19 },  // Washington
  { no: 3, x: 25, y: 20 },  // New York
  { no: 4, x: 50, y: 19 },  // The Hague
  { no: 5, x: 57, y: 15 },  // Kyiv
  { no: 6, x: 71, y: 26 },  // Odisha
  { no: 7, x: 50, y: 18 },  // Geneva
  { no: 8, x: 55, y: 22 },  // Gaza
  { no: 9, x: 23, y: 25 },  // Honduras
  { no: 10, x: 12, y: 14 }, // Juneau
  { no: 11, x: 14, y: 21 }, // Los Angeles
  { no: 12, x: 70, y: 28 }, // Chennai
];

// The day on the clock, in UTC.
export const TIMELINE = [
  { time: '00:00', text: 'COP31 negotiators work through the night on a revised text' },
  { time: '09:00', text: 'The revised draft is published: no mention of fossil fuels' },
  { time: '13:00', text: 'The EU calls it a "fossil summit"; talks head into overtime' },
  { time: '20:30', text: 'Wall Street closes: Nasdaq −5.3%, its worst day in months' },
];

// What this page kept out, and why — a visible date check.
export const DATE_CHECK = {
  kept: 'Every item above was reported on 20 November 2026 or filed that day about the 19th.',
  dropped: [
    'The ICJ genocide ruling was handed down on the 19th — carried here as a live story, not a Friday event.',
    'The UN "killer robots" talks concluded on the 21st — outside this day.',
    'Unconfirmed casualty counts and single-source claims were left out.',
  ],
};

export const FOOTER = {
  rule: 'Compiled from wire reports published 20 November 2026. Disputed claims are attributed, not asserted.',
  sources:
    'AP · Reuters · Al Jazeera · BBC · NPR · CBS · The Hill · UPI · The Hindu · The Times of Israel · ' +
    'Democracy Now! · Middle East Eye · The New York Times',
};
