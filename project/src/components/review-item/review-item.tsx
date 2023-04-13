import { Props } from './types';
import { Fragment } from 'react';
import { formatDate } from '../../utils';

function ReviewItem({comment}: Props): JSX.Element {
  const date = new Date(comment.date);

  return (
    <Fragment>
      <div className="reviews__user user">
        <div className='reviews__avatar-wrapper user__avatar-wrapper'>
          <img className="reviews__avatar user__avatar" src={comment.user.avatarUrl} width="54" height="54" alt="" />
        </div>
        <span className="reviews__user-name">{comment.user.name}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${Math.round(comment.rating) * 20}%`}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{comment.comment}</p>
        <time className="reviews__time" dateTime={comment.date}>{formatDate(date)}</time>
      </div>
    </Fragment>
  );
}

export default ReviewItem;
