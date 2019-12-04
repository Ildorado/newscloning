import {Modal, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {WebView} from 'react-native-webview';
import ModalHeader from './ModalHeader';
import {useSelector, useDispatch} from 'react-redux';
import {setWebViewVisibility} from '../redux/actions/index';
import LoadingScreen from '../screens/LoadingScreen';
import WidthPoint from '../constants/ScreenWidthPercent';
const ModalWebView = () => {
  const visibility = useSelector(state => state.webView.visibility);
  const webViewUri = useSelector(state => state.webView.uri);
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch();
  const modalOnCancelHandler = () => {
    dispatch(setWebViewVisibility(false));
  };
  return (
    <Modal
      onRequestClose={modalOnCancelHandler}
      visible={visibility}
      style={styles.modalContainer}>
      <ModalHeader onCancel={modalOnCancelHandler} />
      {!isLoaded && <LoadingScreen />}
      <WebView
        onLoadProgress={({nativeEvent}) => {
          setIsLoaded(nativeEvent.progress > 0.6);
        }}
        source={{uri: webViewUri}}
        style={{
          ...styles.webView,
          ...(isLoaded ? styles.loaded : styles.notLoaded),
        }}
      />
    </Modal>
  );
};
const styles = StyleSheet.create({
  modalContainer: {},
  webView: {marginTop: 5 * WidthPoint},
  notLoaded: {
    display: 'none',
  },
  loaded: {
    display: 'flex',
    flex: 1,
  },
});
export default ModalWebView;
