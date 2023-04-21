import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/store';
import { AxiosInstance, AxiosError } from 'axios';
import { Offers, Offer, User, OfferId, Comments, AuthFormData, CommentData } from '../types/data';
import { APIRoute, AppRoute, LocationRoute } from '../enums';
import { saveToken, dropToken } from '../services/token';
import { redirectToRoute } from './action';
import { StatusCodes } from 'http-status-codes';

export const checkAuth = createAsyncThunk<User, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/checkAuth',
  async (_arguments, thunkApi) => {
    const response = await thunkApi.extra.get<User>(APIRoute.Login);

    return response.data;
  }
);

export const loadOffers = createAsyncThunk<Offers, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadOffers',
  async (_arguments, thunkApi) => {
    const response = await thunkApi.extra.get<Offers>(APIRoute.Offers);

    return response.data;
  }
);

export const loadOffer = createAsyncThunk<Offer, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  rejectValue: number | undefined;
}>(
  'data/loadOffer',
  async (_arguments, thunkApi) => {
    try {
      const offer = await thunkApi.extra.get<Offer>(`${APIRoute.Offers}/${_arguments}`);

      return offer.data;
    }

    catch (exception) {
      const error = exception as AxiosError;

      if (error.response?.status === StatusCodes.NOT_FOUND) {
        thunkApi.dispatch(redirectToRoute(AppRoute.NotFound));
      }

      return thunkApi.rejectWithValue(error.response?.status);
    }
  }
);

export const loadNearbyOffers = createAsyncThunk<Offers, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadNearbyOffers',
  async (_arguments, thunkApi) => {
    const nearbyOffers = await thunkApi.extra.get<Offers>(`${APIRoute.Offers}/${_arguments}/nearby`);

    return nearbyOffers.data;
  }
);

export const loadComments = createAsyncThunk<Comments, OfferId, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadComments',
  async (_arguments, thunkApi) => {
    const comments = await thunkApi.extra.get<Comments>(`${APIRoute.Comments}/${_arguments}`);

    return comments.data;
  }
);

export const login = createAsyncThunk<User, AuthFormData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/login',
  async (_arguments, thunkApi) => {
    const response = await thunkApi.extra.post<User>(APIRoute.Login, _arguments);

    saveToken(response.data.token);
    thunkApi.dispatch(redirectToRoute(LocationRoute.Paris));

    return response.data;
  }
);

export const sendComment = createAsyncThunk<Comments, CommentData, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/sendComment',
  async (_arguments, thunkApi) => {
    const response = await thunkApi.extra.post<Comments>(`${APIRoute.Comments}/${_arguments.id}`, _arguments.body);

    return response.data;
  }
);

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'user/logout',
  async (_arguments, thunkApi) => {
    await thunkApi.extra.delete(APIRoute.Logout);

    dropToken();
  }
);
