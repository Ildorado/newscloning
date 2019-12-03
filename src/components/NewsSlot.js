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
const NewsSlot = props => {
  const dispatch = useDispatch();
  const newsSlotPressHandler = () => {
    dispatch(setWebViewUri(props.config.id, dispatch));
  };
  return (
    <TouchableWithoutFeedback onPress={newsSlotPressHandler}>
      <View style={styles.card}>
        <Text style={styles.h1}>{props.config.title}</Text>
        {props.config.img && (
          <Image
            style={styles.image}
            source={{uri: props.config.img}}
            resizeMethod="scale"
            resizeMode="contain"
          />
        )}
        <Text style={styles.description}>{props.config.description}</Text>
        <Text style={styles.published}>{props.config.published}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.tertiary,
    minHeight: 300,
    marginVertical: 10,
    marginHorizontal: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  image: {
    width: 300,
    height: 150,
    marginTop: 20,
  },
  h1: {
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  description: {
    fontSize: 16,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  published: {
    fontSize: 14,
    marginVertical: 10,
    marginHorizontal: 10,
  },
});
export default NewsSlot;
