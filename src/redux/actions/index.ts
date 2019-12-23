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

// export const fetchNews = payload => dispatch => {
//   try {
//     let configs;
//     let focusedDrawerButton;
//     if (!Array.isArray(payload)) {
//       configs = [payload];
//       focusedDrawerButton = payload.Name;
//     } else {
//       // if it's array of more then 1 elements then it's 'All' button;
//       configs = payload;
//       focusedDrawerButton = configs.length === 1 ? configs[0].Name : 'All';
//     }
//     const news = configs.map(async config => {
//       const id = config.Name;
//       try {
//         dispatch(fetchNewsBegin(id));
//         const responce = await fetch(config.src);
//         handleErrors(responce);
//         const responseData = await responce.text();
//         const rssData = await rssParser.parse(responseData);
//         const items = rssData.items;
//         const handledItems = items.map(elem => {
//           return config.infoHandler(elem);
//         });
//         dispatch(fetchNewsSuccess(id));
//         return handledItems;
//       } catch (error) {
//         dispatch(fetchNewsFailure(error.message, id));
//       }
//     });
//     Promise.all(news).then(value => {
//       const res = value.filter(el => Boolean(el)).flat();
//       if (res.length !== 0) {
//         focusedDrawerButton === 'All' &&
//           res.sort((a, b) => {
//             return Date.parse(b.published) - Date.parse(a.published);
//           });
//         dispatch(setNews(res, focusedDrawerButton));
//         dispatch(SetFocusedDrawerButton(focusedDrawerButton));
//         dispatch(setFocusedTabTitle(InitialScreenName));
//         return value.flat();
//       }
//     });
//   } catch (error) {
//     dispatch(fetchNewsFailure(error.message));
//   }
// };

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
export type WebViesActionTypes = setWebViewVisibility | setWebViewURI;
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

export const setWebViewConfig = (payload: NewsDataProps) => (
  dispatch: (arg0: {type: string; payload: boolean | NewsDataProps}) => void,
) => {
  dispatch(setWebViewVisibility(true));
  dispatch(setWebViewURI(payload));
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
export type AuthorizedActionTypes = setAuthAction | LogOutOfGoogleAction;

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
export const logOut = (authorizedState: authorized) => (
  dispatch: (arg0: {type: string; authorized: authorized}) => void,
) => {
  if (authorizedState.name === 'Facebook') {
    facebookLogout();
    dispatch(setAuth({name: null, data: null}));
  } else if (authorizedState.name === 'Google') {
    if (authorizedState && authorizedState.data !== null) {
      revoke(googleConfig, {
        tokenToRevoke: authorizedState.data.accessToken,
      }).then(() => {
        dispatch(setAuth({name: null, data: null}));
      });
    }
  }
};
