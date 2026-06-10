import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const dir = 'public/images';
const files = await fs.readdir(dir);

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  if (!['.jpg', '.jpeg', '.png'].includes(ext)) continue;

  const fullPath = path.join(dir, file);
  const tmpPath = fullPath + '.tmp';

  try {
    const image = sharp(fullPath).resize({
      width: 1800,
      height: 1800,
      fit: 'inside',
      withoutEnlargement: true
    });

    if (ext === '.jpg' || ext === '.jpeg') {
      await image.jpeg({ quality: 72, mozjpeg: true }).toFile(tmpPath);
    } else {
      await image.png({ compressionLevel: 9, palette: true }).toFile(tmpPath);
    }

    const oldSize = (await fs.stat(fullPath)).size;
    const newSize = (await fs.stat(tmpPath)).size;

    if (newSize < oldSize) {
      await fs.rename(tmpPath, fullPath);
      console.log(`Compressed ${file}: ${(oldSize/1024/1024).toFixed(2)} MB -> ${(newSize/1024/1024).toFixed(2)} MB`);
    } else {
      await fs.unlink(tmpPath);
      console.log(`Skipped ${file}: already optimized`);
    }
  } catch (err) {
    console.log(`Error compressing ${file}:`, err.message);
  }
}
