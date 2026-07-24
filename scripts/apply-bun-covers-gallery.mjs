import fs from "node:fs";

const imageCopies = [
  [
    "C:/Users/kevin/Downloads/ChatGPT Image Jul 22, 2026, 01_22_37 PM (4).png",
    "public/images/accessories-gymnastics-bun-covers-cover.png",
  ],
  [
    "C:/Users/kevin/Downloads/ChatGPT Image Jul 22, 2026, 01_22_37 PM (1).png",
    "public/images/accessories-gymnastics-bun-covers-lifestyle-lilac.png",
  ],
  [
    "C:/Users/kevin/Downloads/ChatGPT Image Jul 22, 2026, 01_22_37 PM (2).png",
    "public/images/accessories-gymnastics-bun-covers-lifestyle-mint.png",
  ],
  [
    "C:/Users/kevin/Downloads/ChatGPT Image Jul 20, 2026, 01_26_34 PM (4).png",
    "public/images/accessories-gymnastics-bun-covers-product-purple.png",
  ],
  [
    "C:/Users/kevin/Downloads/ChatGPT Image Jul 20, 2026, 01_26_33 PM (2).png",
    "public/images/accessories-gymnastics-bun-covers-product-blue.png",
  ],
  [
    "C:/Users/kevin/Downloads/ChatGPT Image Jul 20, 2026, 01_26_35 PM (9).png",
    "public/images/accessories-gymnastics-bun-covers-close-aqua.png",
  ],
  [
    "C:/Users/kevin/Downloads/ChatGPT Image Jul 20, 2026, 01_26_34 PM (6).png",
    "public/images/accessories-gymnastics-bun-covers-close-pink.png",
  ],
  [
    "C:/Users/kevin/Downloads/ChatGPT Image Jul 20, 2026, 01_26_34 PM (3).png",
    "public/images/accessories-gymnastics-bun-covers-product-hot-pink.png",
  ],
  [
    "C:/Users/kevin/Downloads/ChatGPT Image Jul 20, 2026, 01_26_33 PM (1).png",
    "public/images/accessories-gymnastics-bun-covers-product-pink.png",
  ],
  [
    "C:/Users/kevin/Downloads/ChatGPT Image Jul 22, 2026, 01_22_37 PM (3).png",
    "public/images/accessories-gymnastics-bun-covers-lifestyle-pink.png",
  ],
  [
    "C:/Users/kevin/Downloads/ChatGPT Image Jul 20, 2026, 01_26_35 PM (8).png",
    "public/images/accessories-gymnastics-bun-covers-close-hot-pink.png",
  ],
  [
    "C:/Users/kevin/Downloads/ChatGPT Image Jul 20, 2026, 01_26_35 PM (7).png",
    "public/images/accessories-gymnastics-bun-covers-detail-blue.png",
  ],
];

for (const [source, destination] of imageCopies) {
  if (!fs.existsSync(source)) {
    throw new Error(`Missing source image: ${source}`);
  }
  fs.copyFileSync(source, destination);
}

const appPath = "src/app/App.tsx";
let source = fs.readFileSync(appPath, "utf8");

source = source.replace(/type Product = \{\r?\n[\s\S]*?\r?\n\};/, (match) => {
  let next = match;
  if (!next.includes("imagePosition?: string;")) {
    next = next.replace("  image: string;\n", "  image: string;\n  imagePosition?: string;\n");
  }
  if (!next.includes("gallery?: string[];")) {
    next = next.replace("  imagePosition?: string;\n", "  imagePosition?: string;\n  gallery?: string[];\n");
  }
  return next;
});

const gallery = imageCopies.map(([, destination]) => `"/${destination.replace(/^public\//, "")}"`);

const updateBlock = (block) => {
  let next = block
    .replace(/image: "([^"]+)"/, 'image: "/images/accessories-gymnastics-bun-covers-cover.png"')
    .replace(/\r?\n\s+imagePosition: "([^"]+)",?/g, "")
    .replace(/\r?\n\s+gallery: \[[\s\S]*?\],/g, "");

  return next.replace(
    /image: "\/images\/accessories-gymnastics-bun-covers-cover\.png",/,
    `image: "/images/accessories-gymnastics-bun-covers-cover.png",
    imagePosition: "42% 14%",
    gallery: [
      ${gallery.join(",\n      ")}
    ],`,
  );
};

const idRegex = /(\{\r?\n\s+id: "accessories-gymnastics-bun-covers",[\s\S]*?\r?\n\s+\},)/;
const titleRegex = /(\{\r?\n\s+id: "[^"]+",[\s\S]*?title: "Gymnastics Bun Covers"[\s\S]*?\r?\n\s+\},)/;

if (idRegex.test(source)) {
  source = source.replace(idRegex, updateBlock);
} else if (titleRegex.test(source)) {
  source = source.replace(titleRegex, updateBlock);
} else {
  throw new Error("Could not find Gymnastics Bun Covers product");
}

if (!source.includes("objectPosition: product.imagePosition")) {
  source = source.replace(
    /<img\s+src=\{product\.image\}\s+alt=\{product\.title\}\s+className="product-card__image"\s+loading="lazy"\s+\/>/,
    `<img
              src={product.image}
              alt={product.title}
              className="product-card__image"
              loading="lazy"
              style={{ objectPosition: product.imagePosition ?? undefined }}
            />`,
  );
}

fs.writeFileSync(appPath, source);
