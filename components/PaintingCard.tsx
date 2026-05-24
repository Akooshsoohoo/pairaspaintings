import Image from "next/image";
import Link from "next/link";
import type { Painting } from "@/data/paintings";

export default function PaintingCard({ painting }: { painting: Painting }) {
  return (
    <Link
      href={`/paintings/${painting.slug}`}
      className="group block bg-parchment overflow-hidden hover:shadow-lg hover:shadow-bark/20 transition-shadow duration-300"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <Image
          src={painting.imagePath}
          alt={painting.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {!painting.available && (
          <div className="absolute top-3 right-3 bg-charcoal/80 text-cream text-xs tracking-widest uppercase px-2 py-1">
            Sold
          </div>
        )}
      </div>
    </Link>
  );
}
