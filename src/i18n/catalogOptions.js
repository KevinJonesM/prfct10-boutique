const optionGroups = {
  en: {},
  es: {
    Size: "Talla",
    Color: "Color",
    Weight: "Peso",
    Pack: "Presentación",
    Design: "Diseño",
    Finish: "Acabado"
  }
};

const optionValues = {
  en: {},
  es: {
    "One Size": "Talla única",
    "One Size Fits Most": "Talla única para la mayoría",
    Adjustable: "Ajustable",
    "Single block": "Un bloque",
    "Box of 8": "Caja de 8",
    Pink: "Rosa",
    "Hot Pink": "Rosa intenso",
    "Light Pink": "Rosa claro",
    "Blush Pink": "Rosa rubor",
    "Coral Pink": "Rosa coral",
    "Peach Pink": "Rosa durazno",
    "Rose Pink": "Rosa viejo",
    "Pink Blue": "Rosa y azul",
    "Pink Green": "Rosa y verde",
    "Rose Red": "Rojo rosado",
    Purple: "Morado",
    Lilac: "Lila",
    Lavender: "Lavanda",
    Blue: "Azul",
    "Light Blue": "Azul claro",
    "Sky Blue": "Azul cielo",
    "Baby Blue": "Azul bebé",
    "Navy Blue": "Azul marino",
    "Aqua Blue": "Azul agua",
    "Turquoise Blue": "Azul turquesa",
    "Blue Lagoon": "Azul laguna",
    Green: "Verde",
    "Apple Green": "Verde manzana",
    "Mint Green": "Verde menta",
    "Fluorescent Green": "Verde fluorescente",
    Yellow: "Amarillo",
    "Light Yellow": "Amarillo claro",
    Orange: "Naranja",
    "Neon Orange": "Naranja neón",
    White: "Blanco",
    Black: "Negro",
    Gray: "Gris",
    Beige: "Beige",
    Apricot: "Albaricoque",
    "Pastel Yellow": "Amarillo pastel",
    "Pastel Pink": "Rosa pastel",
    "Pastel Blue": "Azul pastel",
    Skin: "Piel",
    Aqua: "Agua",
    Fuchsia: "Fucsia",
    Red: "Rojo",
    Burgundy: "Borgoña",
    Rainbow: "Arcoíris",
    Multicolor: "Multicolor",
    Silver: "Plateado",
    Gold: "Dorado",
    "Clear / White": "Transparente / blanco"
  }
};

export function localizeOptionGroup(locale, value) {
  return optionGroups[locale]?.[value] || value;
}

export function localizeOptionValue(locale, value) {
  const direct = optionValues[locale]?.[value];
  if (direct) return direct;
  if (locale !== "es" || typeof value !== "string") return value;
  if (/^Style \d+$/.test(value)) return value.replace("Style", "Estilo");
  if (/^Design \d+$/.test(value)) return value.replace("Design", "Diseño");
  if (/^Gymnastics \d+$/.test(value)) return value.replace("Gymnastics", "Gimnasia");
  if (value.endsWith(" kg per pair")) return value.replace(" per pair", " por par");
  return value;
}
