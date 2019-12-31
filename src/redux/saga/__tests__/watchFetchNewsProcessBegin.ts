import {call} from 'redux-saga/effects';
import {fetchNewsSource} from '../watchFetchNewsProcessBegin';
import {FETCHNEWSBEGIN} from '../../actions/index';
import {NewsSources} from '../../../constants/index';
import {expectSaga} from 'redux-saga-test-plan';
import {fetchApi, fetchToText, textToRss} from '../../../api/index';
import {fetchTextSnapshot, textToRssSnapshot} from '../../../api/snapshots';
describe('fetchNewsSource', () => {
  const newsSource = NewsSources[0];
  it('fetch', () => {
    return expectSaga(fetchNewsSource, newsSource)
      .put({type: FETCHNEWSBEGIN, id: 'Tut.by'})
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
});
