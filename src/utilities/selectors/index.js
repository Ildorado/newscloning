export const getFavorites = state => state.favorites;
export const getFocusedDrawerButton = state => state.focusedDrawerButton;
export const getWebViewVisibility = state => state.webView.visibility;
export const getWebViewConfig = state => state.webView.config;
export const getFocusedTabTitle = state => state.focusedTabTitle;
export const getNewsItems = state => state.news.items;
export const getViewableItems = screenName => state =>
  state.viewableItems[screenName];
