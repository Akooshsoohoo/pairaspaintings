export interface Painting {
  id: string;
  slug: string;
  available: boolean;
  images: {
    scan: string;
    couch: string;
    distance: string;
  };
}

// Has separate couch + distance images
function p(slug: string): Painting {
  return {
    id: slug,
    slug,
    available: true,
    images: {
      scan: `/images/paintings/${slug}-scan.jpg`,
      couch: `/images/paintings/${slug}-couch.jpg`,
      distance: `/images/paintings/${slug}-distance.jpg`,
    },
  };
}

// Scan only — all three point to the scan image
function s(slug: string): Painting {
  const scan = `/images/paintings/${slug}-scan.jpg`;
  return { id: slug, slug, available: true, images: { scan, couch: scan, distance: scan } };
}

// New paintings without a flat scan — couch image used as scan; has real distance
function pNew(slug: string): Painting {
  const couch = `/images/paintings/${slug}-scan.jpg`;
  return {
    id: slug,
    slug,
    available: true,
    images: {
      scan: couch,
      couch,
      distance: `/images/paintings/${slug}-distance.jpg`,
    },
  };
}

export const paintings: Painting[] = [
  p("001"), p("002"), p("003"), p("004"), p("005"), p("006"),
  s("007"),
  p("008"), p("009"), p("010"), p("011"), p("012"), p("013"),
  p("014"), p("015"), p("016"), p("017"), p("018"), p("019"),
  p("020"), p("021"), p("022"), p("023"), p("024"), p("025"),
  p("026"), p("027"), p("028"), p("029"), p("030"), p("031"),
  p("032"), p("033"), p("034"), p("035"), p("036"), p("037"),
  p("038"), p("039"), p("040"), p("041"), p("042"),
  s("043"), s("044"),
  // New paintings found only in HEIC — no dedicated flat scan
  pNew("045"), // woman sitting under tree, orange/purple sari
  p("046"),    // white flowers in wicker basket — proper scan from IMG_1610
  pNew("047"), // hibiscus on dark background
  pNew("048"), // yellow canary in flower landscape
  pNew("049"), // pink roses in blue vase on yellow table
  pNew("050"), // black cat portrait on yellow/brown
  pNew("051"), // mallard duck in reed pond
  pNew("052"), // banana tree with white egrets
  // Woman by river with orange decorative border — proper scan; distance lost (placeholder = couch)
  {
    id: "053",
    slug: "053",
    available: true,
    images: {
      scan: "/images/paintings/053-scan.jpg",
      couch: "/images/paintings/053-couch.jpg",
      distance: "/images/paintings/053-couch.jpg",
    },
  },
];

export function getPaintingBySlug(slug: string): Painting | undefined {
  return paintings.find((p) => p.slug === slug);
}

export function getAvailablePaintings(): Painting[] {
  return paintings.filter((p) => p.available);
}
