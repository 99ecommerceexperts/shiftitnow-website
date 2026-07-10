/* ============================================================
   ShiftItNow - Frontend interactions
   ============================================================ */

(async () => {
  'use strict';

  let lenis = null;
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  const reducedMotion = reducedMotionQuery.matches;

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

  const normalizePath = (path = window.location.pathname) => {
    let normalized = path || '/';

    try {
      normalized = decodeURIComponent(normalized);
    } catch (error) {
      normalized = path || '/';
    }

    normalized = normalized.replace(/\/index\.html$/i, '/');
    normalized = normalized.replace(/\.html$/i, '');

    if (!normalized.startsWith('/')) {
      normalized = `/${normalized}`;
    }

    if (normalized.length > 1 && normalized.endsWith('/')) {
      normalized = normalized.slice(0, -1);
    }

    return normalized || '/';
  };

  const setCurrentState = (link, current) => {
    if (!link) {
      return;
    }

    link.classList.toggle('nav-active', current);

    if (current) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  };

  const clearCurrentState = (root) => {
    if (!root) {
      return;
    }

    root.querySelectorAll('.nav-active, [aria-current="page"]').forEach((link) => {
      link.classList.remove('nav-active');
      link.removeAttribute('aria-current');
    });
  };

  const markCurrentLinks = (root, selector) => {
    if (!root) {
      return;
    }

    root.querySelectorAll(selector).forEach((link) => setCurrentState(link, true));
  };

  const syncSiteChromeActiveState = () => {
    const currentPath = normalizePath();
    const isBlogRoute =
      currentPath === '/blogs' ||
      currentPath === '/blog' ||
      currentPath.startsWith('/blog/');

    const header = document.querySelector('header[data-site-header], header.site-header');
    const footer = document.querySelector('footer[data-site-footer], footer.site-footer');

    clearCurrentState(header);
    clearCurrentState(footer);

    switch (currentPath) {
      case '/platforms':
        markCurrentLinks(header, 'a[href="/platforms"]');
        markCurrentLinks(footer, 'a[href="/platforms"]');
        break;
      case '/features':
        markCurrentLinks(header, 'a[href="/features"]');
        markCurrentLinks(footer, 'a[href="/features"]');
        break;
      case '/how-it-works':
        markCurrentLinks(header, 'a[href="/how-it-works"]');
        markCurrentLinks(footer, 'a[href="/how-it-works"]');
        break;
      case '/pricing':
        markCurrentLinks(header, 'a[href="/pricing"]');
        markCurrentLinks(footer, 'a[href="/pricing"]');
        break;
      case '/faq':
        markCurrentLinks(header, 'a[href="/faq"]');
        markCurrentLinks(footer, 'a[href="/faq"]');
        break;
      case '/about':
        markCurrentLinks(footer, 'a[href="/about"]');
        break;
      case '/contact':
        markCurrentLinks(header, 'a[href="/contact"]');
        markCurrentLinks(footer, 'a[href="/contact"]');
        break;
      case '/privacy':
        markCurrentLinks(footer, 'a[href="/privacy"]');
        break;
      case '/terms':
        markCurrentLinks(footer, 'a[href="/terms"]');
        break;
      case '/status':
        markCurrentLinks(footer, 'a[href="/status"]');
        break;
      default:
        if (isBlogRoute) {
          markCurrentLinks(header, 'a[href="/blogs"]');
          markCurrentLinks(footer, 'a[href="/blogs"]');
        }
        break;
    }
  };

  const loadPartial = async (selector, url) => {
    const target = document.querySelector(selector);

    if (!target) {
      return false;
    }

    const response = await fetch(url, { credentials: 'same-origin' });

    if (!response.ok) {
      throw new Error(`Failed to load ${url}: ${response.status}`);
    }

    target.innerHTML = (await response.text()).trim();
    return true;
  };

  const initAnnouncementBar = () => {
    const announceClose = document.getElementById('announceClose');
    const announcementBar = document.getElementById('announcementBar');

    if (!announceClose || !announcementBar || announceClose.dataset.bound === 'true') {
      return;
    }

    announceClose.dataset.bound = 'true';

    announceClose.addEventListener('click', () => {
      announcementBar.style.transition = 'opacity 200ms, max-height 300ms';
      announcementBar.style.opacity = '0';
      announcementBar.style.maxHeight = '0';
      announcementBar.style.overflow = 'hidden';
      setTimeout(() => announcementBar.remove(), 300);
    });
  };

  const initMobileNav = () => {
    const navToggle = document.getElementById('navToggle');
    const mobileMenu = document.getElementById('mobileMenu');

    if (!navToggle || !mobileMenu || navToggle.dataset.bound === 'true') {
      return;
    }

    navToggle.dataset.bound = 'true';

    const setOpen = (open) => {
      navToggle.setAttribute('aria-expanded', String(open));

      if (open) {
        mobileMenu.hidden = false;
        requestAnimationFrame(() => {
          mobileMenu.dataset.open = 'true';
        });
        return;
      }

      mobileMenu.dataset.open = 'false';
      mobileMenu.hidden = true;
    };

    navToggle.addEventListener('click', () => {
      const open = navToggle.getAttribute('aria-expanded') === 'true';
      setOpen(!open);
    });

    mobileMenu.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => setOpen(false));
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    });

    window.addEventListener('resize', () => {
      if (window.innerWidth > 768) {
        setOpen(false);
      }
    });
  };

  const initHeaderScrollState = () => {
    const header = document.getElementById('siteHeader');

    if (!header || header.dataset.scrollBound === 'true') {
      return;
    }

    header.dataset.scrollBound = 'true';

    const onScroll = () => {
      header.classList.toggle('scrolled', window.scrollY > 8);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  };

  const initYearStamp = () => {
    const yearEl = document.getElementById('year');

    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  };

  const initSiteChrome = async () => {
    const hasSharedHeader = Boolean(document.querySelector('header[data-site-header]'));
    const hasSharedFooter = Boolean(document.querySelector('footer[data-site-footer]'));

    try {
      await Promise.all([
        hasSharedHeader
          ? loadPartial('header[data-site-header]', '/partials/header.html')
          : Promise.resolve(false),
        hasSharedFooter
          ? loadPartial('footer[data-site-footer]', '/partials/footer.html')
          : Promise.resolve(false),
      ]);
    } catch (error) {
      console.error('Unable to load shared site chrome.', error);
    } finally {
      syncSiteChromeActiveState();
      initAnnouncementBar();
      initMobileNav();
      initHeaderScrollState();
      initYearStamp();
    }
  };

  const initReveal = () => {
    const revealTargets = document.querySelectorAll(
      '.section-head, .platform-card, .feature-card, .step, .testimonial, .price-card, .faq-item, .stat, .mig-col, .cta-card, .contact-form, .contact-copy, .hero-copy, .hero-visual, .blog-card, .blog-index-copy, .blog-index-featured, .blog-post-meta, .blog-post-main, .blog-sidebar-card, .blog-gallery-card, .blog-trust-copy, .blog-trust-points, .blog-post-hero-panel'
    );

    revealTargets.forEach((element) => element.classList.add('reveal'));

    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || index * 60;
            setTimeout(() => entry.target.classList.add('in-view'), Number(delay));
            io.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

      revealTargets.forEach((element) => io.observe(element));
      return;
    }

    revealTargets.forEach((element) => element.classList.add('in-view'));
  };

  const initCardSlider = (gridSelector, cardSelector, dotClass) => {
    const grid = document.querySelector(gridSelector);

    if (!grid) {
      return;
    }

    const existing = grid.parentNode.querySelector(`.${dotClass}`);
    if (existing) {
      existing.remove();
    }

    if (window.innerWidth > 768) {
      return;
    }

    const cards = Array.from(grid.querySelectorAll(cardSelector));

    if (!cards.length) {
      return;
    }

    const wrap = document.createElement('div');
    wrap.className = dotClass;

    cards.forEach((card, index) => {
      const button = document.createElement('button');
      button.className = dotClass.replace('s', '') + (index === 0 ? ' active' : '');
      button.setAttribute('aria-label', `View item ${index + 1}`);
      button.addEventListener('click', () => {
        grid.scrollTo({ left: card.offsetLeft - grid.offsetLeft, behavior: 'smooth' });
      });
      wrap.appendChild(button);
    });

    grid.after(wrap);

    const dots = wrap.querySelectorAll(`.${dotClass.replace('s', '')}`);

    grid.addEventListener('scroll', () => {
      const cardWidth = cards[0].offsetWidth + 12;
      const index = Math.min(Math.round(grid.scrollLeft / cardWidth), cards.length - 1);
      dots.forEach((dot, dotIndex) => dot.classList.toggle('active', dotIndex === index));
    }, { passive: true });
  };

  const initAllSliders = () => {
    initCardSlider('.feature-grid', '.feature-card', 'feature-dots');
    initCardSlider('.platform-grid', '.platform-card', 'platform-dots');
  };

  const animateStat = (element) => {
    const target = parseFloat(element.dataset.target);

    if (Number.isNaN(target)) {
      return;
    }

    const isFloat = !Number.isInteger(target);
    const duration = 1600;
    const start = performance.now();

    const tick = (now) => {
      const t = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - t, 3);
      const value = target * eased;
      element.textContent = isFloat
        ? value.toFixed(2)
        : Math.round(value).toLocaleString();

      if (t < 1) {
        requestAnimationFrame(tick);
        return;
      }

      element.textContent = isFloat
        ? target.toFixed(2)
        : Math.round(target).toLocaleString();
    };

    requestAnimationFrame(tick);
  };

  const initFaq = () => {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach((item) => {
      item.addEventListener('toggle', () => {
        if (item.open) {
          faqItems.forEach((otherItem) => {
            if (otherItem !== item) {
              otherItem.open = false;
            }
          });
        }
      });
    });
  };

  const initSmoothScroll = () => {
    const getHeaderOffset = () => {
      const header = document.getElementById('siteHeader');
      return header ? header.offsetHeight + 8 : 0;
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener('click', (event) => {
        const id = anchor.getAttribute('href');

        if (!id || id.length < 2) {
          return;
        }

        const target = document.querySelector(id);

        if (!target) {
          return;
        }

        event.preventDefault();

        if (lenis) {
          lenis.scrollTo(target, { offset: -getHeaderOffset(), duration: 1.2 });
          return;
        }

        const y = target.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
        window.scrollTo({ top: y, behavior: 'smooth' });
      });
    });
  };

  const initContactForm = () => {
    const form = document.getElementById('contactForm');
    const success = document.getElementById('formSuccess');
    const errorEl = document.getElementById('formError');

    if (!form || !success) {
      return;
    }

    form.addEventListener('submit', async (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      success.hidden = true;
      if (errorEl) {
        errorEl.hidden = true;
      }

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalLabel = submitBtn ? submitBtn.innerHTML : '';

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending...';
      }

      const restoreButton = () => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalLabel;
        }
      };

      try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' },
        });
        const json = await response.json().catch(() => ({}));

        if (!response.ok || json.success === false) {
          throw new Error(json.message || 'Submission failed');
        }

        form.reset();
        success.hidden = false;
        success.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } catch (error) {
        if (errorEl) {
          errorEl.hidden = false;
          errorEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      } finally {
        restoreButton();
      }
    });
  };

  const initHeroSpotlight = () => {
    const hero = document.querySelector('.hero');

    if (!hero || !window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      return;
    }

    hero.addEventListener('mousemove', (event) => {
      const rect = hero.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 100;
      const y = ((event.clientY - rect.top) / rect.height) * 100;
      hero.style.setProperty('--mx', `${x}%`);
      hero.style.setProperty('--my', `${y}%`);
    });
  };

  const initScrollProgress = () => {
    const progress = document.createElement('div');
    progress.className = 'scroll-progress';
    progress.setAttribute('aria-hidden', 'true');
    document.body.prepend(progress);

    const updateProgress = () => {
      const root = document.documentElement;
      const scrolled = root.scrollTop;
      const max = root.scrollHeight - root.clientHeight;
      const pct = max > 0 ? (scrolled / max) * 100 : 0;
      progress.style.width = `${pct}%`;
    };

    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    window.addEventListener('resize', updateProgress);
  };

  const initCardTilt = () => {
    const supportsHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    const motionOk = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;

    if (!supportsHover || !motionOk) {
      return;
    }

    const tiltCards = document.querySelectorAll(
      '.platform-card, .feature-card, .testimonial, .price-card, .pdp-card'
    );

    tiltCards.forEach((card) => {
      card.addEventListener('mousemove', (event) => {
        const rect = card.getBoundingClientRect();
        const x = (event.clientX - rect.left) / rect.width - 0.5;
        const y = (event.clientY - rect.top) / rect.height - 0.5;
        const rx = (-y * 6).toFixed(2);
        const ry = (x * 6).toFixed(2);
        card.style.transform =
          `perspective(900px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
      });

      card.addEventListener('mouseleave', () => {
        card.style.transform = '';
      });
    });
  };

  const initStatGlow = () => {
    if (!('IntersectionObserver' in window)) {
      return;
    }

    const statBoxes = document.querySelectorAll('.stat');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statBoxes.forEach((stat) => observer.observe(stat));
  };

  const initStatCounters = () => {
    const stats = document.querySelectorAll('.stat-num');

    if ('IntersectionObserver' in window) {
      const statObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateStat(entry.target);
            statObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.4 });

      stats.forEach((stat) => statObserver.observe(stat));
      return;
    }

    stats.forEach(animateStat);
  };

  const initHeroParallax = () => {
    const heroVisual = document.querySelector('.hero-visual');

    if (
      !heroVisual ||
      !window.matchMedia('(min-width: 961px) and (prefers-reduced-motion: no-preference)').matches
    ) {
      return;
    }

    document.querySelector('.hero')?.addEventListener('mousemove', (event) => {
      const rect = heroVisual.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (event.clientX - cx) / rect.width;
      const dy = (event.clientY - cy) / rect.height;
      heroVisual.style.transform = `translate(${dx * 8}px, ${dy * 8}px)`;
    });

    document.querySelector('.hero')?.addEventListener('mouseleave', () => {
      heroVisual.style.transform = '';
    });
  };

  await initSiteChrome();
  initReveal();
  initAllSliders();
  initFaq();
  initSmoothScroll();
  initContactForm();
  initHeroSpotlight();
  initScrollProgress();
  initCardTilt();
  initStatGlow();
  initStatCounters();
  initHeroParallax();

  window.addEventListener('resize', initAllSliders);
})();
