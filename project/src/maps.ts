import { RatingType } from './enums';

export const RatingScoreMap = {
  [RatingType.Terribly]: 1,
  [RatingType.Badly]: 2,
  [RatingType.NotBad]: 3,
  [RatingType.Good]: 4,
  [RatingType.Perfect]: 5
};
