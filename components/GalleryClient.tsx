"use client";

import { useState } from "react";
import PaintingCard from "@/components/PaintingCard";
import { paintings } from "@/data/paintings";

type Filter = "all" | "available";

export default function GalleryClient() {
  const [filter, setFilter] = useState<Filter>("all");

  const displayed =
    filter === "available" ? paintings.filter((p) => p.available) : paintings;

  return (
    <>
      <div className="flex justify-center gap-6 mb-12">
        {(["all", "available"] as Filter[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`font-sans text-sm tracking-widest uppercase pb-1 transition-colors ${
              filter === f
                ? "text-bark border-b border-bark"
                : "text-charcoal/50 hover:text-charcoal"
            }`}
          >
            {f === "all" ? "All Works" : "Available"}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayed.map((painting) => (
          <PaintingCard key={painting.id} painting={painting} />
        ))}
      </div>

      {displayed.length === 0 && (
        <p className="text-center text-charcoal/50 font-sans py-20">
          No paintings match this filter.
        </p>
      )}
    </>
  );
}
