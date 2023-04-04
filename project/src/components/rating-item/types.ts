import { ChangeEvent } from 'react';

export type Props = {
  option: RatingOption;
  onChange: ({target}: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export type RatingOption = {
  value: number;
  title: string;
}
