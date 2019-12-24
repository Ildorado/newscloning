import {put, throttle} from 'redux-saga/effects';
import {setFocusedTabTitle} from '../actions/index';
import {setFocusedTabTitleAsync as setFocusedTabTitleAsyncProps} from '../actions/index';
function* setFocusedTabTitleAsync(payload: setFocusedTabTitleAsyncProps) {
  yield put(setFocusedTabTitle(payload.payload));
}
export default function* watchFocusedTabTItleAsync() {
  yield throttle(400, 'SETFOCUSEDTABTITLEASYNC', setFocusedTabTitleAsync);
}
