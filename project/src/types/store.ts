import { store } from '../store';
import { Offers, Offer, CityLocation, Comments, User } from './data';
import { FilterCallback, SortCallback } from '../maps';
import { AuthorizationStatusType } from './routes';
import { reducer } from '../store/reducer';

export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;

export type InitialState = {
  authorizationStatus: AuthorizationStatusType;
  user: User | null;
  isLoading: boolean;
  offers: Offers;
  filter: FilterCallback;
  sort: SortCallback;
  locationOffers: Offers;
  locationPoint: CityLocation;
  selectedOffer: Offer | null;
  offer: Offer | null;
  offerId: number | null;
  nearbyOffers: Offers;
  comments: Comments;
}

export type Reducer = ReturnType<typeof reducer>;
