import { pillars } from "@/lib/content";
import PillarClient from "@/components/PillarClient";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return pillars.map(p => ({ pillar: p.slug }));
}

export default function PillarPage({ params }: { params: { pillar: string } }) {
  const pillar = pillars.find(p => p.slug === params.pillar);
  if (!pillar) return notFound();
  return <PillarClient pillar={pillar} />;
}
