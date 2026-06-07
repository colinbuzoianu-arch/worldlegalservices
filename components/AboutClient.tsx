"use client";
import Link from "next/link";
import { pillars } from "@/lib/content";

export default function AboutClient() {
  return (
    <>
      <section style={{ borderBottom: "1px solid var(--border)", padding: "80px 48px 64px", maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "var(--gold)", marginBottom: 20, display: "flex", alignItems: "center", gap: 12 }}>
          <span style={{ display: "inline-block", width: 28, height: 1, background: "var(--gold)" }} />
          About the Platform
        </div>
        <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 48, fontWeight: 700, lineHeight: 1.1, color: "var(--ink)", marginBottom: 24, maxWidth: 700 }}>World Legal Services</h1>
        <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 21, fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.65, maxWidth: 660, borderLeft: "2px solid var(--gold)", paddingLeft: 24 }}>
          An independent platform for policy analysis, legal research, and governance thinking at the intersection of emerging technology, international law, and democratic accountability.
        </p>
      </section>

      <section style={{ maxWidth: 900, margin: "0 auto", padding: "64px 48px" }}>
        <div className="prose-wls">

          <h2>The Platform</h2>
          <p>World Legal Services was founded on a simple and uncomfortable premise: the institutions built in the twentieth century to govern human societies are structurally inadequate for the governance challenges of the twenty-first. Not because the people inside them are uniquely corrupt or uniquely incompetent. Because the incentive structures those institutions create systematically diverge from the outcomes they were designed to produce.</p>
          <p>The platform does not offer this as a counsel of despair. It offers it as a design brief. If the institutions we have are failing, the question worth asking is not how to repair them at the margins but what a genuinely adequate governance architecture would look like — built for the world that exists, not the world of 1945 or 1989.</p>

          <hr />

          <h2>The Five Pillars</h2>
          <div style={{ display: "grid", gap: 1, background: "var(--border)", border: "1px solid var(--border)", marginBottom: "2rem" }}>
            {pillars.map(p => (
              <Link key={p.slug} href={`/${p.slug}`} style={{ textDecoration: "none" }}>
                <div style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 32, padding: "28px 32px", background: "var(--warm-white)", alignItems: "start", cursor: "pointer", transition: "background 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "var(--cream)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "var(--warm-white)"}>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 28, fontWeight: 400, color: "var(--border)", lineHeight: 1 }}>{p.number}</div>
                  <div>
                    <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 17, fontWeight: 600, color: "var(--ink)", marginBottom: 6 }}>{p.title}</div>
                    <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 15, fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.6 }}>{p.description}</div>
                    <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", marginTop: 10 }}>{p.articles.length} articles →</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <hr />

          <h2>The Editorial Commitment</h2>
          <p>World Legal Services is independent. It accepts no advertising, no institutional funding, and no sponsorship that would create obligations to any political, commercial, or governmental interest.</p>
          <p>Its analysis is evidence-based and outcome-focused. It does not align with any political party, national government, or ideological faction. It evaluates institutions and policies by what they actually produce, not by what they claim to be trying to produce.</p>
          <p>It writes from a Central European perspective — from Romania, from the specific epistemic position of a society that has lived through communism, revolution, imperfect transition, and ongoing governance struggle. That position is not a limitation. It is an asset: a trained scepticism about institutional claims, a visceral understanding of what governance failure costs, a capacity to distinguish institutional form from institutional substance.</p>

          <hr />

          <h2>The Author</h2>
          <p>World Legal Services is written and edited by <strong>Colin Buzoianu</strong>, a software entrepreneur and technology policy analyst based in Timișoara, Romania.</p>
          <p>His professional background spans software development, health technology, and corporate training — work that has given him sustained engagement with the practical consequences of regulatory frameworks, institutional design, and the gap between how governance systems describe themselves and how they actually function. He writes about governance from the position of someone who has observed its consequences on the ground rather than from within the institutions that produce it.</p>

          <hr id="economic-layer" />

          <h2>The Larger Project</h2>
          <p>World Legal Services is the analytical foundation of a larger project whose other components are currently in development.</p>

          <div style={{ border: "1px solid var(--border)", marginBottom: "2rem" }}>
            {[
              { title: "The Learning Platform", status: "In Development", desc: "A structured educational system built around the foundational principles of AI governance, international law, and the history of governance failure — designed to make governance knowledge accessible to a global audience." },
              { title: "The WLS Token System", status: "In Development", desc: "A knowledge-backed civic credential earned through demonstrated understanding of foundational principles. Tokens are non-transferable, time-limited, and cannot be purchased. The only path to civic standing is through genuine engagement with the ideas." },
              { title: "The Economic Layer", status: "Design Phase", desc: "A post-monetary civic economy in which demonstrated knowledge and governance contribution are directly rewarded, without dependence on existing financial systems. Design principles published in the WLS Economic White Paper." },
            ].map((item, i) => (
              <div key={i} style={{ padding: "28px 32px", borderBottom: i < 2 ? "1px solid var(--border)" : "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 12 }}>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 16, fontWeight: 600, color: "var(--ink)" }}>{item.title}</div>
                  <span style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 10, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)", border: "1px solid var(--gold)", padding: "2px 10px" }}>{item.status}</span>
                </div>
                <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 15, fontWeight: 300, color: "var(--ink-soft)", lineHeight: 1.7 }}>{item.desc}</div>
              </div>
            ))}
          </div>

          <hr />

          <h2>An Invitation</h2>
          <p>This platform exists for people who take governance seriously — who are not satisfied with the available political narratives, who recognise that the institutions we have are inadequate to the challenges we face, and who believe that building something genuinely better is worth the sustained intellectual effort it requires.</p>
        </div>

        {/* CTAs */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 1, background: "var(--border)", border: "1px solid var(--border)", marginTop: 48 }}>
          {[
            { title: "Read the Founding Documents", desc: "Start with the AI Governance series", link: "/ai-governance", label: "Explore" },
            { title: "Join the Learning Platform", desc: "Launching soon — be notified", link: "/about", label: "Notify Me" },
            { title: "Collaborate", desc: "Researchers, analysts, practitioners", link: "mailto:contact@worldlegalservices.com", label: "Get in Touch" },
          ].map((cta, i) => (
            <Link key={i} href={cta.link} style={{ textDecoration: "none" }}>
              <div style={{ padding: 32, background: "var(--warm-white)", height: "100%", cursor: "pointer", transition: "background 0.2s" }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "var(--cream)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "var(--warm-white)"}>
                <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 16, fontWeight: 600, color: "var(--ink)", marginBottom: 10 }}>{cta.title}</div>
                <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 14, fontWeight: 300, color: "var(--ink-soft)", marginBottom: 20 }}>{cta.desc}</div>
                <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, fontWeight: 600, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--gold)" }}>{cta.label} →</div>
              </div>
            </Link>
          ))}
        </div>

        <div style={{ marginTop: 48, textAlign: "center" }}>
          <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 14, fontWeight: 300, color: "var(--ink-muted)", fontStyle: "italic" }}>
            World Legal Services · Timișoara, Romania · Rethinking the Rules That Govern Us
          </div>
        </div>
      </section>
    </>
  );
}
