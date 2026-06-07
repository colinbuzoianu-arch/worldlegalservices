import { pillars } from "@/lib/content";
import PillarClient from "@/components/PillarClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return pillars.map(p => ({ pillar: p.slug }));
}

export default async function PillarPage({ params }: { params: Promise<{ pillar: string }> }) {
  const { pillar: pillarSlug } = await params;
  const pillar = pillars.find(p => p.slug === pillarSlug);
  if (!pillar) return notFound();
  return <PillarClient pillar={pillar} />;
}
