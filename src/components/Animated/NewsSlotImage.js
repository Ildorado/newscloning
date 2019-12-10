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

// function usePrevious(value) {
//   const ref = useRef();
//   useEffect(() => {
//     ref.current = value;
//   });
//   return ref.current;
// }

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
      // setOpacity(new Value(0));
      _setAnimIn(timing(opacity, _configs.in));
      // _animIn && _animIn.start();
      // _animOut && _animOut.stop();
    } else {
      // setOpacity(new Value(1));
      _setAnimOut(timing(opacity, _configs.out));
      // _animOut && _animOut.start();
      // _animIn && _animIn.stop();
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
