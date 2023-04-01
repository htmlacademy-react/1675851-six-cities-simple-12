export enum RatingTitle {
  Terribly = 'terribly',
  Badly = 'badly',
  NotBad = 'not bad',
  Good = 'good',
  Perfect = 'perfect'
}

export const ratingValueMap = {
  [RatingTitle.Perfect]: 5,
  [RatingTitle.Good]: 4,
  [RatingTitle.NotBad]: 3,
  [RatingTitle.Badly]: 2,
  [RatingTitle.Terribly]: 1
};

export const options = Object.entries(ratingValueMap).map(([title, value]) => ({title, value}));
