import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchNews} from '../redux/actions/index';
import {WidthPoint, Colors} from '../constants/index';
import CustomText from '../constants/Styles/CustomText';
import {getFocusedDrawerButton} from '../utilities/selectors/index';
const CustomDrawerButton = ({navigation, config, name}) => {
  const dispatch = useDispatch();
  const focusedDrawerButton = useSelector(getFocusedDrawerButton);
  const onPressHandler = () => {
    dispatch(fetchNews(config));
    navigation.closeDrawer();
  };
  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={{
        ...styles.Button,
        ...(focusedDrawerButton === name ? styles.focused : styles.unfocused),
      }}>
      <CustomText h3>{name}</CustomText>
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
    paddingHorizontal: 3 * WidthPoint,
  },
  unfocused: {
    backgroundColor: Colors.tertiary,
  },
  focused: {
    backgroundColor: Colors.primary,
  },
});
export default CustomDrawerButton;
