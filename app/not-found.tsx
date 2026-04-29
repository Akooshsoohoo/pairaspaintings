import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-32 text-center">
      <h1 className="font-serif text-6xl text-charcoal mb-4">404</h1>
      <p className="font-sans text-charcoal/60 mb-8">
        This page doesn&apos;t exist — but the gallery does.
      </p>
      <Link
        href="/"
        className="font-sans text-sm tracking-widest uppercase text-bark hover:text-charcoal border-b border-bark/40 pb-0.5 transition-colors"
      >
        Return home
      </Link>
    </div>
  );
}
