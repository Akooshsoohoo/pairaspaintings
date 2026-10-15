import Image from "next/image";
import Link from "next/link";
import { imageSize, type Painting } from "@/data/paintings";

export default function PaintingCard({ painting }: { painting: Painting }) {
  const src = painting.images.scan;

  return (
    <Link
      href={`/paintings/${painting.slug}`}
      className="group block break-inside-avoid mb-6 sm:mb-8"
    >
      <Image
        src={src}
        alt=""
        {...imageSize(src)}
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="canvas-shadow w-full h-auto"
      />
    </Link>
  );
}
