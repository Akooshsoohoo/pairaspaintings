import type { Metadata } from "next";

// TODO: Replace with the real email address before going live
const CONTACT_EMAIL = "your-email@example.com";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Debasree Paira about paintings and commissions.",
};

export default function ContactPage() {
  const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    "Enquiry — Debasree Paira"
  )}`;

  return (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center">
      <h1 className="font-serif text-5xl text-charcoal mb-8">Get in Touch</h1>

      <p className="font-sans text-charcoal/70 leading-relaxed text-lg mb-4">
        Interested in a painting, or want to discuss a commission? I'd love to hear from you.
      </p>
      <p className="font-sans text-charcoal/70 leading-relaxed text-lg mb-12">
        I respond to all enquiries within a few days.
      </p>

      <a
        href={href}
        className="inline-block bg-bark text-cream font-sans text-sm tracking-widest uppercase px-10 py-4 hover:bg-sienna transition-colors duration-200"
      >
        Email Me
      </a>

      <p className="mt-8 font-sans text-charcoal/40 text-sm">{CONTACT_EMAIL}</p>

      <div className="mt-20 pt-12 border-t border-bark/20 text-left">
        <h2 className="font-serif text-3xl text-charcoal mb-4">Commissions</h2>
        {/* TODO: Replace with real commission policy */}
        <p className="font-sans text-charcoal/70 leading-relaxed">
          I occasionally accept commissions for original paintings. To enquire, please
          email with your subject, preferred size, and any reference images. A 50% deposit
          is required to begin work, with the remainder due on completion. Typical
          turnaround is 4–8 weeks depending on the piece.
        </p>
      </div>
    </div>
  );
}
