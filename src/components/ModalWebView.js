import {Modal, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {WebView} from 'react-native-webview';
import NewsSlotHeader from './NewsSlotHeader';
import {useSelector, useDispatch} from 'react-redux';
import {setWebViewVisibility} from '../redux/actions/index';
import LoadingScreen from '../screens/LoadingScreen';
import {WidthPoint} from '../constants/index';
import {
  getWebViewVisibility,
  getWebViewConfig,
} from '../utilities/selectors/index';
const ModalWebView = () => {
  const visibility = useSelector(getWebViewVisibility);
  const webViewConfig = useSelector(getWebViewConfig);
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
      <NewsSlotHeader
        config={webViewConfig}
        modalOnCancel={modalOnCancelHandler}
      />
      <WebView
        onLoadProgress={({nativeEvent}) => {
          setIsLoaded(nativeEvent.progress > 0.7);
        }}
        startInLoadingState={true}
        source={{uri: webViewConfig.id}}
        style={{
          ...styles.webView,
          ...(isLoaded ? styles.loaded : styles.notLoaded),
        }}
        renderLoading={() => !isLoaded && <LoadingScreen />}
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
