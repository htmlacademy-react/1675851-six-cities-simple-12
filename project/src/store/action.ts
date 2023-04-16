import { createAction } from '@reduxjs/toolkit';
import { Offers, Offer, Comments, User } from '../types/data';
import { FilterCallback, SortCallback } from '../maps';

export const setAuth = createAction<User>('user/setAuth');
export const resetAuth = createAction('user/resetAuth');
export const setLoader = createAction('data/setLoader');
export const setOffers = createAction<Offers>('data/setOffers');
export const setFilter = createAction<FilterCallback>('location/setFilter');
export const setSort = createAction<SortCallback>('location/setSort');
export const setSelectedOffer = createAction<Offer>('location/setSelectedOffer');
export const resetSelectedOffer = createAction('location/resetSelectedOffer');
export const redirectToRoute = createAction<string>('app/redirectToRoute');
export const setOffer = createAction<(Offer | Offers | Comments)[]>('data/setOffer');
export const resetOffer = createAction('data/resetOffer');
export const setComments = createAction<Comments>('data/setComment');
