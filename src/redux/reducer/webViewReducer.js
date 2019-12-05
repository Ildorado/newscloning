const initialState = {
  visibility: false,
  config: {},
};

const webViewReducer = (state = initialState, action) => {
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
