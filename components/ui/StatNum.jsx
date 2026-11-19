'use client';

import { useEffect, useRef, useState } from 'react';

const DURATION = 1600;
const format = (value, isFloat) => (isFloat ? value.toFixed(2) : Math.round(value).toLocaleString());

/** A number that counts up from 0 to `target` the first time it scrolls into view. */
export default function StatNum({ target }) {
  const element = useRef(null);
  const [text, setText] = useState('0');

  useEffect(() => {
    const value = parseFloat(target);
    if (Number.isNaN(value)) return undefined;
    const isFloat = !Number.isInteger(value);
    let frame;
    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        const t = Math.min((now - start) / DURATION, 1);
        setText(format(value * (1 - Math.pow(1 - t, 3)), isFloat));
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);
    };
    if (!('IntersectionObserver' in window)) {
      run();
      return () => cancelAnimationFrame(frame);
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          run();
        }
      },
      { threshold: 0.4 },
    );
    observer.observe(element.current);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [target]);

  return (
    <div className="stat-num" data-target={target} ref={element}>
      {text}
    </div>
  );
}
