import type { Metadata } from 'next';
import Script from 'next/script';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import CookieBanner from '@/components/CookieBanner';
import '../globals.css';

export const metadata: Metadata = {
  title: 'World Legal Services — Rethinking the Rules That Govern Us',
  description: 'An independent platform examining law, artificial intelligence, and the future of governance — from a Central European perspective.',
  icons: { icon: '/logo.png', apple: '/logo.png' },
  openGraph: {
    title: 'World Legal Services',
    description: 'Rethinking the Rules That Govern Us',
    url: 'https://worldlegalservice.com',
    siteName: 'World Legal Services',
    locale: 'en_US',
    type: 'website',
  },
};

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'de' }, { locale: 'ro' }];
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-YCDHWVYJGL"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-YCDHWVYJGL');
          `}
        </Script>
      </head>
      <body>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Nav />
          <main>{children}</main>
          <Footer />
          <CookieBanner />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
