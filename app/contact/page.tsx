import type { Metadata } from "next";

const CONTACT_EMAIL = "debasreesaha53@yahoo.com";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Debasree Saha about paintings and commissions.",
};

export default function ContactPage() {
  const href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    "Enquiry — Debasree Paira"
  )}`;

  return (
    <div className="max-w-2xl mx-auto px-6 py-24 text-center">
      <h1 className="font-serif font-semibold text-5xl text-charcoal mb-6">Get in Touch</h1>
      <div className="petal-chain max-w-xs mx-auto mb-10" aria-hidden="true" />

      <p className="font-sans text-charcoal/70 leading-relaxed text-lg mb-4">
        Interested in a painting, or want to discuss a commission? I'd love to hear from you.
      </p>
      <p className="font-sans text-charcoal/70 leading-relaxed text-lg mb-12">
        I respond to all enquiries within a few days.
      </p>

      <a href={href} className="btn-ornate">
        Email me
      </a>

      <p className="mt-8 font-sans text-charcoal/50 text-sm select-all">{CONTACT_EMAIL}</p>

      <div className="mt-20 pt-12 border-t border-sienna/30 text-left">
        <h2 className="font-serif font-semibold text-3xl text-charcoal mb-4">Commissions</h2>
        <p className="font-sans text-charcoal/70 leading-relaxed">PLACEHOLDER</p>
      </div>
    </div>
  );
}
