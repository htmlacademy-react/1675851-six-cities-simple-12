import { ChangeEvent } from 'react';

export type Props = {
  option: RatingOption;
  onChange: (evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export type RatingOption = {
  optionValue: string;
  optionTitle: string;
}
