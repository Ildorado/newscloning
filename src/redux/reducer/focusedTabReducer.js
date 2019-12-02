import InitialScreenName from '../../constants/InitialScreenName';
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
