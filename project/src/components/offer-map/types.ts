import { CityLocation, Offer } from '../../mocks/types';

export type Props = {
  locationSettings: CityLocation;
  offers: Offer[];
  selectedOffer: number | null;
};
