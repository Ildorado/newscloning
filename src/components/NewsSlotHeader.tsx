import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  LayoutAnimation,
  ViewStyle,
} from 'react-native';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import {WidthPoint, Colors} from '../constants/index';
import {useDispatch} from 'react-redux';
import {addToFavorites, deleteFromFavorites} from '../redux/actions/index';
import Share from 'react-native-share';
import {useIsFavorite} from '../utilities/customHooks/index';
import ShareForm from './ShareForm';
IconEntypo.loadFont();
IconFontisto.loadFont();
export interface Props {
  config: any;
  modalOnCancel?(): void;
  style?: ViewStyle;
}
const Header: React.FC<Props> = ({config, modalOnCancel, style}) => {
  const dispatch = useDispatch();
  const isFavorite = useIsFavorite(config);
  const [shareModalVisibility, setShareModalVisibility] = useState(false);
  const modalOnFavoritelHandler = () => {
    if (isFavorite) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      dispatch(deleteFromFavorites(config.id));
    } else {
      dispatch(addToFavorites(config));
    }
  };
  const onShareHandler = () => {
    setShareModalVisibility(true);
    // Share.open({url: config.id});
  };
  return (
    <SafeAreaView
      style={
        modalOnCancel
          ? {...styles.header, ...styles.modal, ...style}
          : {...styles.header, ...styles.noModal, ...style}
      }>
      <ShareForm
        onSubmit={(values: {title: string; message: string}) => {
          const {title, message} = values;
          Share.open({
            url: config.id,
            title: title,
            message: message,
          }).finally(() => setShareModalVisibility(false));
        }}
        shareModalVisibility={shareModalVisibility}
        onCancelHandler={() => setShareModalVisibility(false)}
      />
      {modalOnCancel && (
        <View style={styles.firstIconGroup}>
          <IconEntypo
            onPress={modalOnCancel}
            name="squared-cross"
            size={8 * WidthPoint}
            color="black"
          />
        </View>
      )}
      <View style={styles.secondIconGroup}>
        <IconFontisto
          style={styles.secondIconGroupIcon}
          onPress={onShareHandler}
          name="share"
          size={8 * WidthPoint}
          color={Colors.primary}
        />
        <IconFontisto
          style={styles.secondIconGroupIcon}
          onPress={modalOnFavoritelHandler}
          name="favorite"
          size={8 * WidthPoint}
          color={isFavorite ? 'black' : Colors.primary}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: Colors.secondary,
    justifyContent: 'space-between',
    height: '10%',
    minHeight: 16 * WidthPoint,
  },
  noModal: {
    height: 13 * WidthPoint,
    justifyContent: 'flex-end',
  },
  firstIconGroup: {
    marginLeft: 3 * WidthPoint,
  },
  secondIconGroup: {
    flexDirection: 'row',
    marginRight: 3 * WidthPoint,
  },
  secondIconGroupIcon: {
    marginRight: 3 * WidthPoint,
  },
  MenuButton: {
    marginTop: 8 * WidthPoint,
    marginLeft: 3 * WidthPoint,
  },
});
export default Header;
