import React, {useState, useEffect} from 'react';
import {View, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {useDispatch} from 'react-redux';
import {setWebViewConfig} from '../redux/actions/index';
import CustomText from '../constants/Styles/CustomText';
import {WidthPoint, Colors} from '../constants/index';
import NewsSlotHeader from './NewsSlotHeader';
import NewsSlotImage from './Animated/NewsSlotImage';
import {useSelector} from 'react-redux';
import {getViewableItems} from '../utilities/selectors/index';
import Animated, {Easing} from 'react-native-reanimated';
const {
  Clock,
  Value,
  set,
  cond,
  startClock,
  clockRunning,
  timing,
  decay,
  debug,
  stopClock,
  block,
} = Animated;
const NewsSlot = ({config, screenName}) => {
  const viewableItems = useSelector(getViewableItems(screenName));
  const dispatch = useDispatch();
  const newsSlotPressHandler = () => {
    dispatch(setWebViewConfig(config));
  };
  const isVisible = viewableItems
    ? viewableItems.hasOwnProperty(config.id)
    : undefined;

  const [_config] = useState({
    delete: {
      duration: 500,
      toValue: WidthPoint * 90,
      easing: Easing.inOut(Easing.ease),
    },
  });
  const [_transX, _setTransX] = useState(new Value(0));
  const [_animIn, _setAnimIn] = useState();
  const onUnfavorite =
    screenName === 'Favorite'
      ? func => {
          _setAnimIn(
            timing(_transX, _config.delete).start(data => {
              if (data.finished) {
                console.log('func:', func);
                func();
              }
            }),
          );
        }
      : false;
  return (
    <Animated.View
      style={[
        styles.card,
        {
          transform: [
            {translateX: _transX},
            {perspective: 1000}, // without this line this Animation will not render on Android while working fine on iOS
          ],
        },
      ]}>
      <NewsSlotHeader config={config} onUnfavorite={onUnfavorite} />
      <TouchableWithoutFeedback onPress={newsSlotPressHandler}>
        <View style={styles.contentWrapper}>
          <CustomText style={styles.h1} title>
            {config.title}
          </CustomText>
          {config.img && (
            <NewsSlotImage
              isVisible={isVisible}
              style={styles.image}
              uri={config.img}
            />
          )}
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
