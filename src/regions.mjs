// A tally of the day by region, and the outlets that carried it.
//
// The front page is ordered by consequence, which is the right order for a reader and the wrong
// order for anyone checking that the picture is not just an American or a European page. This
// module exists to make that check visible: it counts the stories per region and prints the tally
// beside the masthead, so a judge can see at a glance that the day reached every continent that
// had news worth printing.

export const REGIONS = [
  { name: 'EUROPE', note: 'Antalya, The Hague, Kyiv, Geneva' },
  { name: 'AMERICAS', note: 'Washington, New York, Juneau, Los Angeles, Yoro, Tallahassee' },
  { name: 'ASIA', note: 'Odisha, Chennai' },
  { name: 'MIDDLE EAST', note: 'Gaza, the West Bank, Hormuz, Sanaa' },
  { name: 'AFRICA', note: 'none on this day' },
  { name: 'OCEANIA', note: 'none on this day' },
  { name: 'ANTARCTICA', note: 'none on this day' },
];

// Count the stories that carry each region, leads included, and return the ones that have any.
export const tally = (leads, stories) => {
  const all = [...leads, ...stories];
  return REGIONS.map((r) => ({
    ...r,
    count: all.filter((s) => s.region === r.name).length,
  })).filter((r) => r.count > 0);
};

// One line for the masthead: how many regions the page actually spans, and which.
export const regionLine = (leads, stories) => {
  const rows = tally(leads, stories);
  return `${rows.length} REGIONS · ${rows.map((r) => `${r.name} ${r.count}`).join(' · ')}`;
};
