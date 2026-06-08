'use client';
import Link from 'next/link';
import { Pillar, Article } from '@/lib/content';
import { useTranslations, useLocale } from 'next-intl';
import { slugToKey } from '@/lib/slugToKey';

export default function ArticleClient({ pillar, article, content }: { pillar: Pillar; article: Article; content: string | null }) {
  const t = useTranslations();
  const locale = useLocale();
  const articleIndex = pillar.articles.indexOf(article);
  const prev = pillar.articles[articleIndex - 1];
  const next = pillar.articles[articleIndex + 1];
  const pillarKey = slugToKey(pillar.slug);
  const articleKey = slugToKey(article.slug);
  const pillarTitle = t.raw(`pillars.${pillarKey}.title`) as string;
  const articleTitle = t.raw(`pillars.${pillarKey}.articles.${articleKey}.title`) as string;
  const articleExcerpt = t.raw(`pillars.${pillarKey}.articles.${articleKey}.excerpt`) as string;

  return (
    <>
      <section className="article-header" style={{ borderBottom: '1px solid var(--border)', padding: '64px 48px 56px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
          <Link href={`/${locale}`} style={{ color: 'var(--ink-muted)', textDecoration: 'none' }}>WLS</Link>
          <span>·</span>
          <Link href={`/${locale}/${pillar.slug}`} style={{ color: 'var(--ink-muted)', textDecoration: 'none' }}>{pillarTitle}</Link>
          <span>·</span>
          <span style={{ color: 'var(--gold)' }}>{article.number}</span>
        </div>
        <h1 className="article-h1" style={{ fontFamily: "'Playfair Display',serif", fontSize: 42, fontWeight: 700, lineHeight: 1.15, color: 'var(--ink)', maxWidth: 780, marginBottom: 32 }}>{articleTitle}</h1>
        <p className="article-excerpt" style={{ fontFamily: "'Crimson Pro',serif", fontSize: 21, fontWeight: 300, color: 'var(--ink-soft)', lineHeight: 1.65, maxWidth: 680, borderLeft: '2px solid var(--gold)', paddingLeft: 24 }}>{articleExcerpt}</p>
      </section>

      <section className="article-content" style={{ maxWidth: 760, margin: '0 auto', padding: '64px 48px' }}>
        {content ? (
          <div
            className="prose-wls"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        ) : (
          <div style={{ background: 'var(--cream)', border: '1px solid var(--border)', padding: 48, textAlign: 'center' }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20 }}>Full Article</div>
            <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 16, fontWeight: 300, color: 'var(--ink-soft)', lineHeight: 1.7 }}>
              This article is being prepared for publication.
            </p>
          </div>
        )}
      </section>

      <section className="article-footer" style={{ borderTop: '1px solid var(--border)', maxWidth: 1100, margin: '0 auto', padding: '48px 48px' }}>
        <div className="article-nav-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {prev ? (() => {
            const prevKey = slugToKey(prev.slug);
            const prevTitle = t.raw(`pillars.${pillarKey}.articles.${prevKey}.title`) as string;
            return (
              <Link href={`/${locale}/${pillar.slug}/${prev.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ padding: 24, border: '1px solid var(--border)', cursor: 'pointer', transition: 'all 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--cream)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; }}>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: 8 }}>{t('articlePage.prev')}</div>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 15, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.35 }}>{prevTitle}</div>
                </div>
              </Link>
            );
          })() : <div />}
          {next ? (() => {
            const nextKey = slugToKey(next.slug);
            const nextTitle = t.raw(`pillars.${pillarKey}.articles.${nextKey}.title`) as string;
            return (
              <Link href={`/${locale}/${pillar.slug}/${next.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ padding: 24, border: '1px solid var(--border)', textAlign: 'right', cursor: 'pointer', transition: 'all 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--cream)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; }}>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: 8 }}>{t('articlePage.next')}</div>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 15, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.35 }}>{nextTitle}</div>
                </div>
              </Link>
            );
          })() : <div />}
        </div>
        <div style={{ marginTop: 32, textAlign: 'center' }}>
          <Link href={`/${locale}/${pillar.slug}`} style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none' }}>
            {t('articlePage.backTo', { pillar: pillarTitle })}
          </Link>
        </div>
      </section>
    </>
  );
}
