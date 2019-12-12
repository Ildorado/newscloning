/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import Animated, {Easing} from 'react-native-reanimated';

const {Value, timing} = Animated;

const NewsSlotImage = ({uri, style, isVisible}) => {
  const [opacity] = useState(new Value(0.5));
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
  });
  const [_animIn, _setAnimIn] = useState();
  const [_animOut, _setAnimOut] = useState();
  const [outFinished, setOutFinished] = useState(false);
  useEffect(() => {
    if (isVisible) {
      _setAnimIn(timing(opacity, _configs.in));
    } else {
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
