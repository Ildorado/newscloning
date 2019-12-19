import {View, StyleSheet} from 'react-native';
import React from 'react';
import Colors from '../constants/Colors';
import NewsList from '../components/NewsList';
import {useSelector} from 'react-redux';
import {NewsDataProps} from '../typescript/index';

const FavoritesScreen: React.FC = () => {
  const favoriteNews = useSelector((state: NewsDataProps) =>
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
    width: '100%',
    alignItems: 'center',
  },
});
export default FavoritesScreen;
