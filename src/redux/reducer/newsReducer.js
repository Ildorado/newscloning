const newsReducer = (state = [], action) => {
  switch (action.type) {
    case 'SETNEWS': {
      return action.payload;
    }
    default:
      return state;
  }
};
export default newsReducer;
