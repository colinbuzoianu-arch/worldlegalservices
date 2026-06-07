import { pillars } from '@/lib/content';
import PillarClient from '@/components/PillarClient';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

export function generateStaticParams() {
  return ['en', 'de', 'ro'].flatMap(locale =>
    pillars.map(p => ({ locale, pillar: p.slug }))
  );
}

export default async function PillarPage({
  params,
}: {
  params: Promise<{ locale: string; pillar: string }>;
}) {
  const { locale, pillar: pillarSlug } = await params;
  setRequestLocale(locale);
  const pillar = pillars.find(p => p.slug === pillarSlug);
  if (!pillar) return notFound();
  return <PillarClient pillar={pillar} />;
}
