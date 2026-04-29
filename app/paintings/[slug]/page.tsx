import { notFound } from "next/navigation";
import Image from "next/image";
import type { Metadata } from "next";
import { paintings, getPaintingBySlug, formatPrice } from "@/data/paintings";
import ContactButton from "@/components/ContactButton";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return paintings.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const painting = getPaintingBySlug(slug);
  if (!painting) return { title: "Not Found" };
  return {
    title: painting.title,
    description: painting.description,
  };
}

export default async function PaintingDetailPage({ params }: Props) {
  const { slug } = await params;
  const painting = getPaintingBySlug(slug);
  if (!painting) return notFound();

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Image */}
        <div className="relative w-full aspect-[3/4] bg-parchment">
          <Image
            src={painting.imagePath}
            alt={painting.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain"
            priority
          />
        </div>

        {/* Details */}
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="font-serif text-5xl text-charcoal">{painting.title}</h1>
            <p className="font-sans text-charcoal/50 text-sm tracking-widest uppercase mt-2">
              {painting.year}
            </p>
          </div>

          <dl className="font-sans text-sm text-charcoal/70 space-y-2">
            <div className="flex gap-4">
              <dt className="w-28 text-charcoal/40 uppercase tracking-widest shrink-0">Medium</dt>
              <dd>{painting.medium}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-28 text-charcoal/40 uppercase tracking-widest shrink-0">Size</dt>
              <dd>{painting.dimensions}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-28 text-charcoal/40 uppercase tracking-widest shrink-0">Price</dt>
              <dd className="text-bark font-medium">{formatPrice(painting.price)}</dd>
            </div>
            <div className="flex gap-4">
              <dt className="w-28 text-charcoal/40 uppercase tracking-widest shrink-0">Status</dt>
              <dd>{painting.available ? "Available" : "Sold"}</dd>
            </div>
          </dl>

          <p className="font-sans text-charcoal/70 leading-relaxed">
            {painting.description}
          </p>

          {painting.available && (
            <ContactButton paintingTitle={painting.title} />
          )}
        </div>
      </div>
    </div>
  );
}
