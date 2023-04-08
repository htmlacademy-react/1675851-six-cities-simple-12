import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/store';
import { AxiosError, AxiosInstance } from 'axios';
import { Offers, Offer, Comments, AuthData, UserData, OfferId } from '../types/data';
import { APIRoute, AuthorizationStatus, LocationRoute } from '../enums';
import { saveToken, dropToken } from '../services/token';
import { AppRoute } from '../enums';

import {
  setLoader,
  loadOffers,
  loadOffer,
  loadOffersNearby,
  loadComments,
  setLocationPointById,
  requireAuthorization,
  redirectToRoute
} from './action';

export const fetchOffersAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffers',
  async (_arg, {dispatch, extra: api}) => {
    dispatch(setLoader());

    const {data} = await api.get<Offers>(APIRoute.Offers);

    dispatch(loadOffers(data));
  },
);

const handleStatus404 = (error: AxiosError, dispatch: AppDispatch): void => {
  if (error.response?.status === 404) {
    dispatch(redirectToRoute(AppRoute.NotFound));
  }
};

export const fetchOfferAction = createAsyncThunk<void, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/fetchOffer',
  async ({id}, {dispatch, extra: api}) => {
    dispatch(setLoader());

    await Promise.all([
      api.get<Offer>(`${APIRoute.Offers}/${id}`),
      api.get<Offers>(`${APIRoute.Offers}/${id}/nearby`),
      api.get<Comments>(`${APIRoute.Comments}/${id}`)
    ])
      .then((response) => {
        const [offer, offersNearby, offerComments] = response;

        dispatch(loadOffer(offer.data));
        dispatch(loadOffersNearby(offersNearby.data));
        dispatch(loadComments(offerComments.data));
        dispatch(setLocationPointById(Number(id)));
      })
      .catch((error: AxiosError) => handleStatus404(error, dispatch));
  }
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(redirectToRoute(LocationRoute.Paris));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
