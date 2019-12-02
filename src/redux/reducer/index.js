import counterReducer from './counterReducer';
import newsReducer from './newsReducer';
import {combineReducers} from 'redux';
const rootReducer = combineReducers({
  counter: counterReducer,
  news: newsReducer,
});
export default rootReducer;
