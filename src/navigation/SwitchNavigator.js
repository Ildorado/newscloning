import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {Transition} from 'react-native-reanimated';
import React from 'react';
import AuthScreen from '../screens/AuthScreen';
import DrawerNavigator from './DrawerNavigator';
export default createAppContainer(
  createSwitchNavigator(
    {
      App: DrawerNavigator,
      Auth: AuthScreen,
    },
    {
      transition: <Transition.Out type="slide-bottom" durationMs={400} />,
      // transition: (
      //   <Transition.Together>
      //     <Transition.Out type="slide-bottom" durationMs={400} />
      //     <Transition.In type="fade" durationMs={500} />
      //   </Transition.Together>
      initialRouteName: 'Auth',
    },
  ),
);
