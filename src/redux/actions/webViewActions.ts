import {NewsDataProps} from '../../typescript/index';
export type WebViesActionTypes =
  | SetWebViewVisibilityActionProps
  | SetWebViewURIActionProps
  | SetWebViewConfigActionProps;
export const SETWEBVIEWVISIBILITY = 'webView/SETWEBVIEWVISIBILITY';
export interface SetWebViewVisibilityActionProps {
  type: typeof SETWEBVIEWVISIBILITY;
  payload: boolean;
}
export const setWebViewVisibility = (payload: boolean) => {
  return {
    type: SETWEBVIEWVISIBILITY,
    payload: payload,
  };
};
export const SETWEBVIEWURI = 'webView/SETWEBVIEWURI';
export interface SetWebViewURIActionProps {
  type: typeof SETWEBVIEWURI;
  payload: NewsDataProps;
}
export const setWebViewURI = (payload: NewsDataProps) => {
  return {
    type: SETWEBVIEWURI,
    payload: payload,
  };
};
export const SETWEBVIEWCONFIG = 'webView/SETWEBVIEWCONFIG';
export interface SetWebViewConfigActionProps {
  type: typeof SETWEBVIEWCONFIG;
  payload: NewsDataProps;
}
export const setWebViewConfig = (payload: NewsDataProps) => {
  return {
    type: SETWEBVIEWCONFIG,
    payload: payload,
  };
};
