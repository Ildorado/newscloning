const initialState = {};

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADDTOFAVORITES':
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case 'DELETEFROMFAVORITES': {
      return Object.keys(state).reduce((object, key) => {
        if (key !== action.payload) {
          object[key] = state[key];
        }
        return object;
      }, {});
    }
    default:
      return state;
  }
};
export default favoritesReducer;
