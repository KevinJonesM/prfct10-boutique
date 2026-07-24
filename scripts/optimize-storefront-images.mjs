import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const projectRoot = path.resolve(import.meta.dirname, "..");
const sourceRoot = path.join(projectRoot, "src");
const publicRoot = path.join(projectRoot, "public");
const sourceExtensions = new Set([".js", ".jsx", ".css"]);
const imagePattern = /\/images\/[A-Za-z0-9_./-]+\.(?:png|jpe?g)/gi;

async function collectSourceFiles(directory) {
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const nestedFiles = await Promise.all(entries.map(async (entry) => {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) return collectSourceFiles(entryPath);
    return sourceExtensions.has(path.extname(entry.name).toLowerCase()) ? [entryPath] : [];
  }));

  return nestedFiles.flat();
}

const sourceFiles = await collectSourceFiles(sourceRoot);
const referencedImages = new Set();

for (const sourceFile of sourceFiles) {
  const source = await fs.readFile(sourceFile, "utf8");
  for (const match of source.matchAll(imagePattern)) referencedImages.add(match[0]);
}

let originalBytes = 0;
let optimizedBytes = 0;
let generatedCount = 0;
let skippedCount = 0;

for (const publicPath of [...referencedImages].sort()) {
  const sourcePath = path.join(publicRoot, publicPath);
  const targetPath = sourcePath.replace(/\.(?:png|jpe?g)$/i, ".webp");

  try {
    const sourceStats = await fs.stat(sourcePath);
    const targetStats = await fs.stat(targetPath).catch(() => null);
    originalBytes += sourceStats.size;

    if (targetStats && targetStats.mtimeMs >= sourceStats.mtimeMs) {
      optimizedBytes += targetStats.size;
      skippedCount += 1;
      continue;
    }

    await sharp(sourcePath)
      .rotate()
      .resize({
        width: 1800,
        height: 1800,
        fit: "inside",
        withoutEnlargement: true
      })
      .webp({ quality: 78, effort: 5, smartSubsample: true })
      .toFile(targetPath);

    const generatedStats = await fs.stat(targetPath);
    optimizedBytes += generatedStats.size;
    generatedCount += 1;
  } catch (error) {
    console.warn(`Skipped ${publicPath}: ${error.message}`);
  }
}

const savedBytes = Math.max(0, originalBytes - optimizedBytes);
console.log(
  `Optimized ${generatedCount} referenced images; reused ${skippedCount}. ` +
  `Referenced payload: ${(originalBytes / 1024 / 1024).toFixed(1)} MB -> ` +
  `${(optimizedBytes / 1024 / 1024).toFixed(1)} MB ` +
  `(${(savedBytes / 1024 / 1024).toFixed(1)} MB saved).`
);
