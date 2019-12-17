import {StyleSheet} from 'react-native';
import React from 'react';
import {WidthPoint} from '../../constants/index';
import CustomText from '../../constants/Styles/CustomText';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
MaterialIcons.loadFont();
const ToApp = ({goToApp}) => {
  return (
    <MaterialIcons.Button
      name="exit-to-app"
      backgroundColor="green"
      style={styles.button}
      onPress={goToApp}>
      <CustomText h2 white>
        Go to App
      </CustomText>
    </MaterialIcons.Button>
  );
};
const styles = StyleSheet.create({
  button: {
    height: 10 * WidthPoint,
    width: 70 * WidthPoint,
    justifyContent: 'center',
  },
});

export default ToApp;
