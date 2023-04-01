import { createAction } from '@reduxjs/toolkit';
import { LocationRouteType } from '../types';
import { Offer } from '../mocks/types';

export const setLocationByName = createAction<{locationName: LocationRouteType}>('setLocationByName');
export const setLocationById = createAction<{offerId: number}>('setLocationById');
export const setOfferItem = createAction<{offerItem: Offer | null | undefined}>('setOfferItem');
export const resetOfferItem = createAction('resetOfferItem');
