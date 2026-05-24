import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { paintings, getPaintingBySlug } from "@/data/paintings";
import PaintingDetailClient from "@/components/PaintingDetailClient";

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
  return { title: "Work — Paira's Paintings" };
}

export default async function PaintingDetailPage({ params }: Props) {
  const { slug } = await params;
  const painting = getPaintingBySlug(slug);
  if (!painting) return notFound();

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <PaintingDetailClient painting={painting} />
    </div>
  );
}
