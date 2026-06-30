import { briefings, getBriefingBySlug } from '@/lib/briefings';
import BriefingClient from '@/components/BriefingClient';
import { getBriefingContent } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

export function generateStaticParams() {
  return ['en', 'de', 'ro'].flatMap(locale =>
    briefings.map(b => ({ locale, slug: b.slug }))
  );
}

export default async function BriefingPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const briefing = getBriefingBySlug(slug);
  if (!briefing) return notFound();
  const content = await getBriefingContent(slug, locale);
  return <BriefingClient briefing={briefing} content={content} />;
}
