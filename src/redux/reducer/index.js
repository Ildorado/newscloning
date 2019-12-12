import newsReducer from './newsReducer';
import focusedTabReducer from './focusedTabReducer';
import focusedDrawerButtonReducer from './focusedDrawerButtonReducer';
import webViewReducer from './webViewReducer';
import favoritesReducer from './favoritesReducer';
import {combineReducers} from 'redux';
const rootReducer = combineReducers({
  news: newsReducer,
  focusedTabTitle: focusedTabReducer,
  focusedDrawerButton: focusedDrawerButtonReducer,
  webView: webViewReducer,
  favorites: favoritesReducer,
});
export default rootReducer;
