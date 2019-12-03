import {Modal} from 'react-native';
import React from 'react';
import {WebView} from 'react-native-webview';
import ModalHeader from './ModalHeader';
import {useSelector, useDispatch} from 'react-redux';
import {setWebViewVisibility} from '../redux/actions/index';

const ModalWebView = () => {
  const visibility = useSelector(state => state.webView.visibility);
  const webViewUri = useSelector(state => state.webView.uri);
  const dispatch = useDispatch();
  const modalOnCancelHandler = () => {
    dispatch(setWebViewVisibility(false));
  };
  console.log('visiility:', visibility);
  return (
    <Modal
      onRequestClose={modalOnCancelHandler}
      visible={visibility}
      style={{flex: 1}}>
      <ModalHeader onCancel={modalOnCancelHandler} />
      <WebView source={{uri: webViewUri}} style={{marginTop: 20}} />
    </Modal>
  );
};

export default ModalWebView;
