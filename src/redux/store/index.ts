import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducer/index';
import ReduxThunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/index';
const SagaMiddleWare = createSagaMiddleware();
const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['favorites', 'authState'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk, SagaMiddleWare)),
);
SagaMiddleWare.run(rootSaga);

export const persistor = persistStore(store);
