import {View, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import NewsList from '../components/NewsList';
import IconEntypo from 'react-native-vector-icons/Entypo';
import {useSelector} from 'react-redux';
IconEntypo.loadFont();
//additional header for news slots
const FavoritesScreen = props => {
  const favoriteNews = useSelector(state =>
    Object.values(state.favorites).reverse(),
  );
  return (
    <View style={styles.screen}>
      <NewsList screenName="Favorite" data={favoriteNews} />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primary,
    alignItems: 'center',
  },
});
export default FavoritesScreen;
