import {authorized} from '../../typescript/index';
export type AuthorizedActionTypes =
  | SetAuthActionProps
  | LogOutOfGoogleActionProps
  | LogOutActionProps;

export const SETAUTH = 'auth/SETAUTH';
export interface SetAuthActionProps {
  type: typeof SETAUTH;
  authorized: authorized;
}
export const setAuth = (authorized: authorized): AuthorizedActionTypes => {
  return {
    type: SETAUTH,
    authorized: authorized,
  };
};
export const LOGOUTOFGOOGLE = 'auth/LOGOUTOFGOOGLE';
export interface LogOutOfGoogleActionProps {
  type: typeof LOGOUTOFGOOGLE;
  authorized: authorized;
}
export const logOutOfGoogle = (
  authorized: authorized,
): AuthorizedActionTypes => {
  return {
    type: LOGOUTOFGOOGLE,
    authorized: authorized,
  };
};
export const LOGOUTASYNC = 'auth/LOGOUTASYNC';
export interface LogOutActionProps {
  type: typeof LOGOUTASYNC;
  authorizedState: authorized;
}
export const logOut = (authorizedState: authorized) => {
  return {
    type: LOGOUTASYNC,
    authorizedState: authorizedState,
  };
};
