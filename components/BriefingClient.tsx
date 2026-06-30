'use client';
import Link from 'next/link';
import { Briefing } from '@/lib/briefings';
import { useTranslations, useLocale } from 'next-intl';
import { slugToKey } from '@/lib/slugToKey';

function formatDate(dateStr: string, locale: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString(locale === 'de' ? 'de-DE' : locale === 'ro' ? 'ro-RO' : 'en-GB', {
    day: 'numeric', month: 'long', year: 'numeric',
  });
}

export default function BriefingClient({ briefing, content }: { briefing: Briefing; content: string | null }) {
  const t = useTranslations();
  const locale = useLocale();
  const title = briefing.titles[locale as 'en' | 'ro' | 'de'] ?? briefing.titles.en;
  const excerpt = briefing.excerpts[locale as 'en' | 'ro' | 'de'] ?? briefing.excerpts.en;

  const related = briefing.relatedPillarArticle;
  const relatedPillarKey = related ? slugToKey(related.pillar) : null;
  const relatedArticleKey = related ? slugToKey(related.slug) : null;
  const relatedPillarTitle = relatedPillarKey ? (t.raw(`pillars.${relatedPillarKey}.title`) as string) : null;
  const relatedArticleTitle = (relatedPillarKey && relatedArticleKey)
    ? (t.raw(`pillars.${relatedPillarKey}.articles.${relatedArticleKey}.title`) as string)
    : null;

  return (
    <>
      <section style={{ borderBottom: '1px solid var(--border)', padding: '64px 48px 56px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
          <Link href={`/${locale}`} style={{ color: 'var(--ink-muted)', textDecoration: 'none' }}>WLS</Link>
          <span>·</span>
          <Link href={`/${locale}/briefings`} style={{ color: 'var(--ink-muted)', textDecoration: 'none' }}>{t('briefingsPage.heading')}</Link>
          <span>·</span>
          <span style={{ color: 'var(--gold)' }}>{formatDate(briefing.date, locale)}</span>
        </div>

        <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
          {briefing.tags.map(tag => (
            <span key={tag} style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', border: '1px solid var(--gold)', padding: '3px 10px' }}>
              {tag}
            </span>
          ))}
          <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-muted)', padding: '3px 0' }}>
            {briefing.readingTime}
          </span>
        </div>

        <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 38, fontWeight: 700, lineHeight: 1.15, color: 'var(--ink)', maxWidth: 780, marginBottom: 28 }}>
          {title}
        </h1>
        <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 20, fontWeight: 300, color: 'var(--ink-soft)', lineHeight: 1.65, maxWidth: 680, borderLeft: '2px solid var(--gold)', paddingLeft: 24 }}>
          {excerpt}
        </p>
      </section>

      <section style={{ maxWidth: 760, margin: '0 auto', padding: '64px 48px' }}>
        {content ? (
          <div className="prose-wls" dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          <div style={{ background: 'var(--cream)', border: '1px solid var(--border)', padding: 48, textAlign: 'center' }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20 }}>Briefing</div>
            <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 16, fontWeight: 300, color: 'var(--ink-soft)', lineHeight: 1.7 }}>
              This briefing is being prepared for publication.
            </p>
          </div>
        )}

        {related && relatedArticleTitle && (
          <div style={{ marginTop: 56, paddingTop: 32, borderTop: '1px solid var(--border)' }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: 12 }}>
              {t('briefingPage.frameworkLabel')}
            </div>
            <Link href={`/${locale}/${related.pillar}/${related.slug}`} style={{ textDecoration: 'none' }}>
              <div
                style={{ padding: 24, border: '1px solid var(--border)', cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--cream)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; }}
              >
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: 8 }}>
                  {relatedPillarTitle}
                </div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 16, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.35, marginBottom: 12 }}>
                  {relatedArticleTitle}
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>
                  {t('briefingPage.readFramework')}
                </div>
              </div>
            </Link>
          </div>
        )}
      </section>

      <section style={{ borderTop: '1px solid var(--border)', maxWidth: 1100, margin: '0 auto', padding: '40px 48px', textAlign: 'center' }}>
        <Link href={`/${locale}/briefings`} style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none' }}>
          {t('briefingPage.backToBriefings')}
        </Link>
      </section>
    </>
  );
}
