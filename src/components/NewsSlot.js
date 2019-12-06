import React from 'react';
import {View, StyleSheet, Image, TouchableWithoutFeedback} from 'react-native';
import Colors from '../constants/Colors';
import {useDispatch} from 'react-redux';
import {setWebViewConfig} from '../redux/actions/index';
import CustomText from '../constants/Styles/CustomText';
import WidthPoint from '../constants/ScreenWidthPercent';
import NewsSlotHeader from './NewsSlotHeader';
const NewsSlot = ({config}) => {
  const dispatch = useDispatch();
  const newsSlotPressHandler = () => {
    dispatch(setWebViewConfig(config, dispatch));
  };
  return (
    <View style={styles.card}>
      <NewsSlotHeader config={config} />
      <TouchableWithoutFeedback onPress={newsSlotPressHandler}>
        <View style={styles.contentWrapper}>
          <CustomText style={styles.h1} title>
            {config.title}
          </CustomText>
          {config.img && (
            <Image
              style={styles.image}
              source={{uri: config.img}}
              resizeMethod="scale"
              resizeMode="contain"
            />
          )}
          <CustomText style={styles.description} description>
            {config.description}
          </CustomText>
          <CustomText style={styles.published} published>
            {new Date(config.published).toUTCString()}
          </CustomText>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};
const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: Colors.tertiary,
    minHeight: 80 * WidthPoint,
    marginVertical: 3 * WidthPoint,
    marginHorizontal: 3 * WidthPoint,
    borderWidth: 1,
    borderRadius: 3 * WidthPoint,
  },
  image: {
    width: 100 * WidthPoint,
    height: 50 * WidthPoint,
    marginTop: 5 * WidthPoint,
  },
  h1: {
    marginHorizontal: 5 * WidthPoint,
  },
  description: {
    marginVertical: 3 * WidthPoint,
    marginHorizontal: 3 * WidthPoint,
  },
  published: {
    marginVertical: 3 * WidthPoint,
    marginHorizontal: 3 * WidthPoint,
  },
  contentWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default NewsSlot;
