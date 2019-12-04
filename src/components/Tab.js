import React from 'react';
import {StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import CustomMenuButton from '../components/CustomMenuButton';
import Colors from '../constants/Colors';
import WidthPoint from '../constants/ScreenWidthPercent';
const Tab = ({title, onPress}) => {
  const focusedTabTitle = useSelector(state => state.focusedTabTitle);
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
    padding: 3 * WidthPoint,
    borderRadius: 10,
    width: 27 * WidthPoint,
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
    fontSize: 5 * WidthPoint,
  },
});
export default Tab;
