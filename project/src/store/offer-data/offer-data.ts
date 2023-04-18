import { createSlice } from '@reduxjs/toolkit';
import { OfferData } from '../../types/store';
import { NameSpace } from '../../enums';
import { loadOffer } from '../api-actions';
import { Offers, Offer, Comments } from '../../types/data';
import { sendComment } from '../api-actions';
import { LOCATION_POINT_DEFAULT } from '../../consts';
import { SendingStatus } from '../../enums';

const initialState: OfferData = {
  isLoading: false,
  offer: null,
  locationPoint: LOCATION_POINT_DEFAULT,
  nearbyOffers: [],
  comments: [],
  sendingStatus: SendingStatus.Unknown
};

export const offerData = createSlice({
  name: NameSpace.Offer,
  initialState,
  reducers: {
    resetOffer: (state) => {
      state.offer = null;
      state.locationPoint = LOCATION_POINT_DEFAULT;
      state.nearbyOffers = [];
      state.comments = [];
    },
    setSendingStatus: (state, action) => {
      state.sendingStatus = action.payload as SendingStatus;
    }
  },
  extraReducers(builder) {
    builder
      .addCase(loadOffer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadOffer.fulfilled, (state, action) => {
        const [offer, nearbyOffers, comments] = action.payload;

        state.offer = offer as Offer;
        state.locationPoint = state.offer.city.location;
        state.nearbyOffers = nearbyOffers as Offers;
        state.comments = comments as Comments;
      })
      .addCase(sendComment.pending, (state) => {
        state.sendingStatus = SendingStatus.Pending;
      })
      .addCase(sendComment.fulfilled, (state, action) => {
        state.comments = action.payload;
        state.sendingStatus = SendingStatus.Fulfilled;
      })
      .addCase(sendComment.rejected, (state) => {
        state.sendingStatus = SendingStatus.Rejected;
      });
  }
});

export const { resetOffer, setSendingStatus } = offerData.actions;
