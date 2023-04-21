import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OffersData } from '../../types/store';
import { LocationRoute, SortType, NameSpace } from '../../enums';
import { LOCATION_NAME_DEFAULT, LOCATION_POINT_DEFAULT } from '../../consts';
import { filterCallbackMap, sortCallbackMap, FilterCallback, SortCallback } from '../../maps';
import { Offer } from '../../types/data';
import { loadOffers } from '../api-actions';

const INDEX_OF_FIRST_ELEMENT = 0;

const initialState: OffersData = {
  offers: [],
  filter: filterCallbackMap[LocationRoute.Paris],
  sort: sortCallbackMap[SortType.Default],
  locationOffers: [],
  locationName: LOCATION_NAME_DEFAULT,
  locationPoint: LOCATION_POINT_DEFAULT,
  selectedOffer: null
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<FilterCallback>) => {
      state.filter = action.payload;
      state.locationOffers = state.offers.filter(state.filter).sort(state.sort);
      state.locationName = state.locationOffers[INDEX_OF_FIRST_ELEMENT].city.name;
      state.locationPoint = state.locationOffers[INDEX_OF_FIRST_ELEMENT].city.location;
    },
    setSort: (state, action: PayloadAction<SortCallback>) => {
      state.sort = action.payload;
      state.locationOffers = state.sort !== sortCallbackMap[SortType.Default] ?
        state.locationOffers.sort(state.sort) : state.offers.filter(state.filter).sort(state.sort);
    },
    setSelectedOffer: (state, action: PayloadAction<Offer>) => {
      state.selectedOffer = action.payload;
    },
    resetSelectedOffer: (state) => {
      state.selectedOffer = null;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(loadOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
      });
  }
});

export const { setFilter, setSort, setSelectedOffer, resetSelectedOffer } = offersData.actions;
