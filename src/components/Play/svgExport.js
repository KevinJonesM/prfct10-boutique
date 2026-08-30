const images = new Map();

async function loadImageDataUrl(href) {
  if (!images.has(href)) {
    images.set(href, (async () => {
      const response = await fetch(href);
      if (!response.ok) throw new Error(`Export image failed: ${href}`);
      const type = response.headers.get("content-type")?.split(";")[0];
      if (!/^image\/(png|jpeg|webp|svg\+xml)$/.test(type || "")) throw new Error(`Invalid export image: ${href}`);
      const bytes = new Uint8Array(await response.arrayBuffer());
      let binary = "";
      for (let i = 0; i < bytes.length; i += 8192) binary += String.fromCharCode(...bytes.subarray(i, i + 8192));
      return `data:${type};base64,${btoa(binary)}`;
    })().catch(error => { images.delete(href); throw error; }));
  }
  return images.get(href);
}

// SVGs decoded as images cannot load external subresources. Embed every image
// before rasterizing; never deliver a partially branded PNG after a load failure.
export async function embedSvgImages(svg, load = loadImageDataUrl) {
  const references = [...svg.matchAll(/<image\b[^>]*\bhref="([^"]+)"/g)];
  const replacements = await Promise.all([...new Set(references.map(match => match[1]))].map(async href => [href, href.startsWith("data:image/") ? href : await load(href)]));
  for (const [href, embedded] of replacements) svg = svg.split(`href="${href}"`).join(`href="${embedded}"`);
  return svg;
}

export async function svgToPng(svg, { width, height }) {
  await document.fonts?.ready;
  const embedded = await embedSvgImages(svg);
  const url = URL.createObjectURL(new Blob([embedded], { type: "image/svg+xml;charset=utf-8" }));
  try {
    const image = new Image();
    image.src = url;
    await image.decode();
    const canvas = document.createElement("canvas");
    canvas.width = width; canvas.height = height;
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Canvas is unavailable");
    context.drawImage(image, 0, 0, width, height);
    return await new Promise((resolve, reject) => canvas.toBlob(blob => blob ? resolve(blob) : reject(new Error("PNG export failed")), "image/png"));
  } finally { URL.revokeObjectURL(url); }
}
