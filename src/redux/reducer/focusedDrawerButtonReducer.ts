import {
  FocusedDrawerButtonActionTypes,
  FocusedDrawerButtonReducerState,
} from '../../typescript/index';
import {SETFOCUSEDDRAWERBUTTON} from '../actions/index';

const newsReducer = (
  state: FocusedDrawerButtonReducerState = '',
  action: FocusedDrawerButtonActionTypes,
) => {
  switch (action.type) {
    case SETFOCUSEDDRAWERBUTTON: {
      return action.payload;
    }
    default:
      return state;
  }
};
export default newsReducer;
