import { getVoicesList } from '@/lib/voices';
import VoicesListClient from '@/components/VoicesListClient';
import { setRequestLocale } from 'next-intl/server';

export default async function VoicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const voices = getVoicesList();
  return <VoicesListClient voices={voices} />;
}
