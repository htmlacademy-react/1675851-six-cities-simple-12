import { store } from '.';
import { LocationRouteType } from '../types';
import { Offer, CityLocation } from '../mocks/types';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type initialStateType = {
  offers: Offer[];
  location: LocationRouteType | null | undefined;
  locationCenter: CityLocation | null | undefined;
  offerList: Offer[] | null;
  offerItem: Offer | null | undefined;
  selectedOffer: number | null;
}
