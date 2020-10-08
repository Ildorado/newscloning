import {Authorized} from '../../typescript/index';
export type AuthorizedActionTypes =
  | SetAuthActionProps
  | LogOutOfGoogleActionProps
  | LogOutActionProps;

export const SETAUTH = 'auth/SETAUTH';
export interface SetAuthActionProps {
  type: typeof SETAUTH;
  authorized: Authorized;
}
export const setAuth = (authorized: Authorized): AuthorizedActionTypes => {
  return {
    type: SETAUTH,
    authorized: authorized,
  };
};
export const LOGOUTOFGOOGLE = 'auth/LOGOUTOFGOOGLE';
export interface LogOutOfGoogleActionProps {
  type: typeof LOGOUTOFGOOGLE;
  authorized: Authorized;
}
export const logOutOfGoogle = (
  authorized: Authorized,
): AuthorizedActionTypes => {
  return {
    type: LOGOUTOFGOOGLE,
    authorized: authorized,
  };
};
export const LOGOUTASYNC = 'auth/LOGOUTASYNC';
export interface LogOutActionProps {
  type: typeof LOGOUTASYNC;
  authorizedState: Authorized;
}
export const logOut = (authorizedState: Authorized) => {
  return {
    type: LOGOUTASYNC,
    authorizedState: authorizedState,
  };
};
