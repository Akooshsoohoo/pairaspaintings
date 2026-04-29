import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Debasree Paira — painter and artist.",
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="font-serif text-5xl text-charcoal mb-16 text-center">About</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        {/* Photo placeholder — add artist-photo.jpg to public/images/ and swap this div for next/image */}
        <div className="relative aspect-square bg-parchment flex items-center justify-center">
          <p className="font-sans text-charcoal/40 text-sm text-center px-8">
            Add photo to<br />public/images/artist-photo.jpg
          </p>
        </div>

        {/* TODO: Replace with real bio */}
        <div className="font-sans text-charcoal/80 leading-relaxed space-y-6">
          <p>
            Debasree Paira is a painter based in West Bengal, India. Her work is
            rooted in close observation — the quality of light on water, the geometry
            of shadow on terracotta, the weight of monsoon clouds.
          </p>
          <p>
            Largely self-taught, she developed her practice through years of daily
            sketching and painting from life. Her influences range from the Bengal
            School to contemporary plein air painters.
          </p>
          <p>
            She works primarily in acrylics and watercolours, and accepts commissions
            on request. Her paintings are available for purchase directly through this site.
          </p>
        </div>
      </div>
    </div>
  );
}
