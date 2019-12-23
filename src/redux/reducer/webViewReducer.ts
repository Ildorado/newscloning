import {WebViesActionTypes} from '../../typescript/index';
import {NewsDataProps} from '../../typescript/index';
export const initialState: {
  visibility: boolean;
  config: NewsDataProps | {};
} = {
  visibility: false,
  config: {},
};

const webViewReducer = (state = initialState, action: WebViesActionTypes) => {
  switch (action.type) {
    case 'SETWEBVIEWVISIBILITY':
      return {
        ...state,
        visibility: action.payload,
      };
    case 'SETWEBVIEWURI':
      return {
        ...state,
        config: action.payload,
      };
    default:
      return state;
  }
};
export default webViewReducer;
