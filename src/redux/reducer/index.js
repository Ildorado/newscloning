import counterReducer from './counterReducer';
import newsReducer from './newsReducer';
import focusedTabReducer from './focusedTabReducer';
import {combineReducers} from 'redux';
const rootReducer = combineReducers({
  counter: counterReducer,
  news: newsReducer,
  focusedTabTitle: focusedTabReducer,
});
export default rootReducer;
