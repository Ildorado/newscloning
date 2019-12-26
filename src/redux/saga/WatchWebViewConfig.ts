import {put, takeLatest} from 'redux-saga/effects';
import {setWebViewVisibility, setWebViewURI} from '../actions/index';
import {SetWebViewConfigActionProps} from '../actions/index';
import {SETWEBVIEWCONFIG} from '../actions/index';
function* setWebViewConfigAsync({payload}: SetWebViewConfigActionProps) {
  yield put(setWebViewVisibility(true));
  yield put(setWebViewURI(payload));
}

export default function* watchWebViewConfig() {
  yield takeLatest(SETWEBVIEWCONFIG, setWebViewConfigAsync);
}
