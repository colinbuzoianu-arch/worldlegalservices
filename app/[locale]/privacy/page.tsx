import { setRequestLocale } from 'next-intl/server';
import PrivacyClient from '@/components/PrivacyClient';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }, { locale: 'ro' }];
}

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <PrivacyClient />;
}
