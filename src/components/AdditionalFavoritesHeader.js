import {View, StyleSheet} from 'react-native';
import React from 'react';
import IconEntypo from 'react-native-vector-icons/Entypo';
import WidthPoint from '../constants/ScreenWidthPercent';
import {useDispatch} from 'react-redux';
import {deleteFromFavorites} from '../redux/actions/index';
IconEntypo.loadFont();
const AdditionalFavoritesHeader = ({config}) => {
  const dispatch = useDispatch();
  const deleteFromFavoritesEventHandler = id => {
    dispatch(deleteFromFavorites(id));
  };
  return (
    <View style={styles.header}>
      <IconEntypo
        name="squared-cross"
        size={8 * WidthPoint}
        color="black"
        onPress={() => deleteFromFavoritesEventHandler(config.id)}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {justifyContent: 'flex-start', alignItems: 'flex-end', width: '100%'},
});
export default AdditionalFavoritesHeader;
