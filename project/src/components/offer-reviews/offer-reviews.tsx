import ReviewForm from '../review-form/review-form';
import OfferReview from '../offer-review/offer-review';

function OfferReviews(): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        <li className="reviews__item">
          <OfferReview />
        </li>
      </ul>
      <ReviewForm />
    </section>
  );
}

export default OfferReviews;
