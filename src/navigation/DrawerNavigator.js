import {createDrawerNavigator} from 'react-navigation-drawer';
import SideMenu from '../components/SideMenu';
import {createAppContainer} from 'react-navigation';
import TabNavigator from './TabNavigator';
const Drawer = createDrawerNavigator(
  {
    Home: TabNavigator,
  },
  {
    contentComponent: SideMenu,
    drawerWidth: '50%',
  },
);
// export default Drawer;
export default createAppContainer(Drawer);
