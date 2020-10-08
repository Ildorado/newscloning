import {WebViesActionTypes, WebViewReducerState} from '../../typescript/index';
import {SETWEBVIEWVISIBILITY, SETWEBVIEWURI} from '../actions/webViewActions';
export const initialState: WebViewReducerState = {
  visibility: false,
  config: {},
};

const webViewReducer = (state = initialState, action: WebViesActionTypes) => {
  switch (action.type) {
    case SETWEBVIEWVISIBILITY:
      return {
        ...state,
        visibility: action.payload,
      };
    case SETWEBVIEWURI:
      return {
        ...state,
        config: action.payload,
      };
    default:
      return state;
  }
};
export default webViewReducer;
