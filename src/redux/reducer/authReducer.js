const initialState = {
  authorized: {
    name: null,
    data: null,
  },
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SETAUTH': {
      return {
        authorized: {
          name: action.authorized.name,
          data: action.authorized.data,
        },
      };
    }
    default:
      return state;
  }
};
export default authReducer;
