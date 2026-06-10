import { setRequestLocale } from 'next-intl/server';
import CookiesClient from '@/components/CookiesClient';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }, { locale: 'ro' }];
}

export default async function CookiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CookiesClient />;
}
