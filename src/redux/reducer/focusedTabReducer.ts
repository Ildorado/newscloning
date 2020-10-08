import {InitialScreenName} from '../../constants/index';
import {
  FocusedTabTitleActionTypes,
  FocusedTabReducerState,
} from '../../typescript/index';
import {SETFOCUSEDTABTITLE} from '../actions/index';

const newsReducer = (
  state: FocusedTabReducerState = InitialScreenName,
  action: FocusedTabTitleActionTypes,
) => {
  switch (action.type) {
    case SETFOCUSEDTABTITLE: {
      return action.payload;
    }
    default:
      return state;
  }
};
export default newsReducer;
