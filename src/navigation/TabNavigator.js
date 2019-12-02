import {createAppContainer} from 'react-navigation';
import {
  createBottomTabNavigator,
  createMaterialTopTabNavigator,
} from 'react-navigation-tabs';
import Header from '../components/Header';
// import Drawer from './DrawerNavigator';
import FavoritesScreen from '../screens/FavoritesScreen';
import HomeScreen from '../screens/HomeScreen';
import TabBar from '../components/TabBar';
const myTabNavigator = createMaterialTopTabNavigator(
  {
    Home: HomeScreen,
    Favorites: FavoritesScreen,
  },
  {
    tabBarComponent: TabBar,
  },
);
// export default createAppContainer(myTabNavigator);
export default myTabNavigator;
