import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Header from './Header';
import Drawer from './Drawer';
import FavoritesScreen from '../screens/FavoritesScreen';
const myTabNavigator = createBottomTabNavigator(
  {
    Home: Drawer,
    Favorites: FavoritesScreen,
  },
  {
    contentComponent: Header,
  },
);
export default createAppContainer(myTabNavigator);
