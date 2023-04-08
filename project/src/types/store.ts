import { store } from '../store';
import { Offers, Offer, CityLocation, Comments } from './data';
import { FilterCallback, SortCallback } from '../maps';
import { AuthorizationStatusType } from './routes';

export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;

export type InitialState = {
  isLoading: boolean;
  offers: Offers;
  filter: FilterCallback;
  sort: SortCallback;
  locationOffers: Offers;
  locationPoint: CityLocation;
  selectedOffer: Offer | null;
  offerId: number | null;
  offer: Offer | null;
  nearbyOffers: Offers;
  comments: Comments;
  authorizationStatus: AuthorizationStatusType;
}
