import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OfferData } from '../../types/store';
import { NameSpace } from '../../enums';
import { loadOffer, loadNearbyOffers, loadComments } from '../api-actions';
import { sendComment } from '../api-actions';
import { LOCATION_POINT_DEFAULT } from '../../consts';
import { SendingStatus } from '../../enums';

const initialState: OfferData = {
  isLoading: false,
  offer: null,
  locationPoint: LOCATION_POINT_DEFAULT,
  nearbyOffers: [],
  comments: [],
  sendingStatus: SendingStatus.Unknown,
  responseErrorCode: undefined,
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
    setSendingStatus: (state, action: PayloadAction<SendingStatus>) => {
      state.sendingStatus = action.payload;
    },
    resetResponseErrorCode: (state) => {
      state.responseErrorCode = undefined;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loadOffer.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loadOffer.fulfilled, (state, action) => {
        state.offer = action.payload;
        state.locationPoint = state.offer.city.location;
      })
      .addCase(loadOffer.rejected, (state, action) => {
        state.responseErrorCode = action.payload;
      })
      .addCase(loadNearbyOffers.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      })
      .addCase(loadComments.fulfilled, (state, action) => {
        state.comments = action.payload;
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

export const { resetOffer, setSendingStatus, resetResponseErrorCode } = offerData.actions;
