import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';

import {Transition} from 'react-native-reanimated';
import React from 'react';
import AuthScreen from '../screens/AuthScreen';
import DrawerNavigator from './DrawerNavigator';
export default createAppContainer(
  createAnimatedSwitchNavigator(
    {
      App: DrawerNavigator,
      Auth: AuthScreen,
    },
    {
      transition: <Transition.In type="scale" durationMs={500} />,
      initialRouteName: 'Auth',
    },
  ),
);
