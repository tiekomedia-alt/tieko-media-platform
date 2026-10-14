import Link from "next/link";
import { infrastructureReviewAreas, reviewRequestHref } from "@/lib/home-work";

export default function InfrastructureReview() {
  return (
    <section className="infrastructure-review" aria-labelledby="infrastructure-review-heading">
      <div className="section-shell">
        <div className="review-layout">
          <div className="review-heading">
            <p className="section-eyebrow">Digital Infrastructure Review</p>
            <h2 id="infrastructure-review-heading">See what is supporting growth and what is quietly holding it back.</h2>
          </div>
          <div className="review-summary">
            <p>Our Digital Infrastructure Review is a structured examination of the systems that shape how your organisation is found, understood, trusted and operated.</p>
            <p>It brings related issues into one clear view, helping you identify immediate weaknesses, important dependencies and practical priorities for improvement.</p>
            <Link href={reviewRequestHref}>Request a Review</Link>
          </div>
        </div>

        <ol className="review-areas">
          {infrastructureReviewAreas.map((area) => (
            <li key={area}>
              <strong>{area}</strong>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
