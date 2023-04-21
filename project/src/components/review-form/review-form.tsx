import { useState, FormEvent, MouseEvent, useRef, useEffect } from 'react';
import { CommentFormData } from '../../types/data';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useParams } from 'react-router-dom';
import { sendComment } from '../../store/api-actions';
import { getSendingStatus } from '../../store/offer-data/selectors';
import { TextAreaLength, SendingStatus } from '../../enums';
import { setSendingStatus } from '../../store/offer-data/offer-data';
import ReviewRating from '../review-rating/review-rating';
import ReviewComment from '../review-comment/review-comment';
import './styles.css';

export const keyframes = {transform: [0, -5, 0, 5, 0].map((value) => `translateX(${value}px)`)};
export const config = {duration: 150, iterations: 4};

function ReviewForm(): JSX.Element {
  const [formData, setFormData] = useState<CommentFormData>({ rating: 0, comment: '' });
  const [isFormInvalid, setIsFormInvalid] = useState(true);
  const {id} = useParams();
  const formRef = useRef<HTMLFormElement>(null);

  const sendingStatus = useAppSelector(getSendingStatus);
  const dispatch = useAppDispatch();

  const handleRatingClick = (evt: MouseEvent<HTMLInputElement>) => {
    const input = evt.target as HTMLInputElement;

    setFormData((prevData) => (
      {
        ...prevData,
        [input.name]: Number(input.value)
      }
    ));
  };

  const handleCommentInput = (evt: FormEvent<HTMLTextAreaElement>) => {
    const textarea = evt.target as HTMLTextAreaElement;

    setFormData((prevData) => (
      {
        ...prevData,
        [textarea.name]: textarea.value
      }
    ));
  };

  const handleFormSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (id) {
      dispatch(sendComment(
        {
          id,
          body: formData
        }
      ));
    }
  };

  useEffect(() => {
    setIsFormInvalid(!(
      formData.rating &&
      formData.comment.length >= TextAreaLength.Min && formData.comment.length <= TextAreaLength.Max
    ));

    if (formRef.current !== null) {
      const form = formRef.current;

      if (sendingStatus === SendingStatus.Fulfilled) {
        form.reset();
        setFormData({ rating: 0, comment: '' });
        dispatch(setSendingStatus(SendingStatus.Unknown));
      }

      if (sendingStatus === SendingStatus.Rejected) {
        form.animate(keyframes, config);
        dispatch(setSendingStatus(SendingStatus.Unknown));
      }
    }
  }, [formData, sendingStatus, dispatch]);

  return (
    <form
      className="reviews__form form"
      ref={formRef}
      onSubmit={handleFormSubmit}
    >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <ReviewRating
        sendingStatus={sendingStatus}
        onRatingClick={handleRatingClick}
      />
      <ReviewComment
        sendingStatus={sendingStatus}
        onCommentInput={handleCommentInput}
      />
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

export default ReviewForm;
