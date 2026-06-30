export type Briefing = {
  slug: string;
  date: string;
  pinned?: boolean;
  titles: { en: string; ro: string; de: string };
  excerpts: { en: string; ro: string; de: string };
  readingTime: string;
  tags: string[];
  relatedPillarArticle?: {
    pillar: string;
    slug: string;
  };
};

export const briefings: Briefing[] = [
  {
    slug: 'the-capacity-question',
    date: '2026-06-30',
    pinned: true,
    titles: {
      en: 'The Capacity Question: Why “Human Fallback” Is Not a Plan',
      ro: 'Chestiunea capacității: de ce „rezerva umană” nu este un plan',
      de: 'Die Kompetenzfrage: Warum „menschlicher Fallback“ kein Plan ist',
    },
    excerpts: {
      en: 'The standard “human fallback” assurance in AI governance discussions names an outcome without specifying the conditions that keep it possible. Fifty years of human factors research shows those conditions erode under exactly the operational pattern AI deployment produces.',
      ro: 'Asigurarea standard „rezervă umană” din discuțiile despre guvernanța AI numeşte un rezultat fără a specifica condițiile care îl mențin posibil. Cincizeci de ani de cercetare în domeniul factorilor umani arată că acele condiții erodază exact sub tiparul operațional pe care îl produce implementarea AI.',
      de: 'Die Standard-Beruhigung „menschlicher Fallback“ in KI-Governance-Diskussionen benennt ein Ergebnis, ohne die Bedingungen zu spezifizieren, die es möglich halten. Fünfzig Jahre Humanfaktorenforschung zeigen, dass diese Bedingungen genau unter dem operativen Muster erodieren, das der KI-Einsatz erzeugt.',
    },
    readingTime: '7 min',
    tags: ['Human Oversight', 'AI Governance', 'Institutional Design'],
    relatedPillarArticle: {
      pillar: 'ai-governance',
      slug: 'the-stability-property',
    },
  },
];

export function getBriefingBySlug(slug: string): Briefing | undefined {
  return briefings.find(b => b.slug === slug);
}

export function getBriefingsList(): Briefing[] {
  return [...briefings].sort((a, b) => {
    if (a.pinned && !b.pinned) return -1;
    if (!a.pinned && b.pinned) return 1;
    return b.date.localeCompare(a.date);
  });
}
