import { CityLocation, Offer } from '../../mocks/offers-types';

export type Props = {
  locationSettings: CityLocation;
  offers: Offer[];
  selectedOffer: number | null;
};
