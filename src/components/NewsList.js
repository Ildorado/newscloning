import React from 'react';
import {StyleSheet, SafeAreaView, FlatList} from 'react-native';
import NewsSlot from './NewsSlot';
const NewsList = ({data}) => {
  return (
    <SafeAreaView style={styles.listWrapper}>
      <FlatList
        style={styles.list}
        data={data}
        initialNumToRender={3}
        renderItem={itemData => <NewsSlot config={itemData.item} />}
        keyExtractor={itemData => itemData.id}
      />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  list: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
  },
  listWrapper: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
});
export default NewsList;
