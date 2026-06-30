export type Briefing = {
  slug: string;
  date: string;
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
    slug: "welcome-briefings",
    date: "2026-06-30",
    titles: {
      en: "Introducing WLS Briefings: Current-Affairs Analysis Alongside the Founding Documents",
      ro: "Introducere în WLS Briefings: Analiză de actualitate alături de documentele fondatoare",
      de: "WLS Briefings: Aktuelle Analysen neben den Gründungsdokumenten",
    },
    excerpts: {
      en: "Briefings are shorter, faster analyses of current governance events — legal rulings, policy decisions, institutional failures — anchored to the longer arguments in the pillar articles.",
      ro: "Briefings-urile sunt analize mai scurte și mai rapide ale evenimentelor actuale de guvernanță — hotărâri juridice, decizii de politică, eșecuri instituționale — ancorate în argumentele mai lungi din articolele-pilon.",
      de: "Briefings sind kürzere, schnellere Analysen aktueller Governance-Ereignisse — Gerichtsurteile, Politikentscheidungen, institutionelle Versagen — verankert in den längeren Argumenten der Säulenartikel.",
    },
    readingTime: "4 min",
    tags: ["Platform", "About"],
  },
];

export function getBriefingBySlug(slug: string): Briefing | undefined {
  return briefings.find(b => b.slug === slug);
}

export function getBriefingsList(): Briefing[] {
  return [...briefings].sort((a, b) => b.date.localeCompare(a.date));
}
