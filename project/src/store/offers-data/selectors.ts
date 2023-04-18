import { State } from '../../types/store';
import { NameSpace } from '../../enums';
import { CityLocation, Offers, Offer } from '../../types/data';
import { SortCallback } from '../../maps';

export const getIsLoading = (state: State): boolean => state[NameSpace.Offers].isLoading;
export const getLocationPoint = (state: State): CityLocation => state[NameSpace.Offers].locationPoint;
export const getlocationOffers = (state: State): Offers => state[NameSpace.Offers].locationOffers;
export const getSelectedOffer = (state: State): Offer | null => state[NameSpace.Offers].selectedOffer;
export const getSort = (state: State): SortCallback => state[NameSpace.Offers].sort;
