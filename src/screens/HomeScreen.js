import React from 'react';
import {View, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import NewsSlot from '../components/NewsSlot';
import NewsList from '../components/NewsList';
import Colors from '../constants/Colors';
import {useSelector} from 'react-redux';
import ModalWebView from '../components/ModalWebView';
const HomeScreen = props => {
  const news = useSelector(state => state.news.items);
  return (
    <View style={styles.screen}>
      <ModalWebView />
      <NewsList data={news} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
  list: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  listWrapper: {
    flex: 1,
    width: '100%',
  },
});
export default HomeScreen;
