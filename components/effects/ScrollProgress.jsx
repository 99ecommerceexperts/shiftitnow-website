'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

// The thin gradient bar at the top of the viewport showing how far down the page you are.
export default function ScrollProgress() {
  const bar = useRef(null);
  const pathname = usePathname();

  useEffect(() => {
    const update = () => {
      const root = document.documentElement;
      const max = root.scrollHeight - root.clientHeight;
      if (bar.current) bar.current.style.width = `${max > 0 ? (root.scrollTop / max) * 100 : 0}%`;
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, [pathname]);

  return <div className="scroll-progress" ref={bar} aria-hidden="true" />;
}
