import { Offer } from '../../mocks/offers-types';

export type Props = {
  offer: Offer;
  onPlaceCard: (id: number) => void;
  outPlaceCard: (nothing: null) => void;
}
