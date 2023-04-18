import { useAppSelector } from '../../hooks';
import Reviews from '../reviews/reviews';
import { AuthorizationStatus } from '../../enums';
import OfferReviewsForm from '../offer-reviews-form/offer-reviews-form';
import { getComments } from '../../store/offer-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';

function OfferReviews(): JSX.Element {
  const comments = useAppSelector(getComments);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <Reviews comments={comments} />
      {authorizationStatus === AuthorizationStatus.Auth && <OfferReviewsForm />}
    </section>
  );
}

export default OfferReviews;
