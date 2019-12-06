import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import {useSelector} from 'react-redux';
import {useFetchNews} from '../customHooks/index';
import WidthPoint from '../constants/ScreenWidthPercent';
import CustomText from '../constants/Styles/CustomText';
const CustomDrawerButton = ({navigation, config}) => {
  const FetchNews = useFetchNews(config);
  const focusedDrawerButton = useSelector(state => state.focusedDrawerButton);
  const onPressHandler = () => {
    FetchNews();
    navigation.closeDrawer();
  };
  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={{
        ...styles.Button,
        ...(focusedDrawerButton === config.Name
          ? styles.focused
          : styles.unfocused),
      }}>
      <CustomText h3>{config.Name}</CustomText>
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
  focused: {
    backgroundColor: Colors.tertiary,
  },
  unfocused: {
    backgroundColor: Colors.primary,
  },
});
export default CustomDrawerButton;
