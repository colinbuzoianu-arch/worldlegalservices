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

export default function VoiceClient({ voice, content }: { voice: Voice; content: string | null }) {
  const t = useTranslations();
  const locale = useLocale();
  const title = voice.titles[locale as 'en' | 'ro' | 'de'] ?? voice.titles.en;
  const excerpt = voice.excerpts[locale as 'en' | 'ro' | 'de'] ?? voice.excerpts.en;

  return (
    <>
      <section style={{ borderBottom: '1px solid var(--border)', padding: '64px 48px 56px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--ink-muted)', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 10 }}>
          <Link href={`/${locale}`} style={{ color: 'var(--ink-muted)', textDecoration: 'none' }}>WLS</Link>
          <span>·</span>
          <Link href={`/${locale}/voices`} style={{ color: 'var(--ink-muted)', textDecoration: 'none' }}>{t('voicesPage.heading')}</Link>
          <span>·</span>
          <span style={{ color: 'var(--gold)' }}>{formatDate(voice.date, locale)}</span>
        </div>

        <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
          {voice.tags.map(tag => (
            <span key={tag} style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', border: '1px solid var(--gold)', padding: '3px 10px' }}>
              {tag}
            </span>
          ))}
          <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 10, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-muted)', padding: '3px 0' }}>
            {voice.readingTime}
          </span>
        </div>

        <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 38, fontWeight: 700, lineHeight: 1.15, color: 'var(--ink)', maxWidth: 780, marginBottom: 20 }}>
          {title}
        </h1>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, fontWeight: 600, letterSpacing: '0.1em', color: 'var(--ink-muted)', marginBottom: 28 }}>
          {voice.author}
        </div>
        <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 20, fontWeight: 300, color: 'var(--ink-soft)', lineHeight: 1.65, maxWidth: 680, borderLeft: '2px solid var(--gold)', paddingLeft: 24 }}>
          {excerpt}
        </p>
      </section>

      <section style={{ maxWidth: 760, margin: '0 auto', padding: '64px 48px' }}>
        {content ? (
          <div className="prose-wls" dangerouslySetInnerHTML={{ __html: content }} />
        ) : (
          <div style={{ background: 'var(--cream)', border: '1px solid var(--border)', padding: 48, textAlign: 'center' }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20 }}>Voice</div>
            <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 16, fontWeight: 300, color: 'var(--ink-soft)', lineHeight: 1.7 }}>
              This essay is being prepared for publication.
            </p>
          </div>
        )}
      </section>

      <section style={{ borderTop: '1px solid var(--border)', maxWidth: 1100, margin: '0 auto', padding: '40px 48px', textAlign: 'center' }}>
        <Link href={`/${locale}/voices`} style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none' }}>
          {t('voicePage.backToVoices')}
        </Link>
      </section>
    </>
  );
}
