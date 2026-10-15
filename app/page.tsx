import Image from "next/image";
import Link from "next/link";
import PaintingCard from "@/components/PaintingCard";
import { paintings } from "@/data/paintings";

export default function HomePage() {
  const featured = paintings.slice(0, 6);

  return (
    <>
      {/* Hero: the lotus and the text share one grid cell, so the hero is
          always at least as tall as the lotus and never clips it */}
      <section className="px-6 py-10 grid place-items-center overflow-hidden">
        <Image
          src="/ornaments/lotus.svg"
          alt=""
          width={400}
          height={400}
          unoptimized
          preload
          className="col-start-1 row-start-1 w-[min(560px,100%)] h-auto opacity-50 pointer-events-none select-none"
        />
        {/* Solid cream centre that fades out, so no lotus lines run behind the text */}
        <div className="relative z-10 col-start-1 row-start-1 flex flex-col items-center gap-3 text-center px-14 py-12 bg-[radial-gradient(closest-side,var(--color-cream)_72%,transparent)]">
          <p className="kicker text-charcoal/80">Original paintings</p>
          <h1 className="font-serif font-semibold text-5xl sm:text-7xl leading-none text-charcoal">
            Paira&apos;s Paintings
          </h1>
          <p className="kicker text-charcoal/80">by Debasree Saha</p>
          <Link href="/gallery" className="btn-ornate mt-3">
            View gallery
          </Link>
        </div>
      </section>

      <div className="petal-chain mx-6" aria-hidden="true" />

      {/* Featured paintings */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <h2 className="font-serif font-semibold text-4xl text-charcoal mb-10 text-center">
          Selected Works
        </h2>
        <div className="columns-2 sm:columns-3 gap-6 sm:gap-8">
          {featured.map((painting) => (
            <PaintingCard key={painting.id} painting={painting} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/gallery"
            className="font-serif italic text-xl text-sienna hover:text-madder transition-colors border-b border-sienna/40 pb-0.5"
          >
            See all paintings →
          </Link>
        </div>
      </section>
    </>
  );
}
