import { store } from '../store';
import { rootReducer } from '../store/root-reducer';
import { AuthorizationStatusType } from './routes';
import { Offers, Offer, CityLocation, User, Comments } from './data';
import { FilterCallback, SortCallback } from '../maps';
import { SendingStatus } from '../enums';

export type AppDispatch = typeof store.dispatch;
export type State = ReturnType<typeof store.getState>;
export type Reducer = ReturnType<typeof rootReducer>;

export type UserProcess = {
  authorizationStatus: AuthorizationStatusType;
  user: User | null;
}

export type OffersData = {
  offers: Offers;
  filter: FilterCallback;
  sort: SortCallback;
  locationOffers: Offers;
  locationName: string;
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
  responseErrorCode: number | undefined;
}
