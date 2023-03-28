import { Offer, CityLocation } from '../../mocks/types';

export type Props = {
  locationName: string;
  offers: Offer[];
  locationCenter: CityLocation;
}
