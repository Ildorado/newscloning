import React from 'react';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import CustomMenuButton from '../components/CustomMenuButton';
import Colors from '../constants/Colors';
const Tab = ({focusAnim, title, onPress}) => {
  console.log('focusAnim:', focusAnim);
  const focusedTabTitle = useSelector(state => state.focusedTabTitle);
  console.log('focusedTabTitle:', focusedTabTitle);
  return (
    <CustomMenuButton
      title={title}
      style={title === focusedTabTitle ? styles.focused : styles.unfocused}
      onPress={onPress}
    />
  );
};
const styles = StyleSheet.create({
  Tab: {
    padding: 10,
    borderRadius: 10,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  focused: {
    backgroundColor: Colors.tertiary,
  },
  unfocused: {
    backgroundColor: Colors.primary,
  },
  text: {
    fontSize: 18,
  },
});
export default Tab;
