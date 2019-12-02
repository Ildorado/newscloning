import {createDrawerNavigator} from 'react-navigation-drawer';
import HomeScreen from '../screens/HomeScreen';
import {createAppContainer} from 'react-navigation';
import React from 'react';
import SideMenu from '../components/SideMenu';

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
  },
  {
    contentComponent: SideMenu,
    drawerWidth: '50%',
  },
);

export default createAppContainer(MyDrawerNavigator);
