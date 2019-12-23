import {InitialScreenName} from '../../constants/index';
import {FocusedTabTitleActionTypes} from '../../typescript/index';
const newsReducer = (
  state: string = InitialScreenName,
  action: FocusedTabTitleActionTypes,
) => {
  switch (action.type) {
    case 'SETFOCUSEDTABTITLE': {
      return action.payload;
    }
    default:
      return state;
  }
};
export default newsReducer;
