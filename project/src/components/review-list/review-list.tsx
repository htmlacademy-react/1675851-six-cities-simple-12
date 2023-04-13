import { Props } from './types';
import ReviewItem from '../review-item/review-item';

function ReviewList({comments}: Props): JSX.Element {
  return (
    <ul className="reviews__list">
      {
        comments.map((comment) => (
          <li
            className="reviews__item"
            key={comment.id}
          >
            <ReviewItem comment={comment} />
          </li>
        ))
      }
    </ul>
  );
}

export default ReviewList;
