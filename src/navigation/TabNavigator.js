import {createMaterialTopTabNavigator} from 'react-navigation-tabs';
import FavoritesScreen from '../screens/FavoritesScreen';
import HomeScreen from '../screens/HomeScreen';
import TabBar from '../components/TabBar';
const TabNavigator = createMaterialTopTabNavigator(
  {
    Home: HomeScreen,
    Favorites: FavoritesScreen,
  },
  {
    tabBarComponent: TabBar,
  },
);

// export default createAppContainer(myTabNavigator);
export default TabNavigator;
