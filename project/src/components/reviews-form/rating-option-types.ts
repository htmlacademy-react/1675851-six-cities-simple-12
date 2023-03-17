export type Props = {
  option: RatingOption;
  onRatingChange: (value: string) => void;
}

export type RatingOption = {
  value: number;
  title: string;
}
