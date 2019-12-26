//* Focused Tab Title Actions

export type FocusedTabTitleActionTypes =
  | SetFocusedTabTitleActionProps
  | SetFocusedTabTitleAsyncActionProps;
export const SETFOCUSEDTABTITLE = 'SETFOCUSEDTABTITLE';
export interface SetFocusedTabTitleActionProps {
  type: typeof SETFOCUSEDTABTITLE;
  payload: string;
}
export const setFocusedTabTitle = (payload: string) => {
  return {
    type: SETFOCUSEDTABTITLE,
    payload: payload,
  };
};
export const SETFOCUSEDTABTITLEASYNC = 'SETFOCUSEDTABTITLEASYNC';
export interface SetFocusedTabTitleAsyncActionProps {
  type: typeof SETFOCUSEDTABTITLEASYNC;
  payload: string;
}
export const setFocusedTabTitleAsync = (payload: string) => {
  return {
    type: SETFOCUSEDTABTITLEASYNC,
    payload: payload,
  };
};

//* Focused Drawer Button Actions

export type FocusedDrawerButtonActionTypes =
  | SetFocusedDrawerButton
  | SetFocusedDrawerButtonAsync;
export const SETFOCUSEDDRAWERBUTTON = 'SETFOCUSEDDRAWERBUTTON';
export interface SetFocusedDrawerButton {
  type: typeof SETFOCUSEDDRAWERBUTTON;
  payload: string;
}
export const SetFocusedDrawerButton = (payload: string) => {
  return {
    type: SETFOCUSEDDRAWERBUTTON,
    payload: payload,
  };
};
export const SETFOCUSEDDRAWERBUTTONASYNC = 'SETFOCUSEDDRAWERBUTTONASYNC';
export interface SetFocusedDrawerButtonAsync {
  type: typeof SETFOCUSEDDRAWERBUTTONASYNC;
  payload: string;
}
export const SetFocusedDrawerButtonAsync = (payload: string) => {
  return {
    type: SETFOCUSEDDRAWERBUTTONASYNC,
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

export const FETCHNEWSBEGIN = 'FETCHNEWSBEGIN';
export interface FetchNewsBeginActionProps {
  type: typeof FETCHNEWSBEGIN;
  id: string;
}
export const fetchNewsBegin = (id: string) => ({
  type: FETCHNEWSBEGIN,
  id: id,
});
export const FETCHNEWSSUCCESS = 'FETCHNEWSSUCCESS';
export interface FetchNewsSuccessActionProps {
  type: typeof FETCHNEWSSUCCESS;
  id: string;
}
export const fetchNewsSuccess = (id: string) => {
  return {
    type: FETCHNEWSSUCCESS,
    id: id,
  };
};
export const FETCHNEWSFAILURE = 'FETCHNEWSFAILURE';
export interface FetchNewsFailureActionProps {
  type: typeof FETCHNEWSFAILURE;
  id: string | null;
  payload: string | null;
}
export const fetchNewsFailure = (error: string | null, id: string | null) => ({
  type: FETCHNEWSFAILURE,
  payload: {error},
  id: id,
});

export const FETCHNEWSPROCESSBEGIN = 'FETCHNEWSPROCESSBEGIN';
export interface FetchNewsProcessBeginActionProps {
  type: typeof FETCHNEWSPROCESSBEGIN;
  payload: NewsSourcesProps | NewsSourcesProps[];
}
export function fetchNewsProcessBegin(
  payload: NewsSourcesProps | NewsSourcesProps[],
) {
  return {
    type: FETCHNEWSPROCESSBEGIN,
    payload: payload,
  };
}

export const FETCHNEWSPROCESSEND = 'FETCHNEWSPROCESSEND';
export interface FetchNewsProcessEndActionProps {
  type: typeof FETCHNEWSPROCESSEND;
}
export function fetchNewsProcessEnd() {
  return {
    type: FETCHNEWSPROCESSEND,
  };
}

export const SETNEWS = 'SETNEWS';
export interface SetNewsActionProps {
  type: typeof SETNEWS;
  payload: NewsDataProps[];
  currentNewsSource: string | null;
}
export function setNews(
  payload: NewsDataProps[],
  currentNewsSource: string | null,
) {
  return {
    type: SETNEWS,
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
export const SETWEBVIEWVISIBILITY = 'SETWEBVIEWVISIBILITY';
export interface SetWebViewVisibilityActionProps {
  type: typeof SETWEBVIEWVISIBILITY;
  payload: boolean;
}
export const setWebViewVisibility = (payload: boolean) => {
  return {
    type: SETWEBVIEWVISIBILITY,
    payload: payload,
  };
};
export const SETWEBVIEWURI = 'SETWEBVIEWURI';
export interface SetWebViewURIActionProps {
  type: typeof SETWEBVIEWURI;
  payload: NewsDataProps;
}
export const setWebViewURI = (payload: NewsDataProps) => {
  return {
    type: SETWEBVIEWURI,
    payload: payload,
  };
};
export const SETWEBVIEWCONFIG = 'SETWEBVIEWCONFIG';
export interface SetWebViewConfigActionProps {
  type: typeof SETWEBVIEWCONFIG;
  payload: NewsDataProps;
}
export const setWebViewConfig = (payload: NewsDataProps) => {
  return {
    type: SETWEBVIEWCONFIG,
    payload: payload,
  };
};

//* Favorites Actions

import {addToFavoritesPayload} from '../../typescript/index';
export type FavoritesActionTypes =
  | AddToFavoritesActionProps
  | DeleteFromFavoritesActionProps;
export const ADDTOFAVORITES = 'ADDTOFAVORITES';
export interface AddToFavoritesActionProps {
  type: typeof ADDTOFAVORITES;
  payload: addToFavoritesPayload;
}
export const addToFavorites = (payload: addToFavoritesPayload) => {
  //recieve config object
  return {
    type: ADDTOFAVORITES,
    payload: payload,
  };
};
export const DELETEFROMFAVORITES = 'DELETEFROMFAVORITES';
export interface DeleteFromFavoritesActionProps {
  type: typeof DELETEFROMFAVORITES;
  payload: string;
}
export const deleteFromFavorites = (payload: string) => {
  // recieve ID which is also url in this case
  return {
    type: DELETEFROMFAVORITES,
    payload: payload,
  };
};

//* Authorized actions

import {authorized} from '../../typescript/index';
export type AuthorizedActionTypes =
  | SetAuthActionProps
  | LogOutOfGoogleActionProps
  | LogOutActionProps;

export const SETAUTH = 'SETAUTH';
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
export const LOGOUTOFGOOGLE = 'LOGOUTOFGOOGLE';
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
export const LOGOUTASYNC = 'LOGOUTASYNC';
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
