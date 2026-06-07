'use client';
import Link from 'next/link';
import { Pillar } from '@/lib/content';
import { pillars } from '@/lib/content';
import { useTranslations, useLocale } from 'next-intl';
import { slugToKey } from '@/lib/slugToKey';

export default function PillarClient({ pillar }: { pillar: Pillar }) {
  const t = useTranslations();
  const locale = useLocale();
  const featured = pillar.articles.find(a => a.featured);
  const others = pillar.articles.filter(a => !a.featured);
  const pillarKey = slugToKey(pillar.slug);
  const pillarTitle = t.raw(`pillars.${pillarKey}.title`) as string;
  const pillarQuestion = t.raw(`pillars.${pillarKey}.question`) as string;

  return (
    <>
      <section style={{ borderBottom: '1px solid var(--border)', padding: '80px 48px 64px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
          <Link href={`/${locale}`} style={{ color: 'var(--ink-muted)', textDecoration: 'none' }}>{t('pillarPage.breadcrumbHome')}</Link>
          <span style={{ color: 'var(--border)' }}>·</span>
          <span>{t('pillarPage.breadcrumbPillar', { number: pillar.number })}</span>
        </div>
        <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 48, fontWeight: 700, lineHeight: 1.1, color: 'var(--ink)', marginBottom: 24, maxWidth: 700 }}>{pillarTitle}</h1>
        <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 20, fontWeight: 300, color: 'var(--ink-soft)', lineHeight: 1.6, maxWidth: 640, borderLeft: '2px solid var(--gold)', paddingLeft: 20 }}>{pillarQuestion}</p>
      </section>

      <section style={{ maxWidth: 1100, margin: '0 auto', padding: '64px 48px' }}>
        {featured && (() => {
          const featuredKey = slugToKey(featured.slug);
          const featuredTitle = t.raw(`pillars.${pillarKey}.articles.${featuredKey}.title`) as string;
          const featuredExcerpt = t.raw(`pillars.${pillarKey}.articles.${featuredKey}.excerpt`) as string;
          const featuredData = t.raw(`pillars.${pillarKey}.articles.${featuredKey}`) as Record<string, string>;
          const featuredTag = featuredData.tag ?? featured.tag;
          const featuredQuote = featuredData.quote ?? featured.quote;
          return (
            <Link href={`/${locale}/${pillar.slug}/${featured.slug}`} style={{ textDecoration: 'none', display: 'block', marginBottom: 1 }}>
              <div style={{ border: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '3fr 2fr', background: 'var(--cream)', marginBottom: 1, cursor: 'pointer', transition: 'background 0.2s' }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--gold-pale)'}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--cream)'}>
                <div style={{ padding: 48 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
                    <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', background: 'var(--ink)', color: 'var(--warm-white)', padding: '4px 12px' }}>{featuredTag}</span>
                    <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 11, letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase' }}>{featured.number}</span>
                  </div>
                  <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, fontWeight: 600, lineHeight: 1.25, color: 'var(--ink)', marginBottom: 20 }}>{featuredTitle}</h2>
                  <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 17, fontWeight: 300, color: 'var(--ink-soft)', lineHeight: 1.75, marginBottom: 24 }}>{featuredExcerpt}</p>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>{t('pillarPage.readArticle')}</div>
                </div>
                {featuredQuote && (
                  <div style={{ padding: 48, borderLeft: '1px solid var(--border)', display: 'flex', alignItems: 'center' }}>
                    <blockquote style={{ fontFamily: "'Playfair Display',serif", fontSize: 16, fontStyle: 'italic', color: 'var(--ink-mid)', lineHeight: 1.65, borderLeft: '2px solid var(--gold)', paddingLeft: 20 }}>&ldquo;{featuredQuote}&rdquo;</blockquote>
                  </div>
                )}
              </div>
            </Link>
          );
        })()}

        <div style={{ display: 'grid', gap: 1, background: 'var(--border)', border: '1px solid var(--border)' }}>
          {others.map((article, i) => {
            const articleKey = slugToKey(article.slug);
            const articleTitle = t.raw(`pillars.${pillarKey}.articles.${articleKey}.title`) as string;
            const articleExcerpt = t.raw(`pillars.${pillarKey}.articles.${articleKey}.excerpt`) as string;
            return (
              <Link key={article.slug} href={`/${locale}/${pillar.slug}/${article.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: 32, alignItems: 'start', padding: '36px 40px', background: 'var(--warm-white)', cursor: 'pointer', transition: 'background 0.2s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--cream)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--warm-white)'}>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 32, fontWeight: 400, color: 'var(--border)', lineHeight: 1, paddingTop: 4 }}>0{i + 1}</div>
                  <div>
                    <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 11, letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 10 }}>{article.number}</div>
                    <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 600, lineHeight: 1.3, color: 'var(--ink)', marginBottom: 12 }}>{articleTitle}</h3>
                    <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 16, fontWeight: 300, color: 'var(--ink-soft)', lineHeight: 1.7 }}>{articleExcerpt}</p>
                  </div>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', paddingTop: 8, whiteSpace: 'nowrap' }}>
                    {t('pillarPage.readArticle')}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <section style={{ borderTop: '1px solid var(--border)', padding: '64px 48px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-soft)', marginBottom: 32 }}>{t('pillarPage.otherPillars')}</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
          {pillars.filter(p => p.slug !== pillar.slug).map(p => {
            const pKey = slugToKey(p.slug);
            const pTitle = t.raw(`pillars.${pKey}.title`) as string;
            return (
              <Link key={p.slug} href={`/${locale}/${p.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ padding: 24, border: '1px solid var(--border)', cursor: 'pointer', transition: 'all 0.2s' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--cream)'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--gold)'; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.borderColor = 'var(--border)'; }}>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 24, fontWeight: 400, color: 'var(--border)', marginBottom: 12 }}>{p.number}</div>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 14, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.3 }}>{pTitle}</div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
}
