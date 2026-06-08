'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import LangSwitcher from './LangSwitcher';

export default function Nav() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { href: `/${locale}/ai-governance`, label: t('nav.aiGovernance') },
    { href: `/${locale}/robotics-law`, label: t('nav.roboticsLaw') },
    { href: `/${locale}/eu-critique`, label: t('nav.euCritique') },
    { href: `/${locale}/peace-frameworks`, label: t('nav.peaceFrameworks') },
    { href: `/${locale}/eastern-europe`, label: t('nav.easternEurope') },
    { href: `/${locale}/about`, label: t('nav.about') },
    { href: `/${locale}/support`, label: t('nav.support') },
  ];

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: scrolled ? 'rgba(254,252,248,0.97)' : 'rgba(254,252,248,0.99)',
      backdropFilter: 'blur(8px)',
      borderBottom: '1px solid var(--border)',
      transition: 'all 0.3s ease',
    }}>
      <div style={{
        maxWidth: 1100, margin: '0 auto', padding: '0 32px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        height: 64,
      }}>
        <Link href={`/${locale}`} style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 14 }}>
          <img
            src="/logo.png"
            alt="WLS"
            width={48}
            height={48}
            style={{ opacity: 0.92, objectFit: 'contain' }}
          />
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 13, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--ink)' }}>
            World Legal Services
          </div>
        </Link>

        <div style={{ display: 'flex', alignItems: 'center', gap: 0 }} className="desktop-nav">
          <ul style={{ display: 'flex', gap: 16, listStyle: 'none', margin: 0, padding: 0 }}>
            {links.map(l => {
              const isActive = pathname === l.href || pathname.startsWith(l.href + '/');
              return (
                <li key={l.href}>
                  <Link href={l.href} style={{
                    fontFamily: "'Cormorant Garamond', serif", fontSize: 11,
                    fontWeight: isActive ? 600 : 500,
                    letterSpacing: '0.06em', textTransform: 'uppercase',
                    color: isActive ? 'var(--ink)' : 'var(--ink-soft)',
                    textDecoration: 'none', whiteSpace: 'nowrap',
                    paddingBottom: 4,
                    borderBottom: isActive ? '1px solid var(--gold)' : '1px solid transparent',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--ink)'; }}
                  onMouseLeave={e => { if (!isActive) (e.currentTarget as HTMLElement).style.color = 'var(--ink-soft)'; }}
                  >
                    {l.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <LangSwitcher />
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: 8 }} className="mobile-burger">
          <div style={{ width: 22, height: 1.5, background: 'var(--ink)', marginBottom: 5 }} />
          <div style={{ width: 22, height: 1.5, background: 'var(--ink)', marginBottom: 5 }} />
          <div style={{ width: 22, height: 1.5, background: 'var(--ink)' }} />
        </button>
      </div>

      {menuOpen && (
        <div style={{ background: 'var(--warm-white)', borderTop: '1px solid var(--border)', padding: '24px 32px' }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
              display: 'block', fontFamily: "'Cormorant Garamond', serif", fontSize: 15,
              fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--ink-soft)', textDecoration: 'none', padding: '10px 0',
              borderBottom: '1px solid var(--border-soft)',
            }}>
              {l.label}
            </Link>
          ))}
          <div style={{ paddingTop: 16 }}>
            <LangSwitcher />
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-burger { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
