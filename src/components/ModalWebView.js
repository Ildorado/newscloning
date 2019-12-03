import {Modal} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';
import ModalHeader from './ModalHeader';
import {useSelector} from 'react-redux';
const ModalWebView = () => {
  const visibility = useSelector(state => state.webView.visibility);
  const webViewUri = useSelector(state => state.webView.uri);
  console.log('visiility:', visibility);
  return (
    <Modal visible={visibility} style={{flex: 1}}>
      <ModalHeader />
      <WebView source={{uri: webViewUri}} style={{marginTop: 20}} />
    </Modal>
  );
};

export default ModalWebView;
