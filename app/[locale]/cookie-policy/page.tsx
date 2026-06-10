import { setRequestLocale } from 'next-intl/server';
import CookiePolicyClient from '@/components/CookiePolicyClient';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }, { locale: 'ro' }];
}

export default async function CookiePolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <CookiePolicyClient />;
}
