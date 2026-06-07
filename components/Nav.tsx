"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { href: "/ai-governance", label: "AI Governance" },
  { href: "/robotics-law", label: "Robotics & Law" },
  { href: "/eu-critique", label: "EU Critique" },
  { href: "/peace-frameworks", label: "Peace Frameworks" },
  { href: "/eastern-europe", label: "Eastern Europe" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: scrolled ? "rgba(254,252,248,0.97)" : "rgba(254,252,248,0.99)",
      backdropFilter: "blur(8px)",
      borderBottom: "1px solid var(--border)",
      transition: "all 0.3s ease",
    }}>
      <div style={{
        maxWidth: 1100, margin: "0 auto", padding: "0 32px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: 64,
      }}>
        <Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 14 }}>
          <img
            src="/logo.png"
            alt="WLS"
            width={32}
            height={32}
            style={{ opacity: 0.92, objectFit: "contain" }}
          />
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink)" }}>
              World Legal Services
            </div>
            <div style={{ fontFamily: "'Crimson Pro', serif", fontSize: 10, fontWeight: 300, letterSpacing: "0.12em", color: "var(--gold)", textTransform: "uppercase" }}>
              Rethinking the Rules That Govern Us
            </div>
          </div>
        </Link>

        {/* Desktop */}
        <ul style={{ display: "flex", gap: 20, listStyle: "none", margin: 0, padding: 0 }} className="desktop-nav">
          {links.map(l => (
            <li key={l.href}>
              <Link href={l.href} style={{
                fontFamily: "'Cormorant Garamond', serif", fontSize: 11, fontWeight: 500,
                letterSpacing: "0.06em", textTransform: "uppercase", color: "var(--ink-soft)",
                textDecoration: "none", transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.target as HTMLElement).style.color = "var(--ink)"}
              onMouseLeave={e => (e.target as HTMLElement).style.color = "var(--ink-soft)"}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile burger */}
        <button onClick={() => setMenuOpen(!menuOpen)} style={{ display: "none", background: "none", border: "none", cursor: "pointer", padding: 8 }} className="mobile-burger">
          <div style={{ width: 22, height: 1.5, background: "var(--ink)", marginBottom: 5 }} />
          <div style={{ width: 22, height: 1.5, background: "var(--ink)", marginBottom: 5 }} />
          <div style={{ width: 22, height: 1.5, background: "var(--ink)" }} />
        </button>
      </div>

      {menuOpen && (
        <div style={{ background: "var(--warm-white)", borderTop: "1px solid var(--border)", padding: "24px 32px" }}>
          {links.map(l => (
            <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
              display: "block", fontFamily: "'Cormorant Garamond', serif", fontSize: 15,
              fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase",
              color: "var(--ink-soft)", textDecoration: "none", padding: "10px 0",
              borderBottom: "1px solid var(--border-soft)",
            }}>
              {l.label}
            </Link>
          ))}
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
