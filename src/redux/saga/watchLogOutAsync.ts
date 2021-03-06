import {put, takeLatest, call} from 'redux-saga/effects';
import {LogOutActionProps, setAuth, LOGOUTASYNC} from '../actions/index';
import {facebookLogout} from '../../components/AuthButtons/Facebook';
import {revoke} from 'react-native-app-auth';
import {GOOGLE, FACEBOOK} from '../../constants/index';
import {googleConfig} from '../../components/AuthButtons/Google';

function* logOutAsync({authorizedState}: LogOutActionProps) {
  if (authorizedState.name === FACEBOOK) {
    facebookLogout();
    yield put(setAuth({name: null, data: null}));
  } else if (authorizedState.name === GOOGLE) {
    if (authorizedState && authorizedState.data !== null) {
      yield call(revoke, googleConfig, {
        tokenToRevoke: authorizedState.data.accessToken,
      });
      yield put(setAuth({name: null, data: null}));
    }
  }
}

export default function* watchLogOutAsync() {
  yield takeLatest(LOGOUTASYNC, logOutAsync);
}
