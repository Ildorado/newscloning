/* eslint-disable react-hooks/exhaustive-deps */
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
  decay,
  debug,
  stopClock,
  block,
} = Animated;

const NewsSlotImage = ({uri, style, isVisible}) => {
  const [opacity, setOpacity] = useState(new Value(0.5));
  const [_configs] = useState({
    in: {
      duration: 700,
      toValue: 1,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    },
    out: {
      duration: 700,
      toValue: 0.5,
      easing: Easing.inOut(Easing.ease),
      useNativeDriver: true,
    },
    // inSlowly: {
    //   duration: 2000,
    //   toValue: 0.5,
    //   easing: Easing.inOut(Easing.ease),
    // },
  });
  const [_animIn, _setAnimIn] = useState();
  const [_animOut, _setAnimOut] = useState();
  const [outFinished, setOutFinished] = useState(false);
  // const [_animInSlowly, _setAnimInSlowly] = useState();
  const [onLoading, setOnLoading] = useState(false);
  useEffect(() => {
    // if (onLoading === true && isVisible === false) {
    //   _setAnimInSlowly(timing(opacity, _configs.inSlowly));
    // } else
    if (isVisible === true) {
      _setAnimIn(timing(opacity, _configs.in));
    } else if (isVisible === false) {
      _setAnimOut(timing(opacity, _configs.out));
    }
  }, [_configs.in, _configs.out, isVisible, opacity, _configs.inSlowly]);
  useEffect(() => {
    _animOut && outFinished === false && _animOut.stop();
    _animIn && _animIn.start();
  }, [_animIn]);
  useEffect(() => {
    _animOut && _animOut.start(data => setOutFinished(data.finished));
  }, [_animOut]);
  // useEffect(() => {
  //   _animInSlowly && _animInSlowly.start();
  //   setOnLoading(false);
  // }, [_animInSlowly]);

  return (
    <Animated.Image
      // onLoadEnd={() => setOnLoading(true)}
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
