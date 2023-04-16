import { Offers, Offer, CityLocation } from '../../types/data';

export type Props = {
  locationPoint: CityLocation;
  offers: Offers;
  selectedOffer: Offer | null;
  className: string;
};
