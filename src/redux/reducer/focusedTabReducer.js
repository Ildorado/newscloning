const newsReducer = (state = 'Home', action) => {
  switch (action.type) {
    case 'SETFOCUSEDTABTITLE': {
      return action.payload;
    }
    default:
      return state;
  }
};
export default newsReducer;
