export type FocusedTabTitleActionTypes =
  | SetFocusedTabTitleActionProps
  | SetFocusedTabTitleAsyncActionProps;
export const SETFOCUSEDTABTITLE = 'tabs/SETFOCUSEDTABTITLE';
export interface SetFocusedTabTitleActionProps {
  type: typeof SETFOCUSEDTABTITLE;
  payload: string;
}
export const setFocusedTabTitle = (payload: string) => {
  return {
    type: SETFOCUSEDTABTITLE,
    payload: payload,
  };
};
export const SETFOCUSEDTABTITLEASYNC = 'tabs/SETFOCUSEDTABTITLEASYNC';
export interface SetFocusedTabTitleAsyncActionProps {
  type: typeof SETFOCUSEDTABTITLEASYNC;
  payload: string;
}
export const setFocusedTabTitleAsync = (payload: string) => {
  return {
    type: SETFOCUSEDTABTITLEASYNC,
    payload: payload,
  };
};
