import {
  put,
  takeEvery,
  takeLatest,
  all,
  throttle,
  call,
  take,
} from 'redux-saga/effects';
import {
  setFocusedTabTitle,
  fetchNewsBegin,
  setNews,
  fetchNewsFailure,
  fetchNewsSuccess,
  SetFocusedDrawerButton,
  fetchNewsProcessEnd,
  setWebViewVisibility,
  setWebViewURI,
  logOut,
  setAuth,
} from '../actions/index';
import {InitialScreenName} from '../../constants/index';
import * as rssParser from 'react-native-rss-parser';
import {
  NewsSourcesProps,
  NewsSourcesItemProps,
  NewsDataProps,
} from '../../typescript/index';
import {setFocusedTabTitleAsync as setFocusedTabTitleAsyncProps} from '../actions/index';
function* setFocusedTabTitleAsync(payload: setFocusedTabTitleAsyncProps) {
  yield put(setFocusedTabTitle(payload.payload));
}
function* fetchNewsSource(config: NewsSourcesProps) {
  try {
    yield put(fetchNewsBegin(config.Name));
    const responce = yield call(fetch, config.src);
    const responseData = yield responce.text();
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
function* fetchNewsAsync({
  payload,
}: {
  payload: NewsSourcesProps | NewsSourcesProps[];
}) {
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
function* setWebViewConfigAsync({payload}: {payload: NewsDataProps}) {
  yield put(setWebViewVisibility(true));
  yield put(setWebViewURI(payload));
}
import {facebookLogout} from '../../components/AuthButtons/Facebook';
import {revoke} from 'react-native-app-auth';
import {googleConfig} from '../../components/AuthButtons/Google';
function* logOutAsync({authorizedState}: logOut) {
  if (authorizedState.name === 'Facebook') {
    facebookLogout();
    yield put(setAuth({name: null, data: null}));
  } else if (authorizedState.name === 'Google') {
    if (authorizedState && authorizedState.data !== null) {
      yield call(revoke, googleConfig, {
        tokenToRevoke: authorizedState.data.accessToken,
      });
      yield put(setAuth({name: null, data: null}));
    }
  }
}
function* watchFocusedTabTItleAsync() {
  yield throttle(400, 'SETFOCUSEDTABTITLEASYNC', setFocusedTabTitleAsync);
}
function* watchfetchNewsProcessBegin() {
  //@ts-ignore
  yield takeLatest('FETCHNEWSPROCESSBEGIN', fetchNewsAsync);
}
function* watchWebViewConfig() {
  //@ts-ignore
  yield takeLatest('SETWEBVIEWCONFIG', setWebViewConfigAsync);
}
function* watchLogOutAsync() {
  //@ts-ignore
  yield takeLatest('LOGOUTASYNC', logOutAsync);
}
export default function* rootSaga() {
  yield all([
    watchFocusedTabTItleAsync(),
    watchfetchNewsProcessBegin(),
    watchWebViewConfig(),
    watchLogOutAsync(),
  ]);
}
// dispatch(setWebViewVisibility(true));
// dispatch(setWebViewURI(payload));
