import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
const CustomMenuButton = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{...styles.MenuButton, ...props.style}}>
      <Text>{props.title}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  MenuButton: {
    backgroundColor: Colors.tertiary,
    height: 30,
    width: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
});
export default CustomMenuButton;
