import {setFocusedTabTitleAsync} from '../watchFocusedTabTItleAsync';
import {put} from 'redux-saga/effects';
// import test from 'tape';
// test('watchFocusedTatTitile Saga test', assert => {
//   const gen = setFocusedTabTitleAsync({
//     type: 'SETFOCUSEDTABTITLEASYNC',
//     payload: 'Home',
//   });
//   assert.deepEqual(
//     gen.next().value,
//     put({type: 'SETFOCUSEDTABTITLEASYNC', payload: 'Home'}),
//     'SETFOCUSEDTABTITLEASYNC must dispatch an action',
//   );
//   assert.deepEqual(
//     gen.next().value,
//     {done: true, value: undefined},
//     'SETFOCUSEDTABTITLEASYNC Saga must be done',
//   );
//   assert.end();
// });
describe('setFocusedTabTitleAsync', () => {
  const genObject = setFocusedTabTitleAsync({
    type: 'SETFOCUSEDTABTITLEASYNC',
    payload: 'Home',
  });
  it('', () => {
    expect(genObject.next().value).toEqual(
      put({type: 'SETFOCUSEDTABTITLE', payload: 'Home'}),
    );
  });
  it('should be done on next iteration', () => {
    expect(genObject.next().done).toBeTruthy();
  });
});
