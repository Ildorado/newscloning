import React, {useRef, useEffect, useState} from 'react';
import {StyleSheet, SafeAreaView, FlatList, Platform} from 'react-native';
import NewsSlot from './NewsSlot';
import {NewsDataProps} from '../typescript/index';
export interface Props {
  data: NewsDataProps[];
  screenName: string;
}
const NewsList: React.FC<Props> = ({data, screenName}) => {
  const flatListRef = useRef<any>();
  const toTop = () => {
    flatListRef?.current?.scrollToOffset({animated: false, offset: 0});
  };

  useEffect(() => {
    screenName === 'Home' && toTop();
  }, [data, screenName]);

  const [viewableItems, setViewableItems] = useState<{
    [index: string]: boolean;
  }>({});
  const viewabilityConfig = useRef({
    waitForInteraction: false,
    viewAreaCoveragePercentThreshold: 35,
    minimumViewTime: 0,
  });
  const onViewableItemsChanged = useRef(
    Platform.OS === 'android'
      ? () => {}
      : (info: {viewableItems: any[]}) => {
          setViewableItems(
            info.viewableItems.reduce((acc, obj) => {
              acc[obj.key] = true;
              return acc;
            }, {}),
          );
        },
  );
  return (
    <SafeAreaView style={styles.listWrapper}>
      <FlatList
        viewabilityConfig={viewabilityConfig.current}
        onViewableItemsChanged={onViewableItemsChanged.current}
        windowSize={21}
        ref={flatListRef}
        style={styles.list}
        data={data}
        initialNumToRender={3}
        maxToRenderPerBatch={7}
        updateCellsBatchingPeriod={10}
        renderItem={itemData => (
          <NewsSlot
            viewableItems={viewableItems}
            screenName={screenName}
            config={itemData.item}
          />
        )}
        keyExtractor={(itemData: NewsDataProps) => itemData.id}
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
