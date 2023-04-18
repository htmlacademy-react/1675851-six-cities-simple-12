export enum AppRoute {
  Root = '/',
  Offer = '/offer',
  Login = '/login',
  NotFound = '/404'
}

export enum LocationRoute {
  Paris = '/paris',
  Cologne = '/cologne',
  Brussels = '/brussels',
  Amsterdam = '/amsterdam',
  Hamburg = '/hamburg',
  Dusseldorf = '/dusseldorf'
}

export enum APIRoute {
  Offers = '/hotels',
  Comments = '/comments',
  Login = '/login',
  Logout = '/logout'
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN'
}

export enum SortType {
  Default = 'popular',
  PriceLow = 'pricelow',
  PriceHigh = 'pricehigh',
  RatingHigh = 'ratinghigh'
}

export enum RatingScore {
  Terribly = 1,
  Badly = 2,
  NotBad = 3,
  Good = 4,
  Perfect = 5
}

export enum NameSpace {
  User = 'USER',
  Offers = 'OFFERS',
  Offer = 'OFFER'
}

export enum SendingStatus {
  Pending = 'PENDING',
  Fulfilled = 'FULFILLED',
  Rejected = 'REJECTED',
  Unknown = 'UNKNOWN'
}

export enum TextAreaLength {
  Min = 50,
  Max = 300
}
