import { State } from '../../types/store';
import { NameSpace } from '../../enums';
import { Offers, Offer, CityLocation } from '../../types/data';
import { SortCallback } from '../../maps';

export const getOffers = (state: State): Offers => state[NameSpace.Offers].offers;
export const getlocationOffers = (state: State): Offers => state[NameSpace.Offers].locationOffers;
export const getLocationName = (state: State): string => state[NameSpace.Offers].locationName;
export const getLocationPoint = (state: State): CityLocation => state[NameSpace.Offers].locationPoint;
export const getSelectedOffer = (state: State): Offer | null => state[NameSpace.Offers].selectedOffer;
export const getSort = (state: State): SortCallback => state[NameSpace.Offers].sort;
