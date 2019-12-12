import React from 'react';
import {StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import CustomMenuButton from '../components/CustomMenuButton';
import {WidthPoint, Colors} from '../constants/index';
import {setFocusedTabTitle} from '../redux/actions/index';
import {getFocusedTabTitle} from '../utilities/selectors/index';
const Tab = ({title}) => {
  const focusedTabTitle = useSelector(getFocusedTabTitle);
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
    backgroundColor: Colors.primary,
  },
  unfocused: {
    backgroundColor: Colors.tertiary,
  },
  text: {
    fontSize: 5 * WidthPoint,
  },
});
export default Tab;
