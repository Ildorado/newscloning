export type FocusedDrawerButtonActionTypes = SetFocusedDrawerButton;
export const SETFOCUSEDDRAWERBUTTON = 'drawer/SETFOCUSEDDRAWERBUTTON';
export interface SetFocusedDrawerButton {
  type: typeof SETFOCUSEDDRAWERBUTTON;
  payload: string;
}
export const SetFocusedDrawerButton = (payload: string) => {
  return {
    type: SETFOCUSEDDRAWERBUTTON,
    payload: payload,
  };
};
