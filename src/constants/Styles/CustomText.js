import React from 'react';
import {Text, StyleSheet} from 'react-native';
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
    fontFamily: 'Gupter',
  },
  h2: {
    fontSize: Math.round(4.5 * WidthPoint),
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
    fontFamily: 'Lora-BoldItalic',
    textAlign: 'center',
  },
  description: {
    ...firstLevelStyles.h2,
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
  },
  published: {
    ...firstLevelStyles.h3,
    fontFamily: 'OpenSans-Italic',
    textAlign: 'center',
  },
});
export default CustomText;
