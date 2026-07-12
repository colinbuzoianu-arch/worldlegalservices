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
    slug: 'geneva-2026',
    date: '2026-07-12',
    pinned: false,
    titles: {
      en: 'Geneva 2026: The Right Room, the Wrong Question',
      ro: 'Geneva 2026: sala potrivită, întrebarea greșită',
      de: 'Genf 2026: Der richtige Raum, die falsche Frage',
    },
    excerpts: {
      en: 'The first UN-mandated Global Dialogue on AI Governance closed in Geneva. It established the room and gave every government a seat. It did not address the technical architecture of the systems it exists to govern.',
      ro: 'Primul Dialog Global privind Guvernanța AI mandatat de ONU s-a încheiat la Geneva. A stabilit sala și a dat fiecărui guvern un loc. Nu a abordat arhitectura tehnică a sistemelor pentru a căror guvernanță există.',
      de: 'Der erste von den Vereinten Nationen mandatierte Globale Dialog zur KI-Governance endete in Genf. Er etablierte den Raum und gab jeder Regierung einen Sitz. Er befasste sich nicht mit der technischen Architektur der Systeme, für deren Regulierung er existiert.',
    },
    readingTime: '7 min',
    tags: ['UN', 'AI Governance', 'Geneva Dialogue', 'Institutional Design'],
    relatedPillarArticle: {
      pillar: 'ai-governance',
      slug: 'the-stability-property',
    },
  },
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
