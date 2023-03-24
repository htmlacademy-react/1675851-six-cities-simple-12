import { LocationRoute } from '../../enums';

export type Props = {
  locations: string[];
  currentLocation: string;
  onLocationClick: (location: string) => void;
};

export type LocationRouteType = keyof typeof LocationRoute;
