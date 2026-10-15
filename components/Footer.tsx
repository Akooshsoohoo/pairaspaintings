const CONTACT_EMAIL = "debasreesaha53@yahoo.com";

export default function Footer() {
  return (
    <footer className="bg-parchment border-t border-sienna mt-20">
      <div className="max-w-5xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-sans text-charcoal/70">
        <p className="font-serif text-charcoal text-lg font-semibold">Debasree Saha</p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="hover:text-sienna transition-colors"
        >
          {CONTACT_EMAIL}
        </a>
        <p>© {new Date().getFullYear()} Debasree Saha. All rights reserved.</p>
      </div>
    </footer>
  );
}
