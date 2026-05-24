import type { Metadata } from "next";
import GalleryClient from "@/components/GalleryClient";
import { paintings } from "@/data/paintings";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse all original paintings by Debasree Saha.",
};

export default function GalleryPage() {
  const total = paintings.length;
  const available = paintings.filter((p) => p.available).length;

  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <div className="mb-12 text-center">
        <h1 className="font-serif text-5xl text-charcoal mb-4">Gallery</h1>
        <p className="font-sans text-charcoal/60 text-sm">
          {total} works · {available} available
        </p>
      </div>
      <GalleryClient />
    </div>
  );
}
