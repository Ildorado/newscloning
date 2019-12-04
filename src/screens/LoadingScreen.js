import {View, StyleSheet} from 'react-native';
import React from 'react';
import Spinner from 'react-native-spinkit';
import WidthPoint from '../constants/ScreenWidthPercent';
const LoadingScreen = props => {
  return (
    <View style={styles.screen}>
      <Spinner type={'Wave'} size={30 * WidthPoint} />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default LoadingScreen;
