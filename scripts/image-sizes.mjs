// Records the pixel size of every painting image so the gallery can lay out
// paintings at their true proportions before they load.
// Re-run after adding or replacing images: node scripts/image-sizes.mjs
import { readdirSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";

const root = "public/images/paintings";
const sizes = {};

for (const dir of readdirSync(root).sort()) {
  for (const file of ["scan.jpg", "couch.jpg", "distance.jpg"]) {
    const path = join(root, dir, file);
    if (!existsSync(path)) continue;
    const { width, height, orientation } = await sharp(path).metadata();
    // EXIF orientations 5-8 are rotated 90°, so the displayed size is swapped
    const rotated = orientation >= 5;
    sizes[`/images/paintings/${dir}/${file}`] = rotated ? [height, width] : [width, height];
  }
}

writeFileSync("data/imageSizes.json", JSON.stringify(sizes, null, 1) + "\n");
console.log(`Wrote ${Object.keys(sizes).length} image sizes to data/imageSizes.json`);
