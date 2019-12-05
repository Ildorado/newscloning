import React, {useState, useEffect} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Colors from '../constants/Colors';
import IconEntypo from 'react-native-vector-icons/Entypo';
import WidthPoint from '../constants/ScreenWidthPercent';
import IconFontisto from 'react-native-vector-icons/Fontisto';
import {useSelector, useDispatch} from 'react-redux';
import {addToFavorites, deleteFromFavorites} from '../redux/actions/index';
IconEntypo.loadFont();
IconFontisto.loadFont();
const Header = ({config, onCancel}) => {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.favorites);
  const [isFavorite, setIsFavorite] = useState(false);
  useEffect(() => {
    setIsFavorite(config.id in favorites);
  }, [config, favorites]);
  const modalOnFavoritelHandler = () => {
    console.log('isFavorite:', isFavorite);
    if (isFavorite) {
      dispatch(deleteFromFavorites(config.id));
    } else {
      dispatch(addToFavorites(config));
    }
  };
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.firstIconGroup}>
        <IconEntypo
          onPress={onCancel}
          name="squared-cross"
          size={30}
          color="black"
        />
      </View>
      <View style={styles.secondIconGroup}>
        <IconFontisto
          onPress={modalOnFavoritelHandler}
          name="favorite"
          size={30}
          color={isFavorite ? 'black' : Colors.primary}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.secondary,
    height: '10%',
    width: '100%',
    minHeight: 16 * WidthPoint,
  },
  firstIconGroup: {
    marginLeft: 3 * WidthPoint,
  },
  secondIconGroup: {
    marginRight: 3 * WidthPoint,
  },
  MenuButton: {
    marginTop: 8 * WidthPoint,
    marginLeft: 3 * WidthPoint,
  },
});
export default Header;
