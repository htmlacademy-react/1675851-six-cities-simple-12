import { State } from '../../types/store';
import { NameSpace } from '../../enums';
import { AuthorizationStatusType } from '../../types/routes';
import { User } from '../../types/data';

export const getAuthorizationStatus = (state: State): AuthorizationStatusType => state[NameSpace.User].authorizationStatus;
export const getUser = (state: State): User | null => state[NameSpace.User].user;
