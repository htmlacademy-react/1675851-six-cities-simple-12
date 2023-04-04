import { initialStateType } from '../types/store';
import { createReducer } from '@reduxjs/toolkit';
import { loadOffers, setLocationByName, setLocationById, setOfferItem, resetOfferItem, setLoader } from './action';
import { LocationRouteType } from '../types/routes';

const LOCATION_DEFAULT = 'Paris';

const initialState: initialStateType = {
  isLoading: false,
  offers: [],
  locationName: LOCATION_DEFAULT,
  offerList: [],
  locationCenter: {'latitude': 48.85661, 'longitude': 2.351499, 'zoom': 13},
  offerItem: null,
};

const getData = (state: initialStateType) => state;

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadOffers, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(setLocationByName, (state, action) => {
      const {locationName} = action.payload;

      state.locationName = locationName;
      state.offerList = state.offers.filter((offer) => offer.city.name === locationName);
      state.locationCenter = state.offerList.find((offerItem) => offerItem.city.name === locationName)?.city.location;
    })
    .addCase(setLocationById, (state, action) => {
      const {offerId} = action.payload;

      state.locationName = state.offers.find((offer) => offer.id === offerId)?.city.name as LocationRouteType;
      state.offerList = state.offers.filter((offer) => offer.city.name === state.locationName);
      state.locationCenter = state.offerList.find((offerItem) => offerItem.city.name === state.locationName)?.city.location;
      state.offerItem = state.offerList.find((offer) => offer.id === offerId);
    })
    .addCase(setOfferItem, (state, action) => {
      const {offerItem} = action.payload;

      state.offerItem = offerItem;
    })
    .addCase(resetOfferItem, (state) => {
      state.offerItem = null;
    })
    .addCase(setLoader, (state, action) => {
      state.isLoading = action.payload;
    });
});

export { reducer, getData };
