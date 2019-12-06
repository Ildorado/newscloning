import * as rssParser from 'react-native-rss-parser';

export const addCounter = payload => {
  return {
    type: 'ADDCOUNTER',
  };
};
export const setFocusedTabTitle = payload => {
  return {
    type: 'SETFOCUSEDTABTITLE',
    payload: payload,
  };
};
export const SetFocusedDrawerButton = payload => {
  return {
    type: 'SETFOCUSEDDRAWERBUTTON',
    payload: payload,
  };
};
export const fetchNewsBegin = () => ({
  type: 'FETCHNEWSBEGIN',
});

export const fetchNewsSuccess = payload => {
  return {
    type: 'FETCHNEWSSUCCESS',
    payload: payload,
  };
};
export const fetchNewsFailure = error => ({
  type: 'FETCHNEWSFAILURE',
  payload: {error},
});
export async function fetchNews(payload, dispatch) {
  dispatch(fetchNewsBegin());
  try {
    let news = [];
    const responce = await fetch(payload.src);
    handleErrors(responce);
    const responseData = await responce.text();
    const rssData = await rssParser.parse(responseData);
    const items = rssData.items;
    items.forEach(el => {
      news.push(payload.infoHandler(el));
    });
    dispatch(fetchNewsSuccess(news));
    return news;
  } catch (error) {
    console.log('error:', String(error));
    dispatch(fetchNewsFailure(String(error)));
  }
}
export function setNews(payload) {
  return {type: 'SETNEWS', payload: payload};
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
export const setWebViewConfig = (payload, dispatch) => {
  dispatch(setWebViewVisibility(true));
  return {
    type: 'SETWEBVIEWURI',
    payload: payload,
  };
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
