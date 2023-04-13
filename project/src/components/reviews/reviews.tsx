import { useAppSelector } from '../../hooks';
import { getData } from '../../store/selectors';
import ReviewList from '../review-list/review-list';
import { AuthorizationStatus } from '../../enums';
import ReviewForm from '../review-form/review-form';

function Reviews(): JSX.Element {
  const {comments, authorizationStatus } = useAppSelector(getData);

  return (
    <section className="property__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ReviewList comments={comments} />
      {authorizationStatus === AuthorizationStatus.Auth && <ReviewForm />}
    </section>
  );
}

export default Reviews;
