'use client';

import { useEffect, useRef, useState } from 'react';

const MOBILE = 768;

/**
 * A card grid that scrolls sideways on phones, with one dot per card underneath (the dots are only rendered
 * on narrow screens). `dotsClass` is the dots container class, e.g. "feature-dots"; each dot gets the
 * singular class ("feature-dot"), plus "active" for the card currently in view.
 */
export default function CardSlider({ className, dotsClass, cardSelector, children }) {
  const grid = useRef(null);
  const [count, setCount] = useState(0);
  const [active, setActive] = useState(0);
  const dotClass = dotsClass.replace('s', '');

  useEffect(() => {
    const el = grid.current;
    if (!el) return undefined;
    const cards = () => el.querySelectorAll(cardSelector);
    const measure = () => {
      setCount(window.innerWidth <= MOBILE ? cards().length : 0);
      setActive(0);
    };
    const onScroll = () => {
      const all = cards();
      if (!all.length) return;
      const cardWidth = all[0].offsetWidth + 12;
      setActive(Math.min(Math.round(el.scrollLeft / cardWidth), all.length - 1));
    };
    measure();
    window.addEventListener('resize', measure);
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => {
      window.removeEventListener('resize', measure);
      el.removeEventListener('scroll', onScroll);
    };
  }, [cardSelector]);

  const scrollTo = (index) => {
    const el = grid.current;
    const card = el.querySelectorAll(cardSelector)[index];
    if (card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: 'smooth' });
  };

  return (
    <>
      <div className={className} ref={grid}>
        {children}
      </div>
      {count > 0 && (
        <div className={dotsClass}>
          {Array.from({ length: count }, (_, index) => (
            <button
              key={index}
              className={`${dotClass}${index === active ? ' active' : ''}`}
              aria-label={`View item ${index + 1}`}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      )}
    </>
  );
}
