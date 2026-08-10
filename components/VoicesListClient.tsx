'use client';
import Link from 'next/link';
import { Voice } from '@/lib/voices';
import { useTranslations, useLocale } from 'next-intl';

function formatDate(dateStr: string, locale: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString(locale === 'de' ? 'de-DE' : locale === 'ro' ? 'ro-RO' : 'en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

export default function VoicesListClient({ voices }: { voices: Voice[] }) {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <>
      <section style={{ borderBottom: '1px solid var(--border)', padding: '64px 48px 56px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: 24 }}>
          <Link href={`/${locale}`} style={{ color: 'var(--ink-muted)', textDecoration: 'none' }}>WLS</Link>
          <span style={{ margin: '0 8px' }}>·</span>
          <span style={{ color: 'var(--gold)' }}>{t('voicesPage.sectionLabel')}</span>
        </div>
        <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 42, fontWeight: 700, lineHeight: 1.15, color: 'var(--ink)', marginBottom: 20 }}>
          {t('voicesPage.heading')}
        </h1>
        <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 19, fontWeight: 300, color: 'var(--ink-soft)', lineHeight: 1.65, maxWidth: 640, borderLeft: '2px solid var(--gold)', paddingLeft: 20 }}>
          {t('voicesPage.description')}
        </p>
      </section>

      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 48px' }}>
        {voices.length === 0 ? (
          <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 17, color: 'var(--ink-muted)' }}>
            {t('voicesPage.empty')}
          </p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {voices.map(v => {
              const title = v.titles[locale as 'en' | 'ro' | 'de'] ?? v.titles.en;
              const excerpt = v.excerpts[locale as 'en' | 'ro' | 'de'] ?? v.excerpts.en;
              return (
                <Link key={v.slug} href={`/${locale}/voices/${v.slug}`} style={{ textDecoration: 'none' }}>
                  <div
                    style={{ padding: '28px 0', borderBottom: '1px solid var(--border-soft)', cursor: 'pointer', transition: 'background 0.15s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--cream)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}
                  >
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 10 }}>
                      <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', color: 'var(--ink-muted)', whiteSpace: 'nowrap' }}>
                        {formatDate(v.date, locale)}
                      </span>
                      <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', color: 'var(--ink-muted)' }}>
                        {v.author}
                      </span>
                      <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>
                        {v.readingTime}
                      </span>
                      <div style={{ display: 'flex', gap: 6 }}>
                        {v.tags.map(tag => (
                          <span key={tag} style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', border: '1px solid var(--gold)', padding: '2px 8px' }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 600, lineHeight: 1.25, color: 'var(--ink)', marginBottom: 10 }}>
                      {title}
                    </h2>
                    <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 16, fontWeight: 300, color: 'var(--ink-soft)', lineHeight: 1.65, maxWidth: 680 }}>
                      {excerpt}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        )}
      </section>
    </>
  );
}
