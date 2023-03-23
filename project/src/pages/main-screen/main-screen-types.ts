import { Offer } from '../../mocks/offers-types';

export type Props = {
  offers: Offer[];
};

export type MainScreenContext = {
  getSelectedOffer: (value: number | null) => void;
}
