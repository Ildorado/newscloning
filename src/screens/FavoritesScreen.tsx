import {View, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import NewsList from '../components/NewsList';
import {useSelector} from 'react-redux';
import {getFavorites} from '../utilities/selectors';
const FavoritesScreen: React.FC = () => {
  // Object.values(state.favorites).reverse(),
  const favoriteNews = useSelector(getFavorites);
  return (
    <View style={styles.screen}>
      <NewsList
        screenName="Favorite"
        data={Object.values(favoriteNews).reverse()}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.primary,
    width: '100%',
    alignItems: 'center',
  },
});
export default FavoritesScreen;
