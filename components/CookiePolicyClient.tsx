'use client';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

export default function CookiePolicyClient() {
  const locale = useLocale();
  const t = useTranslations('cookiePolicy');

  const cookies = [
    { name: t('cookie1Name'), purpose: t('cookie1Purpose'), duration: t('cookie1Duration') },
    { name: t('cookie2Name'), purpose: t('cookie2Purpose'), duration: t('cookie2Duration') },
  ];

  return (
    <>
      <section className="about-header" style={{ borderBottom: '1px solid var(--border)', padding: '80px 48px 64px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ display: 'inline-block', width: 28, height: 1, background: 'var(--gold)' }} />
          {t('sectionLabel')}
        </div>
        <h1 className="about-h1" style={{ fontFamily: "'Playfair Display',serif", fontSize: 48, fontWeight: 700, lineHeight: 1.1, color: 'var(--ink)', marginBottom: 24, maxWidth: 700 }}>
          {t('heading')}
        </h1>
        <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 21, fontWeight: 300, color: 'var(--ink-soft)', lineHeight: 1.65, maxWidth: 660, borderLeft: '2px solid var(--gold)', paddingLeft: 24 }}>
          {t('intro')}
        </p>
      </section>

      <section className="about-content" style={{ maxWidth: 900, margin: '0 auto', padding: '64px 48px' }}>
        <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 13, fontWeight: 300, color: 'var(--ink-muted)', fontStyle: 'italic', marginBottom: 48 }}>
          {t('lastUpdated')}
        </div>

        <div className="prose-wls">
          <h2>{t('whatHeading')}</h2>
          <p>{t('what')}</p>

          <h2>{t('weUseHeading')}</h2>
          <p>{t('weUse')}</p>

          <h2>{t('analyticsHeading')}</h2>
          <p>{t('analyticsDesc')}</p>
        </div>

        {/* COOKIES TABLE */}
        <div style={{ margin: '32px 0 48px', border: '1px solid var(--border)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr 120px', background: 'var(--cream)', borderBottom: '1px solid var(--border)', padding: '12px 24px' }}>
            {[t('cookiesTableName'), t('cookiesTablePurpose'), t('cookiesTableDuration')].map((h, i) => (
              <div key={i} style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>{h}</div>
            ))}
          </div>
          {cookies.map((c, i) => (
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '180px 1fr 120px', padding: '16px 24px', borderBottom: i < cookies.length - 1 ? '1px solid var(--border-soft)' : 'none', alignItems: 'start' }}>
              <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, fontWeight: 600, color: 'var(--ink)', wordBreak: 'break-all' }}>{c.name}</div>
              <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 14, fontWeight: 300, color: 'var(--ink-soft)', lineHeight: 1.65, paddingRight: 16 }}>{c.purpose}</div>
              <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 14, fontWeight: 300, color: 'var(--ink-muted)' }}>{c.duration}</div>
            </div>
          ))}
        </div>

        <div className="prose-wls">
          <h2>{t('controlHeading')}</h2>
          <p>{t('control1')}</p>
          <p>{t('control2')}</p>

          <h2>{t('thirdPartyHeading')}</h2>
          <p>{t('thirdParty')}</p>

          <h2>{t('changesHeading')}</h2>
          <p>{t('changes')}</p>

          <h2>{t('contactHeading')}</h2>
          <p>{t('contact')}</p>
        </div>

        <div style={{ marginTop: 48, paddingTop: 32, borderTop: '1px solid var(--border)' }}>
          <Link href={`/${locale}`} style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none' }}>
            {t('backToHome')}
          </Link>
        </div>
      </section>
    </>
  );
}
