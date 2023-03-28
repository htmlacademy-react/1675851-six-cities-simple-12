import { useState, useCallback, ChangeEvent } from 'react';
import { options } from './utils';
import RatingItem from '../rating-item/rating-item';

function ReviewForm(): JSX.Element {
  const [/*formData*/, setFormData] = useState({ rating: '', review: '' });

  const handleChange = useCallback(({target}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prevFormData) => ({ ...prevFormData, [target.name]: target.value }));
  }, []);

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          options.map((option) => (
            <RatingItem
              key={option.value}
              option={option}
              onChange={handleChange}
            />
          ))
        }
      </div>
      <textarea
        onChange={handleChange}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.</p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewForm;
