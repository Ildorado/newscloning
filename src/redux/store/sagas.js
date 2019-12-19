import {put, takeLatest, delay} from 'redux-saga/effects';
import {setFocusedTabTitle} from '../actions/index';
export function* setFocusedTabTitleAsync(payload) {
  yield delay(200);
  yield put(setFocusedTabTitle(payload.payload));
}

export function* helloSaga() {
  console.log('Hello Sagas!');
  yield takeLatest('SETFOCUSEDTABTITLEASYNC', setFocusedTabTitleAsync);
}
