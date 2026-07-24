import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));
const buildImagesDirectory = path.join(projectRoot, "dist", "images");
const maxOriginalFallbackBytes = 256 * 1024;

function pruneOversizedOriginalImages() {
  return {
    name: "prfct10-prune-oversized-original-images",
    apply: "build",
    async closeBundle() {
      const entries = await fs.readdir(buildImagesDirectory, { withFileTypes: true }).catch(() => []);
      let removedCount = 0;
      let removedBytes = 0;

      for (const entry of entries) {
        if (!entry.isFile() || !/\.(?:png|jpe?g)$/i.test(entry.name)) continue;
        const targetPath = path.join(buildImagesDirectory, entry.name);
        const targetStats = await fs.stat(targetPath);
        if (targetStats.size <= maxOriginalFallbackBytes) continue;

        await fs.rm(targetPath);
        removedCount += 1;
        removedBytes += targetStats.size;
      }

      console.log(
        `Pruned ${removedCount} oversized source-image fallbacks from dist ` +
        `(${(removedBytes / 1024 / 1024).toFixed(1)} MB). Originals remain in public/images.`
      );
    }
  };
}

export default defineConfig({
  plugins: [react(), pruneOversizedOriginalImages()]
});
