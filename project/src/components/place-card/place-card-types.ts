import { OfferProps as MainOfferProps } from '../../mocks/offers-types';

export type OfferProps = MainOfferProps & {
  onPlaceCard: (id: number) => void;
  outPlaceCard: (empty: null) => void;
}

export type PlaceCardState = {
  id: number;
  isPremium: JSX.Element | string;
  route: string;
  previewImage: string;
  price: number;
  rating: string;
  title: string;
  type: string;
}
