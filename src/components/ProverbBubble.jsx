import { useEffect, useMemo, useState } from 'react';

const proverbLibrary = [
  {
    quote: 'When the roots are deep, there is no reason to fear the wind.',
    origin: 'African Proverb',
  },
  {
    quote: 'A single conversation across the table with a wise man is worth a month’s study of books.',
    origin: 'Chinese Proverb',
  },
  {
    quote: 'The sun never forgets a village just because it is small.',
    origin: 'Guatemalan Proverb',
  },
  {
    quote: 'Wisdom is like a baobab tree; no one individual can embrace it.',
    origin: 'Akan Proverb',
  },
  {
    quote: 'When you talk, you are only repeating what you already know. When you listen, you may learn something new.',
    origin: 'Dalai Lama',
  },
  {
    quote: 'A gentle hand may lead even an elephant by a hair.',
    origin: 'Persian Proverb',
  },
  {
    quote: 'The bamboo that bends is stronger than the oak that resists.',
    origin: 'Japanese Proverb',
  },
];

const ProverbBubble = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selection, setSelection] = useState(proverbLibrary[0]);

  const proverbs = useMemo(() => proverbLibrary, []);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * proverbs.length);
    setSelection(proverbs[randomIndex]);
  }, [proverbs]);

  if (!isOpen || !selection) {
    return null;
  }

  return (
    <aside className="fixed bottom-6 right-6 z-50 w-[320px] max-w-[85vw] rounded-3xl border border-accent/40 bg-gradient-to-br from-primary/90 via-secondary/90 to-black/70 p-4 text-left shadow-[0_18px_42px_rgba(6,18,38,0.45)] backdrop-blur-xl">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-sky text-lg font-semibold text-primary shadow-[0_0_22px_rgba(94,234,212,0.45)]">
          ✧
        </div>
        <div className="space-y-2 text-sm text-text-muted">
          <p className="text-[0.95rem] leading-relaxed text-text-base">“{selection.quote}”</p>
          <p className="text-xs uppercase tracking-[0.3em] text-text-muted/70">{selection.origin}</p>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="ml-auto text-text-muted/70 transition hover:text-text-base focus:text-text-base focus:outline-none"
          aria-label="Close proverb bubble"
        >
          ×
        </button>
      </div>
    </aside>
  );
};

export default ProverbBubble;
