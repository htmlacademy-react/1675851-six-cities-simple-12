export type RatingOptionProps = {
  option: RatingOptionState;
  onRatingChange: (value: string) => void;
}

export type RatingOptionState = {
  value: number;
  title: string;
}
