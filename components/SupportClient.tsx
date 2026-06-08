'use client';
import Link from 'next/link';
import { useLocale } from 'next-intl';

const fundingItems = [
  {
    title: 'Research and Writing',
    desc: 'Every article on this platform requires sustained research across legal databases, policy documents, academic literature, and primary sources. Your support funds that time directly — time that cannot be bought from an institution without creating the editorial obligations this platform refuses.',
  },
  {
    title: 'The Learning Platform',
    desc: 'The WLS Learning Platform — through which citizens will earn governance participation tokens by demonstrating knowledge of foundational principles — is in active development. It is the engine of the entire WLS civic economy. Building it requires sustained technical and editorial investment with no commercial return model.',
  },
  {
    title: 'The AI Governance Framework',
    desc: 'The AI Parliament concept, the multi-agent deliberation architecture, the moral constitution project — these are ideas that require legal research, technical development, and institutional relationship-building to move from founding documents to working systems. That work has no institutional patron.',
  },
  {
    title: 'Platform Independence',
    desc: 'The most important thing your support funds is the absence of other funding. Every euro that comes directly from readers who value the work is a euro that does not need to come from an organisation that might want something in return. Independence is not free. It is financed, one reader at a time.',
  },
];

const firewallItems = [
  'No influence over published analysis',
  'No named recognition on the platform',
  'No access to unpublished positions',
  'No editorial relationship of any kind',
  'No institutional affiliation implied',
];

export default function SupportClient() {
  const locale = useLocale();

  return (
    <>
      {/* HEADER */}
      <section className="about-header" style={{ borderBottom: '1px solid var(--border)', padding: '80px 48px 64px', maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 20, display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ display: 'inline-block', width: 28, height: 1, background: 'var(--gold)' }} />
          Supporting This Work
        </div>
        <h1 className="about-h1" style={{ fontFamily: "'Playfair Display',serif", fontSize: 48, fontWeight: 700, lineHeight: 1.1, color: 'var(--ink)', marginBottom: 24, maxWidth: 700 }}>
          Independent Analysis<br />
          <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Requires Independence</em>
        </h1>
        <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 21, fontWeight: 300, color: 'var(--ink-soft)', lineHeight: 1.65, maxWidth: 660, borderLeft: '2px solid var(--gold)', paddingLeft: 24 }}>
          World Legal Services accepts no institutional funding, no advertising, and no sponsorship from interests that could shape its conclusions. If you find the work valuable, you can support it directly.
        </p>
      </section>

      {/* MAIN CONTENT */}
      <section className="about-content" style={{ maxWidth: 900, margin: '0 auto', padding: '64px 48px' }}>
        <div className="prose-wls">
          <p>World Legal Services is written by one person, in Timișoara, Romania, without institutional backing, without advertising revenue, and without editorial obligations to any organisation.</p>
          <p>Every article on this platform represents hours of research, legal analysis, and careful writing — work done because the questions matter, not because a funder directed the inquiry or an algorithm rewarded the output. The independence that makes this analysis honest is the same independence that makes it financially precarious.</p>
          <p>The platform's editorial commitment — no institutional funding, no advertising, no sponsorship from interests that could shape its conclusions — is not a marketing position. It is the structural condition that makes the work worth reading. Maintaining it requires that the people who find value in the analysis are the ones who sustain it.</p>
          <p>If the work on this platform has given you a clearer view of a governance problem, a legal gap, or a policy failure — and if you believe that this kind of independent, evidence-based analysis from a Central European perspective deserves to exist and grow — you can support it directly.</p>
        </div>

        {/* WHAT YOUR SUPPORT FUNDS */}
        <div style={{ margin: '48px 0', border: '1px solid var(--border)' }}>
          <div style={{ padding: '24px 32px', borderBottom: '1px solid var(--border)', fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>
            What Your Support Funds
          </div>
          {fundingItems.map((item, i) => (
            <div key={i} className="support-funding-item" style={{ padding: '28px 32px', borderBottom: i < 3 ? '1px solid var(--border-soft)' : 'none', display: 'grid', gridTemplateColumns: '200px 1fr', gap: 32, alignItems: 'start' }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 15, fontWeight: 600, color: 'var(--ink)', lineHeight: 1.4, paddingTop: 2 }}>
                {item.title}
              </div>
              <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 16, fontWeight: 300, color: 'var(--ink-soft)', lineHeight: 1.75 }}>
                {item.desc}
              </div>
            </div>
          ))}
        </div>

        <div className="prose-wls">
          <p>Your support does not buy influence over what is written. It does not earn recognition on the platform. It does not create any obligation other than the one this platform already holds to every reader: honest analysis, independent of whoever pays for it.</p>
          <blockquote>
            &ldquo;The most enduring moral insights were produced by people who held nothing but the belief that truth had value independent of whether anyone was listening. This platform exists in that tradition — and depends on readers who understand why that tradition matters.&rdquo;
          </blockquote>
          <p style={{ fontFamily: "'Crimson Pro',serif", fontSize: 15, fontWeight: 300, color: 'var(--ink-muted)', fontStyle: 'italic', marginTop: -8 }}>
            — Colin Buzoianu, Timișoara
          </p>
        </div>

        {/* SUPPORT CTA */}
        <div className="support-cta-grid" style={{ marginTop: 56, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'var(--border)', border: '1px solid var(--border)' }}>
          <a
            href="https://buy.stripe.com/5kQ14p2Dgbbn8nWdZB9sk00"
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block', padding: '40px 36px', background: 'var(--ink)', textDecoration: 'none', cursor: 'pointer', transition: 'background 0.2s' }}
            onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.background = 'var(--ink-mid)'}
            onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.background = 'var(--ink)'}
          >
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>
              One-time Support
            </div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 600, color: 'var(--warm-white)', marginBottom: 12, lineHeight: 1.3 }}>
              Support This Work
            </div>
            <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 15, fontWeight: 300, color: 'rgba(254,252,248,0.6)', lineHeight: 1.6, marginBottom: 28 }}>
              Any amount. No strings attached. Direct support for independent analysis.
            </div>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 13, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)' }}>
              Contribute →
            </div>
          </a>

          <div style={{ padding: '40px 36px', background: 'var(--cream)' }}>
            <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>
              What This Is Not
            </div>
            <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 16, fontWeight: 600, color: 'var(--ink)', marginBottom: 20, lineHeight: 1.4 }}>
              The Editorial Firewall
            </div>
            {firewallItems.map((item, i) => (
              <div key={i} style={{ fontFamily: "'Crimson Pro',serif", fontSize: 14, fontWeight: 300, color: 'var(--ink-soft)', padding: '8px 0 8px 16px', borderBottom: i < 4 ? '1px solid var(--border-soft)' : 'none', position: 'relative' }}>
                <span style={{ position: 'absolute', left: 0, color: 'var(--gold)' }}>–</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM NOTE */}
        <div style={{ marginTop: 40, textAlign: 'center' }}>
          <div style={{ fontFamily: "'Crimson Pro',serif", fontSize: 14, fontWeight: 300, color: 'var(--ink-muted)', lineHeight: 1.7 }}>
            Prefer to contribute in another way? Sharing the platform&rsquo;s articles, citing its analysis,<br />
            or writing to engage with its arguments is equally valued.
          </div>
          <div style={{ marginTop: 20 }}>
            <Link href={`/${locale}/about`} style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none' }}>
              ← Back to About
            </Link>
          </div>
        </div>
      </section>

      {/* MANIFESTO STRIP */}
      <section style={{ background: 'var(--ink)', padding: '64px 48px', textAlign: 'center' }}>
        <div style={{ maxWidth: 600, margin: '0 auto' }}>
          <div style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: 11, fontWeight: 500, letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold-light)', marginBottom: 24 }}>
            The Platform&rsquo;s Commitment
          </div>
          <p style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 400, fontStyle: 'italic', lineHeight: 1.6, color: '#f5f0e8' }}>
            &ldquo;Independent. Evidence-based. Accountable to its readers and to no one else.&rdquo;
          </p>
        </div>
      </section>
    </>
  );
}
