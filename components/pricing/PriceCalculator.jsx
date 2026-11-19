'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { PLAN_TIERS, capacityUsed, recommend } from '@/lib/pricing-plans';
import {
  ButtonArrowIcon,
  ChatIcon,
  ChevronIcon,
  CsvIcon,
  CustomersIcon,
  EditIcon,
  MagentoIcon,
  OpencartIcon,
  OrdersIcon,
  OtherIcon,
  PagesIcon,
  PlanCheckIcon,
  PostsIcon,
  ProductsIcon,
  ShopifyIcon,
  SquarespaceIcon,
  TrustCheckIcon,
  WixIcon,
  WoocommerceIcon,
} from './icons';

const PLATFORMS = [
  { id: 'woocommerce', name: 'WooCommerce', sub: 'WordPress plugin', Icon: WoocommerceIcon },
  { id: 'bigcommerce', name: 'BigCommerce', sub: 'BigCommerce store', Icon: WoocommerceIcon },
  { id: 'wix', name: 'Wix', sub: 'Wix Stores', Icon: WixIcon },
  { id: 'squarespace', name: 'Squarespace', sub: '7.0 or 7.1', Icon: SquarespaceIcon },
  { id: 'magento', name: 'Magento', sub: 'Adobe Commerce', Icon: MagentoIcon },
  { id: 'opencart', name: 'OpenCart', sub: 'OpenCart 2.x / 3.x', Icon: OpencartIcon },
  { id: 'csv', name: 'CSV / Excel', sub: 'Spreadsheet import', Icon: CsvIcon },
  { id: 'other', name: 'Other / Custom', sub: 'Custom platform', Icon: OtherIcon },
];

const INPUTS = [
  { key: 'products', id: 'inputProducts', label: 'Products', aria: 'Number of products', Icon: ProductsIcon },
  {
    key: 'customers',
    id: 'inputCustomers',
    label: 'Customers',
    aria: 'Number of customers',
    Icon: CustomersIcon,
  },
  { key: 'orders', id: 'inputOrders', label: 'Orders', aria: 'Number of orders', Icon: OrdersIcon },
  { key: 'pages', id: 'inputPages', label: 'Pages', aria: 'Number of pages', Icon: PagesIcon },
  { key: 'posts', id: 'inputPosts', label: 'Blog Posts', aria: 'Number of blog posts', Icon: PostsIcon },
];

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const easeOut = (t) => 1 - Math.pow(1 - t, 3);

// Re-trigger a CSS animation that is driven by a class: remove, force a reflow, add back.
function restart(element, className) {
  if (!element) return;
  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
}

export default function PriceCalculator() {
  const [platform, setPlatform] = useState(PLATFORMS[0]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [values, setValues] = useState({
    products: '0',
    customers: '0',
    orders: '0',
    pages: '0',
    posts: '0',
  });

  const counts = Object.fromEntries(
    Object.entries(values).map(([key, value]) => [key, parseInt(value, 10) || 0]),
  );
  const plan = recommend(counts);
  const used = capacityUsed(plan, counts);

  // What the result panel currently displays; these count up/down towards the plan's values.
  const [priceText, setPriceText] = useState(plan.priceStr);
  const [usedText, setUsedText] = useState(0);
  const shownPrice = useRef(plan.priceStr);
  const previousPlan = useRef(null);
  const previousUsed = useRef(0);

  const fromCard = useRef(null);
  const panel = useRef(null);
  const priceEl = useRef(null);
  const badge = useRef(null);
  const features = useRef(null);
  const bar = useRef(null);

  // Clicking anywhere outside the platform picker closes it.
  useEffect(() => {
    const onClick = (event) => {
      if (fromCard.current && !fromCard.current.contains(event.target)) setMenuOpen(false);
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  // The price counts towards its new value (or fades in, for "Free" / "Contact us").
  useEffect(() => {
    const element = priceEl.current;
    const target = plan.priceStr;
    const previous = shownPrice.current;
    const reduced = prefersReducedMotion();
    const from = parseFloat(previous.replace(/[^0-9]/g, ''));
    const to = parseFloat(target.replace(/[^0-9]/g, ''));
    const prefix = target.charAt(0) === '$' ? '$' : '';
    const canCount = !reduced && !Number.isNaN(from) && !Number.isNaN(to) && from !== to;
    const show = (text) => {
      shownPrice.current = text;
      setPriceText(text);
    };
    element.className = `calc-price-display${plan.isFree ? ' is-free' : ''}${plan.isContact ? ' is-contact' : ''}`;

    let frame;
    if (canCount) {
      let start = null;
      const step = (timestamp) => {
        if (start === null) start = timestamp;
        const t = Math.min((timestamp - start) / 420, 1);
        if (t < 1) {
          show(prefix + Math.round(from + (to - from) * easeOut(t)));
          frame = requestAnimationFrame(step);
        } else {
          show(target);
          restart(element, 'is-punch');
        }
      };
      frame = requestAnimationFrame(step);
    } else {
      frame = requestAnimationFrame(() => {
        show(target);
        if (!reduced && previous !== target) restart(element, 'is-switching');
      });
    }
    return () => cancelAnimationFrame(frame);
  }, [plan.priceStr, plan.isFree, plan.isContact]);

  // Switching tier: shimmer across the panel, pulse the plan badge, stagger the feature list in.
  useEffect(() => {
    const changed = plan.id !== previousPlan.current;
    previousPlan.current = plan.id;
    if (!changed || prefersReducedMotion()) return;
    restart(panel.current, 'is-animating');
    restart(badge.current, 'is-pulsing');
    restart(features.current, 'is-populating');
  }, [plan.id]);

  // The capacity bar glows as it fills and its label counts to the new percentage.
  useEffect(() => {
    const from = previousUsed.current;
    previousUsed.current = used;
    const reduced = prefersReducedMotion();
    if (!reduced && from !== used) restart(bar.current, 'is-filling');
    let frame;
    if (reduced) {
      frame = requestAnimationFrame(() => setUsedText(used));
    } else {
      let start = null;
      const step = (timestamp) => {
        if (start === null) start = timestamp;
        const t = Math.min((timestamp - start) / 520, 1);
        setUsedText(t < 1 ? Math.round(from + (used - from) * easeOut(t)) : used);
        if (t < 1) frame = requestAnimationFrame(step);
      };
      frame = requestAnimationFrame(step);
    }
    return () => cancelAnimationFrame(frame);
  }, [used]);

  const togglePicker = (event) => {
    if (event.target.closest('.calc-plat-option')) return;
    setMenuOpen((open) => !open);
  };
  const onPickerKey = (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      fromCard.current.click();
    }
    if (event.key === 'Escape') setMenuOpen(false);
  };
  const choose = (option, event) => {
    event.stopPropagation();
    setPlatform(option);
    setMenuOpen(false);
  };

  const pills = [];
  if (counts.products > 0) pills.push(`${counts.products.toLocaleString()} products`);
  if (counts.orders > 0) pills.push(`${counts.orders.toLocaleString()} orders`);
  if (counts.customers > 0) pills.push(`${counts.customers.toLocaleString()} customers`);

  const external = plan.ctaHref.startsWith('https://apps.shopify.com/');
  const ctaProps = {
    id: 'ctaBtn',
    className: `calc-primary-btn${plan.isContact ? ' is-contact' : ''}`,
    ...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {}),
  };
  const ctaBody = (
    <>
      <span id="ctaBtnText">{plan.cta}</span>{' '}
      <span className="calc-btn-arrow">
        <ButtonArrowIcon />
      </span>
    </>
  );

  return (
    <section className="container">
      <div className="calc-wrapper">
        <div className="calc-platform-row">
          <div
            className={`calc-platform-card is-from${menuOpen ? ' open' : ''}`}
            id="fromCard"
            role="button"
            aria-haspopup="listbox"
            aria-expanded={menuOpen}
            tabIndex={0}
            ref={fromCard}
            onClick={togglePicker}
            onKeyDown={onPickerKey}
          >
            <div className="calc-plat-step">
              <span className="calc-plat-num">1</span> <span className="calc-plat-step-label">From</span>
            </div>
            <div className="calc-plat-inner">
              <div className="calc-plat-icon" id="fromIcon">
                <platform.Icon size={20} />
              </div>
              <div className="calc-plat-info">
                <span className="calc-plat-name" id="fromName">
                  {platform.name}
                </span>{' '}
                <span className="calc-plat-sub" id="fromSub">
                  {platform.sub}
                </span>
              </div>
              <ChevronIcon />
            </div>
            <div className="calc-plat-dropdown" role="listbox" id="platformDropdown">
              {PLATFORMS.map((option) => (
                <div
                  key={option.id}
                  className={`calc-plat-option${option.id === platform.id ? ' active' : ''}`}
                  data-platform={option.id}
                  data-name={option.name}
                  data-sub={option.sub}
                  role="option"
                  aria-selected={option.id === platform.id}
                  onClick={(event) => choose(option, event)}
                >
                  <div className="calc-plat-opt-icon">
                    <option.Icon size={16} />
                  </div>
                  <div>
                    <span className="calc-plat-opt-name">{option.name}</span>{' '}
                    <span className="calc-plat-opt-sub">{option.sub}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="calc-platform-arrow" aria-hidden="true">
            ›
          </div>
          <div className="calc-platform-card">
            <div className="calc-plat-step">
              <span className="calc-plat-num" style={{ background: 'var(--teal-dark)' }}>
                2
              </span>{' '}
              <span className="calc-plat-step-label">To</span>{' '}
              <span className="calc-locked-badge">Locked</span>
            </div>
            <div className="calc-plat-inner">
              <div className="calc-plat-icon shopify-icon">
                <ShopifyIcon />
              </div>
              <div className="calc-plat-info">
                <span className="calc-plat-name">Shopify</span>{' '}
                <span className="calc-plat-sub">→ Free trial + 3 months for $1</span>
              </div>
            </div>
          </div>
        </div>

        <div className="calc-main-card">
          <div className="calc-inputs-panel">
            <div className="calc-inputs-label">What are we moving?</div>
            {INPUTS.map((input) => (
              <div className="calc-input-row" key={input.key}>
                <div className="calc-input-icon-sm">
                  <input.Icon />
                </div>
                <div className="calc-input-meta">
                  <h4>{input.label}</h4>
                  <input
                    type="number"
                    className="calc-big-input"
                    id={input.id}
                    placeholder="0"
                    min="0"
                    value={values[input.key]}
                    onChange={(event) =>
                      setValues((current) => ({ ...current, [input.key]: event.target.value }))
                    }
                    aria-label={input.aria}
                  />
                </div>
                <div className="calc-input-edit-icon">
                  <EditIcon />
                </div>
              </div>
            ))}
          </div>

          <div className="calc-result-panel" ref={panel}>
            <div className="calc-result-live-label">Your Migration · Live</div>
            <div
              className={`calc-price-display${plan.isFree ? ' is-free' : ''}${plan.isContact ? ' is-contact' : ''}`}
              id="priceDisplay"
              ref={priceEl}
            >
              {priceText}
            </div>
            <div className="calc-price-meta" id="priceMeta">
              {plan.priceMeta}
            </div>
            <div className="calc-result-plan-name" id="resultPlanName" ref={badge}>
              {plan.name} plan
            </div>
            <div className="calc-data-pills" id="dataPills">
              {pills.map((text) => (
                <span className="calc-data-pill" key={text}>
                  {text}
                </span>
              ))}
            </div>
            <div className="calc-result-divider"></div>
            <div className="calc-plan-features" id="planFeatures" ref={features}>
              {plan.features.map((feature) => (
                <div className="calc-plan-feature" key={feature}>
                  <span className="calc-plan-feature-check">
                    <svg
                      viewBox="0 0 12 12"
                      width="8"
                      height="8"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <polyline points="2 6 5 9 10 3" />
                    </svg>
                  </span>
                  {feature}
                </div>
              ))}
            </div>
            <div className="calc-capacity-section">
              <div className="calc-capacity-row">
                <span className="calc-capacity-label">Plan capacity</span>{' '}
                <span className="calc-capacity-pct" id="capacityPct">
                  {usedText}% used
                </span>
              </div>
              <div className="calc-capacity-bar-track">
                <div
                  className="calc-capacity-bar-fill"
                  id="capacityBar"
                  ref={bar}
                  style={{ width: `${used}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        <div className="calc-plan-selector">
          {PLAN_TIERS.map((tier) => (
            <div
              className={`calc-plan-card${tier.id === plan.id ? ' active' : ''}`}
              data-plan-id={tier.id}
              key={tier.id}
            >
              <span className="calc-plan-tier">{tier.name}</span>{' '}
              <span className="calc-plan-price">{tier.priceStr}</span>{' '}
              <span className="calc-plan-capacity">
                up to {tier.limits.products.toLocaleString('en-US')} products
              </span>
              {!tier.isFree && (
                <>
                  {' '}
                  <span className="calc-plan-capacity">One-time charge</span>
                </>
              )}
              <ul className="calc-tier-features">
                {tier.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <span className="calc-plan-check" aria-hidden="true">
                <PlanCheckIcon />
              </span>
            </div>
          ))}
        </div>

        <div className="calc-cta-row">
          <Link href="/contact" className="calc-secondary-btn" id="expertBtn">
            <ChatIcon /> Chat with an expert
          </Link>{' '}
          {plan.ctaHref.startsWith('/') ? (
            <Link href={plan.ctaHref} {...ctaProps}>
              {ctaBody}
            </Link>
          ) : (
            <a href={plan.ctaHref} {...ctaProps}>
              {ctaBody}
            </a>
          )}
        </div>

        <div className="calc-trust-bar">
          <div className="calc-trust-left">
            <span className="calc-trust-stars">★★★★★</span>{' '}
            <span>
              <strong>5/5</strong> · 50+ successful migrations
            </span>
          </div>
          <div className="calc-trust-right">
            <span className="calc-trust-item">
              <TrustCheckIcon /> No data loss guarantee
            </span>{' '}
            <span className="calc-trust-item">
              <TrustCheckIcon /> Zero downtime
            </span>{' '}
            <span className="calc-trust-item">
              <TrustCheckIcon /> 24/7 expert support
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
