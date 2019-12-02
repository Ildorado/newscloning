import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducer/index';
const Store = createStore(rootReducer);
export default Store;
