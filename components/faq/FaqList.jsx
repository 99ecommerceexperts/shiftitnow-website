'use client';

import { useState } from 'react';

/** FAQ accordion: one answer open at a time (the first by default); clicking the open one closes it. */
export default function FaqList({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <details className="faq-item" key={item.q} open={open === index}>
          <summary
            onClick={(event) => {
              event.preventDefault();
              setOpen(open === index ? -1 : index);
            }}
          >
            <span>{item.q}</span> <span className="faq-chev" aria-hidden="true"></span>
          </summary>
          <div className="faq-body">{item.a}</div>
        </details>
      ))}
    </div>
  );
}
