import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import WidthPoint from '../constants/ScreenWidthPercent';
import CustomText from '../constants/Styles/CustomText';
const CustomMenuButton = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{...styles.MenuButton, ...props.style}}>
      <CustomText h3>{props.title}</CustomText>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  MenuButton: {
    backgroundColor: Colors.tertiary,
    height: 8 * WidthPoint,
    width: 22 * WidthPoint,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 3 * WidthPoint,
    borderWidth: 1,
    borderColor: 'black',
  },
});
export default CustomMenuButton;
