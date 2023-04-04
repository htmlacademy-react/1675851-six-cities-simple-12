import { CityLocation, Offer } from '../../types/data';

export type Props = {
  locationCenter: CityLocation | undefined;
  offers: Offer[];
  className: string;
};
