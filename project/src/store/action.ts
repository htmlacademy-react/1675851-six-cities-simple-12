import { createAction } from '@reduxjs/toolkit';
import { Offers, Offer, Comments, User } from '../types/data';
import { FilterCallback, SortCallback } from '../maps';

export const setAuth = createAction<User>('user/setAuth');
export const resetAuth = createAction('user/resetAuth');
export const setLoader = createAction('data/setLoader');
export const loadOffers = createAction<Offers>('data/loadOffers');
export const setFilter = createAction<FilterCallback>('location/setFilter');
export const setSort = createAction<SortCallback>('location/setSort');
export const setSelectedOffer = createAction<Offer>('location/setSelectedOffer');
export const resetSelectedOffer = createAction('location/resetSelectedOffer');
export const redirectToRoute = createAction<string>('app/redirectToRoute');
export const loadOffer = createAction<(Offer | Offers | Comments)[]>('data/loadOffer');
export const resetOffer = createAction('data/resetOffer');
export const setComments = createAction<Comments>('data/setComment');
