import counterReducer from './counterReducer';
import newsReducer from './newsReducer';
import focusedTabReducer from './focusedTabReducer';
import webViewReducer from './webViewReducer';
import {combineReducers} from 'redux';
const rootReducer = combineReducers({
  counter: counterReducer,
  news: newsReducer,
  focusedTabTitle: focusedTabReducer,
  webView: webViewReducer,
});
export default rootReducer;
