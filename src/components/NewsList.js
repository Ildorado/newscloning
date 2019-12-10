import React, {useRef, useEffect} from 'react';
import {StyleSheet, SafeAreaView, FlatList} from 'react-native';
import NewsSlot from './NewsSlot';
const NewsList = ({data}) => {
  const flatListRef = useRef();
  const toTop = () => {
    flatListRef.current.scrollToOffset({animated: true, offset: 0});
  };
  useEffect(() => {
    toTop();
  }, [data]);
  return (
    <SafeAreaView style={styles.listWrapper}>
      <FlatList
        ref={flatListRef}
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
