import React from 'react';
import {StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import CustomMenuButton from '../components/CustomMenuButton';
import Colors from '../constants/Colors';
import WidthPoint from '../constants/ScreenWidthPercent';
import {setFocusedTabTitle} from '../redux/actions/index';
const Tab = ({title}) => {
  const focusedTabTitle = useSelector(state => state.focusedTabTitle);
  const dispatch = useDispatch();
  const TabOnPressHandler = () => {
    dispatch(setFocusedTabTitle(title));
  };

  return (
    <CustomMenuButton
      title={title}
      style={title === focusedTabTitle ? styles.focused : styles.unfocused}
      onPress={TabOnPressHandler}
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
