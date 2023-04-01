import { store } from '.';
import { LocationRouteType } from '../types';
import { Offer, CityLocation } from '../mocks/types';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type initialStateType = {
  offers: Offer[];
  locationName: LocationRouteType;
  offerList: Offer[];
  locationCenter: CityLocation | undefined;
  offerItem: Offer | null | undefined;
}
