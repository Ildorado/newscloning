import {View, Text, StyleSheet, Image} from 'react-native';
import React, {Component} from 'react';
// var Spinner = require('react-native-spinkit');
import Spinner from 'react-native-spinkit';

import {WebView} from 'react-native-webview';
const LoadingScreen = props => {
  return (
    <View
      style={{
        flex: 1,
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Spinner type={'Wave'} size={100} />
    </View>
  );
};

export default LoadingScreen;
