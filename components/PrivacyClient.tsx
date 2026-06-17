'use client';
import Link from 'next/link';
import { useLocale } from 'next-intl';

export default function PrivacyClient() {
  const locale = useLocale();

  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '80px 48px 120px' }}>
      <div style={{ marginBottom: 48 }}>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 11, fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 16 }}>
          Legal Notice
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(28px, 5vw, 44px)', fontWeight: 700, color: 'var(--ink)', lineHeight: 1.15, margin: '0 0 16px' }}>
          Privacy Policy
        </h1>
        <div style={{ fontFamily: "'Crimson Pro', serif", fontSize: 14, fontWeight: 300, color: 'var(--ink-muted)' }}>
          Last updated: June 2026
        </div>
      </div>

      <div className="prose-wls">
        <h2>Data Controller</h2>
        <p>
          The data controller for this website is <strong>Colin Buzoianu</strong>, a software entrepreneur and technology policy analyst based in Timișoara, Romania. You can contact the data controller by email at <a href="mailto:contact@worldlegalservice.com">contact@worldlegalservice.com</a>.
        </p>

        <h2>What Data We Collect</h2>
        <p>
          This website uses Google Analytics to collect anonymised data about how visitors use the platform. This includes:
        </p>
        <ul>
          <li>Pages visited and time spent on each page</li>
          <li>How you arrived at the website (search engine, direct link, referral)</li>
          <li>Approximate geographic location (country or region level only)</li>
          <li>Browser type, operating system, and screen resolution</li>
          <li>Session duration and navigation patterns</li>
        </ul>
        <p>
          We do not collect names, email addresses, or any other information that directly identifies you. We do not build individual user profiles. We do not use cookies for advertising purposes.
        </p>

        <h2>Legal Basis for Processing</h2>
        <p>
          We process analytics data on the basis of your <strong>consent</strong>, as provided for under Article 6(1)(a) of the General Data Protection Regulation (GDPR). Analytics cookies are only set after you explicitly accept them through the cookie consent banner on this website. You may withdraw your consent at any time by clearing your browser's cookies or using your browser's cookie management settings.
        </p>

        <h2>Data Processor: Google LLC</h2>
        <p>
          Analytics data is processed by Google LLC, which operates Google Analytics. Google acts as a data processor on our behalf under a data processing agreement that includes the standard contractual clauses required under GDPR for international data transfers. Google's privacy policy is available at google.com/privacy.
        </p>

        <h2>Data Retention</h2>
        <p>
          Analytics data is retained for 14 months by Google Analytics. After this period, data is automatically deleted. Individual session data is anonymised after a shorter period consistent with Google Analytics standard settings.
        </p>

        <h2>International Transfers</h2>
        <p>
          Data processed through Google Analytics may be transferred to and stored on servers located in the United States or other countries outside the European Economic Area. These transfers are governed by the standard contractual clauses approved by the European Commission, as required under Chapter V of the GDPR.
        </p>

        <h2>Your Rights Under GDPR</h2>
        <p>
          Under the GDPR, you have the following rights regarding your personal data:
        </p>
        <ul>
          <li><strong>Right of access</strong> (Art. 15): You have the right to request a copy of any personal data we hold about you.</li>
          <li><strong>Right to rectification</strong> (Art. 16): You have the right to request correction of inaccurate personal data.</li>
          <li><strong>Right to erasure</strong> (Art. 17): You have the right to request deletion of your personal data, subject to applicable legal requirements.</li>
          <li><strong>Right to restriction of processing</strong> (Art. 18): You have the right to request that we restrict the processing of your personal data in certain circumstances.</li>
          <li><strong>Right to data portability</strong> (Art. 20): You have the right to receive your personal data in a structured, machine-readable format.</li>
          <li><strong>Right to object</strong> (Art. 21): You have the right to object to processing of your personal data where we rely on legitimate interests as the legal basis.</li>
          <li><strong>Right to withdraw consent</strong> (Art. 7(3)): Where processing is based on consent, you have the right to withdraw that consent at any time. Withdrawal does not affect the lawfulness of processing that occurred before withdrawal.</li>
        </ul>
        <p>
          To exercise any of these rights, please contact us at <a href="mailto:contact@worldlegalservice.com">contact@worldlegalservice.com</a>. We will respond within the timeframes required by applicable law.
        </p>

        <h2>Right to Lodge a Complaint</h2>
        <p>
          If you believe that the processing of your personal data violates applicable data protection law, you have the right to lodge a complaint with the relevant supervisory authority. In Romania, the supervisory authority is:
        </p>
        <p>
          <strong>Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)</strong><br />
          Website: <a href="https://www.dataprotection.ro" target="_blank" rel="noopener noreferrer">www.dataprotection.ro</a>
        </p>

        <h2>Cookies</h2>
        <p>
          This website uses cookies only for analytics purposes. For full details of the cookies we use, their purpose, and how to control them, please see our{' '}
          <Link href={`/${locale}/cookies`} style={{ color: 'var(--gold)', textDecoration: 'none' }}>Cookie Policy</Link>.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time to reflect changes in our practices or applicable law. The date at the top of this page indicates when it was last revised. Continued use of this website after a revision constitutes acceptance of the updated policy.
        </p>

        <h2>Contact</h2>
        <p>
          For any questions about this privacy policy or how we handle your personal data, please contact us at <a href="mailto:contact@worldlegalservice.com">contact@worldlegalservice.com</a>.
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
