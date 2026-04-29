import Link from "next/link";
import PaintingCard from "@/components/PaintingCard";
import { getFeaturedPaintings } from "@/data/paintings";

export default function HomePage() {
  const featured = getFeaturedPaintings();

  return (
    <>
      {/* Hero */}
      <section className="bg-cream py-24 px-6 text-center">
        <h1 className="font-serif text-6xl text-charcoal mb-4 tracking-wide">
          Debasree Paira
        </h1>
        <p className="font-sans text-charcoal/60 text-lg tracking-widest uppercase mb-8">
          Original Paintings · Acrylics · Watercolours · Oils
        </p>
        <Link
          href="/gallery"
          className="inline-block border border-bark text-bark font-sans text-sm tracking-widest uppercase px-8 py-3 hover:bg-bark hover:text-cream transition-colors duration-200"
        >
          View Gallery
        </Link>
      </section>

      {/* Featured paintings */}
      <section className="max-w-5xl mx-auto px-6 py-20">
        <h2 className="font-serif text-4xl text-charcoal mb-12 text-center">
          Selected Works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((painting) => (
            <PaintingCard key={painting.id} painting={painting} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="font-sans text-sm tracking-widest uppercase text-bark hover:text-charcoal transition-colors border-b border-bark/40 pb-0.5"
          >
            See all paintings →
          </Link>
        </div>
      </section>

      {/* About blurb */}
      <section className="bg-parchment py-20 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-4xl text-charcoal mb-6">About the Artist</h2>
          {/* TODO: Replace with real bio (2–3 sentences) */}
          <p className="font-sans text-charcoal/70 leading-relaxed text-lg">
            Debasree Paira is a painter whose work draws on the landscapes, textures,
            and light of West Bengal. Her paintings explore the quiet beauty of everyday
            moments — morning light on water, monsoon clouds, the warmth of terracotta.
          </p>
          <Link
            href="/about"
            className="inline-block mt-8 font-sans text-sm tracking-widest uppercase text-bark hover:text-charcoal transition-colors border-b border-bark/40 pb-0.5"
          >
            Read more →
          </Link>
        </div>
      </section>
    </>
  );
}
