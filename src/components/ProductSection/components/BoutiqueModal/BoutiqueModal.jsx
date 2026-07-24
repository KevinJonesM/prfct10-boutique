import { useEffect, useState } from "react";
import OptimizedImage from "../../../OptimizedImage/OptimizedImage";

export default function BoutiqueModal({ item, type, onClose, onAddToCart }) {
  const [activeImage, setActiveImage] = useState(0);
  const [openAccordion, setOpenAccordion] = useState("What you'll love");

  useEffect(() => {
    if (!item) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [item, onClose]);

  useEffect(() => {
    setActiveImage(0);
    setOpenAccordion("");
  }, [item]);

  if (!item) return null;

  const isMental = type === "mind";
  const displayName = item.modalName || item.name;
  const gallery = item.gallery?.length ? item.gallery : isMental ? [item.image, item.image, item.image] : [item.image];
  const categoryLabel = item.modalCategory || (isMental ? "Mind Gym" : type === "wear" ? "Apparel" : "PRFCT10 Accessories");
  const badges = item.chips || [categoryLabel, "PRFCT10"];
  const customAccordionItems = item.modalSections?.length
    ? item.modalSections
        .map((section) => ({
          ...section,
          content: Array.isArray(section.content) ? section.content : [section.content]
        }))
        .filter((accordionItem) => accordionItem.title && accordionItem.content.some(Boolean))
    : [];
  const accordionItems = customAccordionItems.length
    ? customAccordionItems
    : isMental
    ? [
        { title: "What you'll love", content: [item.description] },
        { title: "How to use", content: [item.howToUse] },
        { title: "Suggested age", content: [item.age] },
        { title: "Purpose", content: [item.purpose] },
        { title: "Por qué ayuda en gimnasia", content: [item.gymnastics] }
      ]
    : [
        { title: "What you'll love", content: item.loveList || [item.commercialDescription || item.description] },
        { title: "Available colors", content: [item.colors || "Based on availability"] },
        { title: "Best for", content: [item.idealFor || "Gifts, competitions, team details, and surprise bags."] },
        { title: "Why they love it", content: [item.why || "Porque se siente personal, especial y muy de gimnasta."] }
      ].filter((accordionItem) => accordionItem.content.some(Boolean));

  return (
    <div className="product-modal" role="dialog" aria-modal="true" aria-labelledby="boutique-modal-title">
      <button className="product-modal__overlay" onClick={onClose} type="button" aria-label="Close details" />
      <div className="product-modal__dialog">
        <button className="product-modal__close" onClick={onClose} type="button" aria-label="Close">
          X
        </button>
        <div className="product-modal__visual" aria-label={`Imagenes de ${displayName}`}>
          <div className="product-modal__visual-bg boutique-modal__visual-bg" style={{ backgroundImage: `url(${gallery[activeImage]})` }} aria-hidden="true" />
          <div className="product-modal__visual-gradient product-modal__visual-overlay" aria-hidden="true" />
          <OptimizedImage className="product-modal__visual-image boutique-modal__visual-image" src={gallery[activeImage]} alt={displayName} loading="eager" width="1000" height="1000" />
          <p className="product-modal__visual-caption">{displayName}</p>

          {gallery.length > 1 ? (
            <>
              <button
                className="product-modal__visual-nav product-modal__visual-nav--prev"
                onClick={() => setActiveImage((current) => (current - 1 + gallery.length) % gallery.length)}
                type="button"
                aria-label="Previous image"
              >
                &lt;
              </button>
              <button
                className="product-modal__visual-nav product-modal__visual-nav--next"
                onClick={() => setActiveImage((current) => (current + 1) % gallery.length)}
                type="button"
                aria-label="Next image"
              >
                &gt;
              </button>
              <div className="product-modal__dots">
                {gallery.map((image, index) => (
                  <button
                    className={activeImage === index ? "product-modal__dot product-modal__dot--active" : "product-modal__dot"}
                    key={`${image}-${index}`}
                    onClick={() => setActiveImage(index)}
                    type="button"
                    aria-label={`View model ${index + 1} of ${displayName}`}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>

        <div className="product-modal__content product-modal__content-panel">
          <p className="product-modal__category">Product details · {categoryLabel}</p>
          <h2 className="product-modal__title" id="boutique-modal-title">{displayName}</h2>
          <p className="product-modal__price">Check availability</p>
          <p className="product-modal__description">{item.description}</p>

          <div className="product-modal__badges" aria-label="Quick benefits">
            {badges.map((badge) => (
              <span className="product-modal__badge" key={badge}>{badge}</span>
            ))}
          </div>

          <div className="product-modal__actions">
            <button
              className="product-modal__cta"
              type="button"
              onClick={() => {
                onAddToCart?.(item);
                onClose();
              }}
            >
              Add to cart
            </button>
          </div>

          <div className="product-modal__accordion">
            {accordionItems.map((accordionItem) => (
              <div
                className={`product-modal__accordion-item ${openAccordion === accordionItem.title ? "product-modal__accordion-item--open" : ""}`}
                key={accordionItem.title}
              >
                <button
                  className="product-modal__accordion-header"
                  onClick={() => setOpenAccordion((current) => (current === accordionItem.title ? "" : accordionItem.title))}
                  type="button"
                  aria-expanded={openAccordion === accordionItem.title}
                >
                  <span>{accordionItem.title}</span>
                  <span className="product-modal__accordion-icon" aria-hidden="true">+</span>
                </button>
                <div className="product-modal__accordion-content">
                  <ul>
                    {accordionItem.content.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
