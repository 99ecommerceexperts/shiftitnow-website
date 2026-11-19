import Link from 'next/link';
import FaqList from '@/components/faq/FaqList';
import { FAQ_PAGE_ITEMS } from '@/components/faq/faq-data';

export default function Faq() {
  return (
    <section className="section faq">
      <div className="container faq-inner">
        <div className="section-head section-head-left">
          <span className="eyebrow eyebrow-dark">
            <span className="eyebrow-dot"></span> Top questions
          </span>
          <h2>The short version of everything.</h2>
          <p className="section-sub">
            Still missing something?{' '}
            <Link href="/contact" className="link-accent">
              Send us a question →
            </Link>
          </p>
        </div>
        <FaqList items={FAQ_PAGE_ITEMS} />
      </div>
    </section>
  );
}
