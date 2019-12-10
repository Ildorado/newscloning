import React, {useRef, useEffect} from 'react';
import {StyleSheet, SafeAreaView, FlatList} from 'react-native';
import {useDispatch} from 'react-redux';
import {setViewableItems} from '../redux/actions/index';
import NewsSlot from './NewsSlot';
const NewsList = ({data}) => {
  const dispatch = useDispatch();
  const flatListRef = useRef();

  const toTop = () => {
    flatListRef.current.scrollToOffset({animated: false, offset: 0});
  };

  useEffect(() => {
    toTop();
  }, [data]);

  const viewabilityConfig = useRef({
    waitForInteraction: false,
    viewAreaCoveragePercentThreshold: 35,
  });

  const onViewableItemsChanged = useRef(info => {
    dispatch(
      setViewableItems(
        info.viewableItems.reduce((acc, obj) => {
          acc[obj.key] = true;
          return acc;
        }, {}),
      ),
    );
  });

  return (
    <SafeAreaView style={styles.listWrapper}>
      <FlatList
        removeClippedSubviews
        viewabilityConfig={viewabilityConfig.current}
        onViewableItemsChanged={onViewableItemsChanged.current}
        windowSize={11}
        ref={flatListRef}
        style={styles.list}
        data={data}
        initialNumToRender={3}
        maxToRenderPerBatch={2}
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
