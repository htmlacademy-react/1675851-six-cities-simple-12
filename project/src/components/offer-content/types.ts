import { Offers, Offer, CityLocation } from '../../types/data';

export type Props = {
  offer: Offer;
  locationPoint: CityLocation;
  nearbyOffers: Offers;
}
