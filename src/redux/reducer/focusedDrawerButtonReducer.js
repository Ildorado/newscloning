const newsReducer = (state = '', action) => {
  switch (action.type) {
    case 'SETFOCUSEDDRAWERBUTTON': {
      return action.payload;
    }
    default:
      return state;
  }
};
export default newsReducer;
