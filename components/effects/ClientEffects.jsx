'use client';

import Lenis from 'lenis';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// Decorative, scroll- and pointer-driven behaviour that used to live in script.js. It works on the
// server-rendered markup by class name (the same selectors the old site used), so every page gets it
// without each section needing to know about it. Interactive pieces with state (menu, FAQ, calculator,
// form, sliders, counters) are real components instead.

const REVEAL =
  '.section-head, .platform-card, .feature-card, .step, .testimonial, .price-card, .faq-item, .stat, .mig-col, .cta-card, .contact-form, .contact-copy, .hero-copy, .hero-visual, .blog-card, .blog-index-copy, .blog-index-featured, .blog-post-meta, .blog-post-main, .blog-sidebar-card, .blog-gallery-card, .blog-trust-copy, .blog-trust-points, .blog-post-hero-panel';
const TILT = '.platform-card, .feature-card, .testimonial, .price-card, .pdp-card';

const hoverDevice = () => window.matchMedia('(hover: hover) and (pointer: fine)').matches;

export default function ClientEffects() {
  const pathname = usePathname();

  // Smooth scrolling for the whole app.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });
    window.lenis = lenis;
    let frame = requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    });
    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  // In-page anchors (#how, #faq...) scroll smoothly, leaving room for the sticky header.
  useEffect(() => {
    const onClick = (event) => {
      const anchor = event.target.closest?.('a[href^="#"]');
      const id = anchor?.getAttribute('href');
      if (!id || id.length < 2) return;
      let target;
      try {
        target = document.querySelector(id);
      } catch {
        return;
      }
      if (!target) return;
      event.preventDefault();
      const header = document.getElementById('siteHeader');
      const offset = header ? header.offsetHeight + 8 : 0;
      if (window.lenis) window.lenis.scrollTo(target, { offset: -offset, duration: 1.2 });
      else
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY - offset,
          behavior: 'smooth',
        });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  // Effects on the page content; re-run whenever the route changes and new markup appears.
  useEffect(() => {
    const cleanups = [];
    const timers = [];
    const on = (el, type, handler, options) => {
      el.addEventListener(type, handler, options);
      cleanups.push(() => el.removeEventListener(type, handler, options));
    };

    // Fade/slide elements in as they scroll into view.
    const revealTargets = [...document.querySelectorAll(REVEAL)];
    revealTargets.forEach((el) => el.classList.add('reveal'));
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, index) => {
            if (!entry.isIntersecting) return;
            const delay = Number(entry.target.dataset.delay || index * 60);
            timers.push(setTimeout(() => entry.target.classList.add('in-view'), delay));
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
      );
      revealTargets.forEach((el) => observer.observe(el));
      cleanups.push(() => observer.disconnect());

      // Stat boxes glow once half of them is visible.
      const glow = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('in-view');
            glow.unobserve(entry.target);
          });
        },
        { threshold: 0.5 },
      );
      document.querySelectorAll('.stat').forEach((el) => glow.observe(el));
      cleanups.push(() => glow.disconnect());
    } else {
      revealTargets.forEach((el) => el.classList.add('in-view'));
    }

    // Cards tilt towards the pointer.
    if (hoverDevice() && window.matchMedia('(prefers-reduced-motion: no-preference)').matches) {
      document.querySelectorAll(TILT).forEach((card) => {
        on(card, 'mousemove', (event) => {
          const rect = card.getBoundingClientRect();
          const x = (event.clientX - rect.left) / rect.width - 0.5;
          const y = (event.clientY - rect.top) / rect.height - 0.5;
          card.style.transform = `perspective(900px) rotateX(${(-y * 6).toFixed(2)}deg) rotateY(${(x * 6).toFixed(2)}deg) translateY(-4px)`;
        });
        on(card, 'mouseleave', () => {
          card.style.transform = '';
        });
      });
    }

    // Hero: a spotlight that follows the pointer, and a slight parallax on the visual.
    const hero = document.querySelector('.hero');
    if (hero && hoverDevice()) {
      on(hero, 'mousemove', (event) => {
        const rect = hero.getBoundingClientRect();
        hero.style.setProperty('--mx', `${((event.clientX - rect.left) / rect.width) * 100}%`);
        hero.style.setProperty('--my', `${((event.clientY - rect.top) / rect.height) * 100}%`);
      });
    }
    const heroVisual = document.querySelector('.hero-visual');
    if (
      hero &&
      heroVisual &&
      window.matchMedia('(min-width: 961px) and (prefers-reduced-motion: no-preference)').matches
    ) {
      on(hero, 'mousemove', (event) => {
        const rect = heroVisual.getBoundingClientRect();
        const dx = (event.clientX - (rect.left + rect.width / 2)) / rect.width;
        const dy = (event.clientY - (rect.top + rect.height / 2)) / rect.height;
        heroVisual.style.transform = `translate(${dx * 8}px, ${dy * 8}px)`;
      });
      on(hero, 'mouseleave', () => {
        heroVisual.style.transform = '';
      });
    }

    return () => {
      cleanups.forEach((fn) => fn());
      timers.forEach(clearTimeout);
    };
  }, [pathname]);

  return null;
}
