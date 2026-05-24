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

const NAMES: Record<string, string> = {
  "001": "sparrow-nest-red-flowers",
  "002": "cherries-glass-bowl",
  "003": "pink-flowers-blue-vase-table",
  "004": "yellow-lily-dark-background",
  "005": "stone-cottage-lakeside-sunset",
  "006": "yellow-lilies-red-flowers-blue-sky",
  "007": "golden-bird-reeds-water",
  "008": "farmhouse-fiery-sunset",
  "009": "woman-water-pots-village",
  "010": "shiva-meditation-trident",
  "011": "orange-bird-tree-branch",
  "012": "red-flowers-blue-pot-amber-bottles",
  "013": "purple-dahlia-palm-leaves",
  "014": "river-dusk-fallen-trees",
  "015": "tree-lined-path-dappled-light",
  "016": "cottage-porch-flowering-vines",
  "017": "coastal-promenade-red-roofs",
  "018": "woman-pouring-tea-cafe-window",
  "019": "golden-eagle-flight-sea",
  "020": "white-egret-wetland-flight",
  "021": "red-spotted-mushrooms-forest",
  "022": "galloping-horse-green-field",
  "023": "ram-sita-lakshmana-temple",
  "024": "woman-tropical-fruit-bowl",
  "025": "indian-dancer-white-sari",
  "026": "ganesha-green-lotus-dark",
  "027": "woman-green-sari-flowers-hair",
  "028": "red-cardinal-white-yellow-lilies",
  "029": "blue-red-flowers-ochre-background",
  "030": "ganesha-purple-colorful",
  "031": "durga-krishna-battle-scene",
  "032": "sadhu-yellow-turban-portrait",
  "033": "black-cat-orange-rug-interior",
  "034": "pink-stargazer-lily-closeup",
  "035": "goddess-face-golden-headdress",
  "036": "mixed-flowers-blue-glass-vase",
  "037": "swami-vivekananda-portrait",
  "038": "red-macaw-palm-sea",
  "039": "tiger-resting-grass",
  "040": "two-blue-macaws-branch",
  "041": "yellow-birds-reeds-pink-sky",
  "042": "wine-still-life-candle",
  "043": "stone-cottage-cypress-trees",
  "044": "yellow-lilies-dark-grey",
  "045": "woman-purple-sari-moonlit-tree",
  "046": "white-flowers-wicker-basket-window",
  "047": "hibiscus-dark-background",
  "048": "yellow-canary-flowering-branch",
  "049": "pink-roses-blue-vase-yellow-table",
  "050": "black-cat-yellow-background",
  "051": "mallard-duck-cattail-pond",
  "052": "banana-tree-white-egrets-river",
  "053": "woman-garden-pond-orange-border",
  "054": "sadhu-orange-turban-blue",
  "055": "sadhu-yellow-turban-garland",
  "056": "woman-yellow-dress-reading-fountain",
};

function dir(slug: string): string {
  return `/images/paintings/${slug}-${NAMES[slug]}`;
}

// Has separate scan, couch, and distance images
function p(slug: string): Painting {
  const d = dir(slug);
  return {
    id: slug,
    slug,
    available: true,
    images: {
      scan: `${d}/scan.jpg`,
      couch: `${d}/couch.jpg`,
      distance: `${d}/distance.jpg`,
    },
  };
}

// Scan only — all three point to the scan image
function s(slug: string): Painting {
  const scan = `${dir(slug)}/scan.jpg`;
  return { id: slug, slug, available: true, images: { scan, couch: scan, distance: scan } };
}

// New paintings without a flat scan — couch image used as scan; has real distance
function pNew(slug: string): Painting {
  const d = dir(slug);
  const couch = `${d}/scan.jpg`;
  return {
    id: slug,
    slug,
    available: true,
    images: {
      scan: couch,
      couch,
      distance: `${d}/distance.jpg`,
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
  p("047"),    // hibiscus on dark background
  p("048"),    // yellow canary in flower landscape
  p("049"),    // pink roses in blue vase on yellow table
  p("050"),    // black cat portrait on yellow/brown
  p("051"),    // mallard duck in reed pond
  p("052"),    // banana tree with white egrets
  // Woman by river — proper scan; distance lost (placeholder = couch)
  {
    id: "053",
    slug: "053",
    available: true,
    images: {
      scan: `${dir("053")}/scan.jpg`,
      couch: `${dir("053")}/couch.jpg`,
      distance: `${dir("053")}/couch.jpg`,
    },
  },
  s("054"),    // sadhu with orange turban, side profile, blue background
  s("055"),    // sadhu with yellow turban, flower garland, green background
  s("056"),    // woman in yellow dress reading by garden fountain
];

export function getPaintingBySlug(slug: string): Painting | undefined {
  return paintings.find((p) => p.slug === slug);
}

export function getAvailablePaintings(): Painting[] {
  return paintings.filter((p) => p.available);
}
