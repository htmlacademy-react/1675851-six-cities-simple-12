import { createSlice } from '@reduxjs/toolkit';
import { OffersData } from '../../types/store';
import { NameSpace } from '../../enums';
import { loadOffers } from '../api-actions';
import { LOCATION_POINT_DEFAULT } from '../../consts';
import { filterCallbackMap, sortCallbackMap, FilterCallback, SortCallback } from '../../maps';
import { LocationRoute, SortType } from '../../enums';
import { Offer } from '../../types/data';

const initialState: OffersData = {
  isLoading: false,
  offers: [],
  filter: filterCallbackMap[LocationRoute.Paris],
  sort: sortCallbackMap[SortType.Default],
  locationOffers: [],
  locationPoint: LOCATION_POINT_DEFAULT,
  selectedOffer: null
};

export const offersData = createSlice({
  name: NameSpace.Offers,
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload as FilterCallback;
      state.locationOffers = state.offers.filter(state.filter).sort(state.sort);
      state.locationPoint = state.locationOffers[0].city.location;
    },
    setSort: (state, action) => {
      state.sort = action.payload as SortCallback;
      state.locationOffers = state.sort !== sortCallbackMap[SortType.Default] ?
        state.locationOffers.sort(state.sort) : state.offers.filter(state.filter).sort(state.sort);
    },
    setSelectedOffer: (state, action) => {
      state.selectedOffer = action.payload as Offer;
    },
    resetSelectedOffer: (state) => {
      state.selectedOffer = null;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(loadOffers.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isLoading = false;
      });
  }
});

export const { setFilter, setSort, setSelectedOffer, resetSelectedOffer } = offersData.actions;
