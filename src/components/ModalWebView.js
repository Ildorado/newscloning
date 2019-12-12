import {StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
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
      useNativeDriver={true}
      style={styles.modalContainer}
      animationType="slide"
      animationOut="slideOutDown"
      animationIn="slideInLeft"
      coverScreen={true}
      onBackdropPress={modalOnCancelHandler}>
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
  modalContainer: {
    margin: 0,
    width: '100%',
  },
  webView: {},
  notLoaded: {
    display: 'none',
  },
  loaded: {
    display: 'flex',
    flex: 1,
  },
});
export default ModalWebView;
