const PrivacyPolicy = () => (
  <div className="flex min-h-screen justify-center bg-hero px-6 py-16 text-text-base">
    <main className="glass-card w-full max-w-4xl space-y-8 rounded-3xl px-8 py-12 shadow-card">
      <header className="space-y-2">
        <h1 className="text-3xl font-semibold text-slate-100 md:text-4xl">Privacy Policy</h1>
        <p className="text-sm text-text-muted">Effective date: 30 October 2025 | Last updated: 30 October 2025</p>
      </header>

      <section className="space-y-3 text-text-muted">
        <h2 className="text-xl font-semibold text-slate-100">Who we are</h2>
        <p>
          Proverba (“we”, “us”, “our”) operates the Proverba landing page at{' '}
          <a className="text-accent hover:underline" href="https://proverba.buildwizai.com">
            https://proverba.buildwizai.com
          </a>
          . We are the data controller for personal data collected through this site. You can contact us at{' '}
          <a className="text-accent hover:underline" href="mailto:buildwizai@gmail.com">
            buildwizai@gmail.com
          </a>
          .
        </p>
      </section>

      <section className="space-y-3 text-text-muted">
        <h2 className="text-xl font-semibold text-slate-100">Personal data we collect</h2>
        <p>When you submit the early access form we collect:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Email address</li>
          <li>Consent choices (marketing opt-in)</li>
          <li>Technical metadata (IP address, user agent) captured by Netlify for security logging</li>
        </ul>
      </section>

      <section className="space-y-3 text-text-muted">
        <h2 className="text-xl font-semibold text-slate-100">How we use your data</h2>
        <p>We process your personal data to:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Send product updates, onboarding materials, and early access invitations</li>
          <li>Respond to questions you submit</li>
          <li>Monitor sign-up performance and prevent abuse</li>
        </ul>
        <p>
          Processing is based on your explicit consent under Article 6(1)(a) GDPR. You may withdraw consent at any
          time.
        </p>
      </section>

      <section className="space-y-3 text-text-muted">
        <h2 className="text-xl font-semibold text-slate-100">Data storage &amp; transfers</h2>
        <p>
          Form submissions are stored by Netlify, Inc. in the United States. We rely on Standard Contractual Clauses
          and Netlify’s Data Processing Addendum to safeguard international transfers. Data may be exported to secure
          tools (e.g., Airtable, email platforms) that are bound by equivalent protections.
        </p>
      </section>

      <section className="space-y-3 text-text-muted">
        <h2 className="text-xl font-semibold text-slate-100">Retention</h2>
        <p>
          We retain your details for 24 months after your last interaction or until you withdraw consent, whichever comes
          first. After that we delete or anonymise your data.
        </p>
      </section>

      <section className="space-y-3 text-text-muted">
        <h2 className="text-xl font-semibold text-slate-100">Your rights</h2>
        <p>If you reside in the European Union, United Kingdom, or other jurisdictions with similar regulations, you may request:</p>
        <ul className="list-disc space-y-1 pl-6">
          <li>Access to the personal data we hold about you</li>
          <li>Correction of inaccurate data</li>
          <li>Deletion of your data (“right to be forgotten”)</li>
          <li>Restriction or objection to processing</li>
          <li>Data portability</li>
        </ul>
        <p>
          To exercise these rights, email{' '}
          <a className="text-accent hover:underline" href="mailto:buildwizai@gmail.com">
            buildwizai@gmail.com
          </a>
          . We will respond within 30 days.
        </p>
      </section>

      <section className="space-y-3 text-text-muted">
        <h2 className="text-xl font-semibold text-slate-100">Security</h2>
        <p>
          We limit access to personal data, enforce minimum security standards with our processors, and review integrations
          for compliance. Despite safeguards, no internet transmission is completely secure; submit data at your own
          discretion.
        </p>
      </section>

      <section className="space-y-3 text-text-muted">
        <h2 className="text-xl font-semibold text-slate-100">Third-party processors</h2>
        <p>
          We use Netlify for hosting and form handling. Additional processors (such as email service providers) will be
          listed here before data is shared with them. Each processor signs a Data Processing Agreement with appropriate
          safeguards.
        </p>
      </section>

      <section className="space-y-3 text-text-muted">
        <h2 className="text-xl font-semibold text-slate-100">Changes to this policy</h2>
        <p>
          We will update this page when we make material changes. For significant updates we will notify you via email
          before the new policy takes effect.
        </p>
      </section>

      <section className="space-y-3 text-text-muted">
        <h2 className="text-xl font-semibold text-slate-100">Contact &amp; complaints</h2>
        <p>
          Reach our Data Protection Lead at{' '}
          <a className="text-accent hover:underline" href="mailto:buildwizai@gmail.com">
            buildwizai@gmail.com
          </a>
          . You also have the right to lodge a complaint with your local supervisory authority, such as the Irish Data
          Protection Commission or other EU regulator.
        </p>
      </section>

      <footer>
        <p className="text-sm text-text-muted">BuildWizAI © 2025. All rights reserved.</p>
      </footer>
    </main>
  </div>
);

export default PrivacyPolicy;
