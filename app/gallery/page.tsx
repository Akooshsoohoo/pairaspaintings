import type { Metadata } from "next";
import GalleryClient from "@/components/GalleryClient";

export const metadata: Metadata = {
  title: "Gallery",
  description: "Browse all original paintings by Debasree Saha.",
};

export default function GalleryPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <div className="mb-12 text-center">
        <h1 className="font-serif text-5xl text-charcoal">Gallery</h1>
      </div>
      <GalleryClient />
    </div>
  );
}
