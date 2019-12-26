//* Focused Tab Title Actions

export type FocusedTabTitleActionTypes =
  | SetFocusedTabTitleActionProps
  | SetFocusedTabTitleAsyncActionProps;
export interface SetFocusedTabTitleActionProps {
  type: 'SETFOCUSEDTABTITLE';
  payload: string;
}
export const setFocusedTabTitle = (payload: string) => {
  return {
    type: 'SETFOCUSEDTABTITLE',
    payload: payload,
  };
};
export interface SetFocusedTabTitleAsyncActionProps {
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
  | FetchNewsBeginActionProps
  | FetchNewsSuccessActionProps
  | FetchNewsFailureActionProps
  | FetchNewsProcessBeginActionProps
  | FetchNewsProcessEndActionProps
  | SetNewsActionProps;

export interface FetchNewsBeginActionProps {
  type: 'FETCHNEWSBEGIN';
  id: string;
}
export const fetchNewsBegin = (id: string) => ({
  type: 'FETCHNEWSBEGIN',
  id: id,
});

export interface FetchNewsSuccessActionProps {
  type: 'FETCHNEWSSUCCESS';
  id: string;
}
export const fetchNewsSuccess = (id: string) => {
  return {
    type: 'FETCHNEWSSUCCESS',
    id: id,
  };
};
export interface FetchNewsFailureActionProps {
  type: 'FETCHNEWSFAILURE';
  id: string | null;
  payload: string | null;
}
export const fetchNewsFailure = (error: string | null, id: string | null) => ({
  type: 'FETCHNEWSFAILURE',
  payload: {error},
  id: id,
});

export interface FetchNewsProcessBeginActionProps {
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

export interface FetchNewsProcessEndActionProps {
  type: 'FETCHNEWSPROCESSEND';
}
export function fetchNewsProcessEnd() {
  return {
    type: 'FETCHNEWSPROCESSEND',
  };
}

export interface SetNewsActionProps {
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
  | SetWebViewVisibilityActionProps
  | SetWebViewURIActionProps
  | SetWebViewConfigActionProps;
export interface SetWebViewVisibilityActionProps {
  type: 'SETWEBVIEWVISIBILITY';
  payload: boolean;
}
export const setWebViewVisibility = (payload: boolean) => {
  return {
    type: 'SETWEBVIEWVISIBILITY',
    payload: payload,
  };
};
export interface SetWebViewURIActionProps {
  type: 'SETWEBVIEWURI';
  payload: NewsDataProps;
}
export const setWebViewURI = (payload: NewsDataProps) => {
  return {
    type: 'SETWEBVIEWURI',
    payload: payload,
  };
};
export interface SetWebViewConfigActionProps {
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
export type FavoritesActionTypes =
  | AddToFavoritesActionProps
  | DeleteFromFavoritesActionProps;
export interface AddToFavoritesActionProps {
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
export interface DeleteFromFavoritesActionProps {
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
export type AuthorizedActionTypes =
  | SetAuthActionProps
  | LogOutOfGoogleActionProps
  | LogOutActionProps;

export interface SetAuthActionProps {
  type: 'SETAUTH';
  authorized: authorized;
}
export const setAuth = (authorized: authorized): AuthorizedActionTypes => {
  return {
    type: 'SETAUTH',
    authorized: authorized,
  };
};
export interface LogOutOfGoogleActionProps {
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
export interface LogOutActionProps {
  type: 'LOGOUTASYNC';
  authorizedState: authorized;
}
export const logOut = (authorizedState: authorized) => {
  return {
    type: 'LOGOUTASYNC',
    authorizedState: authorizedState,
  };
};
