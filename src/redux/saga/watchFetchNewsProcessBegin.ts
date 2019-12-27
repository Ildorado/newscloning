import {put, takeLatest, all, call} from 'redux-saga/effects';
import {
  setFocusedTabTitle,
  fetchNewsBegin,
  setNews,
  fetchNewsFailure,
  fetchNewsSuccess,
  SetFocusedDrawerButton,
  fetchNewsProcessEnd,
  FetchNewsProcessBeginActionProps,
  FETCHNEWSPROCESSBEGIN,
} from '../actions/index';
import {InitialScreenName} from '../../constants/index';
import * as rssParser from 'react-native-rss-parser';
import {
  NewsSourcesProps,
  NewsSourcesItemProps,
  NewsDataProps,
} from '../../typescript/index';
function* fetchNewsSource(config: NewsSourcesProps) {
  try {
    yield put(fetchNewsBegin(config.Name));
    const response = yield call(fetch, config.src);
    const responseData = yield response.text();
    const rssData = yield call(rssParser.parse, responseData);
    const items = rssData.items;
    const handledItems = yield all(
      items.map((elem: NewsSourcesItemProps) => {
        return config.infoHandler(elem);
      }),
    );
    yield put(fetchNewsSuccess(config.Name));
    return handledItems;
  } catch (error) {
    yield put(fetchNewsFailure(error.message, config.Name));
  }
}
function* fetchNewsAsync({payload}: FetchNewsProcessBeginActionProps) {
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
  const res = news.filter((el: any) => Boolean(el)).flat();
  if (res.length !== 0) {
    focusedDrawerButton === 'All' &&
      res.sort((a: NewsDataProps, b: NewsDataProps) => {
        return Date.parse(b.published) - Date.parse(a.published);
      });
    yield put(fetchNewsProcessEnd());
    yield put(setNews(res, focusedDrawerButton));
    yield put(SetFocusedDrawerButton(focusedDrawerButton));
    yield put(setFocusedTabTitle(InitialScreenName));
  }
}

export default function* watchFetchNewsProcessBegin() {
  yield takeLatest(FETCHNEWSPROCESSBEGIN, fetchNewsAsync);
}
