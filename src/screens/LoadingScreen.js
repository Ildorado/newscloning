import {View, StyleSheet} from 'react-native';
import {MaterialIndicator} from 'react-native-indicators';

import React from 'react';
import WidthPoint from '../constants/ScreenWidthPercent';
const LoadingScreen = props => {
  return (
    <View style={styles.screen}>
      <MaterialIndicator color-="black" size={WidthPoint * 30} />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
export default LoadingScreen;
