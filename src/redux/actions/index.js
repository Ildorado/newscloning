import * as rssParser from 'react-native-rss-parser';
import {InitialScreenName} from '../../constants/index';
export const setFocusedTabTitle = payload => {
  return {
    type: 'SETFOCUSEDTABTITLE',
    payload: payload,
  };
};
export const setFocusedTabTitleAsync = payload => {
  return {
    type: 'SETFOCUSEDTABTITLEASYNC',
    payload: payload,
  };
};
export const SetFocusedDrawerButton = payload => {
  return {
    type: 'SETFOCUSEDDRAWERBUTTON',
    payload: payload,
  };
};
export const SetFocusedDrawerButtonAsync = payload => {
  return {
    type: 'SETFOCUSEDDRAWERBUTTON',
    payload: payload,
  };
};
export const fetchNewsBegin = id => ({
  type: 'FETCHNEWSBEGIN',
  id: id,
});

export const fetchNewsSuccess = id => {
  return {
    type: 'FETCHNEWSSUCCESS',
    id: id,
  };
};
export const fetchNewsFailure = (error, id) => ({
  type: 'FETCHNEWSFAILURE',
  payload: {error},
  id: id,
});

export const fetchNews = payload => dispatch => {
  try {
    let configs;
    let focusedDrawerButton;
    if (!Array.isArray(payload)) {
      configs = [payload];
      focusedDrawerButton = payload.Name;
    } else {
      // if it's array of more then 1 elements then it's 'All' button;
      configs = payload;
      focusedDrawerButton = configs.length === 1 ? configs[0].Name : 'All';
    }
    const news = configs.map(async config => {
      const id = config.Name;
      try {
        dispatch(fetchNewsBegin(id));
        const responce = await fetch(config.src);
        handleErrors(responce);
        const responseData = await responce.text();
        const rssData = await rssParser.parse(responseData);
        const items = rssData.items;
        const handledItems = items.map(elem => {
          return config.infoHandler(elem);
        });
        dispatch(fetchNewsSuccess(id));
        return handledItems;
      } catch (error) {
        dispatch(fetchNewsFailure(error.message, id));
      }
    });
    Promise.all(news).then(value => {
      const res = value.filter(el => Boolean(el)).flat();
      if (res.length !== 0) {
        focusedDrawerButton === 'All' &&
          res.sort((a, b) => {
            return Date.parse(b.published) - Date.parse(a.published);
          });
        dispatch(setNews(res, focusedDrawerButton));
        dispatch(SetFocusedDrawerButton(focusedDrawerButton));
        dispatch(setFocusedTabTitle(InitialScreenName));
        return value.flat();
      }
    });
  } catch (error) {
    dispatch(fetchNewsFailure(error.message));
  }
};

export function fetchNewsAsync(payload) {
  console.log('fetch payload:', payload);
  return {
    type: 'FETCHNEWSASYNC',
    payload: payload,
  };
}
export function setNews(payload, currentNewsSource) {
  return {
    type: 'SETNEWS',
    payload: payload,
    currentNewsSource: currentNewsSource,
  };
}

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const setWebViewVisibility = payload => {
  return {
    type: 'SETWEBVIEWVISIBILITY',
    payload: payload,
  };
};

export const setWebViewURI = payload => {
  return {
    type: 'SETWEBVIEWURI',
    payload: payload,
  };
};

export const setWebViewConfig = payload => dispatch => {
  dispatch(setWebViewVisibility(true));
  dispatch(setWebViewURI(payload));
};

export const addToFavorites = payload => {
  //recieve config object
  return {
    type: 'ADDTOFAVORITES',
    payload: payload,
  };
};

export const deleteFromFavorites = payload => {
  // recieve ID which is also url in this case
  return {
    type: 'DELETEFROMFAVORITES',
    payload: payload,
  };
};

export const setAuth = authorized => {
  return {
    type: 'SETAUTH',
    authorized: authorized,
  };
};
export const logOutOfGoogle = authorized => {
  return {
    type: 'LOGOUTOFGOOGLE',
    authorized: authorized,
  };
};
import {facebookLogout} from '../../components/AuthButtons/Facebook';
import {revoke} from 'react-native-app-auth';
import {googleConfig} from '../../components/AuthButtons/Google';
export const logOut = authorizedState => dispatch => {
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
