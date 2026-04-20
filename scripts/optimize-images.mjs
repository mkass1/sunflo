// Run with: npm run optimize-images
// Walks public/images/**, auto-rotates EXIF-tagged images, resizes >1600px wide, compresses.
// Safe to re-run — idempotent.

import sharp from "sharp";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../public/images");
const MAX_WIDTH = 1600;
const JPEG_QUALITY = 82;

function walk(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...walk(full));
    else if (/\.(jpe?g|jpg)$/i.test(entry.name)) results.push({ full, type: "jpeg" });
    else if (/\.png$/i.test(entry.name)) results.push({ full, type: "png" });
  }
  return results;
}

async function processFile({ full, type }) {
  const rel = full.replace(ROOT, "");
  const before = fs.statSync(full).size;
  const meta = await sharp(full).metadata();

  const needsRotate = meta.orientation && meta.orientation !== 1;
  const needsResize = meta.width > MAX_WIDTH;

  if (!needsRotate && !needsResize) {
    console.log(`  skip  ${rel}`);
    return;
  }

  let pipeline = sharp(full).rotate(); // auto-orient from EXIF, then strip tag

  if (needsResize) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }

  if (type === "jpeg") {
    pipeline = pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });
  } else {
    pipeline = pipeline.png({ compressionLevel: 9 });
  }

  const tmp = full + ".tmp";
  await pipeline.toFile(tmp);
  const after = fs.statSync(tmp).size;
  fs.renameSync(tmp, full);

  const flags = [needsRotate && `rotated(${meta.orientation})`, needsResize && "resized"].filter(Boolean).join(" ");
  console.log(`  fixed ${rel}  ${Math.round(before / 1024)}KB → ${Math.round(after / 1024)}KB  [${flags}]`);
}

const files = walk(ROOT);
console.log(`Scanning ${files.length} images in ${ROOT}\n`);
for (const f of files) {
  await processFile(f);
}
console.log("\nDone.");
