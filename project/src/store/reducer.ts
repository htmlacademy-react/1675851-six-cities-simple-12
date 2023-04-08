import { InitialState } from '../types/store';
import { createReducer } from '@reduxjs/toolkit';
import { LOCATION_POINT_DEFAULT } from '../consts';
import { FilterType, SortType, AuthorizationStatus } from '../enums';
import { filterCallbackMap, sortCallbackMap} from '../maps';

import {
  setLoader,
  loadOffers,
  setFilter,
  setSort,
  setLocationOffers,
  setLocationPointByName,
  setLocationPointById,
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
  filter: filterCallbackMap[FilterType.Default],
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
    })
    .addCase(setSort, (state, action) => {
      state.sort = action.payload;
    })
    .addCase(setLocationOffers, (state) => {
      state.locationOffers = state.offers.filter(state.filter).sort(state.sort);
    })
    .addCase(setLocationPointByName, (state, action) => {
      const offerItem = state.offers.find((offer) => offer.city.name === action.payload);
      state.locationPoint = offerItem ? offerItem.city.location : LOCATION_POINT_DEFAULT;
    })
    .addCase(setLocationPointById, (state, action) => {
      const offerItem = state.offers.find((offer) => offer.id === action.payload);
      state.locationPoint = offerItem ? offerItem.city.location : LOCATION_POINT_DEFAULT;
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
