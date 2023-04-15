import { Props } from './types';
import Review from '../review/review';

function Reviews({comments}: Props): JSX.Element {
  return (
    <ul className="reviews__list">
      {
        comments.map((comment) => (
          <li
            className="reviews__item"
            key={comment.id}
          >
            <Review comment={comment} />
          </li>
        ))
      }
    </ul>
  );
}

export default Reviews;
