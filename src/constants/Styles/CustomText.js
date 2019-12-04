import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import WidthPoint from '../ScreenWidthPercent';
const CustomText = props => {
  let additionalStyles = {};
  const styleProps = Object.getOwnPropertyNames(props).filter(
    el => el !== 'children' && el !== 'style',
  );
  styleProps.forEach(el => {
    additionalStyles = {...additionalStyles, ...styles[el]};
  });
  return (
    <Text style={{...props.style, ...additionalStyles}}>{props.children}</Text>
  );
};
const firstLevelStyles = {
  h1: {
    fontSize: Math.round(6.2 * WidthPoint),
  },
  h2: {
    fontSize: Math.round(4.2 * WidthPoint),
  },
  h3: {
    fontSize: Math.round(3.75 * WidthPoint),
  },
  bold: {
    fontWeight: 'bold',
  },
};
const styles = StyleSheet.create({
  ...firstLevelStyles,
  title: {
    ...firstLevelStyles.h1,
    ...firstLevelStyles.bold,
  },
});
export default CustomText;
