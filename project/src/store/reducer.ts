import { InitialState } from '../types/store';
import { AuthorizationStatus, LocationRoute, SortType } from '../enums';
import { filterCallbackMap, sortCallbackMap} from '../maps';
import { createReducer } from '@reduxjs/toolkit';
import { Offers, Offer, CityLocation, Comments } from '../types/data';

import {
  setAuth,
  resetAuth,
  setLoader,
  loadOffers,
  setFilter,
  setSort,
  setSelectedOffer,
  resetSelectedOffer,
  loadOffer,
  resetOffer,
  setComments
} from './action';

export const LOCATION_POINT_DEFAULT: CityLocation = {
  'latitude': 48.85661,
  'longitude': 2.351499,
  'zoom': 13
};

const initialState: InitialState = {
  authorizationStatus: AuthorizationStatus.Unknown,
  user: null,
  isLoading: false,
  offers: [],
  filter: filterCallbackMap[LocationRoute.Paris],
  sort: sortCallbackMap[SortType.Default],
  locationOffers: [],
  locationPoint: LOCATION_POINT_DEFAULT,
  selectedOffer: null,
  offer: null,
  offerId: null,
  nearbyOffers: [],
  comments: []
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setAuth, (state, action) => {
      state.authorizationStatus = AuthorizationStatus.Auth;
      state.user = action.payload;
    })
    .addCase(resetAuth, (state) => {
      state.authorizationStatus = AuthorizationStatus.NoAuth;
      state.user = null;
    })
    .addCase(setLoader, (state) => {
      state.isLoading = true;
    })
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
      state.isLoading = false;
    })
    .addCase(setFilter, (state, action) => {
      state.filter = action.payload;
      state.locationOffers = state.offers.filter(state.filter).sort(state.sort);
      state.locationPoint = state.locationOffers[0].city.location;
    })
    .addCase(setSort, (state, action) => {
      state.sort = action.payload;
      state.locationOffers = state.sort !== sortCallbackMap[SortType.Default] ?
        state.locationOffers.sort(state.sort) : state.offers.filter(state.filter).sort(state.sort);
    })
    .addCase(setSelectedOffer, (state, action) => {
      state.selectedOffer = action.payload;
    })
    .addCase(resetSelectedOffer, (state) => {
      state.selectedOffer = null;
    })
    .addCase(loadOffer, (state, action) => {
      const [offer, nearbyOffers, comments] = action.payload;

      state.offer = offer as Offer;
      state.offerId = state.offer.id;
      state.locationPoint = state.offer.city.location;
      state.nearbyOffers = nearbyOffers as Offers;
      state.comments = comments as Comments;
      state.isLoading = false;
    })
    .addCase(resetOffer, (state) => {
      state.offer = null;
      state.nearbyOffers = [];
      state.comments = [];
    })
    .addCase(setComments, (state, action) => {
      state.comments = action.payload;
    });
});

export { reducer };
