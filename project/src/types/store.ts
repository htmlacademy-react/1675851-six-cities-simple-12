import { store } from '../store';
import { LocationRouteType } from './routes';
import { Offer, CityLocation } from './data';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type initialStateType = {
  isLoading: boolean;
  offers: Offer[];
  locationName: LocationRouteType;
  offerList: Offer[];
  locationCenter: CityLocation | undefined;
  offerItem: Offer | null | undefined;
}
