import { createAction } from '@reduxjs/toolkit';
import { Offers, Offer, Comments } from '../types/data';
import { FilterCallback, SortCallback } from '../maps';
import { AuthorizationStatusType } from '../types/routes';

export const setLoader = createAction('data/setLoader');
export const loadOffers = createAction<Offers>('data/loadOffers');
export const setFilter = createAction<FilterCallback>('location/setFilter');
export const setSort = createAction<SortCallback>('location/setSort');
export const setSelectedOffer = createAction<Offer | null>('location/setSelectedOffer');
export const resetSelectedOffer = createAction('location/resetSelectedOffer');
export const setOfferId = createAction<number | null>('offer/setOfferId');
export const loadOffer = createAction<Offer>('data/loadOffer');
export const loadOffersNearby = createAction<Offers>('data/loadOffersNearby');
export const loadComments = createAction<Comments>('data/loadComments');
export const requireAuthorization = createAction<AuthorizationStatusType>('user/requireAuthorization');
export const redirectToRoute = createAction<string>('app/redirectToRoute');
