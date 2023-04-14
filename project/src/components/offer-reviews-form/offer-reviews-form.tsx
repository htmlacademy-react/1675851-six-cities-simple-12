import { useState, useCallback, ChangeEvent } from 'react';
import { ratingTitleMap } from '../../maps';
import { CommentData } from '../../types/data';
import { FormEvent } from 'react';
import { useAppDispatch } from '../../hooks';
import { sendComment } from '../../store/api-actions';
import { Fragment } from 'react';
import './styles.css';

export const options = Object.entries(ratingTitleMap).map(([optionValue, optionTitle]) => ({optionValue, optionTitle})).reverse();
export const TEXTAREA_MIN_LENGTH = 50;

function OfferReviewsForm(): JSX.Element {
  const [formData, setFormData] = useState<CommentData>({ rating: 0, comment: '' });
  const [isFormValid, setIsFormValid] = useState(false);

  const dispatch = useAppDispatch();

  const handleChange = useCallback((evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsFormValid(false);

    setFormData((prevData) => {
      const newData = ({
        ...prevData,
        [evt.target.name]: evt.target.name === 'rating' ? Number(evt.target.value) : evt.target.value
      });

      if (
        newData.rating &&
        newData.comment.length >= TEXTAREA_MIN_LENGTH) {

        setIsFormValid(true);
      }

      return newData;
    });
  }, []);

  const handleSubmit = useCallback((evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(sendComment(formData));

    const form = evt.target as HTMLFormElement;

    form.reset();
  }, [formData, dispatch]);

  return (
    <form className="reviews__form form" onSubmit={handleSubmit}>
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
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
                onChange={handleChange}
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
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="comment"
        placeholder="Tell how was your stay, what you like and what can be improved"
        minLength={TEXTAREA_MIN_LENGTH}
        required
        onChange={handleChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set&nbsp;
          <span className="reviews__star">rating</span>
          and describe your stay with at least&nbsp;
          <b className="reviews__text-amount">{TEXTAREA_MIN_LENGTH} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={!isFormValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default OfferReviewsForm;
