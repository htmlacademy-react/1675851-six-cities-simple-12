import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/store';
import axios, { AxiosInstance } from 'axios';
import { Offers, Offer, Comments, User, OfferId, AuthData, /*CommentData*/ } from '../types/data';
import { AppRoute, LocationRoute, APIRoute } from '../enums';
import { saveToken, dropToken } from '../services/token';
import { StatusCodes } from 'http-status-codes';

import {
  setAuth,
  resetAuth,
  setLoader,
  loadOffers,
  loadOffer,
  redirectToRoute,
  // setComments,
} from './action';

export const checkAuth = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arguments, {dispatch, extra: api}) => {
    try {
      const response = await api.get<User>(APIRoute.Login);

      dispatch(setAuth(response.data));
    }

    catch {
      dispatch(resetAuth());
    }
  }
);

export const getOffers = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/getOffers',
  async (_arguments, {dispatch, extra: api}) => {
    dispatch(setLoader());

    const response = await api.get<Offers>(APIRoute.Offers);

    dispatch(loadOffers(response.data));
  }
);

export const getOffer = createAsyncThunk<void, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/getOffer',
  async (id, {dispatch, extra: api}) => {
    dispatch(setLoader());

    try {
      const response = await Promise.all([
        api.get<Offer>(`${APIRoute.Offers}/${id}`),
        api.get<Offers>(`${APIRoute.Offers}/${id}/nearby`),
        api.get<Comments>(`${APIRoute.Comments}/${id}`)
      ]);

      const data = response.map((item) => item.data);

      dispatch(loadOffer(data));
    }

    catch (exception) {
      if (
        axios.isAxiosError(exception) &&
        exception.response?.status === StatusCodes.NOT_FOUND) {

        dispatch(redirectToRoute(AppRoute.NotFound));
      }
    }
  }
);

export const login = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async (data, {dispatch, extra: api}) => {
    const response = await api.post<User>(APIRoute.Login, data);

    saveToken(response.data.token);
    dispatch(setAuth(response.data));
    dispatch(redirectToRoute(LocationRoute.Paris));
  }
);

// export const sendComment = createAsyncThunk<void, CommentData, {
//   dispatch: AppDispatch;
//   state: State;
//   extra: AxiosInstance;
// }>(
//   'data/sendComment',
//   async (data, {dispatch, getState, extra: api}) => {
//     const offerId = getState().offerId;

//     if (offerId) {
//       const response = await api.post<Comments>(`${APIRoute.Comments}/${offerId}d`, data);

//       dispatch(setComments(response.data));
//     }
//   }
// );

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arguments, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);

    dropToken();
    dispatch(resetAuth());
  }
);
