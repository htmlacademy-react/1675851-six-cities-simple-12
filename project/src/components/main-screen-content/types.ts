import { Offer } from '../../mocks/types';

export type Props = {
  offers: Offer[];
};

export type LocationOffersContext = {
  set: (value: number | null) => void;
}
