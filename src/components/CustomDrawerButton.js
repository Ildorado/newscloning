import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import {fetchNews} from '../redux/actions/index';
import {useDispatch} from 'react-redux';
import WidthPoint from '../constants/ScreenWidthPercent';
import CustomText from '../constants/Styles/CustomText';
const CustomMenuButton = props => {
  const dispatch = useDispatch();
  const onPressHandler = () => {
    fetchNews(props.config, dispatch);
  };
  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={{...styles.Button, ...props.style}}>
      <CustomText h3>{props.config.Name}</CustomText>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  Button: {
    backgroundColor: Colors.primary,
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
});
export default CustomMenuButton;
