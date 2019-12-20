import {createAppContainer} from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import {Transition} from 'react-native-reanimated';
import React from 'react';
import AuthScreen from '../screens/AuthScreen';
import DrawerNavigator from './DrawerNavigator';
export default createAppContainer(
  //@ts-ignore
  createAnimatedSwitchNavigator(
    {
      Auth: AuthScreen,
      App: DrawerNavigator,
    },
    {
      transition: <Transition.In type="scale" durationMs={700} />,
      defaultNavigationOptions: {
        gesturesEnabled: false,
      },
      initialRouteName: 'Auth',
      backBehavior: 'order',
      resetOnBlur: false,
    },
  ),
);
