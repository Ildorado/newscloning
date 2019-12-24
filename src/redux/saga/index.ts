import {all} from 'redux-saga/effects';
import watchFocusedTabTItleAsync from './WatchFocusedTabTItleAsync';
import watchFetchNewsProcessBegin from './watchFetchNewsProcessBegin';
import watchWebViewConfig from './WatchWebViewConfig';
import watchLogOutAsync from './watchLogOutAsync';
export default function* rootSaga() {
  yield all([
    watchFocusedTabTItleAsync(),
    watchFetchNewsProcessBegin(),
    watchWebViewConfig(),
    watchLogOutAsync(),
  ]);
}
