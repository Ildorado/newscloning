import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import Colors from '../constants/Colors';
import {useDispatch} from 'react-redux';
import {setWebViewUri} from '../redux/actions/index';
import CustomText from '../constants/Styles/CustomText';
import WidthPoint from '../constants/ScreenWidthPercent';
const NewsSlot = props => {
  const dispatch = useDispatch();
  const newsSlotPressHandler = () => {
    dispatch(setWebViewUri(props.config.id, dispatch));
  };
  return (
    <TouchableWithoutFeedback onPress={newsSlotPressHandler}>
      <View style={styles.card}>
        <CustomText style={styles.h1} title>
          {props.config.title}
        </CustomText>
        {props.config.img && (
          <Image
            style={styles.image}
            source={{uri: props.config.img}}
            resizeMethod="scale"
            resizeMode="contain"
          />
        )}
        <CustomText style={styles.description} h2>
          {props.config.description}
        </CustomText>
        {/* <Text style={styles.description}>{props.config.description}</Text> */}
        <CustomText style={styles.published} h3>
          {props.config.published}
        </CustomText>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.tertiary,
    minHeight: 80 * WidthPoint,
    marginVertical: 3 * WidthPoint,
    marginHorizontal: 3 * WidthPoint,
    borderWidth: 1,
    borderRadius: 3 * WidthPoint,
  },
  image: {
    width: 80 * WidthPoint,
    height: 40 * WidthPoint,
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
});
export default NewsSlot;
