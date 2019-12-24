import {put, takeLatest} from 'redux-saga/effects';
import {setWebViewVisibility, setWebViewURI} from '../actions/index';
import {setWebViewConfig} from '../actions/index';
function* setWebViewConfigAsync({payload}: setWebViewConfig) {
  yield put(setWebViewVisibility(true));
  yield put(setWebViewURI(payload));
}

export default function* watchWebViewConfig() {
  yield takeLatest('SETWEBVIEWCONFIG', setWebViewConfigAsync);
}
