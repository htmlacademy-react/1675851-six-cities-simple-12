import { initialStateType } from './types';
import { offers } from '../mocks/offers';
import { createReducer } from '@reduxjs/toolkit';
import { setLocationByName, setLocationById, setOfferList, setOfferItem, setLocationCenter, setSelectedOffer } from './action';
import { LocationRouteType } from '../types';

const initialState: initialStateType = {
  offers: offers,
  location: null,
  locationCenter: null,
  offerList: null,
  offerItem: null,
  selectedOffer: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setLocationByName, (state, action) => {
      const {locationName} = action.payload;

      state.location = locationName;
    })
    .addCase(setLocationById, (state, action) => {
      const {offerId} = action.payload;

      state.location = state.offers.find((offer) => offer.id === offerId)?.city.name as LocationRouteType;
    })
    .addCase(setLocationCenter, (state) => {
      state.locationCenter = state.offerList?.find((offerItem) => offerItem.city.name === state.location)?.city.location;
    })
    .addCase(setOfferList, (state) => {
      state.offerList = state.offers.filter((offer) => offer.city.name === state.location);
    })
    .addCase(setOfferItem, (state, action) => {
      const {offerId} = action.payload;

      state.offerItem = state.offerList?.find((offerItem) => offerItem.id === offerId);
    })
    .addCase(setSelectedOffer, (state, action) => {
      const {offerId} = action.payload;

      state.selectedOffer = offerId;
    });
});

export { reducer };
