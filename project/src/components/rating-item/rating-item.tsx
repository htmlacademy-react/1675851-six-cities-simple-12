import { Props } from './types';
import { Fragment } from 'react';

function RatingOption({option, onChange}: Props): JSX.Element {
  return (
    <Fragment>
      <input
        className="form__rating-input visually-hidden"
        id={`${option.optionValue}-stars`}
        type="radio"
        name="rating"
        value={option.optionValue}
        onChange={onChange}
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
  );
}

export default RatingOption;
