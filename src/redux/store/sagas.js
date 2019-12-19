import {put, takeEvery} from 'redux-saga/effects';
import {setFocusedTabTitle} from '../actions/index';
export function* incrementAsync(payload) {
  yield put(setFocusedTabTitle(payload.payload));
}

export function* helloSaga() {
  console.log('Hello Sagas!');
  yield takeEvery('SETFOCUSEDTABTITLEASYNC', incrementAsync);
}
