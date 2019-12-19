import {NavigationTabScreenProps} from 'react-navigation-tabs';
// export interface navigationProps {
//   NavigationTabScreenProps: NavigationTabScreenProps['navigation'];
// }
export type NavigationScreenType = NavigationTabScreenProps['navigation'];
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
