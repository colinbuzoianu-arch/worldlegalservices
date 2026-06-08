import { setRequestLocale } from 'next-intl/server';
import SupportClient from '@/components/SupportClient';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }, { locale: 'ro' }];
}

export default async function SupportPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <SupportClient />;
}
