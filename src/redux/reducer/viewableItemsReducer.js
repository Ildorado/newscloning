const viewableItemsReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SETVIEWABLEITEMS': {
      return {
        ...state,
        [action.name]: action.payload,
      };
    }
    default:
      return state;
  }
};
export default viewableItemsReducer;
