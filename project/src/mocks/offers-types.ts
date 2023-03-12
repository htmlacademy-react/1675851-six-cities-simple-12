export type OffersProps = {
  offers: Offers;
}

export type OfferProps = {
  offer: Offer;
}

export type Offers = Offer[];

export type Offer = {
  city: City;
  previewImage: string;
  images: string[];
  title: string;
  isPremium: boolean;
  rating: number;
  type: string;
  bedrooms: number;
  maxAdults: number;
  price: number;
  goods: string[];
  host: Host;
  description: string;
  location: LocationSecond;
  id: number;
}

export type City = {
  name: string;
  location: LocationFirst;
}

export type LocationFirst = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type Host = {
  id: number;
  name: string;
  isPro: boolean;
  avatarUrl: string;
}

export type LocationSecond = {
  latitude: number;
  longitude: number;
  zoom: number;
}
