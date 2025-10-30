import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetForm, submitFormRequest } from '../state/form.js';

const featureCards = [
  {
    title: 'Curated Global Proverbs',
    copy:
      'Receive wisdom rooted in authentic cultural traditions, each paired with origin stories and pronunciation.',
  },
  {
    title: 'Reflection, Not Scroll',
    copy:
      'We trade feeds for focus—a single spark, gentle prompts, and space to decide how you will live the proverb today.',
  },
  {
    title: 'Ripple It Forward',
    copy:
      'Share why today\'s proverb matters and invite someone else into a moment of clarity, all from one tap.',
  },
];

const steps = [
  {
    title: 'Welcome Packet',
    copy:
      'Receive a curated collection of three proverbs that set the tone for the Proverba experience.',
  },
  {
    title: 'Early Access Launch',
    copy:
      'Get access to the mobile app before the public launch, with direct channels to the product team.',
  },
  {
    title: 'Lifetime Founder Pricing',
    copy:
      'Keep your exclusive rate for future premium features, including audio stories and reflection recaps.',
  },
];

const Landing = () => {
  const dispatch = useDispatch();
  const { submitting, submittedEmail, error } = useSelector((state) => state.form);
  const [email, setEmail] = useState('');
  const [consentPrivacy, setConsentPrivacy] = useState(false);
  const [consentMarketing, setConsentMarketing] = useState(false);
  const [botField, setBotField] = useState('');

  useEffect(() => {
    if (submittedEmail) {
      setEmail('');
      setConsentPrivacy(false);
      setConsentMarketing(false);
    }
  }, [submittedEmail]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (botField.trim()) {
      return;
    }

    dispatch(
      submitFormRequest({
        email,
        consent_privacy: consentPrivacy ? 'yes' : 'no',
        consent_marketing: consentMarketing ? 'yes' : 'no',
        'bot-field': botField,
      }),
    );
  };

  return (
    <div className="min-h-screen bg-hero text-text-base">
      <header className="mx-auto flex max-w-5xl flex-col items-center px-6 pb-12 pt-16 text-center md:pb-16">
        <img
          className="mb-6 w-24 drop-shadow-[0_14px_28px_rgba(249,115,22,0.18)] md:w-28"
          src="/assets/proverba-logo.svg"
          alt="Proverba logo"
        />
        <span className="mb-6 inline-flex items-center gap-2 rounded-full bg-[rgba(249,115,22,0.15)] px-4 py-2 text-sm font-semibold tracking-wide text-accent">
          Founding Circle Invitation
        </span>
        <h1 className="mb-4 max-w-3xl text-3xl font-bold leading-tight md:text-5xl">
          Let One Proverb Transform the Way You Move Through Each Day
        </h1>
        <p className="mb-10 max-w-2xl text-base text-text-muted md:text-lg">
          Proverba delivers a single, culturally grounded proverb with context, reflection prompts, and gentle reminders.
          Join the early adopter circle to lock in lifetime special pricing and help shape the experience.
        </p>
        <div className="glass-card grid w-full max-w-3xl gap-6 rounded-2xl px-6 py-8 shadow-card md:px-10">
          <p className="text-lg italic text-slate-100 md:text-xl">
            “I never expected one line of wisdom to reset my day. Proverba became the quiet coach I open before every decision.”
          </p>
          {submittedEmail ? (
            <div className="grid gap-4 text-left">
              <div className="rounded-2xl border border-accent/40 bg-[rgba(249,115,22,0.12)] p-6 text-slate-900 shadow-accent">
                <h2 className="text-xl font-semibold text-primary">You're on the list</h2>
                <p className="mt-2 text-sm text-primary/80">
                  Thanks for joining the Proverba founding circle. We just sent a confirmation to{' '}
                  <strong>{submittedEmail}</strong>. Watch your inbox for the welcome packet and your first proverb drop.
                </p>
                <p className="mt-4 text-sm text-primary/80">
                  Need to update your preferences? Reach the team anytime at{' '}
                  <a className="font-semibold text-accent underline-offset-2 hover:underline" href="mailto:buildwizai@gmail.com">
                    buildwizai@gmail.com
                  </a>
                  .
                </p>
              </div>
              <button
                type="button"
                onClick={() => dispatch(resetForm())}
                className="rounded-xl border border-accent/40 px-4 py-3 text-base font-semibold text-accent transition duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
              >
                Add another founding-circle invite
              </button>
            </div>
          ) : (
            <>
              <form
                className="grid gap-4 text-left"
                name="subscribe"
                method="POST"
                action="/"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                <input type="hidden" name="form-name" value="subscribe" />
                <label className="sr-only" htmlFor="bot-field">
                  Leave this field empty
                </label>
                <input
                  id="bot-field"
                  name="bot-field"
                  type="text"
                  autoComplete="off"
                  className="hidden"
                  value={botField}
                  onChange={(event) => setBotField(event.target.value)}
                />
                <label className="text-sm font-semibold text-text-muted" htmlFor="email">
                  Request your early adopter invite
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@email.com"
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border border-slate-500/40 bg-primary/60 px-4 py-3 text-base text-slate-100 placeholder:text-slate-300/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent"
                />
                <label className="flex items-start gap-3 text-sm text-text-muted">
                  <input
                    type="checkbox"
                    name="consent_privacy"
                    className="mt-1 h-4 w-4 accent-accent"
                    value="yes"
                    checked={consentPrivacy}
                    onChange={(event) => setConsentPrivacy(event.target.checked)}
                    required
                  />
                  <span>
                    I have read and agree to the{' '}
                    <a className="text-accent hover:underline" href="/privacy-policy">
                      Privacy Policy
                    </a>
                    , including EU GDPR terms.
                  </span>
                </label>
                <label className="flex items-start gap-3 text-sm text-text-muted">
                  <input
                    type="checkbox"
                    name="consent_marketing"
                    className="mt-1 h-4 w-4 accent-accent"
                    value="yes"
                    checked={consentMarketing}
                    onChange={(event) => setConsentMarketing(event.target.checked)}
                    required
                  />
                  <span>I consent to receiving product emails and founding-circle marketing from Proverba.</span>
                </label>
                {error && (
                  <p className="rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-2 text-sm text-red-300">
                    {error}
                  </p>
                )}
                <button
                  type="submit"
                  disabled={submitting}
                  className="rounded-xl bg-gradient-to-br from-accent to-orange-400 px-4 py-3 text-base font-semibold text-primary transition duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary disabled:cursor-not-allowed disabled:opacity-75"
                >
                  {submitting ? 'Submitting…' : 'Reserve Lifetime Access'}
                </button>
              </form>
              <p className="text-sm text-text-muted">
                By joining now you secure founder pricing for life and become part of the inner feedback loop guiding new features.
              </p>
            </>
          )}
        </div>
      </header>

      <main className="space-y-16 pb-16">
        <section className="px-6">
          <h2 className="mb-10 text-center text-3xl font-semibold">Why Proverba Sparks Real Change</h2>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {featureCards.map((card) => (
              <article key={card.title} className="glass-card-light rounded-2xl p-6">
                <h3 className="mb-3 text-lg font-semibold text-slate-100">{card.title}</h3>
                <p className="text-sm text-text-muted">{card.copy}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="px-6">
          <blockquote className="mx-auto max-w-4xl border-l-4 border-accent pl-6 text-lg text-text-muted">
            “The right proverb at breakfast changes the way you speak to your team by lunch.”
            <strong className="mt-4 block text-sm tracking-wide text-slate-100">
              — Early beta participant, leadership coach
            </strong>
          </blockquote>
        </section>

        <section className="px-6">
          <h2 className="mb-10 text-center text-3xl font-semibold">What Happens After You Sign Up</h2>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {steps.map((step, index) => (
              <article key={step.title} className="glass-card-light rounded-2xl p-6">
                <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(249,115,22,0.15)] text-base font-bold text-accent">
                  {index + 1}
                </span>
                <h3 className="mb-3 text-lg font-semibold text-slate-100">{step.title}</h3>
                <p className="text-sm text-text-muted">{step.copy}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="space-y-2 px-6 pb-10 text-center text-sm text-text-muted">
        <p>
          Proverba · Crafted for intentional moments. Questions?{' '}
          <a className="text-accent hover:underline" href="mailto:buildwizai@gmail.com">
            buildwizai@gmail.com
          </a>
        </p>
        <p>The hero form is wired to Netlify Forms—confirm submissions are reaching your workspace before launch.</p>
        <p>
          <a className="text-accent hover:underline" href="/privacy-policy">
            Privacy Policy
          </a>{' '}
          · Withdraw consent anytime via the unsubscribe link in every email or by writing to{' '}
          <a className="text-accent hover:underline" href="mailto:buildwizai@gmail.com">
            buildwizai@gmail.com
          </a>
          .
        </p>
      </footer>
    </div>
  );
};

export default Landing;
