'use client';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const locales = ['en', 'de', 'ro'] as const;

export default function LangSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();

  function getLocalePath(targetLocale: string) {
    // pathname is like /en/ai-governance or /de/about
    // Replace the locale segment
    const segments = pathname.split('/');
    segments[1] = targetLocale;
    return segments.join('/') || '/';
  }

  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 8,
      paddingLeft: 20,
      borderLeft: '1px solid var(--gold)',
      marginLeft: 8,
    }}>
      {locales.map((l, i) => (
        <span key={l} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {i > 0 && <span style={{ color: 'var(--border)', fontSize: 10 }}>·</span>}
          <Link
            href={getLocalePath(l)}
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 11,
              fontWeight: l === locale ? 600 : 400,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: l === locale ? 'var(--gold)' : 'var(--ink-muted)',
              textDecoration: 'none',
              transition: 'color 0.2s',
            }}
          >
            {l.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  );
}
