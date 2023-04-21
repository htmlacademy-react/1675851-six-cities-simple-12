import { Offers, Offer, CityLocation } from '../../types/data';
import { PointTuple } from 'leaflet';

export type Props = {
  locationPoint: CityLocation;
  offers: Offers;
  selectedOffer: Offer | null;
  className: string;
};

export type IconProperties = {
  sizes: PointTuple;
  anchors: PointTuple;
}
