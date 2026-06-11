import "./ProductCard.css";

export default function ProductCard({ product, displayName, onSelectProduct }) {
  const productName = displayName || product.name;

  return (
    <article className="product-card" onClick={() => onSelectProduct(product)}>
      <button className="product-card__button" type="button" aria-label={`Ver detalles de ${productName}`}>
        <span className={`product-card__image ${product.imageClass}`} aria-hidden="true" />
        <span className="product-card__content">
          <span className="product-card__dots" aria-hidden="true">
            <span />
            <span />
          </span>
          <span className="product-card__category">{product.category}</span>
          <span className="product-card__name">{productName}</span>
          <span className="product-card__details">Más detalles</span>
        </span>
      </button>
    </article>
  );
}
