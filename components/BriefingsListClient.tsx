'use client';
import Link from 'next/link';
import { Briefing } from '@/lib/briefings';
import { useTranslations, useLocale } from 'next-intl';

function formatDate(dateStr: string, locale: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString(locale === 'de' ? 'de-DE' : locale === 'ro' ? 'ro-RO' : 'en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

function BriefingRow({ b, locale, t }: { b: Briefing; locale: string; t: ReturnType<typeof useTranslations> }) {
  const title = b.titles[locale as 'en' | 'ro' | 'de'] ?? b.titles.en;
  const excerpt = b.excerpts[locale as 'en' | 'ro' | 'de'] ?? b.excerpts.en;
  return (
    <Link key={b.slug} href={`/${locale}/briefings/${b.slug}`} style={{ textDecoration: 'none' }}>
      <div
        style={{ padding: '28px 0', borderBottom: '1px solid var(--border-soft)', cursor: 'pointer', transition: 'background 0.15s' }}
        onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--cream)'}
        onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'transparent'}
      >
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 24, marginBottom: 10 }}>
          <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', color: 'var(--ink-muted)', whiteSpace: 'nowrap' }}>
            {formatDate(b.date, locale)}
          </span>
          <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-muted)' }}>
            {b.readingTime}
          </span>
          <div style={{ display: 'flex', gap: 6 }}>
            {b.tags.map(tag => (
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
}

export default function BriefingsListClient({ briefings }: { briefings: Briefing[] }) {
  const t = useTranslations();
  const locale = useLocale();

  const pinned = briefings.filter(b => b.pinned);
  const unpinned = briefings.filter(b => !b.pinned);

  const byYear = unpinned.reduce<Record<string, Briefing[]>>((acc, b) => {
    const year = b.date.slice(0, 4);
    (acc[year] ??= []).push(b);
    return acc;
  }, {});
  const years = Object.keys(byYear).sort((a, b) => Number(b) - Number(a));

  return (
    <>
      <section style={{ borderBottom: '1px solid var(--border)', padding: '64px 48px 56px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: 24 }}>
          <Link href={`/${locale}`} style={{ color: 'var(--ink-muted)', textDecoration: 'none' }}>WLS</Link>
          <span style={{ margin: '0 8px' }}>·</span>
          <span style={{ color: 'var(--gold)' }}>{t('briefingsPage.sectionLabel')}</span>
        </div>
        <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 42, fontWeight: 700, lineHeight: 1.15, color: 'var(--ink)', marginBottom: 20 }}>
          {t('briefingsPage.heading')}
        </h1>
        <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 19, fontWeight: 300, color: 'var(--ink-soft)', lineHeight: 1.65, maxWidth: 640, borderLeft: '2px solid var(--gold)', paddingLeft: 20 }}>
          {t('briefingsPage.description')}
        </p>
      </section>

      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 48px' }}>
        {briefings.length === 0 ? (
          <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 17, color: 'var(--ink-muted)' }}>
            {t('briefingsPage.empty')}
          </p>
        ) : (
          <>
            {pinned.length > 0 && (
              <div style={{ marginBottom: 64, background: 'var(--cream)', padding: '32px 32px 8px', borderLeft: '3px solid var(--gold)' }}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>
                  {t('briefingsPage.pinned')}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {pinned.map(b => (
                    <BriefingRow key={b.slug} b={b} locale={locale} t={t} />
                  ))}
                </div>
              </div>
            )}

            {years.map(year => (
              <div key={year} style={{ marginBottom: 64 }}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 13, fontWeight: 400, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: 24, paddingBottom: 16, borderBottom: '1px solid var(--border)' }}>
                  {year}
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                  {byYear[year].map(b => (
                    <BriefingRow key={b.slug} b={b} locale={locale} t={t} />
                  ))}
                </div>
              </div>
            ))}
          </>
        )}
      </section>
    </>
  );
}
