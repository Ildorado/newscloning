const viewableItemsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SETVIEWABLEITEMS': {
      return action.payload;
    }
    default:
      return state;
  }
};
export default viewableItemsReducer;
