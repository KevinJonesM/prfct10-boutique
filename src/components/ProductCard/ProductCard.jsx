import "./ProductCard.css";

export default function ProductCard({ product, displayName, trainingDescription, onSelectProduct }) {
  return (
    <article className="product-card" onClick={() => onSelectProduct(product)}>
      <button className="product-card__button" type="button" aria-label={`Ver detalles de ${product.name}`}>
        <span className={`product-card__image ${product.imageClass}`} aria-hidden="true" />
        <span className="product-card__content">
          <span className="product-card__dots" aria-hidden="true">
            <span />
            <span />
          </span>
          <span className="product-card__category">{product.category}</span>
          <span className="product-card__name">{displayName || product.name}</span>
          <span className="product-card__description">{trainingDescription || product.description}</span>
        </span>
      </button>
    </article>
  );
}
