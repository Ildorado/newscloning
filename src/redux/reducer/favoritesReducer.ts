import {FavoritesActionTypes, NewsDataProps} from '../../typescript/index';
import {ADDTOFAVORITES, DELETEFROMFAVORITES} from '../actions/index';
const initialState: {
  [index: string]: NewsDataProps;
} = {};
const favoritesReducer = (
  state = initialState,
  action: FavoritesActionTypes,
) => {
  switch (action.type) {
    case ADDTOFAVORITES:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case DELETEFROMFAVORITES: {
      return Object.keys(state).reduce((object: any, key: string) => {
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
