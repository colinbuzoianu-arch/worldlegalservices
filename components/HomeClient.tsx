'use client';
import Link from 'next/link';
import { pillars } from '@/lib/content';
import { useTranslations, useLocale } from 'next-intl';
import { slugToKey } from '@/lib/slugToKey';

export default function HomeClient() {
  const t = useTranslations();
  const locale = useLocale();
  const aiPillar = pillars[0];
  const featuredArticle = aiPillar.articles.find(a => a.featured);
  const otherArticles = aiPillar.articles.filter(a => !a.featured);

  const layers = [
    { dot: 'var(--gold)', key: 'governance' as const, status: 'Active' },
    { dot: 'var(--ink-mid)', key: 'legal' as const, status: 'Active' },
    { dot: 'var(--ink-muted)', key: 'economic' as const, status: 'Coming' },
  ];

  const tokenPropertyKeys = ['issuance', 'purchase', 'transfer', 'expiry', 'function', 'backing'] as const;

  return (
    <>
      {/* HERO */}
      <section className="home-hero-section" style={{ borderBottom: '1px solid var(--border)', padding: '100px 48px 80px', maxWidth: 1100, margin: '0 auto' }}>
        <div className="home-hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'end' }}>
          <div className="animate-fade-up">
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ display: 'inline-block', width: 28, height: 1, background: 'var(--gold)' }} />
              {t('home.hero.decoratorLabel')}
            </div>
            <h1 className="home-hero-h1" style={{ fontFamily: "'Playfair Display',serif", fontSize: 52, fontWeight: 700, lineHeight: 1.1, letterSpacing: '-0.01em', color: 'var(--ink)', marginBottom: 28 }}>
              {t('home.hero.headline1')}<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>{t('home.hero.headline2')}</em><br />{t('home.hero.headline3')}
            </h1>
            <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 20, fontWeight: 300, color: 'var(--ink-soft)', lineHeight: 1.6, borderLeft: '2px solid var(--gold)', paddingLeft: 20, marginBottom: 40 }}>
              {t('home.hero.intro')}
            </p>
            <Link href={`/${locale}/ai-governance`} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: "'Cormorant Garamond',serif", fontSize: 13, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink)', border: '1px solid var(--ink)', padding: '12px 28px', textDecoration: 'none', transition: 'all 0.25s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = 'var(--ink)'; (e.currentTarget as HTMLElement).style.color = 'var(--warm-white)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = 'transparent'; (e.currentTarget as HTMLElement).style.color = 'var(--ink)'; }}>
              {t('home.hero.exploreCta')}
            </Link>
          </div>

          <div className="animate-fade-up delay-200">
            <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 17, fontWeight: 300, color: 'var(--ink-mid)', lineHeight: 1.8, marginBottom: 32 }}>
              {t('home.hero.bodyText')}
            </p>
            <div style={{ border: '1px solid var(--border)' }}>
              {layers.map((layer, i) => (
                <div key={layer.key} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 20px', borderBottom: i < 2 ? '1px solid var(--border-soft)' : 'none' }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: layer.dot, flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink)', minWidth: 100 }}>
                    {t(`home.hero.layers.${layer.key}.label`)}
                  </span>
                  <span style={{ fontFamily: "'Crimson Pro',serif", fontSize: 14, fontWeight: 300, color: 'var(--ink-soft)' }}>
                    {t(`home.hero.layers.${layer.key}.desc`)}
                  </span>
                  <span style={{ marginLeft: 'auto', fontFamily: "'Cormorant Garamond',serif", fontSize: 10, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', padding: '3px 10px', border: '1px solid', color: layer.status === 'Active' ? 'var(--gold)' : 'var(--ink-muted)', borderColor: layer.status === 'Active' ? 'var(--gold)' : 'var(--border)' }}>
                    {t(`home.hero.layers.${layer.key}.status`)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI GOVERNANCE FOUNDING DOCUMENTS */}
      <section className="home-ai-section" style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 48px' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 48, paddingBottom: 20, borderBottom: '1px solid var(--border)' }}>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 13, fontWeight: 400, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>
            <span style={{ color: 'var(--gold)', marginRight: 12 }}>I.</span> {t('home.aiSection.sectionLabel')}
          </div>
          <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 14, fontWeight: 300, color: 'var(--ink-muted)' }}>{t('home.aiSection.sectionSubtitle')}</div>
        </div>

        <div style={{ display: 'grid', gap: 1, background: 'var(--border)', border: '1px solid var(--border)', marginBottom: 80 }}>
          {/* Featured */}
          {featuredArticle && (() => {
            const articleKey = slugToKey(featuredArticle.slug);
            const articleTitle = t.raw(`pillars.aiGovernance.articles.${articleKey}.title`) as string;
            const articleExcerpt = t.raw(`pillars.aiGovernance.articles.${articleKey}.excerpt`) as string;
            const articleTag = (t.raw(`pillars.aiGovernance.articles.${articleKey}`) as Record<string, string>).tag ?? featuredArticle.tag;
            const articleQuote = (t.raw(`pillars.aiGovernance.articles.${articleKey}`) as Record<string, string>).quote ?? featuredArticle.quote;
            return (
              <Link href={`/${locale}/ai-governance/${featuredArticle.slug}`} style={{ textDecoration: 'none' }}>
                <div className="home-featured-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, padding: 40, background: 'var(--cream)', cursor: 'pointer', transition: 'background 0.2s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--gold-pale)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--cream)'}>
                  <div>
                    <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 11, fontWeight: 400, letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 16 }}>{featuredArticle.number}</div>
                    <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 600, lineHeight: 1.25, color: 'var(--ink)', marginBottom: 16 }}>{articleTitle}</h2>
                    <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 16, fontWeight: 300, color: 'var(--ink-soft)', lineHeight: 1.7, marginBottom: 24 }}>{articleExcerpt}</p>
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>{t('home.aiSection.readFounding')}</div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', background: 'var(--ink)', color: 'var(--warm-white)', padding: '4px 12px', display: 'inline-block', marginBottom: 20 }}>{articleTag}</span>
                      {articleQuote && (
                        <blockquote style={{ fontFamily: "'Playfair Display',serif", fontSize: 15, fontStyle: 'italic', fontWeight: 400, color: 'var(--ink-mid)', lineHeight: 1.6, borderLeft: '2px solid var(--gold)', paddingLeft: 20 }}>
                          &ldquo;{articleQuote}&rdquo;
                        </blockquote>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })()}

          {/* Other articles grid */}
          <div className="home-articles-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--border)' }}>
            {otherArticles.slice(0, 2).map(article => {
              const articleKey = slugToKey(article.slug);
              const articleTitle = t.raw(`pillars.aiGovernance.articles.${articleKey}.title`) as string;
              const articleExcerpt = t.raw(`pillars.aiGovernance.articles.${articleKey}.excerpt`) as string;
              return (
                <Link key={article.slug} href={`/${locale}/ai-governance/${article.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{ padding: 40, background: 'var(--warm-white)', cursor: 'pointer', transition: 'background 0.2s', height: '100%' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--cream)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--warm-white)'}>
                    <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 11, letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 16 }}>{article.number}</div>
                    <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 19, fontWeight: 600, lineHeight: 1.25, color: 'var(--ink)', marginBottom: 14 }}>{articleTitle}</h3>
                    <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 15, fontWeight: 300, color: 'var(--ink-soft)', lineHeight: 1.7, marginBottom: 20 }}>{articleExcerpt}</p>
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>{t('home.aiSection.read')}</div>
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Third article full width */}
          {otherArticles[2] && (() => {
            const articleKey = slugToKey(otherArticles[2].slug);
            const articleTitle = t.raw(`pillars.aiGovernance.articles.${articleKey}.title`) as string;
            const articleExcerpt = t.raw(`pillars.aiGovernance.articles.${articleKey}.excerpt`) as string;
            return (
              <Link href={`/${locale}/ai-governance/${otherArticles[2].slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ padding: 40, background: 'var(--warm-white)', borderTop: '1px solid var(--border)', cursor: 'pointer', transition: 'background 0.2s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--cream)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--warm-white)'}>
                  <div className="home-third-inner" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48 }}>
                    <div>
                      <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 11, letterSpacing: '0.2em', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: 16 }}>{otherArticles[2].number}</div>
                      <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 19, fontWeight: 600, lineHeight: 1.25, color: 'var(--ink)' }}>{articleTitle}</h3>
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 15, fontWeight: 300, color: 'var(--ink-soft)', lineHeight: 1.7, marginBottom: 20 }}>{articleExcerpt}</p>
                      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>{t('home.aiSection.readFounding')}</div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })()}
        </div>

        {/* ALL FIVE PILLARS */}
        <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 48, paddingBottom: 20, borderBottom: '1px solid var(--border)' }}>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 13, fontWeight: 400, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>
            <span style={{ color: 'var(--gold)', marginRight: 12 }}>II.</span> {t('home.pillarsSection.sectionLabel')}
          </div>
          <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 14, fontWeight: 300, color: 'var(--ink-muted)' }}>{t('home.pillarsSection.sectionSubtitle')}</div>
        </div>

        <div className="home-pillars-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 1, background: 'var(--border)', border: '1px solid var(--border)' }}>
          {pillars.map((pillar, i) => {
            const pillarKey = slugToKey(pillar.slug);
            const pillarTitle = t.raw(`pillars.${pillarKey}.title`) as string;
            const pillarDesc = t.raw(`pillars.${pillarKey}.description`) as string;
            return (
              <Link key={pillar.slug} href={`/${locale}/${pillar.slug}`} style={{ textDecoration: 'none' }}>
                <div style={{ padding: '32px 24px', background: i === 0 ? 'var(--cream)' : 'var(--warm-white)', cursor: 'pointer', transition: 'background 0.2s', position: 'relative', height: '100%' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--cream)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = i === 0 ? 'var(--cream)' : 'var(--warm-white)'}>
                  {i === 0 && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--gold)' }} />}
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 36, fontWeight: 400, color: 'var(--border)', lineHeight: 1, marginBottom: 16 }}>{pillar.number}</div>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 14, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.3, marginBottom: 12 }}>{pillarTitle}</div>
                  <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 13, fontWeight: 300, color: 'var(--ink-soft)', lineHeight: 1.6, marginBottom: 16 }}>{pillarDesc}</div>
                  <div style={{ borderTop: '1px solid var(--border-soft)', paddingTop: 16 }}>
                    {pillar.articles.slice(0, 3).map(a => {
                      const aKey = slugToKey(a.slug);
                      const aTitle = t.raw(`pillars.${pillarKey}.articles.${aKey}.title`) as string;
                      return (
                        <div key={a.slug} style={{ fontFamily: "'Crimson Pro',serif", fontSize: 12, fontWeight: 400, color: 'var(--ink-muted)', lineHeight: 1.5, padding: '3px 0 3px 10px', position: 'relative' }}>
                          <span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>–</span>
                          {aTitle.split(':')[0].split('.')[0]}
                        </div>
                      );
                    })}
                    {pillar.articles.length > 3 && (
                      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, color: 'var(--gold)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: 8 }}>
                        {t('home.pillarsSection.more', { count: pillar.articles.length - 3 })}
                      </div>
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* MANIFESTO STRIP */}
      <section className="home-manifesto" style={{ background: 'var(--ink)', padding: '80px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: 32 }}>{t('home.manifesto.label')}</div>
          <div style={{ width: 40, height: 1, background: 'var(--gold)', margin: '0 auto 32px' }} />
          <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, fontWeight: 400, fontStyle: 'italic', lineHeight: 1.55, color: '#f5f0e8', marginBottom: 32 }}>
            &ldquo;{t('home.manifesto.quote')}&rdquo;
          </p>
          <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 14, fontWeight: 300, color: 'rgba(245,240,232,0.5)', letterSpacing: '0.05em' }}>
            {t('home.manifesto.attribution')}
          </div>
        </div>
      </section>

      {/* ECONOMIC LAYER TEASER */}
      <section className="home-economic-section" style={{ maxWidth: 1100, margin: '0 auto', padding: '80px 48px' }}>
        <div className="home-economic-grid" style={{ border: '1px solid var(--border)', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          <div className="home-economic-left" style={{ padding: 48, borderRight: '1px solid var(--border)' }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20 }}>{t('home.economic.label')}</div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 28, fontWeight: 600, lineHeight: 1.25, color: 'var(--ink)', marginBottom: 20 }}>{t('home.economic.title')}</h2>
            <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 17, fontWeight: 300, color: 'var(--ink-soft)', lineHeight: 1.75, marginBottom: 28 }}>
              {t('home.economic.body')}
            </p>
            <Link href={`/${locale}/about#economic-layer`} style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none' }}>{t('home.economic.cta')}</Link>
          </div>
          <div style={{ padding: 48 }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: 20 }}>{t('home.economic.propertiesLabel')}</div>
            {tokenPropertyKeys.map(key => {
              const prop = t.raw(`home.economic.properties.${key}`) as [string, string];
              return (
                <div key={key} style={{ display: 'flex', gap: 16, padding: '10px 0', borderBottom: '1px solid var(--border-soft)' }}>
                  <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--ink-soft)', minWidth: 90 }}>{prop[0]}</span>
                  <span style={{ fontFamily: "'Crimson Pro',serif", fontSize: 14, fontWeight: 300, color: 'var(--ink-mid)' }}>{prop[1]}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
