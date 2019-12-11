import React from 'react';
import {Platform, UIManager} from 'react-native';
import SwitchNavigator from './navigation/SwitchNavigator';

const App = () => {
  if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  return <SwitchNavigator />;
};
export default App;
