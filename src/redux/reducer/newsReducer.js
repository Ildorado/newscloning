import mapValues from 'lodash.mapvalues';
const initialState = {
  currentNewsSource: null,
  items: [],
  loading: {},
  error: null,
};

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCHNEWSBEGIN':
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.id]: true,
        },
        error: null,
      };
    case 'SETNEWS':
      return {
        ...state,
        items: action.payload,
        currentNewsSource: action.currentNewsSource,
      };
    case 'FETCHNEWSSUCCESS': {
      return {
        ...state,
        loading: {
          ...state.loading,
          [action.id]: false,
        },
      };
    }
    case 'FETCHNEWSFAILURE':
      const loading = mapValues(state.loading, () => false);
      return {
        loading: {
          loading,
        },
        error: {
          id: action.id ? action.id : 'not in fetching',
          error: action.payload,
        },
        items: [],
      };

    default:
      return state;
  }
};
export default newsReducer;
