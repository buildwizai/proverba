const ThankYou = () => (
  <div className="flex min-h-screen items-center justify-center bg-hero px-6 text-text-base">
    <div className="glass-card w-full max-w-lg space-y-6 rounded-3xl px-8 py-10 text-center shadow-card">
      <img
        src="/assets/proverba-logo.svg"
        alt="Proverba logo"
        className="mx-auto w-24 drop-shadow-[0_12px_26px_rgba(249,115,22,0.2)]"
      />
      <h1 className="text-3xl font-semibold">You're on the list</h1>
      <p className="text-base text-text-muted">
        Thanks for joining the Proverba founding circle. We'll send a welcome packet with your first proverb and reflection prompts as soon as early access opens.
      </p>
      <p className="text-base text-text-muted">
        You can withdraw consent or manage preferences anytime via the link in our emails or by visiting the{' '}
        <a className="text-accent hover:underline" href="/privacy-policy">
          Privacy Policy
        </a>
        .
      </p>
      <a
        className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-br from-accent to-orange-400 px-6 py-3 font-semibold text-primary transition duration-150 ease-in-out hover:-translate-y-0.5 hover:shadow-accent focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-primary"
        href="/"
      >
        Return to homepage
      </a>
    </div>
  </div>
);

export default ThankYou;
