import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import {fetchNews} from '../redux/actions/index';
import {useDispatch, useSelector} from 'react-redux';
import {SetFocusedDrawerButton} from '../redux/actions/index';
import WidthPoint from '../constants/ScreenWidthPercent';
import CustomText from '../constants/Styles/CustomText';
const CustomMenuButton = props => {
  const dispatch = useDispatch();
  const focusedDrawerButton = useSelector(state => state.focusedDrawerButton);
  const onPressHandler = () => {
    fetchNews(props.config, dispatch);
    dispatch(SetFocusedDrawerButton(props.config.Name));
  };
  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={{
        ...styles.Button,
        ...(focusedDrawerButton === props.config.Name
          ? styles.focused
          : styles.unfocused),
      }}>
      <CustomText h3>{props.config.Name}</CustomText>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  Button: {
    height: 9 * WidthPoint,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3 * WidthPoint,
    borderRadius: 3 * WidthPoint,
    paddingHorizontal: 3 * WidthPoint,
    borderWidth: 1,
    borderColor: 'black',
  },
  focused: {
    backgroundColor: Colors.tertiary,
  },
  unfocused: {
    backgroundColor: Colors.primary,
  },
});
export default CustomMenuButton;
