import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../enums';
import { userProcess } from './user-process/user-process';
import { offersData } from './offers-data/offers-data';
import { offerData } from './offer-data/offer-data';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Offers]: offersData.reducer,
  [NameSpace.Offer]: offerData.reducer
});
