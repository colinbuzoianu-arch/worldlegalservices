import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid var(--border)", marginTop: 80 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 48px 40px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 48, marginBottom: 48 }}>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 14, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--ink)", marginBottom: 8 }}>
              World Legal Services
            </div>
            <div style={{ fontFamily: "'Crimson Pro', serif", fontSize: 14, fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.7, maxWidth: 280 }}>
              An independent platform examining law, artificial intelligence, and the future of governance — from a Central European perspective.
            </div>
          </div>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>Pillars</div>
            {[
              { href: "/ai-governance", label: "AI Governance" },
              { href: "/robotics-law", label: "Robotics & Law" },
              { href: "/eu-critique", label: "EU Critique" },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ display: "block", fontFamily: "'Crimson Pro', serif", fontSize: 14, fontWeight: 300, color: "var(--ink-soft)", textDecoration: "none", marginBottom: 8 }}>{l.label}</Link>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>&nbsp;</div>
            {[
              { href: "/peace-frameworks", label: "Peace Frameworks" },
              { href: "/eastern-europe", label: "Eastern Europe" },
              { href: "/about", label: "About" },
            ].map(l => (
              <Link key={l.href} href={l.href} style={{ display: "block", fontFamily: "'Crimson Pro', serif", fontSize: 14, fontWeight: 300, color: "var(--ink-soft)", textDecoration: "none", marginBottom: 8 }}>{l.label}</Link>
            ))}
          </div>
          <div>
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 16 }}>Platform</div>
            <div style={{ fontFamily: "'Crimson Pro', serif", fontSize: 13, fontWeight: 300, color: "var(--ink-muted)", lineHeight: 1.7 }}>
              Learning Platform<br />
              <span style={{ fontSize: 11, letterSpacing: "0.1em", color: "var(--gold)", textTransform: "uppercase" }}>Coming Soon</span>
            </div>
          </div>
        </div>
        <div style={{ borderTop: "1px solid var(--border-soft)", paddingTop: 24, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontFamily: "'Crimson Pro', serif", fontSize: 13, fontWeight: 300, color: "var(--ink-muted)" }}>
            © {new Date().getFullYear()} World Legal Services · Timișoara, Romania
          </div>
          <div style={{ fontFamily: "'Crimson Pro', serif", fontSize: 13, fontWeight: 300, color: "var(--ink-muted)" }}>
            Independent. Evidence-based. Accountable.
          </div>
        </div>
      </div>
    </footer>
  );
}
