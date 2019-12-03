import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducer/index';
import ReduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk)),
);
export default Store;
