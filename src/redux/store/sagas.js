import {put, takeEvery, all, throttle, call} from 'redux-saga/effects';
import {
  setFocusedTabTitle,
  fetchNewsBegin,
  setNews,
  fetchNewsFailure,
  fetchNewsSuccess,
  SetFocusedDrawerButton,
  fetchNewsProcessEnd,
} from '../actions/index';
import {InitialScreenName} from '../../constants/index';
import * as rssParser from 'react-native-rss-parser';
function* setFocusedTabTitleAsync(payload) {
  yield put(setFocusedTabTitle(payload.payload));
}
function* fetchNewsSource(config) {
  try {
    yield put(fetchNewsBegin(config.Name));
    const responce = yield call(fetch, config.src);
    const responseData = yield responce.text();
    const rssData = yield call(rssParser.parse, responseData);
    const items = rssData.items;
    const handledItems = yield all(
      items.map(elem => {
        return config.infoHandler(elem);
      }),
    );
    yield put(fetchNewsSuccess(config.Name));
    return handledItems;
  } catch (error) {
    yield put(fetchNewsFailure(error.message, config.Name));
  }
}
function* fetchNewsAsync({payload}) {
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
  const news = yield all(
    configs.map(config => {
      return call(fetchNewsSource, config);
    }),
  );
  const res = news.filter(el => Boolean(el)).flat();
  if (res.length !== 0) {
    focusedDrawerButton === 'All' &&
      res.sort((a, b) => {
        return Date.parse(b.published) - Date.parse(a.published);
      });
    yield put(fetchNewsProcessEnd());
    yield put(setNews(res, focusedDrawerButton));
    yield put(SetFocusedDrawerButton(focusedDrawerButton));
    yield put(setFocusedTabTitle(InitialScreenName));
  }
}
function* watchFocusedTabTItleAsync() {
  yield throttle(400, 'SETFOCUSEDTABTITLEASYNC', setFocusedTabTitleAsync);
}
function* watchfetchNewsProcessBegin() {
  yield takeEvery('FETCHNEWSPROCESSBEGIN', fetchNewsAsync);
}

export default function* rootSaga() {
  yield all([watchFocusedTabTItleAsync(), watchfetchNewsProcessBegin()]);
}
