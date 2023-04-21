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
  location: OfferLocation;
  id: number;
}

export type City = {
  name: string;
  location: CityLocation;
}

export type CityLocation = {
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

export type OfferLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type User = {
  avatarUrl: string;
  email: string;
  id: number;
  isPro: boolean;
  name: string;
  token: string;
}

export type OfferId = string;

export type Comments = Comment[];

export type Comment = {
  comment: string;
  date: string;
  id: number;
  rating: number;
  user: Host;
}

export type AuthFormData = {
  email: string;
  password: string;
}

export type CommentData = {
  id: OfferId;
  body: CommentFormData;
}

export type CommentFormData = {
  rating: number;
  comment: string;
}
