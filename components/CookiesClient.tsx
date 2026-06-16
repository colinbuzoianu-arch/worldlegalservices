'use client';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function CookiesClient() {
  const locale = useLocale();

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '80px 48px 120px' }}>
      <div style={{ marginBottom: 48 }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>
          Legal Notice
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.15, margin: '0 0 16px' }}>
          Cookie Policy
        </h1>
        <div style={{ fontFamily: "'Crimson Pro', serif", fontSize: 14, fontWeight: 300, color: 'var(--ink-muted)' }}>
          Last updated: June 2026
        </div>
      </div>

      <div className="prose-wls">
        <h2>What Are Cookies</h2>
        <p>
          Cookies are small text files that are placed on your device when you visit a website. They are widely used to make websites work efficiently and to provide information to site owners. Cookies do not contain personally identifiable information on their own.
        </p>

        <h2>Cookies We Use</h2>
        <p>
          This website uses only analytics cookies. We do not use advertising cookies, social media tracking cookies, or any first-party cookies beyond what is required for analytics. We do not sell or share data collected through cookies with third parties for commercial purposes.
        </p>

        <h3>Strictly Necessary Cookies</h3>
        <p>
          World Legal Services does not set any strictly necessary cookies of its own. There are no login sessions, shopping carts, or functional states that require cookie storage on this platform.
        </p>

        <h3>Analytics Cookies — Google Analytics 4</h3>
        <p>
          We use Google Analytics 4 to understand how visitors find and use this website — which articles are read, how users navigate between sections, and where traffic originates. This helps us understand whether the platform is reaching the audience it is intended for.
        </p>
        <p>
          Analytics cookies are only set after you provide consent through the cookie banner. If you decline, no analytics cookies are placed and Google Analytics does not load.
        </p>

        <div style={{ overflowX: 'auto', margin: '24px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Crimson Pro', serif", fontSize: 15 }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--border)' }}>
                <th style={{ textAlign: 'left', padding: '10px 16px 10px 0', fontFamily: "'Cormorant Garamond', serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>Cookie</th>
                <th style={{ textAlign: 'left', padding: '10px 16px', fontFamily: "'Cormorant Garamond', serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>Purpose</th>
                <th style={{ textAlign: 'left', padding: '10px 0 10px 16px', fontFamily: "'Cormorant Garamond', serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--ink-soft)' }}>Duration</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid var(--border-soft)' }}>
                <td style={{ padding: '12px 16px 12px 0', fontWeight: 400, color: 'var(--ink)', verticalAlign: 'top' }}><code style={{ fontFamily: 'monospace', fontSize: 13, background: 'var(--border-soft)', padding: '2px 6px' }}>_ga</code></td>
                <td style={{ padding: '12px 16px', color: 'var(--ink-soft)', lineHeight: 1.6, verticalAlign: 'top' }}>Distinguishes unique users by assigning a randomly generated number as a client identifier. No personally identifiable information is stored.</td>
                <td style={{ padding: '12px 0 12px 16px', color: 'var(--ink-soft)', whiteSpace: 'nowrap', verticalAlign: 'top' }}>2 years</td>
              </tr>
              <tr>
                <td style={{ padding: '12px 16px 12px 0', fontWeight: 400, color: 'var(--ink)', verticalAlign: 'top' }}><code style={{ fontFamily: 'monospace', fontSize: 13, background: 'var(--border-soft)', padding: '2px 6px' }}>_ga_G-YCDHWVYJGL</code></td>
                <td style={{ padding: '12px 16px', color: 'var(--ink-soft)', lineHeight: 1.6, verticalAlign: 'top' }}>Used to persist session state for this specific Google Analytics property.</td>
                <td style={{ padding: '12px 0 12px 16px', color: 'var(--ink-soft)', whiteSpace: 'nowrap', verticalAlign: 'top' }}>2 years</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2>How to Control Cookies</h2>
        <p>
          You can control and delete cookies through your browser settings. Most browsers allow you to refuse all cookies, accept only certain types, or be notified when a cookie is being sent. Deleting or refusing analytics cookies will not affect your ability to use this website.
        </p>
        <ul>
          <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
          <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
          <li><strong>Safari:</strong> Preferences → Privacy → Manage Website Data</li>
          <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
        </ul>

        <h2>Google Analytics Opt-Out</h2>
        <p>
          You can opt out of Google Analytics tracking across all websites by installing the Google Analytics opt-out browser add-on, available from Google at{' '}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">tools.google.com/dlpage/gaoptout</a>.
        </p>

        <h2>Third-Party Services</h2>
        <p>
          Google Analytics is operated by Google LLC. Data about your visit may be transmitted to Google's servers, which may be located in the United States or other countries outside the European Economic Area. Google processes this data in accordance with its own privacy policy and the standard contractual clauses required under GDPR.
        </p>
        <p>
          For full details of how your data is handled, including your rights under GDPR, please see our{' '}
          <Link href={`/${locale}/privacy`} style={{ color: 'var(--gold)', textDecoration: 'none' }}>Privacy Policy</Link>.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this cookie policy from time to time. The date at the top of this page indicates when it was last revised. Continued use of this website after a revision constitutes acceptance of the updated policy.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this cookie policy or how we handle data, you can contact us at <a href="mailto:colinbuzoianu@verumsell.com">colinbuzoianu@verumsell.com</a>.
        </p>
      </div>

      <div style={{ marginTop: 64, paddingTop: 32, borderTop: '1px solid var(--border-soft)' }}>
        <Link href={`/${locale}`} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 13, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', textDecoration: 'none' }}>
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
