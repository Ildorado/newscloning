import {put, takeLatest, call} from 'redux-saga/effects';
import {logOut, setAuth} from '../actions/index';
import {facebookLogout} from '../../components/AuthButtons/Facebook';
import {revoke} from 'react-native-app-auth';
import {googleConfig} from '../../components/AuthButtons/Google';

function* logOutAsync({authorizedState}: logOut) {
  if (authorizedState.name === 'Facebook') {
    facebookLogout();
    yield put(setAuth({name: null, data: null}));
  } else if (authorizedState.name === 'Google') {
    if (authorizedState && authorizedState.data !== null) {
      yield call(revoke, googleConfig, {
        tokenToRevoke: authorizedState.data.accessToken,
      });
      yield put(setAuth({name: null, data: null}));
    }
  }
}

export default function* watchLogOutAsync() {
  //@ts-ignore
  yield takeLatest('LOGOUTASYNC', logOutAsync);
}
