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
  {
    slug: 'the-god-question',
    date: '2026-07-17',
    pinned: false,
    titles: {
      en: 'When the Machine Asks the God Question: Artificial Intelligence, Religion, and the Moral Architecture of Governance',
      ro: 'Când mașina pune întrebarea despre Dumnezeu: Inteligența artificială, religia și arhitectura morală a guvernanței',
      de: 'Wenn die Maschine die Gottesfrage stellt: Künstliche Intelligenz, Religion und die moralische Architektur der Governance',
    },
    excerpts: {
      en: 'AI governance has largely proceeded as though the moral questions it must answer have no history — as though a compliance checklist could stand in for the millennia of reflection religious and philosophical traditions have devoted to dignity, justice, and the common good. Four thinkers at the intersection of AI and religion — Lennox, Harari, O’Gieblyn, Delio — show why that omission produces governance too thin for what it is being asked to do.',
      ro: 'Guvernanța AI s-a desfășurat în mare parte ca și cum întrebările morale la care trebuie să răspundă nu ar avea istorie — ca și cum o listă de conformitate ar putea înlocui milenii de reflecție pe care tradițiile religioase și filosofice le-au dedicat demnității, dreptății și binelui comun. Patru gânditori aflați la intersecția dintre AI și religie — Lennox, Harari, O’Gieblyn, Delio — arată de ce această omisiune produce o guvernanță prea subțire pentru ceea ce i se cere să facă.',
      de: 'Die KI-Governance-Debatte ist weitgehend so geführt worden, als hätten die moralischen Fragen, die sie beantworten muss, keine Geschichte — als könnte eine Compliance-Checkliste die Jahrtausende der Reflexion ersetzen, die religiöse und philosophische Traditionen der Würde, der Gerechtigkeit und dem Gemeinwohl gewidmet haben. Vier Denker an der Schnittstelle von KI und Religion — Lennox, Harari, O’Gieblyn, Delio — zeigen, warum diese Auslassung eine Governance hervorbringt, die zu dünn ist für das, was von ihr verlangt wird.',
    },
    readingTime: '14 min',
    tags: ['AI Governance', 'Religion', 'Moral Philosophy'],
    relatedPillarArticle: {
      pillar: 'ai-governance',
      slug: 'ai-parliament',
    },
  },
  {
    slug: 'the-unelected',
    date: '2026-07-18',
    pinned: false,
    titles: {
      en: 'The Unelected: How Concentrated Power Governs the World and Why AI May Be the Only Force That Can Break It',
      ro: 'Nealeșii: Cum guvernează puterea concentrată lumea și de ce inteligența artificială ar putea fi singura forță capabilă să o rupă',
      de: 'Die Ungewählten: Wie konzentrierte Macht die Welt regiert und warum KI die einzige Kraft sein könnte, die sie bricht',
    },
    excerpts: {
      en: 'Global billionaire wealth hit $18.3 trillion in 2025 while a quarter of humanity went without enough to eat — not through conspiracy, but through documented, undisputed channels of lobbying, media ownership, campaign finance, and debt. This article asks whether AI, if built independent of the power it would need to check, could be the first accountability mechanism history has produced that concentrated wealth cannot capture.',
      ro: 'Bogăția miliardarilor la nivel mondial a atins 18,3 trilioane de dolari în 2025, în timp ce un sfert din omenire nu a avut suficientă hrană — nu printr-o conspirație, ci prin canale documentate și necontestate de lobby, proprietate mediatică, finanțare a campaniilor și datorie. Articolul întreabă dacă inteligența artificială, construită independent de puterea pe care ar trebui să o verifice, ar putea fi primul mecanism de responsabilizare din istorie pe care bogăția concentrată nu îl poate captura.',
      de: 'Das globale Milliardärsvermögen erreichte 2025 18,3 Billionen Dollar, während ein Viertel der Menschheit nicht genug zu essen hatte — nicht durch Verschwörung, sondern durch dokumentierte, unbestrittene Kanäle aus Lobbyarbeit, Medienbesitz, Wahlkampffinanzierung und Verschuldung. Der Artikel fragt, ob KI — unabhängig von der Macht aufgebaut, die sie kontrollieren soll — der erste Rechenschaftsmechanismus der Geschichte sein könnte, den konzentrierter Reichtum nicht erobern kann.',
    },
    readingTime: '14 min',
    tags: ['AI Governance', 'Inequality', 'Accountability'],
    relatedPillarArticle: {
      pillar: 'ai-governance',
      slug: 'ai-parliament',
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
