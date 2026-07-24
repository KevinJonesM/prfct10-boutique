import React from "react";
import { normalizeSearchText } from "../ProductFilters";

function createCollectionProduct(item, type) {
  const categoryLabel = item.modalCategory || (type === "mind" ? "Mind Gym" : type === "wear" ? "Apparel" : "Accessories");
  const displayName = item.modalName || item.name;
  const galleryImages = item.gallery?.length ? item.gallery : item.image ? [item.image] : [];

  return {
    ...item,
    id: item.id || `${type}-${normalizeSearchText(displayName).replace(/\s+/g, "-")}`,
    name: displayName,
    brandName: displayName,
    category: categoryLabel,
    modalCategory: categoryLabel,
    price: item.price ?? null,
    salePrice: item.salePrice ?? null,
    details: item.details || item.description || item.commercialDescription || item.cardPhrase,
    benefits: item.benefits || item.chips || item.loveList || [categoryLabel, "PRFCT10"],
    galleryImages,
    modalSections: item.modalSections
  };
}

export default function CategorySection({ id, eyebrow, title, text, showHeader = false }) {
  const titleId = `${id}-title`;

  if (!showHeader) {
    return <h2 className="products__sr-only" id={titleId}>{title}</h2>;
  }

  return (
    <div className="collection-strip__header">
      <p>{eyebrow}</p>
      <h2 id={titleId}>{title}</h2>
      <span>{text}</span>
    </div>
  );
}

export { createCollectionProduct };
