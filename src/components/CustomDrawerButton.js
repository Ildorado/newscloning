import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import * as rssParser from 'react-native-rss-parser';
import {setNews, fetchNews} from '../redux/actions/index';
import {useDispatch} from 'react-redux';
const CustomMenuButton = props => {
  const dispatch = useDispatch();
  const onPressHandler = () => {
    fetchNews(props.config, dispatch);
  };
  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={{...styles.Button, ...props.style}}>
      <Text>{props.config.Name}</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  Button: {
    backgroundColor: Colors.primary,
    height: 35,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'black',
  },
});
export default CustomMenuButton;
