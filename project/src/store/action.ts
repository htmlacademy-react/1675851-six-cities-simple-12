import { createAction } from '@reduxjs/toolkit';
import { LocationRouteType } from '../types';

export const setLocationByName = createAction<{locationName: LocationRouteType | undefined}>('app/setLocationByName');
export const setLocationById = createAction<{offerId: number | null}>('app/setLocationById');
export const setLocationCenter = createAction('offerList/setLocationCenter');
export const setOfferList = createAction('offerList/setOfferList');
export const setOfferItem = createAction<{offerId: number | null}>('setOfferItem');
export const setSelectedOffer = createAction<{offerId: number | null}>('offerList/setSelectedOffer');
