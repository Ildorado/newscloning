const initialState = {
  visibility: false,
  uri: '',
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
        uri: action.payload,
      };
    default:
      return state;
  }
};
export default webViewReducer;
