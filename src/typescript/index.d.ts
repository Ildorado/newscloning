import {NavigationDrawerScreenProps} from 'react-navigation-drawer';
export type NavigationScreenType = NavigationDrawerScreenProps['navigation'];
export {Props as CustomDrawerProps} from '../components/CustomDrawerButton';
export {Props as CustomAuthButtonProps} from '../components/CustomAuthButton';
export {Props as CustomMenuButtonProps} from '../components/CustomMenuButton';
export {Props as HeaderProps} from '../components/Header';
export {Props as NewsListProps} from '../components/NewsList';
export {Props as NewsSlotProps} from '../components/NewsSlot';
export {Props as NewsSlotHeaderProps} from '../components/NewsSlotHeader';
export {Props as ShareFormProps} from '../components/ShareForm';
export {Props as TabProps} from '../components/Tab';
export {Props as FacebookProps} from '../components/AuthButtons/Facebook';
export {Props as GoogleGoogle} from '../components/AuthButtons/Google';
export {Props as GoToAppProps} from '../components/AuthButtons/ToApp';
export {
  Props as NewsSlotImageProps,
} from '../components/Animated/NewsSlotImage';
export {Props as AuthScreenProps} from '../screens/AuthScreen';
export {Props as TabBarProps} from '../components/TabBar';
export {AuthorizedActionTypes} from '../redux/actions/index';
export {FavoritesActionTypes} from '../redux/actions/index';
export {WebViesActionTypes} from '../redux/actions/index';
export {FocusedTabTitleActionTypes} from '../redux/actions/index';
export {FocusedDrawerButtonActionTypes} from '../redux/actions/index';
export {NewsActionTypes} from '../redux/actions/index';

export interface NewsDataProps {
  [x: string]: any;
  title: string;
  img: string;
  description: string;
  published: string;
  id: string;
  contentlink: string;
}
export interface NewsSourcesItemProps {
  key?: string | number | undefined;
  Name: string;
  title: string;
  enclosures: any;
  description: string;
  published: string;
  id: string;
}
export interface NewsSourcesProps {
  Name: string;
  key: string;
  src: string;
  infoHandler: (item: NewsSourcesItemProps) => NewsDataProps;
}

export type Authorized = {name: string | null; data: any | null};
export type AddToFavoritesPayload = NewsDataProps;
export type NewsReducerState = {
  currentNewsSource?: null | string;
  items: [] | NewsDataProps[];
  loading: any;
  error: any;
};
export type FocusedTabReducerState = string;
export type WebViewReducerState = {
  visibility: boolean;
  config: NewsDataProps | null;
};
export type FavoritesReducerState = {
  [index: string]: NewsDataProps;
};
export type AuthReducerState = {
  authorized: Authorized;
};
export type FocusedDrawerButtonReducerState = string;
export type State = {
  news: NewsReducerState;
  focusedTabTitle: FocusedTabReducerState;
  focusedDrawerButton: FocusedDrawerButtonReducerState;
  webView: WebViewReducerState;
  favorites: FavoritesReducerState;
  authState: AuthReducerState;
};
