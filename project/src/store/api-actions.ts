import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/store';
import { AxiosInstance } from 'axios';
import { Offers } from '../types/data';
import { APIRoute } from '../enums';
import { setLoader, loadOffers } from './action';

export const fetchOfferAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoader(true));
    const {data} = await api.get<Offers>(APIRoute.Offers);
    dispatch(setLoader(false));
    dispatch(loadOffers(data));
  },
);
