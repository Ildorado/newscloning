import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Platform,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {setWebViewConfig} from '../redux/actions/index';
import CustomText from '../constants/Styles/CustomText';
import {WidthPoint, Colors} from '../constants/index';
import NewsSlotHeader from './NewsSlotHeader';
import NewsSlotImage from './Animated/NewsSlotImage';
import Animated from 'react-native-reanimated';
const NewsSlot = ({config, viewableItems}) => {
  const isVisible = viewableItems
    ? viewableItems.hasOwnProperty(config.id)
    : undefined;
  const dispatch = useDispatch();
  const newsSlotPressHandler = () => {
    dispatch(setWebViewConfig(config));
  };
  return (
    <Animated.View style={styles.card}>
      <NewsSlotHeader config={config} />
      <TouchableWithoutFeedback onPress={newsSlotPressHandler}>
        <View style={styles.contentWrapper}>
          <CustomText style={styles.h1} title>
            {config.title}
          </CustomText>
          {config.img &&
            (Platform.OS === 'android' ? (
              <Image style={styles.image} source={{uri: config.img}} />
            ) : (
              <NewsSlotImage
                isVisible={isVisible}
                style={styles.image}
                uri={config.img}
              />
            ))}
          <CustomText style={styles.description} description>
            {config.description}
          </CustomText>
          <CustomText style={styles.published} published>
            {config.published}
          </CustomText>
        </View>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    width: 90 * WidthPoint,
    backgroundColor: Colors.tertiary,
    minHeight: 80 * WidthPoint,
    marginVertical: 3 * WidthPoint,
    marginHorizontal: 3 * WidthPoint,
    borderWidth: 1,
    borderRadius: 3 * WidthPoint,
  },
  image: {
    width: 80 * WidthPoint,
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
