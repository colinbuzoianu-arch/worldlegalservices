import { getBriefingsList } from '@/lib/briefings';
import BriefingsListClient from '@/components/BriefingsListClient';
import { setRequestLocale } from 'next-intl/server';

export default async function BriefingsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const briefings = getBriefingsList();
  return <BriefingsListClient briefings={briefings} />;
}
