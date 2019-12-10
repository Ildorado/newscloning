import React, {useState, useEffect, useRef} from 'react';
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

const NewsSlotImage = ({uri, style, isVisible}) => {
  const [opacity, setOpacity] = useState(new Value(0));
  const [_configs] = useState({
    in: {
      duration: 1000,
      toValue: 1,
      easing: Easing.inOut(Easing.ease),
    },
    out: {
      duration: 1000,
      toValue: 0,
      easing: Easing.inOut(Easing.ease),
    },
  });
  const [_animIn, _setAnimIn] = useState();
  const [_animOut, _setAnimOut] = useState();
  useEffect(() => {
    if (isVisible === true) {
      _setAnimIn(timing(opacity, _configs.in));
    } else {
      _setAnimOut(timing(opacity, _configs.out));
    }
  }, [_configs.in, _configs.out, isVisible, opacity]);
  useEffect(() => {
    _animIn && _animIn.start();
  }, [_animIn]);
  useEffect(() => {
    _animOut && _animOut.start();
  }, [_animOut]);

  return (
    <Animated.Image
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
