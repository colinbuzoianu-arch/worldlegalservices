'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

export default function CookieBanner() {
  const locale = useLocale();
  const t = useTranslations('cookieBanner');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('wls-cookies-accepted')) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem('wls-cookies-accepted', '1');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 200,
      background: 'var(--ink)', borderTop: '1px solid rgba(255,255,255,0.08)',
      padding: '16px 32px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: 24,
    }}>
      <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 14, fontWeight: 300, color: 'rgba(254,252,248,0.65)', lineHeight: 1.6 }}>
        {t('text')}{' '}
        <Link href={`/${locale}/cookie-policy`} style={{ color: 'var(--gold)', textDecoration: 'none' }}>
          {t('policyLink')}
        </Link>
      </div>
      <div style={{ display: 'flex', gap: 10, flexShrink: 0 }}>
        <button onClick={accept} style={{
          fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 600,
          letterSpacing: '0.15em', textTransform: 'uppercase',
          background: 'var(--gold)', color: 'var(--ink)', border: 'none',
          padding: '8px 20px', cursor: 'pointer',
        }}>
          {t('accept')}
        </button>
        <button onClick={() => setVisible(false)} style={{
          fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 600,
          letterSpacing: '0.15em', textTransform: 'uppercase',
          background: 'transparent', color: 'rgba(254,252,248,0.4)',
          border: '1px solid rgba(254,252,248,0.15)',
          padding: '8px 20px', cursor: 'pointer',
        }}>
          {t('dismiss')}
        </button>
      </div>
    </div>
  );
}
