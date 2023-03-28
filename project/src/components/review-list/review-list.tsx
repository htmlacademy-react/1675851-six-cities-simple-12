import ReviewForm from '../review-form/review-form';
import ReviewItem from '../review-item/review-item';

function ReviewList(): JSX.Element {
  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        <li className="reviews__item">
          <ReviewItem />
        </li>
      </ul>
      <ReviewForm />
    </section>
  );
}

export default ReviewList;
