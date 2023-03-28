import { CityLocation, Offer } from '../../mocks/types';

export type Props = {
  locationCenter: CityLocation | undefined;
  offers: Offer[];
  className: string;
};
