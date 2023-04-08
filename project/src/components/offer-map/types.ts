import { Offers, Offer, CityLocation } from '../../types/data';

export type Props = {
  locationPoint: CityLocation;
  className: string;
  locationOffers?: Offers;
  selectedOffer?: Offer | null;
  nearbyOffers?: Offers;
  offer?: Offer;
};
