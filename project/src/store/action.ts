import { createAction } from '@reduxjs/toolkit';
import { LocationRouteType } from '../types/routes';
import { Offer, Offers } from '../types/data';

export const setLoader = createAction<boolean>('setLoader');
export const loadOffers = createAction<Offers>('loadOffers');
export const setLocationByName = createAction<{locationName: LocationRouteType}>('setLocationByName');
export const setLocationById = createAction<{offerId: number}>('setLocationById');
export const setOfferItem = createAction<{offerItem: Offer | null | undefined}>('setOfferItem');
export const resetOfferItem = createAction('resetOfferItem');
