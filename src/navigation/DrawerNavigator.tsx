import {createDrawerNavigator} from 'react-navigation-drawer';
import SideMenu from '../components/SideMenu';
import TabNavigator from './TabNavigator';
const Drawer = createDrawerNavigator(
  {
    Home: TabNavigator,
  },
  // @ts-ignore
  {
    contentComponent: SideMenu,
    drawerWidth: '50%',
  },
);
export default Drawer;
