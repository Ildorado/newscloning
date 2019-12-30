jest.mock('node-fetch');
import {call} from 'redux-saga/effects';
import {fetchNewsSource} from '../watchFetchNewsProcessBegin';
import {NewsSources} from '../../../constants/index';
import {expectSaga} from 'redux-saga-test-plan';
import {fetchApi, fetchToText, textToRss} from '../../../api/index';
import {fetchTextSnapshot, textToRssSnapshot} from '../../../api/snapshots';
describe('fetchNewsSource', () => {
  const newsSource = NewsSources[0];
  // const genObject = fetchNewsSource(newsSource);
  // it('fetchNewsBegin Action muct be dispatched', () => {
  //   expect(genObject.next().value).toEqual(
  //     put({type: 'FETCHNEWSBEGIN', id: 'Tut.by'}),
  //   );
  // });
  it('fetch', () => {
    return expectSaga(fetchNewsSource, newsSource)
      .put({type: 'FETCHNEWSBEGIN', id: 'Tut.by'})
      .provide([
        [
          call(fetchApi, newsSource.src),
          {
            status: 200,
          },
        ],
        [
          call(fetchToText, {
            status: 200,
          }),
          fetchTextSnapshot,
        ],
        [call(textToRss, fetchTextSnapshot), textToRssSnapshot],
      ])
      .run();
  });
  // it('testing', () => {
  //   expect(genObject.next().value).toEqual('asd');
  // });
  // it('should be done on next iteration', () => {
  //   expect(genObject.next().done).toBeFalsy();
  // });
});
