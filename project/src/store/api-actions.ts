import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/store';
import axios, { AxiosInstance } from 'axios';
import { Offers, Offer, Comments, User, OfferId, AuthFormData, OfferGroup, CommentData } from '../types/data';
import { AppRoute, LocationRoute, APIRoute } from '../enums';
import { saveToken, dropToken } from '../services/token';
import { StatusCodes } from 'http-status-codes';

import {
  redirectToRoute
} from './action';

export const checkAuth = createAsyncThunk<User, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arguments, {extra: api}) => {
    const response = await api.get<User>(APIRoute.Login);

    return response.data;
  }
);

export const loadOffers = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/getOffers',
  async (_arguments, {extra: api}) => {
    const response = await api.get<Offers>(APIRoute.Offers);

    return response.data;
  }
);

export const loadOffer = createAsyncThunk<OfferGroup, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/getOffer',
  async (id, {dispatch, extra: api}) => {
    const response = await Promise.all([
      api.get<Offer>(`${APIRoute.Offers}/${id}`),
      api.get<Offers>(`${APIRoute.Offers}/${id}/nearby`),
      api.get<Comments>(`${APIRoute.Comments}/${id}`)
    ])
      .catch((exception) => {
        if (
          axios.isAxiosError(exception) &&
          exception.response?.status === StatusCodes.NOT_FOUND) {

          dispatch(redirectToRoute(AppRoute.NotFound));
        }
      });

    if (response) {
      return response.map((item) => item.data);
    }

    return [];
  }
);

export const login = createAsyncThunk<User, AuthFormData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async (data, {dispatch, extra: api}) => {
    const response = await api.post<User>(APIRoute.Login, data);

    saveToken(response.data.token);
    dispatch(redirectToRoute(LocationRoute.Paris));

    return response.data;
  }
);

export const sendComment = createAsyncThunk<Comments, CommentData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendComment',
  async ({id, body}, {extra: api}) => {
    const response = await api.post<Comments>(`${APIRoute.Comments}d/${id}`, body);

    return response.data;
  }
);

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arguments, {extra: api}) => {
    await api.delete(APIRoute.Logout);

    dropToken();
  }
);
