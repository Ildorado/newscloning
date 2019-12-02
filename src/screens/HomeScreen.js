import React from 'react';
import {View, FlatList, StyleSheet, SafeAreaView} from 'react-native';
import Header from '../components/Header';
import NewsSlot from '../components/NewsSlot';
import Colors from '../constants/Colors';
import {useSelector} from 'react-redux';

const HomeScreen = props => {
  const {navigation} = props;
  console.log('Navigation:', navigation);
  const news = useSelector(state => state.news);
  console.log('news:', news);
  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.listWrapper}>
        <FlatList
          style={styles.list}
          data={news}
          renderItem={itemData => <NewsSlot config={itemData} />}
          keyExtractor={itemData => itemData.id}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    height: '100%',
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
  list: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  listWrapper: {
    flex: 1,
    width: '100%',
  },
});
export default HomeScreen;
