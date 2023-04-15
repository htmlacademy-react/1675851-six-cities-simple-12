import { createAPI } from '../../services/api';
import { ratingTitleMap } from '../../maps';
import { useAppSelector } from '../../hooks';
import { getData } from '../../store/selectors';
import { useState, useCallback, ChangeEvent, FormEvent, Fragment } from 'react';
import { Comments, CommentData } from '../../types/data';
import { useAppDispatch } from '../../hooks';
import { setComments } from '../../store/action';
import { APIRoute } from '../../enums';
import './styles.css';

export const TEXTAREA_MIN_LENGTH = 50;
export const TEXTAREA_MAX_LENGTH = 300;
export const api = createAPI();
export const options = Object.entries(ratingTitleMap).map(([optionValue, optionTitle]) => ({optionValue, optionTitle})).reverse();

const keyframes = {transform: [0, -5, 0, 5, 0].map((value) => `translateX(${value}px)`)};
const config = {duration: 150, iterations: 4};

function OfferReviewsForm(): JSX.Element {
  const {offerId} = useAppSelector(getData);
  const [formData, setFormData] = useState<CommentData>({ rating: 0, comment: '' });
  const [isFormInvalid, setFormInvalid] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const dispatch = useAppDispatch();

  const handleChange = useCallback((evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormInvalid(true);

    setFormData((prevData) => {
      const newData = ({
        ...prevData,
        [evt.target.name]: evt.target.name === 'rating' ? Number(evt.target.value) : evt.target.value
      });

      if (
        newData.rating &&
        (newData.comment.length >= TEXTAREA_MIN_LENGTH &&
          newData.comment.length <= TEXTAREA_MAX_LENGTH)) {

        setFormInvalid(false);
      }

      return newData;
    });
  }, []);

  const handleSubmit = useCallback((evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const form = evt.target as HTMLFormElement;

    (async () => {
      try {
        setIsSubmitting(true);

        if (offerId) {
          const response = await api.post<Comments>(`${APIRoute.Comments}/${offerId}`, formData);

          dispatch(setComments(response.data));
          form.reset();
        }
      }

      catch {
        form.animate(keyframes, config);
      }

      setIsSubmitting(false);
    })();
  }, [offerId, formData, dispatch]);

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
                disabled={isSubmitting}
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
        maxLength={TEXTAREA_MAX_LENGTH}
        required
        disabled={isSubmitting}
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
          disabled={isSubmitting || isFormInvalid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default OfferReviewsForm;
