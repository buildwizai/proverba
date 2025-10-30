import { useEffect, useMemo, useState } from 'react';

const proverbLibrary = [
  {
    quote: 'When the roots are deep, there is no reason to fear the wind.',
    origin: 'African Proverb',
    explanation:
      'Resilience comes from nurturing strong foundations. Invest in your values and relationships so external pressures feel like a passing breeze.',
  },
  {
    quote: 'A single conversation across the table with a wise man is worth a month’s study of books.',
    origin: 'Chinese Proverb',
    explanation:
      'Wisdom accelerates when we learn directly from others. Seek mentors and dialogue, not just information, to move faster with clarity.',
  },
  {
    quote: 'The sun never forgets a village just because it is small.',
    origin: 'Guatemalan Proverb',
    explanation:
      'Every community matters. Remember to cast your attention on people who may be overlooked—your acknowledgment can be life-giving.',
  },
  {
    quote: 'Wisdom is like a baobab tree; no one individual can embrace it.',
    origin: 'Akan Proverb',
    explanation:
      'Profound insight is collective. Gather perspectives and invite collaboration, because no single person can hold the whole truth alone.',
  },
  {
    quote: 'When you talk, you are only repeating what you already know. When you listen, you may learn something new.',
    origin: 'Dalai Lama',
    explanation:
      'Still the urge to respond. Listening with curiosity reveals new paths, while speaking too soon keeps you inside your echo chamber.',
  },
  {
    quote: 'A gentle hand may lead even an elephant by a hair.',
    origin: 'Persian Proverb',
    explanation:
      'Grace often accomplishes more than force. Approach difficult situations with calm patience to guide even formidable challenges.',
  },
  {
    quote: 'The bamboo that bends is stronger than the oak that resists.',
    origin: 'Japanese Proverb',
    explanation:
      'Flexibility protects you from breaking. Adaptation is a strength that allows you to weather storms and rise again.',
  },
];

const ProverbBubble = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selection, setSelection] = useState(proverbLibrary[0]);
  const [showExplanation, setShowExplanation] = useState(false);

  const proverbs = useMemo(() => proverbLibrary, []);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * proverbs.length);
    setSelection(proverbs[randomIndex]);
    setShowExplanation(false);
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
        <div className="space-y-3 text-sm text-text-muted">
          <p className="text-[0.95rem] leading-relaxed text-text-base">“{selection.quote}”</p>
          <p className="text-xs uppercase tracking-[0.3em] text-text-muted/70">{selection.origin}</p>
          {showExplanation && (
            <p className="rounded-2xl border border-white/10 bg-white/5 px-3 py-3 text-xs leading-relaxed text-text-muted/90">
              {selection.explanation}
            </p>
          )}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setShowExplanation((prev) => !prev)}
              className="inline-flex items-center rounded-full border border-accent/60 px-3 py-1 text-xs font-semibold text-accent transition hover:-translate-y-0.5 hover:bg-accent/15 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              {showExplanation ? 'Hide' : 'Explain'}
            </button>
          </div>
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
