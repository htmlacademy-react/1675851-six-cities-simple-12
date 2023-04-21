import { SendingStatus, TextAreaLength } from '../../enums';
import { FormEvent } from 'react';

type Props = {
  sendingStatus: SendingStatus;
  onCommentInput: (evt: FormEvent<HTMLTextAreaElement>) => void;
}

function ReviewComment({onCommentInput, sendingStatus}: Props): JSX.Element {
  return (
    <textarea
      className="reviews__textarea form__textarea"
      id="review"
      name="comment"
      placeholder="Tell how was your stay, what you like and what can be improved"
      minLength={TextAreaLength.Min}
      maxLength={TextAreaLength.Max}
      required
      disabled={sendingStatus === SendingStatus.Pending}
      onInput={onCommentInput}
    />
  );
}

export default ReviewComment;
