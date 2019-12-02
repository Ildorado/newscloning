import React from 'react';
import {StyleSheet, Animated, TouchableOpacity} from 'react-native';
import {useSelector, useEffect} from 'react-redux';
import Colors from '../constants/Colors';
const Tab = ({focusAnim, title, onPress}) => {
  console.log('focusAnim:', focusAnim);
  // const color = new Animated.Value(focusAnim).interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ['transparent', 'tomato'],
  // });
  //title === focusedTabTitle ? styles.focused : styles.unfocused
  const focusedTabTitle = useSelector(state => state.focusedTabTitle);
  console.log('focusedTabTitle', focusedTabTitle);
  console.log(title === focusedTabTitle ? 'orange' : 'notOrange');
  const additionalStyles =
    title === focusedTabTitle ? styles.focused : styles.unfocused;
  return (
    <TouchableOpacity onPress={onPress}>
      <Animated.View
        style={{
          ...styles.Tab,
          ...additionalStyles,
        }}>
        <Animated.Text style={styles.text}>{title}</Animated.Text>
      </Animated.View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  Tab: {
    padding: 10,
    borderRadius: 10,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
  },
  focused: {
    backgroundColor: Colors.tertiary,
  },
  unfocused: {
    backgroundColor: Colors.primary,
  },
  text: {
    fontSize: 18,
  },
});
export default Tab;
