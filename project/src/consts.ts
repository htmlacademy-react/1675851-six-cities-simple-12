import { PointTuple } from 'leaflet';
import { CityLocation } from './types/data';

export const BASE_URL = 'https://12.react.pages.academy/six-cities-simple';
export const REQUEST_TIMEOUT = 5000;

export const ICON_SIZE: PointTuple = [35.1, 50.7];
export const ICON_ANCHOR: PointTuple = [17.55, 50.7];

export const LOCATION_POINT_DEFAULT: CityLocation = {
  'latitude': 48.85661,
  'longitude': 2.351499,
  'zoom': 13
};

export const EMAIL_PATTERN = /.+@.+\..+/i;
