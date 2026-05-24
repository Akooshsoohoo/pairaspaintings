"use client";

import { useState } from "react";
import Image from "next/image";
import Lightbox from "@/components/Lightbox";
import type { Painting } from "@/data/paintings";

export default function PaintingDetailClient({ painting }: { painting: Painting }) {
  const { scan, couch, distance } = painting.images;

  // Deduplicate — until real couch/distance photos exist, all three point to scan
  const unique = Array.from(new Set([couch, distance, scan]));

  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const open = (i: number) => setLightboxIndex(i);
  const close = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) => (i === null ? 0 : (i - 1 + unique.length) % unique.length));
  const next = () =>
    setLightboxIndex((i) => (i === null ? 0 : (i + 1) % unique.length));

  return (
    <>
      <div
        className={`grid gap-4 ${
          unique.length === 1
            ? "grid-cols-1 max-w-2xl mx-auto"
            : unique.length === 2
            ? "grid-cols-1 sm:grid-cols-2"
            : "grid-cols-1 sm:grid-cols-3"
        }`}
      >
        {unique.map((src, i) => (
          <button
            key={src}
            onClick={() => open(i)}
            className="relative aspect-[4/5] w-full bg-parchment overflow-hidden group cursor-zoom-in"
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="(max-width: 640px) 100vw, 33vw"
              className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
            />
          </button>
        ))}
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={unique}
          index={lightboxIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </>
  );
}
