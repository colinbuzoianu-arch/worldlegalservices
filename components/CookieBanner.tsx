'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useLocale } from 'next-intl';

function dispatch() {
  window.dispatchEvent(new Event('wls-consent-update'));
}

export default function CookieBanner() {
  const locale = useLocale();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem('wls-analytics-consent')) {
      setVisible(true);
    }
  }, []);

  function accept() {
    localStorage.setItem('wls-analytics-consent', 'accepted');
    dispatch();
    setVisible(false);
  }

  function reject() {
    localStorage.setItem('wls-analytics-consent', 'rejected');
    dispatch();
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 200,
      background: 'var(--cream)',
      borderTop: '2px solid var(--gold)',
      padding: '24px 40px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      gap: 32,
      boxShadow: '0 -4px 24px rgba(26,23,16,0.08)',
    }}>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 8 }}>
          Cookie Consent
        </div>
        <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 15, fontWeight: 300, color: 'var(--ink-soft)', lineHeight: 1.6 }}>
          We use Google Analytics to understand how this platform is used. No personal data is sold or shared.{' '}
          <Link href={`/${locale}/privacy`} style={{ color: 'var(--gold)', textDecoration: 'none' }}>Privacy Policy</Link>
          {' · '}
          <Link href={`/${locale}/cookies`} style={{ color: 'var(--gold)', textDecoration: 'none' }}>Cookie Policy</Link>
        </div>
      </div>
      <div style={{ display: 'flex', gap: 12, flexShrink: 0 }}>
        <button
          onClick={accept}
          style={{
            fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 600,
            letterSpacing: '0.15em', textTransform: 'uppercase',
            background: 'var(--ink)', color: 'var(--warm-white)',
            border: 'none', padding: '10px 24px', cursor: 'pointer',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'var(--ink-mid)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'var(--ink)')}
        >
          Accept Analytics
        </button>
        <button
          onClick={reject}
          style={{
            fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 600,
            letterSpacing: '0.15em', textTransform: 'uppercase',
            background: 'transparent', color: 'var(--ink-soft)',
            border: '1px solid var(--border)', padding: '10px 24px', cursor: 'pointer',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => { (e.currentTarget.style.borderColor = 'var(--ink-soft)'); (e.currentTarget.style.color = 'var(--ink)'); }}
          onMouseLeave={e => { (e.currentTarget.style.borderColor = 'var(--border)'); (e.currentTarget.style.color = 'var(--ink-soft)'); }}
        >
          Reject Non-Essential
        </button>
      </div>
    </div>
  );
}
