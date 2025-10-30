import { useState } from 'react';
import proverbs from '../data/proverbs.js';

const focusForm = () => {
  const form = document.querySelector('form[name="subscribe"]');
  if (form) {
    form.scrollIntoView({ behavior: 'smooth', block: 'center' });
    window.setTimeout(() => {
      const emailField = form.querySelector('input[type="email"]');
      if (emailField) {
        emailField.focus();
      }
    }, 500);
  }
};

const ProverbBubble = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectionIndex, setSelectionIndex] = useState(() => Math.floor(Math.random() * proverbs.length));
  const [showExplanation, setShowExplanation] = useState(false);
  const [viewedCount, setViewedCount] = useState(1);

  const selection = proverbs[selectionIndex] ?? proverbs[0];
  const hasViewedFive = viewedCount >= 5;

  if (!isOpen || !selection) {
    return null;
  }

  const handleToggleExplanation = () => {
    setShowExplanation((prev) => !prev);
  };

  const handleNext = () => {
    setShowExplanation(false);
    setViewedCount((prev) => Math.min(prev + 1, 5));
    setSelectionIndex((prev) => {
      const next = Math.floor(Math.random() * proverbs.length);
      if (next === prev) {
        return (next + 1) % proverbs.length;
      }
      return next;
    });
  };

  const handleJoin = () => {
    setIsOpen(false);
    focusForm();
  };

  return (
    <aside className="bubble-card fixed bottom-8 right-8 z-50 w-[360px] max-w-[90vw] rounded-[34px] border border-accent/35 bg-gradient-to-br from-primary/94 via-secondary/94 to-black/80 p-6 text-left shadow-[0_20px_48px_rgba(6,18,38,0.50)] backdrop-blur-2xl">
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-sky text-xl font-semibold text-primary shadow-[0_0_28px_rgba(94,234,212,0.45)]">
          ✧
        </div>
        <div className="flex-1 space-y-4 text-sm text-text-muted">
          <p className="text-[1.05rem] leading-relaxed text-text-base md:text-[1.1rem]">“{selection.quote}”</p>
          <p className="text-xs uppercase tracking-[0.42em] text-text-muted/60">{selection.origin}</p>
          {showExplanation && (
            <p className="rounded-3xl border border-white/10 bg-white/6 px-4 py-4 text-xs leading-relaxed text-text-muted/90">
              {selection.explanation}
            </p>
          )}
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={handleToggleExplanation}
              className="inline-flex items-center rounded-full border border-accent/60 px-3.5 py-1.5 text-xs font-semibold text-accent transition hover:-translate-y-0.5 hover:bg-accent/15 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 focus:ring-offset-primary"
            >
              {showExplanation ? 'Hide' : 'Explain'}
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="inline-flex items-center rounded-full border border-accent-sky/60 px-3.5 py-1.5 text-xs font-semibold text-accent-sky transition hover:-translate-y-0.5 hover:bg-accent-sky/15 focus:outline-none focus:ring-2 focus:ring-accent-sky focus:ring-offset-1 focus:ring-offset-primary"
            >
              Next Proverb
            </button>
          </div>
          {hasViewedFive && (
            <div className="space-y-2 rounded-3xl border border-accent/40 bg-accent/12 px-4 py-4 text-xs text-text-muted/90">
              <p className="text-sm font-semibold text-text-base">Ready for a daily spark?</p>
              <p>Join the list to receive a curated proverb, reflection, and reminder every morning.</p>
              <button
                type="button"
                onClick={handleJoin}
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent-sky px-3.5 py-1.75 text-xs font-semibold text-primary transition hover:-translate-y-0.5 hover:shadow-[0_16px_28px_rgba(94,234,212,0.35)] focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-1 focus:ring-offset-primary"
              >
                Join the Daily Spark List
              </button>
            </div>
          )}
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="ml-2 text-lg text-text-muted/70 transition hover:text-text-base focus:text-text-base focus:outline-none"
          aria-label="Close proverb bubble"
        >
          ×
        </button>
      </div>
    </aside>
  );
};

export default ProverbBubble;
