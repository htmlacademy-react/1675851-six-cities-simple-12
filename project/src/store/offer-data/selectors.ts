import { State } from '../../types/store';
import { NameSpace, SendingStatus } from '../../enums';
import { Comments, Offer, CityLocation, Offers } from '../../types/data';

export const getComments = (state: State): Comments => state[NameSpace.Offer].comments;
export const getOffer = (state: State): Offer | null => state[NameSpace.Offer].offer;
export const getLocationPoint = (state: State): CityLocation => state[NameSpace.Offer].locationPoint;
export const getNearbyOffers = (state: State): Offers => state[NameSpace.Offer].nearbyOffers;
export const getSendingStatus = (state: State): SendingStatus => state[NameSpace.Offer].sendingStatus;

