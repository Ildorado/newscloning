import {setFocusedTabTitleAsync} from '../watchFocusedTabTItleAsync';
import {put} from 'redux-saga/effects';
import {SETFOCUSEDTABTITLEASYNC, SETFOCUSEDTABTITLE} from '../../actions/index';
import {InitialScreenName} from '../../../constants/index';
describe(SETFOCUSEDTABTITLEASYNC, () => {
  const genObject = setFocusedTabTitleAsync({
    type: SETFOCUSEDTABTITLEASYNC,
    payload: InitialScreenName,
  });
  it('', () => {
    expect(genObject.next().value).toEqual(
      put({type: SETFOCUSEDTABTITLE, payload: InitialScreenName}),
    );
  });
  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
