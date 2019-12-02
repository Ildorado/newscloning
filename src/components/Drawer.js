import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from '../screens/HomeScreen';
import SideMenu from '../components/SideMenu';

const Drawer = createDrawerNavigator(
  {
    HomeScreen: HomeScreen,
  },
  {
    contentComponent: SideMenu,
    drawerWidth: '50%',
  },
);
export default Drawer;
