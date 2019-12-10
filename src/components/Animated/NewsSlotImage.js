import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import Animated, {Easing} from 'react-native-reanimated';

const {
  Clock,
  Value,
  set,
  cond,
  startClock,
  clockRunning,
  timing,
  debug,
  stopClock,
  block,
} = Animated;
const NewsSlotImage = ({uri, style}) => {
  const [opacity] = useState(new Value(0));
  const [_config] = useState({
    duration: 1000,
    toValue: 1,
    easing: Easing.inOut(Easing.ease),
  });
  const [_anim] = useState(timing(opacity, _config));
  return (
    <Animated.Image
      onLoad={() => {
        _anim.start();
      }}
      style={[
        style,
        {
          opacity: opacity,
          transform: [
            {
              scale: opacity.interpolate({
                inputRange: [0, 1],
                outputRange: [0.85, 1],
              }),
            },
          ],
        },
      ]}
      source={{uri: uri}}
      resizeMethod="scale"
      resizeMode="contain"
    />
  );
};

export default NewsSlotImage;
