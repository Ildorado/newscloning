import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Colors from '../constants/Colors';
const NewsSlot = props => {
  // console.log('props.config:', props.config);
  return (
    <View style={styles.card}>
      <Text style={styles.h1}>{props.config.item.title}</Text>
      {props.config.item.img && (
        <Image style={styles.image} source={{url: props.config.item.img}} />
      )}
      <Text style={styles.description}>{props.config.item.description}</Text>
      <Text style={styles.published}>{props.config.item.published}</Text>
    </View>
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
    width: 200,
    height: 100,
    borderRadius: 8,
    marginTop: 20,
  },
  h1: {
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
  description: {
    fontSize: 14,
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
