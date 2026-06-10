'use client';
import { useEffect, useState } from 'react';
import Script from 'next/script';

export default function Analytics() {
  const [consented, setConsented] = useState(false);

  useEffect(() => {
    const check = () => setConsented(localStorage.getItem('wls-analytics-consent') === 'accepted');
    check();
    window.addEventListener('wls-consent-update', check);
    return () => window.removeEventListener('wls-consent-update', check);
  }, []);

  if (!consented) return null;

  return (
    <>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-YCDHWVYJGL"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-YCDHWVYJGL');`}
      </Script>
    </>
  );
}
