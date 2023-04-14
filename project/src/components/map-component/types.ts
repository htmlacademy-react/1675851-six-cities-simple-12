import { Offers, Offer, CityLocation } from '../../types/data';

export type Props = {
  locationPoint: CityLocation;
  locationOffers?: Offers;
  selectedOffer?: Offer | null;
  offer?: Offer;
  nearbyOffers?: Offers;
  className: string;
};
