import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from '../screens/HomeScreen';
import SideMenu from '../components/SideMenu';
import {createAppContainer} from 'react-navigation';
import myTabNavigator from './TabNavigator';
const Drawer = createDrawerNavigator(
  {
    Home: myTabNavigator,
  },
  {
    contentComponent: SideMenu,
    drawerWidth: '50%',
  },
);
// export default Drawer;
export default createAppContainer(Drawer);
