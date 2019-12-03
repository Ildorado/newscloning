import {View, Text, StyleSheet, Image, Modal} from 'react-native';
import React, {Component} from 'react';
import {WebView} from 'react-native-webview';
import ModalHeader from './ModalHeader';
const ModalWebView = props => {
  console.log('props:', props);

  return (
    <Modal visible={props.visible} style={{flex: 1}}>
      <ModalHeader onCancel={props.onCancel} />
      <WebView source={{uri: props.uri}} style={{marginTop: 20}} />
    </Modal>
  );
};

export default ModalWebView;
