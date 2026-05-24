import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Debasree Saha.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-serif text-5xl text-charcoal mb-16 text-center">About</h1>
      <p className="font-sans text-charcoal/70 leading-relaxed text-lg text-center">
        PLACEHOLDER
      </p>
    </div>
  );
}
