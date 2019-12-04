import React from 'react';
import {View, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import NewsSlot from '../components/NewsSlot';
import Colors from '../constants/Colors';
import {useSelector} from 'react-redux';
import ModalWebView from '../components/ModalWebView';
const HomeScreen = props => {
  const news = useSelector(state => state.news.items);
  // console.log('news:', news);
  return (
    <View style={styles.screen}>
      <ModalWebView />
      <SafeAreaView style={styles.listWrapper}>
        <FlatList
          style={styles.list}
          data={news}
          renderItem={itemData => <NewsSlot config={itemData.item} />}
          keyExtractor={itemData => itemData.id}
        />
      </SafeAreaView>
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
