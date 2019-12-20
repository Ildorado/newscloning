import {NavigationTabScreenProps} from 'react-navigation-tabs';
// export interface navigationProps {
//   NavigationTabScreenProps: NavigationTabScreenProps['navigation'];
// }
export type NavigationScreenType = NavigationTabScreenProps['navigation'];
export {Props as CustomDrawerProps} from '../components/CustomDrawerButton';
export {Props as CustomAuthButtonProps} from '../components/CustomAuthButton';
export {Props as CustomMenuButtonProps} from '../components/CustomMenuButton';
export {Props as HeaderProps} from '../components/Header';
export {Props as NewsListProps} from '../components/NewsList';
export {Props as NewsSlotProps} from '../components/NewsSlot';
export {Props as NewsSlotHeaderProps} from '../components/NewsSlotHeader';
export {Props as ShareFormProps} from '../components/ShareForm';
export {Props as SideMenuProps} from '../components/SideMenu';
export {Props as TabProps} from '../components/Tab';
export {Props as TabBarProps} from '../components/TabBar';
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
