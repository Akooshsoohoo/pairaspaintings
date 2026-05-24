import Image from "next/image";
import Link from "next/link";
import type { Painting } from "@/data/paintings";

export default function PaintingCard({ painting }: { painting: Painting }) {
  return (
    <Link
      href={`/paintings/${painting.slug}`}
      className="group block bg-parchment overflow-hidden hover:shadow-lg hover:shadow-bark/20 transition-shadow duration-300"
    >
      <div className="relative aspect-[4/5] w-full overflow-hidden">
        <Image
          src={painting.images.scan}
          alt=""
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-contain group-hover:scale-105 transition-transform duration-500"
        />
      </div>
    </Link>
  );
}
