import { voices, getVoiceBySlug } from '@/lib/voices';
import VoiceClient from '@/components/VoiceClient';
import { getVoiceContent } from '@/lib/markdown';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';

export function generateStaticParams() {
  return ['en', 'de', 'ro'].flatMap(locale =>
    voices.map(v => ({ locale, slug: v.slug }))
  );
}

export default async function VoicePage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const voice = getVoiceBySlug(slug);
  if (!voice) return notFound();
  const content = await getVoiceContent(slug, locale);
  return <VoiceClient voice={voice} content={content} />;
}
