export enum RatingTitle {
  Terribly = 'terribly',
  Badly = 'badly',
  NotBad = 'not bad',
  Good = 'good',
  Perfect = 'perfect'
}

export const ratingValueMap = {
  [RatingTitle.Terribly]: 1,
  [RatingTitle.Badly]: 2,
  [RatingTitle.NotBad]: 3,
  [RatingTitle.Good]: 4,
  [RatingTitle.Perfect]: 5
};

export const options = Object.entries(ratingValueMap).map(([title, value]) => ({title, value})).reverse();
