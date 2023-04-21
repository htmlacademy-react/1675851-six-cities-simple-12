import { ratingTitleMap } from '../../maps';
import { Fragment } from 'react';
import { SendingStatus } from '../../enums';

export const options = Object.entries(ratingTitleMap).map(([optionValue, optionTitle]) => ({optionValue, optionTitle})).reverse();

type Props = {
  sendingStatus: SendingStatus;
  onRatingClick: (evt: React.MouseEvent<HTMLInputElement>) => void;
}

function ReviewRating({sendingStatus, onRatingClick}: Props): JSX.Element {
  return (
    <div className="reviews__rating-form form__rating">
      {
        options.map((option) => (
          <Fragment key={option.optionTitle}>
            <input
              className="form__rating-input visually-hidden"
              id={`${option.optionValue}-stars`}
              type="radio"
              name="rating"
              value={option.optionValue}
              disabled={sendingStatus === SendingStatus.Pending}
              onClick={onRatingClick}
            />
            <label
              className="reviews__rating-label form__rating-label"
              htmlFor={`${option.optionValue}-stars`}
              title={option.optionTitle}
            >
              <svg className="form__star-image" width="37" height="33">
                <use xlinkHref="#icon-star"></use>
              </svg>
            </label>
          </Fragment>
        ))
      }
    </div>
  );
}

export default ReviewRating;
