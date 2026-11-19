import Link from 'next/link';
import FaqList from '@/components/faq/FaqList';
import { HOW_IT_WORKS_FAQ_ITEMS } from '@/components/faq/faq-data';

export default function Faq() {
  return (
    <section className="section faq" id="faq">
      <div className="container faq-inner">
        <div className="section-head section-head-left">
          <span className="eyebrow eyebrow-dark">
            <span className="eyebrow-dot"></span> FAQ
          </span>
          <h2>Answers, before you ask.</h2>
          <p className="section-sub">
            Didn't find what you're looking for?{' '}
            <Link href="/contact" className="link-accent">
              Send us a question →
            </Link>
          </p>
        </div>
        <FaqList items={HOW_IT_WORKS_FAQ_ITEMS} />
      </div>
    </section>
  );
}
