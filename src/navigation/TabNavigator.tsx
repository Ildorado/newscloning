import {
  createMaterialTopTabNavigator,
  NavigationTabScreenProps,
} from 'react-navigation-tabs';
import FavoritesScreen from '../screens/FavoritesScreen';
import HomeScreen from '../screens/HomeScreen';
import TabBar from '../components/TabBar';
interface asd {
  navigation: NavigationTabScreenProps["navigation"];
}
const TabNavigator = createMaterialTopTabNavigator(
  {
    Home: HomeScreen,
    Favorites: FavoritesScreen,
  },
  {
    tabBarComponent: TabBar,
    order: ['Home', 'Favorites'],
    backBehavior: 'none',
  },
);

export default TabNavigator;
