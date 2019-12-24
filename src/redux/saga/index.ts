import {all} from 'redux-saga/effects';
import watchFocusedTabTItleAsync from './watchFocusedTabTItleAsync';
import watchFetchNewsProcessBegin from './watchFetchNewsProcessBegin';
import watchWebViewConfig from './watchWebViewConfig';
import watchLogOutAsync from './watchLogOutAsync';
export default function* rootSaga() {
  yield all([
    watchFocusedTabTItleAsync(),
    watchFetchNewsProcessBegin(),
    watchWebViewConfig(),
    watchLogOutAsync(),
  ]);
}
