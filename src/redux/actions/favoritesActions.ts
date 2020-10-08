import {AddToFavoritesPayload} from '../../typescript/index';
export type FavoritesActionTypes =
  | AddToFavoritesActionProps
  | DeleteFromFavoritesActionProps;
export const ADDTOFAVORITES = 'favorites/ADDTOFAVORITES';
export interface AddToFavoritesActionProps {
  type: typeof ADDTOFAVORITES;
  payload: AddToFavoritesPayload;
}
export const addToFavorites = (payload: AddToFavoritesPayload) => {
  //recieve config object
  return {
    type: ADDTOFAVORITES,
    payload: payload,
  };
};
export const DELETEFROMFAVORITES = 'favorites/DELETEFROMFAVORITES';
export interface DeleteFromFavoritesActionProps {
  type: typeof DELETEFROMFAVORITES;
  payload: string;
}
export const deleteFromFavorites = (payload: string) => {
  // recieve ID which is also url in this case
  return {
    type: DELETEFROMFAVORITES,
    payload: payload,
  };
};
