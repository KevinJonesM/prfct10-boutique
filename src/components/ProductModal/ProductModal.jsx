import { useEffect, useMemo, useState } from "react";
import { createWhatsAppLink } from "../../utils/whatsapp";
import { defaultFaqs, defaultModeOfUse } from "../../data/products";
import "./ProductModal.css";

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <div className={`product-modal__accordion-item ${isOpen ? "product-modal__accordion-item--open" : ""}`}>
      <button className="product-modal__accordion-header" onClick={onToggle} type="button" aria-expanded={isOpen}>
        <span>{item.title}</span>
        <span className="product-modal__accordion-icon" aria-hidden="true">+</span>
      </button>
      <div className="product-modal__accordion-content">
        {item.type === "faq" ? (
          <div className="product-modal__faq-list">
            {item.content.map((faq) => (
              <div className="product-modal__faq" key={faq.question}>
                <strong>{faq.question}</strong>
                <p>{faq.answer}</p>
              </div>
            ))}
          </div>
        ) : (
          <ul>
            {item.content.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default function ProductModal({ product, products = [], onClose }) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [openAccordion, setOpenAccordion] = useState("");

  const galleryProducts = useMemo(() => {
    if (!product) return [];
    if (product.galleryImages?.length) {
      return product.galleryImages.map((image, index) => ({
        ...product,
        id: `${product.id}-gallery-${index}`,
        image
      }));
    }
    return [product];
  }, [product]);

  useEffect(() => {
    setActiveSlide(0);
    setOpenAccordion("");
  }, [product]);

  useEffect(() => {
    if (!product) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowRight" && galleryProducts.length > 1) {
        setActiveSlide((current) => (current + 1) % galleryProducts.length);
      }
      if (event.key === "ArrowLeft" && galleryProducts.length > 1) {
        setActiveSlide((current) => (current - 1 + galleryProducts.length) % galleryProducts.length);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [galleryProducts.length, onClose, product]);

  if (!product) return null;

  const activeProduct = galleryProducts[activeSlide] || product;
  const activeImageStyle = activeProduct.image ? { backgroundImage: `url(${activeProduct.image})` } : undefined;
  const specifications = product.specifications || product.benefits;
  const accordionItems = [
    { title: "Lo que te va a encantar", content: product.accordionBenefits || product.benefits },
    { title: "Modo de uso", content: product.modeOfUse || defaultModeOfUse },
    { title: "Preguntas frecuentes", type: "faq", content: product.faqs || defaultFaqs },
    { title: "Contraindicaciones", content: product.contraindications },
    { title: "Especificaciones", content: specifications },
    { title: "Deportes y usos recomendados", content: product.sportsUses || [] }
  ];

  const goToPrevious = () => {
    setActiveSlide((current) => (current - 1 + galleryProducts.length) % galleryProducts.length);
  };

  const goToNext = () => {
    setActiveSlide((current) => (current + 1) % galleryProducts.length);
  };

  return (
    <div className="product-modal" role="dialog" aria-modal="true" aria-labelledby="product-modal-title">
      <button className="product-modal__overlay" onClick={onClose} aria-label="Cerrar detalles" type="button" />
      <div className="product-modal__dialog">
        <button className="product-modal__close" onClick={onClose} type="button" aria-label="Cerrar">
          X
        </button>

        <div className="product-modal__visual" aria-label="Imágenes del producto">
          <div className={`product-modal__visual-bg ${activeProduct.imageClass}`} style={activeImageStyle} aria-hidden="true" />
          <div className="product-modal__visual-gradient product-modal__visual-overlay product-modal__visual-fade" aria-hidden="true" />
          <div className={`product-modal__visual-image ${activeProduct.imageClass}`} style={activeImageStyle} />
          <p className="product-modal__visual-caption">{activeProduct.name}</p>

          {galleryProducts.length > 1 ? (
            <>
              <button className="product-modal__visual-nav product-modal__visual-nav--prev" onClick={goToPrevious} type="button" aria-label="Imagen anterior">
                &lt;
              </button>
              <button className="product-modal__visual-nav product-modal__visual-nav--next" onClick={goToNext} type="button" aria-label="Siguiente imagen">
                &gt;
              </button>
              <div className="product-modal__dots">
                {galleryProducts.map((item, index) => (
                  <button
                    className={index === activeSlide ? "product-modal__dot product-modal__dot--active" : "product-modal__dot"}
                    key={item.id}
                    onClick={() => setActiveSlide(index)}
                    type="button"
                    aria-label={`Ver ${item.name}`}
                  />
                ))}
              </div>
            </>
          ) : null}
        </div>

        <div className="product-modal__content product-modal__content-panel">
          <p className="product-modal__category">Detalles del producto · {product.category}</p>
          <h2 className="product-modal__title" id="product-modal-title">{product.name}</h2>
          <p className="product-modal__price">{product.price}</p>
          <p className="product-modal__description">{product.details}</p>

          <div className="product-modal__badges" aria-label="Beneficios rápidos">
            {product.benefits.map((benefit) => (
              <span className="product-modal__badge" key={benefit}>{benefit}</span>
            ))}
          </div>

          <a className="product-modal__cta" href={createWhatsAppLink(product.brandName)} target="_blank" rel="noreferrer">
            Pedir por WhatsApp
          </a>

          <div className="product-modal__accordion">
            {accordionItems.map((item) => (
              <AccordionItem
                item={item}
                isOpen={openAccordion === item.title}
                key={item.title}
                onToggle={() => setOpenAccordion((current) => (current === item.title ? "" : item.title))}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
