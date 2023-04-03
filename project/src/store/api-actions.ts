import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from './types';
import { AxiosInstance } from 'axios';
import { Offers } from '../mocks/types';
import { APIRoute } from '../enums';
import { loadOffers } from './action';

export const fetchOfferAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(loadOffers(data));
  },
);
