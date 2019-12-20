import React, {useEffect} from 'react';
import {Platform, UIManager} from 'react-native';
import SwitchNavigator from './navigation/SwitchNavigator';

const App: React.FC = () => {
  useEffect(() => {
    if (
      Platform.OS === 'android' &&
      UIManager.setLayoutAnimationEnabledExperimental
    ) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    return () => {
      if (
        Platform.OS === 'android' &&
        UIManager.setLayoutAnimationEnabledExperimental
      ) {
        UIManager.setLayoutAnimationEnabledExperimental(false);
      }
    };
  }, []);

  return <SwitchNavigator />;
};
export default App;
