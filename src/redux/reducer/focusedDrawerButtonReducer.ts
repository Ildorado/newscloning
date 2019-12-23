import {FocusedDrawerButtonActionTypes} from '../../typescript/index';
const newsReducer = (
  state: string = '',
  action: FocusedDrawerButtonActionTypes,
) => {
  switch (action.type) {
    case 'SETFOCUSEDDRAWERBUTTON': {
      return action.payload;
    }
    default:
      return state;
  }
};
export default newsReducer;
