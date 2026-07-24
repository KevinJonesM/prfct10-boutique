/**
 * Review records belong here only after they have been supplied by the business
 * and approved for publication. The storefront intentionally ships with no
 * seeded testimonials or ratings.
 *
 * Review fields:
 * id, productId, rating, title, body, reviewerName, reviewerType,
 * gymnastLevel, verifiedPurchase, date, image, approvedForPublication
 */
export const reviews = [];

/**
 * UGC requires an approved image, useful alt text, and explicit publication
 * approval. Do not add athlete names or identifying details unless the supplied
 * metadata is cleared for public use.
 */
export const ugcGallery = [];

const isValidRating = (rating) => Number.isFinite(rating) && rating >= 1 && rating <= 5;

export function getPublishedReviews(productId) {
  return reviews.filter((review) => {
    const matchesProduct = productId ? review.productId === productId : true;
    return Boolean(
      matchesProduct &&
      review.approvedForPublication === true &&
      review.id &&
      review.body &&
      review.reviewerName &&
      review.date &&
      isValidRating(review.rating)
    );
  });
}

export function getReviewSummary(productId) {
  const productReviews = getPublishedReviews(productId);
  if (!productReviews.length) return null;

  const ratingTotal = productReviews.reduce((total, review) => total + review.rating, 0);
  return {
    averageRating: ratingTotal / productReviews.length,
    count: productReviews.length,
    reviews: productReviews
  };
}

export function getPublishedUgc() {
  return ugcGallery.filter((item) => Boolean(
    item.approvedForPublication === true && item.id && item.image && item.alt
  ));
}
