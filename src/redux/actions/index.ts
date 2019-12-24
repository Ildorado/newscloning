//* Focused Tab Title Actions

export type FocusedTabTitleActionTypes =
  | setFocusedTabTitle
  | setFocusedTabTitleAsync;
export interface setFocusedTabTitle {
  type: 'SETFOCUSEDTABTITLE';
  payload: string;
}
export const setFocusedTabTitle = (payload: string) => {
  return {
    type: 'SETFOCUSEDTABTITLE',
    payload: payload,
  };
};
export interface setFocusedTabTitleAsync {
  type: 'SETFOCUSEDTABTITLEASYNC';
  payload: string;
}
export const setFocusedTabTitleAsync = (payload: string) => {
  return {
    type: 'SETFOCUSEDTABTITLEASYNC',
    payload: payload,
  };
};

//* Focused Drawer Button Actions

export type FocusedDrawerButtonActionTypes =
  | SetFocusedDrawerButton
  | SetFocusedDrawerButtonAsync;
export interface SetFocusedDrawerButton {
  type: 'SETFOCUSEDDRAWERBUTTON';
  payload: string;
}
export const SetFocusedDrawerButton = (payload: string) => {
  return {
    type: 'SETFOCUSEDDRAWERBUTTON',
    payload: payload,
  };
};
export interface SetFocusedDrawerButtonAsync {
  type: 'SETFOCUSEDDRAWERBUTTONASYNC';
  payload: string;
}
export const SetFocusedDrawerButtonAsync = (payload: string) => {
  return {
    type: 'SETFOCUSEDDRAWERBUTTONASYNC',
    payload: payload,
  };
};

//* Fetch News Action Types
import {NewsSourcesProps} from '../../typescript/index';
export type NewsActionTypes =
  | fetchNewsBegin
  | fetchNewsSuccess
  | fetchNewsFailure
  | fetchNewsProcessBegin
  | fetchNewsProcessEnd
  | setNews;

export interface fetchNewsBegin {
  type: 'FETCHNEWSBEGIN';
  id: string;
}
export const fetchNewsBegin = (id: string) => ({
  type: 'FETCHNEWSBEGIN',
  id: id,
});

export interface fetchNewsSuccess {
  type: 'FETCHNEWSSUCCESS';
  id: string;
}
export const fetchNewsSuccess = (id: string) => {
  return {
    type: 'FETCHNEWSSUCCESS',
    id: id,
  };
};
export interface fetchNewsFailure {
  type: 'FETCHNEWSFAILURE';
  id: string | null;
  payload: string | null;
}
export const fetchNewsFailure = (error: string | null, id: string | null) => ({
  type: 'FETCHNEWSFAILURE',
  payload: {error},
  id: id,
});

export interface fetchNewsProcessBegin {
  type: 'FETCHNEWSPROCESSBEGIN';
  payload: NewsSourcesProps | NewsSourcesProps[];
}
export function fetchNewsProcessBegin(
  payload: NewsSourcesProps | NewsSourcesProps[],
) {
  return {
    type: 'FETCHNEWSPROCESSBEGIN',
    payload: payload,
  };
}

export interface fetchNewsProcessEnd {
  type: 'FETCHNEWSPROCESSEND';
}
export function fetchNewsProcessEnd() {
  return {
    type: 'FETCHNEWSPROCESSEND',
  };
}

export interface setNews {
  type: 'SETNEWS';
  payload: NewsDataProps[];
  currentNewsSource: string | null;
}
export function setNews(
  payload: NewsDataProps[],
  currentNewsSource: string | null,
) {
  return {
    type: 'SETNEWS',
    payload: payload,
    currentNewsSource: currentNewsSource,
  };
}

//* Web View Actions

import {NewsDataProps} from '../../typescript/index';
export type WebViesActionTypes =
  | setWebViewVisibility
  | setWebViewURI
  | setWebViewConfig;
export interface setWebViewVisibility {
  type: 'SETWEBVIEWVISIBILITY';
  payload: boolean;
}
export const setWebViewVisibility = (payload: boolean) => {
  return {
    type: 'SETWEBVIEWVISIBILITY',
    payload: payload,
  };
};
export interface setWebViewURI {
  type: 'SETWEBVIEWURI';
  payload: NewsDataProps;
}
export const setWebViewURI = (payload: NewsDataProps) => {
  return {
    type: 'SETWEBVIEWURI',
    payload: payload,
  };
};
export interface setWebViewConfig {
  type: 'SETWEBVIEWCONFIG';
  payload: NewsDataProps;
}
export const setWebViewConfig = (payload: NewsDataProps) => {
  return {
    type: 'SETWEBVIEWCONFIG',
    payload: payload,
  };
};

//* Favorites Actions

import {addToFavoritesPayload} from '../../typescript/index';
export type FavoritesActionTypes = addToFavorites | deleteFromFavorites;
export interface addToFavorites {
  type: 'ADDTOFAVORITES';
  payload: addToFavoritesPayload;
}
export const addToFavorites = (payload: addToFavoritesPayload) => {
  //recieve config object
  return {
    type: 'ADDTOFAVORITES',
    payload: payload,
  };
};
export interface deleteFromFavorites {
  type: 'DELETEFROMFAVORITES';
  payload: string;
}
export const deleteFromFavorites = (payload: string) => {
  // recieve ID which is also url in this case
  return {
    type: 'DELETEFROMFAVORITES',
    payload: payload,
  };
};

//* Authorized actions

import {authorized} from '../../typescript/index';
export type AuthorizedActionTypes = setAuthAction | LogOutOfGoogleAction | logOut;

export interface setAuthAction {
  type: 'SETAUTH';
  authorized: authorized;
}
export const setAuth = (authorized: authorized): AuthorizedActionTypes => {
  return {
    type: 'SETAUTH',
    authorized: authorized,
  };
};
export interface LogOutOfGoogleAction {
  type: 'LOGOUTOFGOOGLE';
  authorized: authorized;
}
export const logOutOfGoogle = (
  authorized: authorized,
): AuthorizedActionTypes => {
  return {
    type: 'LOGOUTOFGOOGLE',
    authorized: authorized,
  };
};
import {facebookLogout} from '../../components/AuthButtons/Facebook';
import {revoke} from 'react-native-app-auth';
import {googleConfig} from '../../components/AuthButtons/Google';
export interface logOut {
  type: 'LOGOUTASYNC';
  authorizedState: authorized;
}
export const logOut = (authorizedState: authorized) => {
  return {
    type: 'LOGOUTASYNC',
    authorizedState: authorizedState,
  };
};
