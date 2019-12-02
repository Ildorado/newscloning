import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import XMLParser from 'react-xml-parser';
import * as rssParser from 'react-native-rss-parser';
import {setNews} from '../redux/actions/index';
import {useDispatch} from 'react-redux';
const CustomMenuButton = props => {
  // let parser = new Parser();
  const dispatch = useDispatch();
  const onPressHandler = () => {
    fetch(props.config.src)
      .then(response => response.text())
      .then(responseData => rssParser.parse(responseData))
      .then(rss => {
        console.log('rss.title:', rss.title);
        console.log('rss:', rss);
        return rss.items;
      })
      .then(items => {
        let news = [];
        items.forEach(el => {
          news.push(props.config.infoHandler(el));
        });
        return news;
      })
      .then(news => {
        dispatch(setNews(news));
      });
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
