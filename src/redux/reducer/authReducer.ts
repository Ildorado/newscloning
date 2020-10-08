import {AuthorizedActionTypes, AuthReducerState} from '../../typescript/index';
import {SETAUTH} from '../actions/index';
const initialState: AuthReducerState = {
  authorized: {
    name: null,
    data: null,
  },
};
const authReducer = (state = initialState, action: AuthorizedActionTypes) => {
  switch (action.type) {
    case SETAUTH: {
      return {
        authorized: {
          name: action.authorized.name,
          data: action.authorized.data,
        },
      };
    }
    default:
      return state;
  }
};
export default authReducer;
