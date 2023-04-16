import { Offer } from './types/data';
import { LocationRoute, SortType, RatingScore } from './enums';
import { StatusCodes } from 'http-status-codes';

export const filterTitleMap = {
  [LocationRoute.Paris]: 'Paris',
  [LocationRoute.Cologne]: 'Cologne',
  [LocationRoute.Brussels]: 'Brussels',
  [LocationRoute.Amsterdam]: 'Amsterdam',
  [LocationRoute.Hamburg]: 'Hamburg',
  [LocationRoute.Dusseldorf]: 'Dusseldorf'
};

export type FilterCallback = (offer: Offer) => boolean;
export type FilterCallbackMap = Record<LocationRoute, FilterCallback>;

export const filterCallbackMap: FilterCallbackMap = {
  [LocationRoute.Paris]: (offer: Offer) => offer.city.name === 'Paris',
  [LocationRoute.Cologne]: (offer: Offer) => offer.city.name === 'Cologne',
  [LocationRoute.Brussels]: (offer: Offer) => offer.city.name === 'Brussels',
  [LocationRoute.Amsterdam]: (offer: Offer) => offer.city.name === 'Amsterdam',
  [LocationRoute.Hamburg]: (offer: Offer) => offer.city.name === 'Hamburg',
  [LocationRoute.Dusseldorf]: (offer: Offer) => offer.city.name === 'Dusseldorf'
};

export type SortCallback = (offerA: Offer, offerB: Offer) => number;
export type SortCallbackMap = Record<SortType, SortCallback>;

export const sortCallbackMap: SortCallbackMap = {
  [SortType.Default]: () => 0,
  [SortType.PriceLow]: (offerA: Offer, offerB: Offer) => offerA.price - offerB.price,
  [SortType.PriceHigh]: (offerA: Offer, offerB: Offer) => offerB.price - offerA.price,
  [SortType.RatingHigh]: (offerA: Offer, offerB: Offer) => offerB.rating - offerA.rating
};

export const sortTitleMap = {
  [SortType.Default]: 'Popular',
  [SortType.PriceLow]: 'Price: low to high',
  [SortType.PriceHigh]: 'Price: high to low',
  [SortType.RatingHigh]: 'Top rated first'
};

export const ratingTitleMap = {
  [RatingScore.Terribly]: 'Terribly',
  [RatingScore.Badly]: 'Badly',
  [RatingScore.NotBad]: 'Not bad',
  [RatingScore.Good]: 'Good',
  [RatingScore.Perfect]: 'Perfect'
};

export type StatusCode = Record<number, boolean>;

export const statusCodeMap: StatusCode = {
  [StatusCodes.BAD_REQUEST]: true,
  // [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};
