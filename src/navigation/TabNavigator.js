import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Header from '../components/Header';
// import Drawer from './DrawerNavigator';
import FavoritesScreen from '../screens/FavoritesScreen';
import HomeScreen from '../screens/HomeScreen';
const myTabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Favorites: FavoritesScreen,
  },
  {
    contentComponent: Header,
  },
);
// export default createAppContainer(myTabNavigator);
export default myTabNavigator;
