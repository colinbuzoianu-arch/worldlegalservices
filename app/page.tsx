"use client";
import Link from "next/link";
import { pillars } from "@/lib/content";

export default function Home() {
  const aiPillar = pillars[0];
  const featuredArticle = aiPillar.articles.find(a => a.featured);
  const otherArticles = aiPillar.articles.filter(a => !a.featured);

  return (
    <>
      {/* HERO */}
      <section style={{ borderBottom: "1px solid var(--border)", padding: "100px 48px 80px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "end" }}>
          <div className="animate-fade-up">
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 24, display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ display: "inline-block", width: 28, height: 1, background: "var(--gold)" }} />
              World Legal Services
            </div>
            <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 52, fontWeight: 700, lineHeight: 1.1, letterSpacing: "-0.01em", color: "var(--ink)", marginBottom: 28 }}>
              Rethinking the<br /><em style={{ fontStyle: "italic", color: "var(--gold)" }}>Rules That</em><br />Govern Us
            </h1>
            <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 20, fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.6, borderLeft: "2px solid var(--gold)", paddingLeft: 20, marginBottom: 40 }}>
              An independent platform examining law, artificial intelligence, and the future of governance — from a Central European perspective.
            </p>
            <Link href="/ai-governance" style={{ display: "inline-flex", alignItems: "center", gap: 10, fontFamily: "'Cormorant Garamond',serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ink)", border: "1px solid var(--ink)", padding: "12px 28px", textDecoration: "none", transition: "all 0.25s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "var(--ink)"; (e.currentTarget as HTMLElement).style.color = "var(--warm-white)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = "var(--ink)"; }}>
              Explore the Founding Documents →
            </Link>
          </div>

          <div className="animate-fade-up delay-200">
            <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 17, fontWeight: 300, color: "var(--ink-mid)", lineHeight: 1.8, marginBottom: 32 }}>
              Political institutions built in the 20th century are failing to govern the 21st. The technology to build genuinely different governance architectures now exists. The legal frameworks to govern them honestly do not. This platform exists to begin that work.
            </p>
            <div style={{ border: "1px solid var(--border)" }}>
              {[
                { dot: "var(--gold)", label: "Governance", desc: "AI Parliament · Accountability Architecture", status: "Active" },
                { dot: "var(--ink-mid)", label: "Legal", desc: "International Frameworks · Liability · Constitutional", status: "Active" },
                { dot: "var(--ink-muted)", label: "Economic", desc: "Knowledge-Backed Currency · Platform Trading", status: "Coming" },
              ].map((layer, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: 16, padding: "14px 20px", borderBottom: i < 2 ? "1px solid var(--border-soft)" : "none" }}>
                  <div style={{ width: 8, height: 8, borderRadius: "50%", background: layer.dot, flexShrink: 0 }} />
                  <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink)", minWidth: 100 }}>{layer.label}</span>
                  <span style={{ fontFamily: "'Crimson Pro',serif", fontSize: 14, fontWeight: 300, color: "var(--ink-soft)" }}>{layer.desc}</span>
                  <span style={{ marginLeft: "auto", fontFamily: "'Cormorant Garamond',serif", fontSize: 10, fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", padding: "3px 10px", border: "1px solid", color: layer.status === "Active" ? "var(--gold)" : "var(--ink-muted)", borderColor: layer.status === "Active" ? "var(--gold)" : "var(--border)" }}>{layer.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI GOVERNANCE FOUNDING DOCUMENTS */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 48px" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 48, paddingBottom: 20, borderBottom: "1px solid var(--border)" }}>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 13, fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ink-soft)" }}>
            <span style={{ color: "var(--gold)", marginRight: 12 }}>I.</span> AI Governance — Founding Documents
          </div>
          <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 14, fontWeight: 300, color: "var(--ink-muted)" }}>Can algorithmic decision-making replace or augment political institutions?</div>
        </div>

        <div style={{ display: "grid", gap: 1, background: "var(--border)", border: "1px solid var(--border)", marginBottom: 80 }}>
          {/* Featured */}
          {featuredArticle && (
            <Link href={`/ai-governance/${featuredArticle.slug}`} style={{ textDecoration: "none" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, padding: 40, background: "var(--cream)", cursor: "pointer", transition: "background 0.2s" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "var(--gold-pale)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "var(--cream)"}>
                <div>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 11, fontWeight: 400, letterSpacing: "0.2em", color: "var(--gold)", textTransform: "uppercase", marginBottom: 16 }}>{featuredArticle.number}</div>
                  <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 600, lineHeight: 1.25, color: "var(--ink)", marginBottom: 16 }}>{featuredArticle.title}</h2>
                  <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 16, fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.7, marginBottom: 24 }}>{featuredArticle.excerpt}</p>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)" }}>Read Founding Document →</div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  <div>
                    <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", background: "var(--ink)", color: "var(--warm-white)", padding: "4px 12px", display: "inline-block", marginBottom: 20 }}>{featuredArticle.tag}</span>
                    {featuredArticle.quote && (
                      <blockquote style={{ fontFamily: "'Playfair Display',serif", fontSize: 15, fontStyle: "italic", fontWeight: 400, color: "var(--ink-mid)", lineHeight: 1.6, borderLeft: "2px solid var(--gold)", paddingLeft: 20 }}>
                        "{featuredArticle.quote}"
                      </blockquote>
                    )}
                  </div>
                </div>
              </div>
            </Link>
          )}

          {/* Other articles grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 1, background: "var(--border)" }}>
            {otherArticles.slice(0, 2).map(article => (
              <Link key={article.slug} href={`/ai-governance/${article.slug}`} style={{ textDecoration: "none" }}>
                <div style={{ padding: 40, background: "var(--warm-white)", cursor: "pointer", transition: "background 0.2s", height: "100%" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "var(--cream)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "var(--warm-white)"}>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 11, letterSpacing: "0.2em", color: "var(--gold)", textTransform: "uppercase", marginBottom: 16 }}>{article.number}</div>
                  <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 19, fontWeight: 600, lineHeight: 1.25, color: "var(--ink)", marginBottom: 14 }}>{article.title}</h3>
                  <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 15, fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.7, marginBottom: 20 }}>{article.excerpt}</p>
                  <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)" }}>Read →</div>
                </div>
              </Link>
            ))}
          </div>

          {/* Third article full width */}
          {otherArticles[2] && (
            <Link href={`/ai-governance/${otherArticles[2].slug}`} style={{ textDecoration: "none" }}>
              <div style={{ padding: 40, background: "var(--warm-white)", borderTop: "1px solid var(--border)", cursor: "pointer", transition: "background 0.2s" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "var(--cream)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "var(--warm-white)"}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48 }}>
                  <div>
                    <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 11, letterSpacing: "0.2em", color: "var(--gold)", textTransform: "uppercase", marginBottom: 16 }}>{otherArticles[2].number}</div>
                    <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 19, fontWeight: 600, lineHeight: 1.25, color: "var(--ink)" }}>{otherArticles[2].title}</h3>
                  </div>
                  <div>
                    <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 15, fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.7, marginBottom: 20 }}>{otherArticles[2].excerpt}</p>
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)" }}>Read Founding Document →</div>
                  </div>
                </div>
              </div>
            </Link>
          )}
        </div>

        {/* ALL FIVE PILLARS */}
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 48, paddingBottom: 20, borderBottom: "1px solid var(--border)" }}>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 13, fontWeight: 400, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ink-soft)" }}>
            <span style={{ color: "var(--gold)", marginRight: 12 }}>II.</span> The Five Pillars
          </div>
          <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 14, fontWeight: 300, color: "var(--ink-muted)" }}>Areas of ongoing research and analysis</div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 1, background: "var(--border)", border: "1px solid var(--border)" }}>
          {pillars.map((pillar, i) => (
            <Link key={pillar.slug} href={`/${pillar.slug}`} style={{ textDecoration: "none" }}>
              <div style={{ padding: "32px 24px", background: i === 0 ? "var(--cream)" : "var(--warm-white)", cursor: "pointer", transition: "background 0.2s", position: "relative", height: "100%" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "var(--cream)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = i === 0 ? "var(--cream)" : "var(--warm-white)"}>
                {i === 0 && <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "var(--gold)" }} />}
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 36, fontWeight: 400, color: "var(--border)", lineHeight: 1, marginBottom: 16 }}>{pillar.number}</div>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 14, fontWeight: 600, color: "var(--ink)", lineHeight: 1.3, marginBottom: 12 }}>{pillar.title}</div>
                <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 13, fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.6, marginBottom: 16 }}>{pillar.description}</div>
                <div style={{ borderTop: "1px solid var(--border-soft)", paddingTop: 16 }}>
                  {pillar.articles.slice(0, 3).map(a => (
                    <div key={a.slug} style={{ fontFamily: "'Crimson Pro',serif", fontSize: 12, fontWeight: 400, color: "var(--ink-muted)", lineHeight: 1.5, padding: "3px 0 3px 10px", position: "relative" }}>
                      <span style={{ position: "absolute", left: 0, color: "var(--gold)" }}>–</span>
                      {a.title.split(":")[0].split(".")[0]}
                    </div>
                  ))}
                  {pillar.articles.length > 3 && (
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, color: "var(--gold)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: 8 }}>
                      +{pillar.articles.length - 3} more
                    </div>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* MANIFESTO STRIP */}
      <section style={{ background: "var(--ink)", padding: "80px 48px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold-light)", marginBottom: 32 }}>The Founding Premise</div>
          <div style={{ width: 40, height: 1, background: "var(--gold)", margin: "0 auto 32px" }} />
          <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, fontWeight: 400, fontStyle: "italic", lineHeight: 1.55, color: "#f5f0e8", marginBottom: 32 }}>
            "Throughout history, the most enduring moral insights were not produced by committees or commissions. They were produced by individuals who wrote in poverty and obscurity — people who held nothing but the belief that truth had value independent of whether anyone was listening."
          </p>
          <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 14, fontWeight: 300, color: "rgba(245,240,232,0.5)", letterSpacing: "0.05em" }}>
            — From <em>The AI Parliament</em>, worldlegalservices.com
          </div>
        </div>
      </section>

      {/* ECONOMIC LAYER TEASER */}
      <section style={{ maxWidth: 1100, margin: "0 auto", padding: "80px 48px" }}>
        <div style={{ border: "1px solid var(--border)", display: "grid", gridTemplateColumns: "1fr 1fr" }}>
          <div style={{ padding: 48, borderRight: "1px solid var(--border)" }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20 }}>Economic Layer · In Development</div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 28, fontWeight: 600, lineHeight: 1.25, color: "var(--ink)", marginBottom: 20 }}>A Post-Monetary Civic Economy Built on Knowledge</h2>
            <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 17, fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.75, marginBottom: 28 }}>
              WLS tokens are earned through demonstrated knowledge of foundational governance principles. They cannot be bought, inherited, or transferred. They expire — requiring renewal to maintain participation rights. They are not a currency. They are a civic credential.
            </p>
            <Link href="/about#economic-layer" style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", textDecoration: "none" }}>Read the Economic White Paper →</Link>
          </div>
          <div style={{ padding: 48 }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--ink-muted)", marginBottom: 20 }}>Token Properties</div>
            {[
              ["Issuance", "Learning platform assessment only"],
              ["Purchase", "Never permitted"],
              ["Transfer", "Non-transferable"],
              ["Expiry", "Time-limited — renewal required"],
              ["Function", "AI Parliament participation weight"],
              ["Backing", "Knowledge and contribution"],
            ].map(([k, v]) => (
              <div key={k} style={{ display: "flex", gap: 16, padding: "10px 0", borderBottom: "1px solid var(--border-soft)" }}>
                <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-soft)", minWidth: 90 }}>{k}</span>
                <span style={{ fontFamily: "'Crimson Pro',serif", fontSize: 14, fontWeight: 300, color: "var(--ink-mid)" }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
