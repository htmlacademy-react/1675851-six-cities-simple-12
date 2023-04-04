import { Offer } from '../../types/data';

export type Props = {
  offers: Offer[];
};

export type OfferPageContext = {
  set: (value: number | null) => void;
}
