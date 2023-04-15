import { useAppSelector } from '../../hooks';
import { getData } from '../../store/selectors';
import Reviews from '../reviews/reviews';
import { AuthorizationStatus } from '../../enums';
import OfferReviewsForm from '../offer-reviews-form/offer-reviews-form';

function OfferReviews(): JSX.Element {
  const {comments, authorizationStatus } = useAppSelector(getData);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <Reviews comments={comments} />
      {authorizationStatus === AuthorizationStatus.Auth && <OfferReviewsForm />}
    </section>
  );
}

export default OfferReviews;
