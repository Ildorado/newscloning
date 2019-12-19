import React from 'react';
import {TouchableOpacity, StyleSheet, ViewStyle} from 'react-native';
import {Colors, WidthPoint} from '../constants/index';
import CustomText from '../constants/Styles/CustomText';
interface Props {
  onPress: () => void;
  title: string;
  style?: ViewStyle;
}
const CustomMenuButton: React.FC<Props> = ({onPress, title, style}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{...styles.MenuButton, ...style}}>
      <CustomText h3>{title}</CustomText>
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
