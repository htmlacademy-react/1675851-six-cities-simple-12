import { CityLocation } from './types/data';

export const LOCATION_POINT_DEFAULT: CityLocation = {
  'latitude': 48.85661,
  'longitude': 2.351499,
  'zoom': 13
};

export const EMAIL_PATTERN = /.+@.+\..+/i;

export const keyframes = {transform: [0, -5, 0, 5, 0].map((value) => `translateX(${value}px)`)};
export const config = {duration: 150, iterations: 4};
