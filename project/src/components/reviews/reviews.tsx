import { Comment, Comments } from '../../types/data';
import Review from '../review/review';

type Props = {
  comments: Comments;
}

const sort = (commentA: Comment, commentB: Comment): number => Date.parse(commentB.date) - Date.parse(commentA.date);

function Reviews({comments}: Props): JSX.Element {
  return (
    <ul className="reviews__list">
      {
        comments
          .slice()
          .sort(sort)
          .slice(0, 10)
          .map((comment) => (
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
