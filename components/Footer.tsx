'use client';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

export default function Footer() {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <footer style={{ borderTop: '1px solid var(--border)', marginTop: 80 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '48px 48px 40px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 14, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink)', marginBottom: 8 }}>
              World Legal Services
            </div>
            <div style={{ fontFamily: "'Crimson Pro', serif", fontSize: 14, fontWeight: 300, color: 'var(--ink-soft)', lineHeight: 1.7, maxWidth: 280 }}>
              {t('footer.description')}
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>{t('footer.pillarsLabel')}</div>
            {[
              { href: `/${locale}/ai-governance`, label: t('nav.aiGovernance') },
              { href: `/${locale}/robotics-law`, label: t('nav.roboticsLaw') },
              { href: `/${locale}/eu-critique`, label: t('nav.euCritique') },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ display: 'block', fontFamily: "'Crimson Pro', serif", fontSize: 14, fontWeight: 300, color: 'var(--ink-soft)', textDecoration: 'none', marginBottom: 8 }}>{l.label}</Link>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>&nbsp;</div>
            {[
              { href: `/${locale}/peace-frameworks`, label: t('nav.peaceFrameworks') },
              { href: `/${locale}/eastern-europe`, label: t('nav.easternEurope') },
              { href: `/${locale}/about`, label: t('nav.about') },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ display: 'block', fontFamily: "'Crimson Pro', serif", fontSize: 14, fontWeight: 300, color: 'var(--ink-soft)', textDecoration: 'none', marginBottom: 8 }}>{l.label}</Link>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>{t('footer.platformLabel')}</div>
            <div style={{ fontFamily: "'Crimson Pro', serif", fontSize: 13, fontWeight: 300, color: 'var(--ink-muted)', lineHeight: 1.7 }}>
              {t('footer.learningPlatform')}<br />
              <span style={{ fontSize: 11, letterSpacing: '0.1em', color: 'var(--gold)', textTransform: 'uppercase' }}>{t('footer.comingSoon')}</span>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid var(--border-soft)', paddingTop: 24, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 8 }}>
          <div style={{ fontFamily: "'Crimson Pro', serif", fontSize: 13, fontWeight: 300, color: 'var(--ink-muted)' }}>
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </div>
          <Link href={`/${locale}/cookie-policy`} style={{ fontFamily: "'Crimson Pro', serif", fontSize: 13, fontWeight: 300, color: 'var(--ink-muted)', textDecoration: 'none' }}>
            {t('footer.cookiePolicy')}
          </Link>
          <div style={{ fontFamily: "'Crimson Pro', serif", fontSize: 13, fontWeight: 300, color: 'var(--ink-muted)' }}>
            {t('footer.tagline')}
          </div>
        </div>
      </div>
    </footer>
  );
}
