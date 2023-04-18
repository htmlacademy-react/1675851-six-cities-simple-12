import { store } from '../store';
import { Offers, Offer, CityLocation, Comments, User } from './data';
import { FilterCallback, SortCallback } from '../maps';
import { AuthorizationStatusType } from './routes';
import { rootReducer } from '../store/root-reducer';
import { SendingStatus } from '../enums';

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

export type Reducer = ReturnType<typeof rootReducer>;

export type UserProcess = {
  authorizationStatus: AuthorizationStatusType;
  user: User | null;
}

export type OffersData = {
  isLoading: boolean;
  offers: Offers;
  filter: FilterCallback;
  sort: SortCallback;
  locationOffers: Offers;
  locationPoint: CityLocation;
  selectedOffer: Offer | null;
};

export type OfferData = {
  isLoading: boolean;
  offer: Offer | null;
  locationPoint: CityLocation;
  nearbyOffers: Offers;
  comments: Comments;
  sendingStatus: SendingStatus;
}
