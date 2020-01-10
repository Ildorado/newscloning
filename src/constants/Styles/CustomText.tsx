import React from 'react';
import {Text, StyleSheet, TextStyle} from 'react-native';
import {WidthPoint} from '../index';

const firstLevelStyles = StyleSheet.create({
  h1: {
    fontSize: Math.round(6.2 * WidthPoint),
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
  white: {
    color: 'white',
  },
});
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

type StyleKeys = keyof typeof styles;

type CustomStyleProps = {[key in StyleKeys]?: boolean};
interface Props extends CustomStyleProps {
  style?: TextStyle;
}
const CustomText: React.FC<Props> = props => {
  const customStyleKeys = Object.keys(props) as StyleKeys[];
  const customStyle = customStyleKeys.reduce((acc, key) => {
    if (styles[key]) {
      return {
        ...acc,
        ...styles[key],
      };
    }
    return acc;
  }, {});
  return <Text style={{...customStyle, ...props.style}}>{props.children}</Text>;
};

export default CustomText;
