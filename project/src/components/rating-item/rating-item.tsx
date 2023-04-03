import { Fragment } from 'react';
import { Props } from './types';

function RatingOption({option, onChange}: Props): JSX.Element {
  return (
    <Fragment>
      <input
        onChange={onChange}
        className="form__rating-input visually-hidden"
        name="rating"
        value={option.value}
        id={`${option.value}-stars`}
        type="radio"
      />
      <label
        htmlFor={`${option.value}-stars`}
        className="reviews__rating-label form__rating-label"
        title={option.title}
      >
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  );
}

export default RatingOption;