'use client';
import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

const fundingKeys = ['research', 'platform', 'framework', 'independence'] as const;
const firewallKeys = ['item1', 'item2', 'item3', 'item4', 'item5'] as const;

export default function SupportClient() {
  const locale = useLocale();
  const t = useTranslations('support');

  return (
    <>
      {/* HEADER */}
      <section className="about-header" style={{ borderBottom: '1px solid var(--border)', padding: '80px 48px 64px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ display: 'inline-block', width: 28, height: 1, background: 'var(--gold)' }} />
          {t('sectionLabel')}
        </div>
        <h1 className="about-h1" style={{ fontFamily: "'Playfair Display',serif", fontSize: 48, fontWeight: 700, lineHeight: 1.1, color: 'var(--ink)', marginBottom: 24, maxWidth: 700 }}>
          {t('heading')}<br />
          <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>{t('headingEm')}</em>
        </h1>
        <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 21, fontWeight: 300, color: 'var(--ink-soft)', lineHeight: 1.65, maxWidth: 660, borderLeft: '2px solid var(--gold)', paddingLeft: 24 }}>
          {t('intro')}
        </p>
      </section>

      {/* MAIN CONTENT */}
      <section className="about-content" style={{ maxWidth: 900, margin: '0 auto', padding: '64px 48px' }}>
        <div className="prose-wls">
          <p>{t('body1')}</p>
          <p>{t('body2')}</p>
          <p>{t('body3')}</p>
          <p>{t('body4')}</p>
        </div>

        {/* WHAT YOUR SUPPORT FUNDS */}
        <div style={{ margin: '48px 0', border: '1px solid var(--border)' }}>
          <div style={{ padding: '24px 32px', borderBottom: '1px solid var(--border)', fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>
            {t('fundingLabel')}
          </div>
          {fundingKeys.map((key, i) => {
            const item = t.raw(`funding.${key}`) as { title: string; desc: string };
            return (
              <div key={key} className="support-funding-item" style={{ padding: '28px 32px', borderBottom: i < 3 ? '1px solid var(--border-soft)' : 'none', display: 'grid', gridTemplateColumns: '200px 1fr', gap: 32, alignItems: 'start' }}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 15, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.4, paddingTop: 2 }}>
                  {item.title}
                </div>
                <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 16, fontWeight: 300, color: 'var(--ink-soft)', lineHeight: 1.75 }}>
                  {item.desc}
                </div>
              </div>
            );
          })}
        </div>

        <div className="prose-wls">
          <p>{t('closingPara')}</p>
          <blockquote>
            &ldquo;{t('quote')}&rdquo;
          </blockquote>
          <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 15, fontWeight: 300, color: 'var(--ink-muted)', fontStyle: 'italic', marginTop: -8 }}>
            {t('attribution')}
          </p>
        </div>

        {/* SUPPORT CTA */}
        <div className="support-cta-grid" style={{ marginTop: 56, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--border)', border: '1px solid var(--border)' }}>
          <a
            href="https://buy.stripe.com/5kQ14p2Dgbbn8nWdZB9sk00"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', padding: '40px 36px', background: 'var(--ink)', textDecoration: 'none', cursor: 'pointer', transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = 'var(--ink-mid)'}
            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = 'var(--ink)'}
          >
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>
              {t('ctaSupport')}
            </div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 600, color: 'var(--warm-white)', marginBottom: 12, lineHeight: 1.3 }}>
              {t('ctaTitle')}
            </div>
            <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 15, fontWeight: 300, color: 'rgba(254,252,248,0.6)', lineHeight: 1.6, marginBottom: 28 }}>
              {t('ctaDesc')}
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              {t('ctaCta')}
            </div>
          </a>

          <div style={{ padding: '40px 36px', background: 'var(--cream)' }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>
              {t('firewallLabel')}
            </div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 16, fontWeight: 600, color: 'var(--ink)', marginBottom: 20, lineHeight: 1.4 }}>
              {t('firewallTitle')}
            </div>
            {firewallKeys.map((key, i) => (
              <div key={key} style={{ fontFamily: "'Crimson Pro',serif", fontSize: 14, fontWeight: 300, color: 'var(--ink-soft)', padding: '8px 0 8px 16px', borderBottom: i < 4 ? '1px solid var(--border-soft)' : 'none', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>–</span>
                {t(`firewall.${key}`)}
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM NOTE */}
        <div style={{ marginTop: 40, textAlign: 'center' }}>
          <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 14, fontWeight: 300, color: 'var(--ink-muted)', lineHeight: 1.7 }}>
            {t('bottomNote')}
          </div>
          <div style={{ marginTop: 20 }}>
            <Link href={`/${locale}/about`} style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none' }}>
              {t('backToAbout')}
            </Link>
          </div>
        </div>
      </section>

      {/* MANIFESTO STRIP */}
      <section style={{ background: 'var(--ink)', padding: '64px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: 24 }}>
            {t('manifestoLabel')}
          </div>
          <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 400, fontStyle: 'italic', lineHeight: 1.6, color: '#f5f0e8' }}>
            &ldquo;{t('manifestoQuote')}&rdquo;
          </p>
        </div>
      </section>
    </>
  );
}
