// import { useState } from 'react';
import { ChangeEvent, useState } from 'react';
import { RatingScoreMap } from '../../maps';
import RatingOption from './rating-option';

function ReviewsForm(): JSX.Element {
  const [formData, setFormData] = useState({
    rating: '',
    review: '',
  });

  const {log} = console;

  log(formData);

  const ratingOptions = Object.entries(RatingScoreMap).map(([title, value]) => ({title, value})).reverse();

  return(
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {
          ratingOptions.map((ratingOption) => (
            <RatingOption
              key={ratingOption.value}
              option={ratingOption}
              onRatingChange={(value) => setFormData({...formData, rating: value})}
            />
          ))
        }
      </div>
      <textarea
        onChange={(evt: ChangeEvent<HTMLTextAreaElement>) => setFormData({...formData, review: evt.target.value})}
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewsForm;
