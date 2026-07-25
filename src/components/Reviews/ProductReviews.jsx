import { getReviewSummary } from "../../data/reviews";
import RatingStars from "./RatingStars";
import OptimizedImage from "../OptimizedImage/OptimizedImage";
import "./Reviews.css";
import { useI18n } from "../../i18n/I18nProvider";

export function ProductReviewSummary({ productId }) {
  const { t } = useI18n();
  const summary = getReviewSummary(productId);
  if (!summary) return null;

  return (
    <div className="product-review-summary" aria-label={t("reviews.count", { count: summary.count })}>
      <RatingStars rating={summary.averageRating} />
      <strong>{summary.averageRating.toFixed(1)}</strong>
      <span>{t(summary.count === 1 ? "reviews.single" : "reviews.plural", { count: summary.count })}</span>
    </div>
  );
}

export default function ProductReviews({ productId }) {
  const { t } = useI18n();
  const summary = getReviewSummary(productId);
  if (!summary) return null;

  return (
    <section className="product-reviews" aria-labelledby={`product-reviews-${productId}`}>
      <div className="product-reviews__header">
        <p>{t("reviews.eyebrow")}</p>
        <h3 id={`product-reviews-${productId}`}>{t("reviews.title")}</h3>
        <span>{t(summary.count === 1 ? "reviews.single" : "reviews.plural", { count: summary.count })}</span>
      </div>
      <div className="product-reviews__list">
        {summary.reviews.map((review) => (
          <article className="product-review" key={review.id}>
            <RatingStars rating={review.rating} />
            {review.title ? <h4>{review.title}</h4> : null}
            <p>{review.body}</p>
            <footer>
              <strong>{review.reviewerName}</strong>
              {review.reviewerType ? <span>{review.reviewerType}</span> : null}
              {review.gymnastLevel ? <span>{review.gymnastLevel}</span> : null}
              {review.verifiedPurchase ? <span>{t("reviews.verified")}</span> : null}
              <time dateTime={review.date}>{review.date}</time>
            </footer>
            {review.image ? <OptimizedImage src={review.image} alt={t("reviews.photoAlt")} loading="lazy" width="720" height="720" /> : null}
          </article>
        ))}
      </div>
    </section>
  );
}
