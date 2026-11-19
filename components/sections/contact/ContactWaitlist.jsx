import ContactForm from '@/components/contact/ContactForm';

export default function ContactWaitlist() {
  return (
    <section className="section contact" id="waitlist">
      <div className="container contact-inner">
        <div className="contact-copy">
          <span className="eyebrow eyebrow-dark">
            <span className="eyebrow-dot"></span> We're listening
          </span>
          <h2>One form. One business day.</h2>
          <p>
            Tell us your platform, your catalog size, and anything weird about your stack. A real migration
            engineer will review and reply - no chatbots, no tier-1 scripts.
          </p>
          <ul className="contact-items">
            <li>
              <strong>Email</strong> <a href="mailto:team@shiftitnow.com">team@shiftitnow.com</a>
            </li>
            <li>
              <strong>Support hours</strong> <span>24/7 chat for active migrations</span>
            </li>
            <li>
              <strong>Enterprise</strong> <span>Custom platforms & B2B - quote in 24 hrs</span>
            </li>
          </ul>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
