import {State} from '../../typescript/index';
export const getFavorites = (state: State) => state.favorites;
export const getFocusedDrawerButton = (state: State) =>
  state.focusedDrawerButton;
export const getWebViewVisibility = (state: State) => state.webView.visibility;
export const getWebViewConfig = (state: State) => state.webView.config;
export const getFocusedTabTitle = (state: State) => state.focusedTabTitle;
export const getNewsItems = (state: State) => state.news.items;
export const getAuth = (state: State) => state.authState;
