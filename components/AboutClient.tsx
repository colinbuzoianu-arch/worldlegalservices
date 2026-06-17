'use client';
import Link from 'next/link';
import { pillars } from '@/lib/content';
import { useTranslations, useLocale } from 'next-intl';
import { slugToKey } from '@/lib/slugToKey';

export default function AboutClient() {
  const t = useTranslations();
  const locale = useLocale();

  const projectKeys = ['learning', 'token', 'economic'] as const;
  const ctaLinks = {
    founding: `/${locale}/ai-governance`,
    learning: `/${locale}/about`,
    collaborate: 'mailto:contact@worldlegalservice.com',
  } as const;

  return (
    <>
      <section className="about-header" style={{ borderBottom: '1px solid var(--border)', padding: '80px 48px 64px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ display: 'inline-block', width: 28, height: 1, background: 'var(--gold)' }} />
          {t('about.sectionLabel')}
        </div>
        <h1 className="about-h1" style={{ fontFamily: "'Playfair Display',serif", fontSize: 48, fontWeight: 700, lineHeight: 1.1, color: 'var(--ink)', marginBottom: 24, maxWidth: 700 }}>{t('about.heading')}</h1>
        <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 21, fontWeight: 300, color: 'var(--ink-soft)', lineHeight: 1.65, maxWidth: 660, borderLeft: '2px solid var(--gold)', paddingLeft: 24 }}>
          {t('about.intro')}
        </p>
      </section>

      <section className="about-content" style={{ maxWidth: 900, margin: '0 auto', padding: '64px 48px' }}>
        <div className="prose-wls">

          <h2>{t('about.platformHeading')}</h2>
          <p>{t('about.platform1')}</p>
          <p>{t('about.platform2')}</p>

          <hr />

          <h2>{t('about.fivePillarsHeading')}</h2>
          <div style={{ display: 'grid', gap: 1, background: 'var(--border)', border: '1px solid var(--border)', marginBottom: '2rem' }}>
            {pillars.map(p => {
              const pillarKey = slugToKey(p.slug);
              const pillarTitle = t.raw(`pillars.${pillarKey}.title`) as string;
              const pillarDesc = t.raw(`pillars.${pillarKey}.description`) as string;
              return (
                <Link key={p.slug} href={`/${locale}/${p.slug}`} style={{ textDecoration: 'none' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 32, padding: '28px 32px', background: 'var(--warm-white)', alignItems: 'start', cursor: 'pointer', transition: 'background 0.2s' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--cream)'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--warm-white)'}>
                    <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 28, fontWeight: 400, color: 'var(--border)', lineHeight: 1 }}>{p.number}</div>
                    <div>
                      <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 17, fontWeight: 600, color: 'var(--ink)', marginBottom: 6 }}>{pillarTitle}</div>
                      <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 15, fontWeight: 300, color: 'var(--ink-soft)', lineHeight: 1.6 }}>{pillarDesc}</div>
                      <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginTop: 10 }}>
                        {t('about.articlesCount', { count: p.articles.length })}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <hr />

          <h2>{t('about.editorialHeading')}</h2>
          <p>{t('about.editorial1')}</p>
          <p>{t('about.editorial2')}</p>
          <p>{t('about.editorial3')}</p>

          <hr />

          <h2>{t('about.authorHeading')}</h2>
          <p dangerouslySetInnerHTML={{ __html: t('about.author1') }} />
          <p>{t('about.author2')}</p>

          <hr id="economic-layer" />

          <h2>{t('about.largerProjectHeading')}</h2>
          <p>{t('about.largerProject')}</p>

          <div style={{ border: '1px solid var(--border)', marginBottom: '2rem' }}>
            {projectKeys.map((key, i) => {
              const project = t.raw(`about.projects.${key}`) as { title: string; status: string; desc: string };
              return (
                <div key={key} style={{ padding: '28px 32px', borderBottom: i < projectKeys.length - 1 ? '1px solid var(--border)' : 'none' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 12 }}>
                    <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 16, fontWeight: 600, color: 'var(--ink)' }}>{project.title}</div>
                    <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', border: '1px solid var(--gold)', padding: '2px 10px' }}>{project.status}</span>
                  </div>
                  <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 15, fontWeight: 300, color: 'var(--ink-soft)', lineHeight: 1.7 }}>{project.desc}</div>
                </div>
              );
            })}
          </div>

          <hr />

          <h2>{t('about.invitationHeading')}</h2>
          <p>{t('about.invitation')}</p>
        </div>

        {/* CTAs */}
        <div className="about-ctas-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 1, background: 'var(--border)', border: '1px solid var(--border)', marginTop: 48 }}>
          {(['founding', 'learning', 'collaborate'] as const).map(key => {
            const cta = t.raw(`about.ctas.${key}`) as { title: string; desc: string; label: string };
            return (
              <Link key={key} href={ctaLinks[key]} style={{ textDecoration: 'none' }}>
                <div style={{ padding: 32, background: 'var(--warm-white)', height: '100%', cursor: 'pointer', transition: 'background 0.2s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = 'var(--cream)'}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'var(--warm-white)'}>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 16, fontWeight: 600, color: 'var(--ink)', marginBottom: 10 }}>{cta.title}</div>
                  <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 14, fontWeight: 300, color: 'var(--ink-soft)', marginBottom: 20 }}>{cta.desc}</div>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>{cta.label} →</div>
                </div>
              </Link>
            );
          })}
        </div>

        <div style={{ marginTop: 48, textAlign: 'center' }}>
          <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 14, fontWeight: 300, color: 'var(--ink-muted)', fontStyle: 'italic' }}>
            {t('about.footerTagline')}
          </div>
        </div>
      </section>
    </>
  );
}
