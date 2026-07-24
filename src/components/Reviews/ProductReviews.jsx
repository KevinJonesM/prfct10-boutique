import { getReviewSummary } from "../../data/reviews";
import RatingStars from "./RatingStars";
import OptimizedImage from "../OptimizedImage/OptimizedImage";
import "./Reviews.css";

export function ProductReviewSummary({ productId }) {
  const summary = getReviewSummary(productId);
  if (!summary) return null;

  return (
    <div className="product-review-summary" aria-label={`${summary.count} customer reviews`}>
      <RatingStars rating={summary.averageRating} />
      <strong>{summary.averageRating.toFixed(1)}</strong>
      <span>{summary.count} {summary.count === 1 ? "review" : "reviews"}</span>
    </div>
  );
}

export default function ProductReviews({ productId }) {
  const summary = getReviewSummary(productId);
  if (!summary) return null;

  return (
    <section className="product-reviews" aria-labelledby={`product-reviews-${productId}`}>
      <div className="product-reviews__header">
        <p>Real feedback</p>
        <h3 id={`product-reviews-${productId}`}>Customer reviews</h3>
        <span>{summary.count} {summary.count === 1 ? "review" : "reviews"}</span>
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
              {review.verifiedPurchase ? <span>Verified purchase</span> : null}
              <time dateTime={review.date}>{review.date}</time>
            </footer>
            {review.image ? <OptimizedImage src={review.image} alt="Customer-submitted product photo" loading="lazy" width="720" height="720" /> : null}
          </article>
        ))}
      </div>
    </section>
  );
}
