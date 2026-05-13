/* ============================================================
   ShiftItNow — Frontend interactions
   ============================================================ */

(() => {
  'use strict';

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
    '.section-head, .platform-card, .feature-card, .step, .testimonial, .price-card, .faq-item, .stat, .mig-col, .cta-card, .contact-form, .contact-copy, .hero-copy, .hero-visual'
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

  /* ---------- 6. Smooth-scroll w/ sticky-header offset ---------- */
  const headerOffset = () => (header ? header.offsetHeight + 8 : 0);
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const id = anchor.getAttribute('href');
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - headerOffset();
      window.scrollTo({ top: y, behavior: 'smooth' });
    });
  });

  /* ---------- 7. Contact form (client-side only) ---------- */
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  if (form && success) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      // Native HTML5 validation
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalLabel = submitBtn ? submitBtn.innerHTML : '';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending…';
      }

      // Simulate submit; replace this block with a real endpoint when wiring up.
      setTimeout(() => {
        form.reset();
        success.hidden = false;
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalLabel;
        }
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 800);
    });
  }

  /* ---------- 8. Year stamp ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

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
