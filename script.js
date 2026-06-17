/* ============================================================
   ShiftItNow — Frontend interactions
   ============================================================ */

(() => {
  'use strict';

  /* ---------- 0a. Lenis smooth scroll ---------- */
  let lenis = null;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (typeof Lenis !== 'undefined' && !reducedMotion) {
    lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1,
      touchMultiplier: 1.4,
    });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    window.lenis = lenis;
  }

  /* ---------- 0. Announcement bar dismiss ---------- */
  const announceClose = document.getElementById('announceClose');
  const announcementBar = document.getElementById('announcementBar');

  if (announceClose && announcementBar) {
    announceClose.addEventListener('click', () => {
      announcementBar.style.transition = 'opacity 200ms, max-height 300ms';
      announcementBar.style.opacity = '0';
      announcementBar.style.maxHeight = '0';
      announcementBar.style.overflow = 'hidden';
      setTimeout(() => announcementBar.remove(), 300);
    });
  }

  /* ---------- 1. Mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');

  if (navToggle && mobileMenu) {
    navToggle.addEventListener('click', () => {
      const open = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!open));
      if (!open) {
        mobileMenu.hidden = false;
        requestAnimationFrame(() => mobileMenu.dataset.open = 'true');
      } else {
        mobileMenu.dataset.open = 'false';
        mobileMenu.hidden = true;
      }
    });

    mobileMenu.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.dataset.open = 'false';
        mobileMenu.hidden = true;
      });
    });
  }

  /* ---------- 2. Sticky-header scroll state ---------- */
  const header = document.getElementById('siteHeader');
  if (header) {
    const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- 3. Scroll-reveal ---------- */
  const revealTargets = document.querySelectorAll(
    '.section-head, .platform-card, .feature-card, .step, .testimonial, .price-card, .faq-item, .stat, .mig-col, .cta-card, .contact-form, .contact-copy, .hero-copy, .hero-visual, .blog-card, .blog-index-copy, .blog-index-featured, .blog-post-meta, .blog-post-main, .blog-sidebar-card, .blog-gallery-card, .blog-trust-copy, .blog-trust-points, .blog-post-hero-panel'
  );
  revealTargets.forEach(el => el.classList.add('reveal'));

  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          // Slight stagger inside grouped grids
          const delay = entry.target.dataset.delay || (i * 60);
          setTimeout(() => entry.target.classList.add('in-view'), Number(delay));
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });
    revealTargets.forEach(el => io.observe(el));
  } else {
    revealTargets.forEach(el => el.classList.add('in-view'));
  }

  /* ---------- 4. Card sliders (mobile) ---------- */
  function initCardSlider(gridSel, cardSel, dotClass) {
    const grid = document.querySelector(gridSel);
    if (!grid) return;

    const existing = grid.parentNode.querySelector('.' + dotClass);
    if (existing) existing.remove();

    if (window.innerWidth > 768) return;

    const cards = Array.from(grid.querySelectorAll(cardSel));
    if (cards.length === 0) return;

    const wrap = document.createElement('div');
    wrap.className = dotClass;
    cards.forEach((card, i) => {
      const btn = document.createElement('button');
      btn.className = dotClass.replace('s', '') + (i === 0 ? ' active' : '');
      btn.setAttribute('aria-label', 'View item ' + (i + 1));
      btn.addEventListener('click', () => {
        grid.scrollTo({ left: card.offsetLeft - grid.offsetLeft, behavior: 'smooth' });
      });
      wrap.appendChild(btn);
    });
    grid.after(wrap);

    const dots = wrap.querySelectorAll('.' + dotClass.replace('s', ''));
    grid.addEventListener('scroll', () => {
      const cardWidth = cards[0].offsetWidth + 12;
      const idx = Math.min(Math.round(grid.scrollLeft / cardWidth), cards.length - 1);
      dots.forEach((d, i) => d.classList.toggle('active', i === idx));
    }, { passive: true });
  }

  function initAllSliders() {
    initCardSlider('.feature-grid',  '.feature-card',  'feature-dots');
    initCardSlider('.platform-grid', '.platform-card', 'platform-dots');
  }

  initAllSliders();
  window.addEventListener('resize', initAllSliders);

  /* ---------- 5. Stat counters ---------- */
  const stats = document.querySelectorAll('.stat-num');
  const animateStat = (el) => {
    const target = parseFloat(el.dataset.target);
    if (isNaN(target)) return;
    const isFloat = !Number.isInteger(target);
    const duration = 1600;
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const value = target * eased;
      el.textContent = isFloat ? value.toFixed(2) : Math.round(value).toLocaleString();
      if (t < 1) requestAnimationFrame(tick);
      else el.textContent = isFloat ? target.toFixed(2) : Math.round(target).toLocaleString();
    };
    requestAnimationFrame(tick);
  };

  if ('IntersectionObserver' in window) {
    const statObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateStat(entry.target);
          statObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    stats.forEach(s => statObserver.observe(s));
  } else {
    stats.forEach(animateStat);
  }

  /* ---------- 5. FAQ — close others when one opens ---------- */
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    item.addEventListener('toggle', () => {
      if (item.open) {
        faqItems.forEach(other => { if (other !== item) other.open = false; });
      }
    });
  });

  /* ---------- 6. Smooth-scroll w/ sticky-header offset (uses Lenis if available) ---------- */
  const headerOffset = () => (header ? header.offsetHeight + 8 : 0);
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      if (lenis) {
        lenis.scrollTo(target, { offset: -headerOffset(), duration: 1.2 });
      } else {
        const y = target.getBoundingClientRect().top + window.scrollY - headerOffset();
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    });
  });

  /* ---------- 7. Contact form (Web3Forms) ---------- */
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  const errorEl = document.getElementById('formError');
  if (form && success) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      success.hidden = true;
      if (errorEl) errorEl.hidden = true;

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalLabel = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending…';
      }

      const restoreBtn = () => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalLabel;
        }
      };

      try {
        const formData = new FormData(form);
        const res = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' }
        });
        const json = await res.json().catch(() => ({}));

        if (res.ok && json.success !== false) {
          form.reset();
          success.hidden = false;
          success.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
          throw new Error(json.message || 'Submission failed');
        }
      } catch (err) {
        if (errorEl) {
          errorEl.hidden = false;
          errorEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } finally {
        restoreBtn();
      }
    });
  }

  /* ---------- 8. Year stamp ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- 8a. Hero mouse-follow spotlight ---------- */
  const hero = document.querySelector('.hero');
  if (hero && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    hero.addEventListener('mousemove', (e) => {
      const r = hero.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width)  * 100;
      const y = ((e.clientY - r.top)  / r.height) * 100;
      hero.style.setProperty('--mx', x + '%');
      hero.style.setProperty('--my', y + '%');
    });
  }

  /* ---------- 8b. Scroll progress bar ---------- */
  const progress = document.createElement('div');
  progress.className = 'scroll-progress';
  progress.setAttribute('aria-hidden', 'true');
  document.body.prepend(progress);
  const updateProgress = () => {
    const h = document.documentElement;
    const scrolled = h.scrollTop;
    const max = h.scrollHeight - h.clientHeight;
    const pct = max > 0 ? (scrolled / max) * 100 : 0;
    progress.style.width = pct + '%';
  };
  updateProgress();
  window.addEventListener('scroll', updateProgress, { passive: true });
  window.addEventListener('resize', updateProgress);

  /* ---------- 8c. Card 3D tilt on hover (desktop, no reduced-motion) ---------- */
  const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const motionOK = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
  if (supportsHover && motionOK) {
    const tiltCards = document.querySelectorAll('.platform-card, .feature-card, .testimonial, .price-card, .pdp-card');
    tiltCards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width  - 0.5;
        const y = (e.clientY - r.top)  / r.height - 0.5;
        const rx = (-y * 6).toFixed(2);
        const ry = ( x * 6).toFixed(2);
        card.style.transform = `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  }

  /* ---------- 8d. In-view class on stats for glow animation ---------- */
  if ('IntersectionObserver' in window) {
    const statBoxes = document.querySelectorAll('.stat');
    const sObs = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add('in-view');
          sObs.unobserve(en.target);
        }
      });
    }, { threshold: 0.5 });
    statBoxes.forEach(s => sObs.observe(s));
  }

  /* ---------- 9. Parallax on hero visual (subtle, desktop only) ---------- */
  const heroVisual = document.querySelector('.hero-visual');
  if (heroVisual && window.matchMedia('(min-width: 961px) and (prefers-reduced-motion: no-preference)').matches) {
    document.querySelector('.hero')?.addEventListener('mousemove', (e) => {
      const rect = heroVisual.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / rect.width;
      const dy = (e.clientY - cy) / rect.height;
      heroVisual.style.transform = `translate(${dx * 8}px, ${dy * 8}px)`;
    });
    document.querySelector('.hero')?.addEventListener('mouseleave', () => {
      heroVisual.style.transform = '';
    });
  }
})();
