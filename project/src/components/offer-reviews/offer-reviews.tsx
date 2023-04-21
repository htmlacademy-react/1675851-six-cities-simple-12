import { useAppSelector } from '../../hooks';
import { getComments } from '../../store/offer-data/selectors';
import { getAuthorizationStatus } from '../../store/user-process/selectors';
import { AuthorizationStatus } from '../../enums';
import Reviews from '../reviews/reviews';
import ReviewForm from '../review-form/review-form';

function OfferReviews(): JSX.Element {
  const comments = useAppSelector(getComments);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">
        Reviews &middot; <span className="reviews__amount">{comments.length}</span>
      </h2>
      <Reviews comments={comments} />
      {
        authorizationStatus === AuthorizationStatus.Auth && <ReviewForm />
      }
    </section>
  );
}

export default OfferReviews;
