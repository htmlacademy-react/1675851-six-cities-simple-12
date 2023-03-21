import { useState, useCallback, ChangeEvent } from 'react';
import { ratingOptions } from './rating-option-utils';
import RatingOption from './rating-option';

function ReviewsForm(): JSX.Element {
  const [/*formData*/, setFormData] = useState({ rating: '', review: '' });

  const handleRatingChange = useCallback((value: string) => setFormData((prevFormData) => ({...prevFormData, rating: value})), []);
  const handleReviewChange = useCallback(({target}: ChangeEvent<HTMLTextAreaElement>) => setFormData((prevFormData) => ({...prevFormData, review: target.value})), []);

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          ratingOptions.map((ratingOption) => (
            <RatingOption
              key={ratingOption.value}
              option={ratingOption}
              onRatingChange={(value) => handleRatingChange(value)}
            />
          ))
        }
      </div>
      <textarea
        onChange={handleReviewChange}
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

export default ReviewsForm;
