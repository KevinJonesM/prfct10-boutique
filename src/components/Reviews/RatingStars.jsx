export default function RatingStars({ rating }) {
  const roundedRating = Math.round(rating);
  const stars = `${"★".repeat(roundedRating)}${"☆".repeat(5 - roundedRating)}`;

  return (
    <span className="review-stars" role="img" aria-label={`${rating.toFixed(1)} out of 5 stars`}>
      {stars}
    </span>
  );
}
