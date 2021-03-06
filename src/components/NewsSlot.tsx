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
import {NewsDataProps} from '../typescript/index';

export interface Props {
  config: NewsDataProps;
  viewableItems: any;
  screenName?: string;
}
const NewsSlot: React.FC<Props> = ({config, viewableItems}) => {
  const isVisible = viewableItems
    ? viewableItems.hasOwnProperty(config.id)
    : undefined;
  const dispatch = useDispatch();
  const newsSlotPressHandler = () => {
    console.log('config:', config);
    dispatch(setWebViewConfig(config));
  };

  return (
    <View style={styles.card}>
      <NewsSlotHeader config={config} />
      <TouchableWithoutFeedback onPress={newsSlotPressHandler}>
        <Animated.View style={styles.contentWrapper}>
          <CustomText style={styles.h1} title>
            {config.title}
          </CustomText>
          {config.img &&
            (Platform.OS === 'android' ||
            !config.img.search(/(jpg|jpeg|tiff|png)$/) ? (
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
        </Animated.View>
      </TouchableWithoutFeedback>
    </View>
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
