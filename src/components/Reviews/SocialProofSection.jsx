import { getPublishedReviews, getPublishedUgc } from "../../data/reviews";
import Reveal from "../Motion/Reveal";
import RatingStars from "./RatingStars";
import OptimizedImage from "../OptimizedImage/OptimizedImage";
import "./Reviews.css";

export default function SocialProofSection() {
  const publishedReviews = getPublishedReviews();
  const publishedUgc = getPublishedUgc();

  if (!publishedReviews.length && !publishedUgc.length) return null;

  return (
    <section className="social-proof" aria-labelledby="social-proof-title">
      <Reveal className="social-proof__header">
        <p>From the gym</p>
        <h2 id="social-proof-title">Loved where it matters most.</h2>
        <span>Real feedback from gymnasts, parents, and teams who make PRFCT10 part of their routine.</span>
      </Reveal>

      {publishedReviews.length ? (
        <Reveal className="social-proof__reviews" delay={80}>
          {publishedReviews.slice(0, 3).map((review) => (
            <article className="social-proof__review" key={review.id}>
              <RatingStars rating={review.rating} />
              {review.title ? <h3>{review.title}</h3> : null}
              <blockquote>{review.body}</blockquote>
              <footer>
                <strong>{review.reviewerName}</strong>
                {review.reviewerType ? <span>{review.reviewerType}</span> : null}
                {review.verifiedPurchase ? <span>Verified purchase</span> : null}
              </footer>
            </article>
          ))}
        </Reveal>
      ) : null}

      {publishedUgc.length ? (
        <div className="social-proof__ugc" aria-labelledby="social-proof-ugc-title">
          <h3 id="social-proof-ugc-title">In the gym with PRFCT10</h3>
          <div className="social-proof__ugc-grid">
            {publishedUgc.slice(0, 4).map((item) => (
              <figure key={item.id}>
                <OptimizedImage src={item.image} alt={item.alt} loading="lazy" width="720" height="720" />
                {item.caption ? <figcaption>{item.caption}</figcaption> : null}
              </figure>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
