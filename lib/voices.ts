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
