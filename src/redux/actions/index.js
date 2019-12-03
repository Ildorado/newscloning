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
export const fetchNews = (payload, dispatch) => {
  dispatch(fetchNewsBegin());
  fetch(payload.src)
    .then(handleErrors)
    .then(response => response.text())
    .then(responseData => rssParser.parse(responseData))
    .then(rss => {
      // console.log('rss.title:', rss.title);
      // console.log('rss:', rss);
      return rss.items;
    })
    .then(items => {
      let news = [];
      items.forEach(el => {
        news.push(payload.infoHandler(el));
      });
      return news;
    })
    .then(news => {
      dispatch(fetchNewsSuccess(news));
    })
    .catch(error => dispatch(fetchNewsFailure(error)));
};
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}
