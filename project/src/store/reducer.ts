import { InitialState } from '../types/store';
import { createReducer } from '@reduxjs/toolkit';
import { LOCATION_POINT_DEFAULT } from '../consts';
import { LocationRoute, SortType, AuthorizationStatus } from '../enums';
import { filterCallbackMap, sortCallbackMap} from '../maps';

import {
  setLoader,
  loadOffers,
  setFilter,
  setSort,
  setSelectedOffer,
  resetSelectedOffer,
  setOfferId,
  loadOffer,
  loadOffersNearby,
  loadComments,
  requireAuthorization
} from './action';

const initialState: InitialState = {
  isLoading: false,
  offers: [],
  filter: filterCallbackMap[LocationRoute.Paris],
  sort: sortCallbackMap[SortType.Default],
  locationOffers: [],
  locationPoint: LOCATION_POINT_DEFAULT,
  selectedOffer: null,
  offerId: null,
  offer: null,
  nearbyOffers: [],
  comments: [],
  authorizationStatus: AuthorizationStatus.Unknown
};

const reducer = createReducer(initialState, (builder) => {
  builder
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
      state.locationPoint = state.locationOffers[0].city.location ?? LOCATION_POINT_DEFAULT;
    })
    .addCase(setSort, (state, action) => {
      state.sort = action.payload;
      state.locationOffers = state.offers.filter(state.filter).sort(state.sort);
    })
    .addCase(setSelectedOffer, (state, action) => {
      state.selectedOffer = action.payload;
    })
    .addCase(resetSelectedOffer, (state) => {
      state.selectedOffer = null;
    })
    .addCase(setOfferId, (state, action) => {
      state.offerId = action.payload;
    })
    .addCase(loadOffer, (state, action) => {
      state.offer = action.payload;
      state.isLoading = false;
    })
    .addCase(loadOffersNearby, (state, action) => {
      state.nearbyOffers = action.payload;
    })
    .addCase(loadComments, (state, action) => {
      state.comments = action.payload;
    })
    .addCase(requireAuthorization, (state, action) => {
      state.authorizationStatus = action.payload;
    });
});

export { reducer };
