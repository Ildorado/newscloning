import React from 'react';
import {View, StyleSheet} from 'react-native';
import NewsList from '../components/NewsList';
import {Colors} from '../constants/index';
import {useSelector} from 'react-redux';
import {getNewsItems} from '../utilities/selectors/index';
import ModalWebView from '../components/ModalWebView';
const HomeScreen = props => {
  const news = useSelector(getNewsItems);
  return (
    <View style={styles.screen}>
      <ModalWebView />
      <NewsList screenName="Home" data={news} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
});
export default HomeScreen;
