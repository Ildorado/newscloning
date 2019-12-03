const initialState = {
  items: [],
  loading: false,
  error: null,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHNEWSBEGIN':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'FETCHNEWSSUCCESS': {
      return {
        ...state,
        items: action.payload,
        loading: false,
      };
    }
    case 'FETCHNEWSFAILURE':
      return {
        loading: false,
        error: action.payload,
        items: [],
      };

    default:
      return state;
  }
};
export default newsReducer;
