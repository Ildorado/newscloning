import {put, takeLatest, all, throttle} from 'redux-saga/effects';
import {setFocusedTabTitle, fetchNews} from '../actions/index';
function* setFocusedTabTitleAsync(payload) {
  yield put(setFocusedTabTitle(payload.payload));
}
function* fetchNewsAsync(payload) {
  yield put(fetchNews(payload.payload));
}
function* watchFocusedTabTItleAsync() {
  yield throttle(400, 'SETFOCUSEDTABTITLEASYNC', setFocusedTabTitleAsync);
}
function* watchfetchNewsAsync() {
  yield takeLatest('FETCHNEWSASYNC', fetchNewsAsync);
}
export default function* rootSaga() {
  yield all([watchFocusedTabTItleAsync(), watchfetchNewsAsync()]);
}
