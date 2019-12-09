import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {Colors, WidthPoint} from '../constants/index';
import CustomText from '../constants/Styles/CustomText';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
// FontAwesome5Icon.loadFont();

const CustomAuthButton = ({navigation, style, title}) => {
  return (
    <FontAwesome5Icon
      onPress={() => navigation.navigate('Auth')}
      name="sign-in-alt"
      size={8 * WidthPoint}
      color="gray"
    />
  );
};
const styles = StyleSheet.create({
  MenuButton: {
    backgroundColor: '#45D09E',
    height: 8 * WidthPoint,
    width: 10 * WidthPoint,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 3 * WidthPoint,
    borderWidth: 1,
    borderColor: 'black',
  },
});
export default CustomAuthButton;
