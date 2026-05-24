// TODO: Replace with the real email address before going live
const CONTACT_EMAIL = "your-email@example.com";

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/70 py-10 mt-20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-sans">
        <p className="font-serif text-cream text-lg">Debasree Saha</p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="hover:text-cream transition-colors"
        >
          {CONTACT_EMAIL}
        </a>
        <p>© {new Date().getFullYear()} Debasree Saha. All rights reserved.</p>
      </div>
    </footer>
  );
}
