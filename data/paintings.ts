export interface Painting {
  id: string;
  slug: string;
  title: string;
  year: number;
  medium: string;
  dimensions: string;
  price: number | null;
  description: string;
  available: boolean;
  featured: boolean;
  imagePath: string;
}

// Add one object per painting. slug becomes the URL: /paintings/your-title
// Put image files in public/images/paintings/ — filename must match imagePath.
// Set featured: true to show the painting on the homepage.
// Set price: null to show "Price on request" instead of a number.
export const paintings: Painting[] = [
  {
    id: "1",
    slug: "morning-light",
    title: "Morning Light",
    year: 2023,
    medium: "Acrylic on canvas",
    dimensions: '18" × 24"',
    price: 12000,
    description:
      "Soft morning light filters through a curtain of leaves, casting dappled shadows on still water.",
    available: true,
    featured: true,
    imagePath: "/images/paintings/morning-light.jpg",
  },
  {
    id: "2",
    slug: "red-terracotta",
    title: "Red Terracotta",
    year: 2022,
    medium: "Watercolour on paper",
    dimensions: '12" × 16"',
    price: null,
    description:
      "A study in terracotta forms — old pots stacked against a sun-washed wall. Earthy reds and ochres dominate.",
    available: true,
    featured: true,
    imagePath: "/images/paintings/red-terracotta.jpg",
  },
  {
    id: "3",
    slug: "monsoon-river",
    title: "Monsoon River",
    year: 2024,
    medium: "Oil on canvas",
    dimensions: '24" × 30"',
    price: 18000,
    description:
      "Heavy skies and a swollen river in full monsoon flood. The painting captures the charged stillness just before rain.",
    available: false,
    featured: true,
    imagePath: "/images/paintings/monsoon-river.jpg",
  },
];

export function getPaintingBySlug(slug: string): Painting | undefined {
  return paintings.find((p) => p.slug === slug);
}

export function getFeaturedPaintings(): Painting[] {
  return paintings.filter((p) => p.featured);
}

export function getAvailablePaintings(): Painting[] {
  return paintings.filter((p) => p.available);
}

export function formatPrice(price: number | null): string {
  if (price === null) return "Price on request";
  return `₹${price.toLocaleString("en-IN")}`;
}
