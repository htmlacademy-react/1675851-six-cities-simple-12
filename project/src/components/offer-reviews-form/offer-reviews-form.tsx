// обсудить

import { ratingTitleMap } from '../../maps';
import { useState, useCallback, ChangeEvent, FormEvent, useRef, useEffect, Fragment } from 'react';
import { CommentFormData } from '../../types/data';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useParams } from 'react-router-dom';
import { sendComment } from '../../store/api-actions';
import { getSendingStatus } from '../../store/offer-data/selectors';
import { TextAreaLength, SendingStatus } from '../../enums';
import { setSendingStatus } from '../../store/offer-data/offer-data';
import { keyframes, config } from '../../consts';
import './styles.css';

export const options = Object.entries(ratingTitleMap).map(([optionValue, optionTitle]) => ({optionValue, optionTitle})).reverse();

function OfferReviewsForm(): JSX.Element {
  const [formData, setFormData] = useState<CommentFormData>({ rating: 0, comment: '' });
  const [isFormInvalid, setIsFormInvalid] = useState(true);
  const {id} = useParams();
  const formRef = useRef(null);

  const sendingStatus = useAppSelector(getSendingStatus);
  const dispatch = useAppDispatch();

  const handleChange = useCallback((evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setIsFormInvalid(true);

    setFormData((prevData) => {
      const newData = ({
        ...prevData,
        [evt.target.name]: evt.target.name === 'rating' ? Number(evt.target.value) : evt.target.value
      });

      if (
        newData.rating &&
        (newData.comment.length >= TextAreaLength.Min &&
          newData.comment.length <= TextAreaLength.Max)) {

        setIsFormInvalid(false);
      }

      return newData;
    });
  }, []);

  const handleSubmit = useCallback((evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (id) {
      dispatch(sendComment({id, body: formData}));
    }
  }, [id, formData, dispatch]);

  useEffect(() => {
    if (formRef.current !== null) {
      const form = formRef.current as HTMLFormElement;

      if (sendingStatus === SendingStatus.Fulfilled) {
        form.reset();
        setIsFormInvalid(true);
        dispatch(setSendingStatus(SendingStatus.Unknown));
      }

      if (sendingStatus === SendingStatus.Rejected) {
        form.animate(keyframes, config);
        dispatch(setSendingStatus(SendingStatus.Unknown));
      }
    }
  }, [dispatch, sendingStatus]);

  return (
    <form className="reviews__form form" onSubmit={handleSubmit} ref={formRef}>
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
                disabled={sendingStatus === SendingStatus.Pending}
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
        minLength={TextAreaLength.Min}
        maxLength={TextAreaLength.Max}
        required
        disabled={sendingStatus === SendingStatus.Pending}
        onChange={handleChange}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set&nbsp;
          <span className="reviews__star">rating</span>
          and describe your stay with at least&nbsp;
          <b className="reviews__text-amount">{TextAreaLength.Min} characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={sendingStatus === SendingStatus.Pending || isFormInvalid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default OfferReviewsForm;
