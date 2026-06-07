"use client";
import Link from "next/link";
import { Pillar, Article } from "@/lib/content";

export default function ArticleClient({ pillar, article }: { pillar: Pillar; article: Article }) {
  const articleIndex = pillar.articles.indexOf(article);
  const prev = pillar.articles[articleIndex - 1];
  const next = pillar.articles[articleIndex + 1];

  return (
    <>
      <section style={{ borderBottom: "1px solid var(--border)", padding: "64px 48px 56px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: 24, display: "flex", alignItems: "center", gap: 10 }}>
          <Link href="/" style={{ color: "var(--ink-muted)", textDecoration: "none" }}>WLS</Link>
          <span>·</span>
          <Link href={`/${pillar.slug}`} style={{ color: "var(--ink-muted)", textDecoration: "none" }}>{pillar.title}</Link>
          <span>·</span>
          <span style={{ color: "var(--gold)" }}>{article.number}</span>
        </div>
        <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 42, fontWeight: 700, lineHeight: 1.15, color: "var(--ink)", maxWidth: 780, marginBottom: 32 }}>{article.title}</h1>
        <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 21, fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.65, maxWidth: 680, borderLeft: "2px solid var(--gold)", paddingLeft: 24 }}>{article.excerpt}</p>
      </section>

      <section style={{ maxWidth: 760, margin: "0 auto", padding: "64px 48px" }}>
        <div style={{ background: "var(--cream)", border: "1px solid var(--border)", padding: 48, textAlign: "center" }}>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>Full Article</div>
          <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 16, fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.7, marginBottom: 16 }}>
            The complete text of this founding document is available in the WLS content archive. Full article rendering will be integrated in the next development phase.
          </p>
          <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 13, fontWeight: 300, color: "var(--ink-muted)" }}>worldlegalservices.com · {pillar.title}</div>
        </div>
      </section>

      <section style={{ borderTop: "1px solid var(--border)", maxWidth: 1100, margin: "0 auto", padding: "48px 48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }}>
          {prev ? (
            <Link href={`/${pillar.slug}/${prev.slug}`} style={{ textDecoration: "none" }}>
              <div style={{ padding: 24, border: "1px solid var(--border)", cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--cream)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: 8 }}>← Previous</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 15, fontWeight: 600, color: "var(--ink)", lineHeight: 1.35 }}>{prev.title}</div>
              </div>
            </Link>
          ) : <div />}
          {next ? (
            <Link href={`/${pillar.slug}/${next.slug}`} style={{ textDecoration: "none" }}>
              <div style={{ padding: 24, border: "1px solid var(--border)", textAlign: "right", cursor: "pointer", transition: "all 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--cream)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--gold)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: 8 }}>Next →</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 15, fontWeight: 600, color: "var(--ink)", lineHeight: 1.35 }}>{next.title}</div>
              </div>
            </Link>
          ) : <div />}
        </div>
        <div style={{ marginTop: 32, textAlign: "center" }}>
          <Link href={`/${pillar.slug}`} style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", textDecoration: "none" }}>← Back to {pillar.title}</Link>
        </div>
      </section>
    </>
  );
}
