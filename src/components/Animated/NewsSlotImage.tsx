/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import Animated, {Easing} from 'react-native-reanimated';
import {ImageStyle} from 'react-native';
const {Value, timing} = Animated;
export interface Props {
  uri: string;
  style: ImageStyle;
  isVisible: boolean;
}
const NewsSlotImage: React.FC<Props> = ({uri, style, isVisible}) => {
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
  const [_animIn, _setAnimIn] = useState<any>();
  const [_animOut, _setAnimOut] = useState<any>();
  const [outFinished, setOutFinished] = useState(true);
  const [inFinished, setInFinished] = useState(true);
  useEffect(() => {
    if (isVisible) {
      _setAnimIn(timing(opacity, _configs.in));
    } else {
      _setAnimOut(timing(opacity, _configs.out));
    }
  }, [_configs.in, _configs.out, isVisible, opacity]);

  useEffect(() => {
    _animOut && !outFinished && _animOut.stop();
    _animIn &&
      _animIn.start((data: any) => {
        setInFinished(data.finished);
      });
    return () => {
      _animIn && !inFinished && _animIn.stop();
    };
  }, [_animIn]);

  useEffect(() => {
    _animOut &&
      _animOut.start((data: any) => {
        setOutFinished(data.finished);
      });
    return () => {
      _animOut && !outFinished && _animOut.stop();
    };
  }, [_animOut]);
  return (
    // @ts-ignore
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
