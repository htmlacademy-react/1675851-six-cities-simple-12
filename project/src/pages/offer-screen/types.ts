import { Offer } from '../../mocks/types';

export type Props = {
  offers: Offer[];
};

export type OfferPageContext = {
  set: (value: number | null) => void;
}
