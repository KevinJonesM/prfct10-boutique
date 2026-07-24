import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const imageCopies = [
  {
    from: String.raw`C:\Users\kevin\Downloads\ChatGPT Image Jul 22, 2026, 01_22_37 PM (4).png`,
    to: "public/images/accessories-gymnastics-bun-covers-cover.png",
  },
  {
    from: String.raw`C:\Users\kevin\Downloads\ChatGPT Image Jul 22, 2026, 01_22_37 PM (1).png`,
    to: "public/images/accessories-gymnastics-bun-covers-lifestyle-lilac.png",
  },
  {
    from: String.raw`C:\Users\kevin\Downloads\ChatGPT Image Jul 22, 2026, 01_22_37 PM (2).png`,
    to: "public/images/accessories-gymnastics-bun-covers-lifestyle-mint.png",
  },
  {
    from: String.raw`C:\Users\kevin\Downloads\ChatGPT Image Jul 20, 2026, 01_26_34 PM (4).png`,
    to: "public/images/accessories-gymnastics-bun-covers-product-purple.png",
  },
  {
    from: String.raw`C:\Users\kevin\Downloads\ChatGPT Image Jul 20, 2026, 01_26_33 PM (2).png`,
    to: "public/images/accessories-gymnastics-bun-covers-product-blue.png",
  },
  {
    from: String.raw`C:\Users\kevin\Downloads\ChatGPT Image Jul 20, 2026, 01_26_35 PM (9).png`,
    to: "public/images/accessories-gymnastics-bun-covers-close-aqua.png",
  },
  {
    from: String.raw`C:\Users\kevin\Downloads\ChatGPT Image Jul 20, 2026, 01_26_34 PM (6).png`,
    to: "public/images/accessories-gymnastics-bun-covers-close-pink.png",
  },
  {
    from: String.raw`C:\Users\kevin\Downloads\ChatGPT Image Jul 20, 2026, 01_26_34 PM (3).png`,
    to: "public/images/accessories-gymnastics-bun-covers-product-hot-pink.png",
  },
  {
    from: String.raw`C:\Users\kevin\Downloads\ChatGPT Image Jul 20, 2026, 01_26_33 PM (1).png`,
    to: "public/images/accessories-gymnastics-bun-covers-product-pink.png",
  },
  {
    from: String.raw`C:\Users\kevin\Downloads\ChatGPT Image Jul 22, 2026, 01_22_37 PM (3).png`,
    to: "public/images/accessories-gymnastics-bun-covers-lifestyle-pink.png",
  },
  {
    from: String.raw`C:\Users\kevin\Downloads\ChatGPT Image Jul 20, 2026, 01_26_35 PM (8).png`,
    to: "public/images/accessories-gymnastics-bun-covers-close-hot-pink.png",
  },
  {
    from: String.raw`C:\Users\kevin\Downloads\ChatGPT Image Jul 20, 2026, 01_26_35 PM (7).png`,
    to: "public/images/accessories-gymnastics-bun-covers-detail-blue.png",
  },
];

for (const item of imageCopies) {
  const target = path.join(root, item.to);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(item.from, target);
}

const appPath = path.join(root, "src/app/App.tsx");
let source = fs.readFileSync(appPath, "utf8");

function findMatching(text, start, openChar, closeChar) {
  let depth = 0;
  let quote = "";
  let escaped = false;

  for (let index = start; index < text.length; index += 1) {
    const char = text[index];

    if (quote) {
      if (escaped) {
        escaped = false;
      } else if (char === "\\") {
        escaped = true;
      } else if (char === quote) {
        quote = "";
      }
      continue;
    }

    if (char === '"' || char === "'" || char === "`") {
      quote = char;
      continue;
    }

    if (char === openChar) {
      depth += 1;
    } else if (char === closeChar) {
      depth -= 1;
      if (depth === 0) {
        return index;
      }
    }
  }

  return -1;
}

function findContainingObject(text, offset) {
  for (let index = offset; index >= 0; index -= 1) {
    if (text[index] !== "{") {
      continue;
    }
    const end = findMatching(text, index, "{", "}");
    if (end >= offset) {
      return { start: index, end };
    }
  }
  throw new Error("Could not find product object.");
}

function setStringProperty(objectText, property, value) {
  const propertyRegex = new RegExp(`(\\n\\s*)${property}:\\s*["'][^"']*["'],?`);
  if (propertyRegex.test(objectText)) {
    return objectText.replace(propertyRegex, `$1${property}: "${value}",`);
  }

  const imageRegex = /(\n\s*image:\s*["'][^"']*["'],?)/;
  if (imageRegex.test(objectText)) {
    return objectText.replace(imageRegex, `$1\n    ${property}: "${value}",`);
  }

  return objectText.replace(/\{/, `{\n    ${property}: "${value}",`);
}

function setArrayProperty(objectText, property, values) {
  const propertyIndex = objectText.search(new RegExp(`\\n\\s*${property}:\\s*\\[`));
  const serialized = `    ${property}: [\n${values.map((value) => `      "${value}",`).join("\n")}\n    ],`;

  if (propertyIndex === -1) {
    const imagePositionRegex = /(\n\s*imagePosition:\s*["'][^"']*["'],?)/;
    if (imagePositionRegex.test(objectText)) {
      return objectText.replace(imagePositionRegex, `$1\n${serialized}`);
    }

    const imageRegex = /(\n\s*image:\s*["'][^"']*["'],?)/;
    return objectText.replace(imageRegex, `$1\n${serialized}`);
  }

  const bracketStart = objectText.indexOf("[", propertyIndex);
  const bracketEnd = findMatching(objectText, bracketStart, "[", "]");
  let commaEnd = bracketEnd + 1;
  if (objectText[commaEnd] === ",") {
    commaEnd += 1;
  }

  const lineStart = objectText.lastIndexOf("\n", propertyIndex) + 1;
  return `${objectText.slice(0, lineStart)}${serialized}${objectText.slice(commaEnd)}`;
}

const titleIndex = source.indexOf("Gymnastics Bun Covers");
if (titleIndex === -1) {
  throw new Error("Gymnastics Bun Covers product was not found.");
}

const objectBounds = findContainingObject(source, titleIndex);
let productObject = source.slice(objectBounds.start, objectBounds.end + 1);

const gallery = [
  "/images/accessories-gymnastics-bun-covers-cover.png",
  "/images/accessories-gymnastics-bun-covers-lifestyle-lilac.png",
  "/images/accessories-gymnastics-bun-covers-lifestyle-mint.png",
  "/images/accessories-gymnastics-bun-covers-lifestyle-pink.png",
  "/images/accessories-gymnastics-bun-covers-product-purple.png",
  "/images/accessories-gymnastics-bun-covers-product-blue.png",
  "/images/accessories-gymnastics-bun-covers-product-hot-pink.png",
  "/images/accessories-gymnastics-bun-covers-product-pink.png",
  "/images/accessories-gymnastics-bun-covers-close-aqua.png",
  "/images/accessories-gymnastics-bun-covers-close-pink.png",
  "/images/accessories-gymnastics-bun-covers-close-hot-pink.png",
  "/images/accessories-gymnastics-bun-covers-detail-blue.png",
];

const galleryProperty =
  /(^|\W)gallery\s*:/.test(productObject) || source.includes(".gallery")
    ? "gallery"
    : /(^|\W)images\s*:/.test(productObject) || source.includes(".images")
      ? "images"
      : "gallery";

productObject = setStringProperty(
  productObject,
  "image",
  "/images/accessories-gymnastics-bun-covers-cover.png",
);
productObject = setStringProperty(productObject, "imagePosition", "50% 18%");
productObject = setArrayProperty(productObject, galleryProperty, gallery);

source = `${source.slice(0, objectBounds.start)}${productObject}${source.slice(objectBounds.end + 1)}`;

if (/type\s+Product\s*=\s*\{/.test(source) && !/imagePosition\?:\s*string/.test(source)) {
  source = source.replace(/(\n\s*image:\s*string;)/, "$1\n  imagePosition?: string;");
}

if (/interface\s+Product\s*\{/.test(source) && !/imagePosition\?:\s*string/.test(source)) {
  source = source.replace(/(\n\s*image:\s*string;)/, "$1\n  imagePosition?: string;");
}

if (galleryProperty === "gallery" && /type\s+Product\s*=\s*\{/.test(source) && !/gallery\?:\s*string\[\]/.test(source)) {
  source = source.replace(/(\n\s*imagePosition\?:\s*string;|\n\s*image:\s*string;)/, "$1\n  gallery?: string[];");
}

if (galleryProperty === "gallery" && /interface\s+Product\s*\{/.test(source) && !/gallery\?:\s*string\[\]/.test(source)) {
  source = source.replace(/(\n\s*imagePosition\?:\s*string;|\n\s*image:\s*string;)/, "$1\n  gallery?: string[];");
}

fs.writeFileSync(appPath, source);
