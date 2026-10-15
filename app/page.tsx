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
          className="col-start-1 row-start-1 w-[min(560px,100%)] h-auto opacity-55 pointer-events-none select-none"
        />
        <div className="col-start-1 row-start-1 flex flex-col items-center gap-3 text-center">
          <p className="kicker bg-cream px-3 shadow-[0_0_14px_10px_var(--color-cream)]">Original paintings</p>
          <h1 className="font-serif font-semibold text-5xl sm:text-7xl leading-none text-charcoal bg-cream px-4 py-1 shadow-[0_0_30px_18px_var(--color-cream)]">
            Paira&apos;s Paintings
          </h1>
          <p className="kicker bg-cream px-3 shadow-[0_0_14px_10px_var(--color-cream)]">by Debasree Saha</p>
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

      <div className="petal-chain mx-6" aria-hidden="true" />

      {/* About blurb */}
      <section className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif font-semibold text-4xl text-charcoal mb-6">About the Artist</h2>
          <p className="font-sans text-charcoal/70 leading-relaxed text-lg">
            PLACEHOLDER
          </p>
          <Link
            href="/about"
            className="inline-block mt-8 font-serif italic text-xl text-sienna hover:text-madder transition-colors border-b border-sienna/40 pb-0.5"
          >
            Read more →
          </Link>
        </div>
      </section>
    </>
  );
}
