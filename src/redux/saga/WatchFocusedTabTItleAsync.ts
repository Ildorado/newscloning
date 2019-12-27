import {put, throttle} from 'redux-saga/effects';
import {setFocusedTabTitle, SETFOCUSEDTABTITLEASYNC} from '../actions/index';
import {SetFocusedTabTitleAsyncActionProps} from '../actions/index';
export function* setFocusedTabTitleAsync(
  payload: SetFocusedTabTitleAsyncActionProps,
) {
  yield put(setFocusedTabTitle(payload.payload));
}
export default function* watchFocusedTabTItleAsync() {
  yield throttle(400, SETFOCUSEDTABTITLEASYNC, setFocusedTabTitleAsync);
}
