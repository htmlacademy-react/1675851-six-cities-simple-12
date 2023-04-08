import { LocationRoute } from '../enums';
import { AuthorizationStatus } from '../enums';

export type LocationRouteType = keyof typeof LocationRoute;
export type AuthorizationStatusType = AuthorizationStatus;
