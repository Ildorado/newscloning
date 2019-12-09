import {InitialScreenName} from '../../constants/index';
const newsReducer = (state = InitialScreenName, action) => {
  switch (action.type) {
    case 'SETFOCUSEDTABTITLE': {
      return action.payload;
    }
    default:
      return state;
  }
};
export default newsReducer;
