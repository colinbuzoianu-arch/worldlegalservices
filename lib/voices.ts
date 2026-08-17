export type Voice = {
  slug: string;
  date: string;
  author: string;
  titles: { en: string; ro: string; de: string };
  excerpts: { en: string; ro: string; de: string };
  readingTime: string;
  tags: string[];
};

export const voices: Voice[] = [
  {
    slug: 'gratkorn',
    date: '2026-08-17',
    author: 'Colin Buzoianu',
    titles: {
      de: 'Gratkorn',
      ro: 'Gratkorn',
      en: 'Gratkorn',
    },
    excerpts: {
      de: 'Selbst das Gras war grüner in Österreich. Eine Kindheitserinnerung an den ersten Grenzübertritt, eine Gastfamilie, ein rotes Auto und eine Waldkapelle — die erste Begegnung mit einer anderen Welt.',
      ro: 'Chiar și iarba era mai verde în Austria. O amintire din copilărie despre prima trecere a graniței, o familie-gazdă, o mașină roșie și o capelă în pădure — prima întâlnire cu o altă lume.',
      en: 'Even the grass was greener in Austria. A childhood memory of the first border crossing, a host family, a red car, and a forest chapel — the first encounter with another world.',
    },
    readingTime: '6 min',
    tags: ['Personal Essay', 'Memory', 'Austria'],
  },
  {
    slug: 'colin-als-banater-schwabe',
    date: '2026-08-10',
    author: 'Colin Buzoianu',
    titles: {
      de: 'Colin als Banater Schwabe',
      ro: 'Colin ca șvab bănățean',
      en: 'Colin as a Banat Swabian',
    },
    excerpts: {
      de: 'Deutsch war nie eine Sprache, die ich gelernt habe. Es war eine Sprache, in der ich geworden bin. Ein persönlicher Essay über Sprache als Erbstück, Theater als Zuhause und das Leben zwischen zwei Mentalitäten.',
      ro: 'Germana n-a fost niciodată o limbă pe care am învățat-o. A fost o limbă în care am devenit. Un eseu personal despre limbă ca moștenire, teatru ca acasă și viața între două mentalități.',
      en: 'German was never a language I learned. It was a language in which I became. A personal essay about language as inheritance, theatre as home, and life between two mentalities.',
    },
    readingTime: '12 min',
    tags: ['Personal Essay', 'Banat', 'Identity'],
  },
];

export function getVoiceBySlug(slug: string): Voice | undefined {
  return voices.find(v => v.slug === slug);
}

export function getVoicesList(): Voice[] {
  return [...voices].sort((a, b) => b.date.localeCompare(a.date));
}
