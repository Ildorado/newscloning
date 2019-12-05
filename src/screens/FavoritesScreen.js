import {View, Text, StyleSheet, Image} from 'react-native';
import React, {Component} from 'react';
import {useSelector} from 'react-redux';
import NewsList from '../components/NewsList';

const FavoritesScreen = props => {
  const favoriteNews = useSelector(state => Object.values(state.favorites));
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <NewsList data={favoriteNews} />
    </View>
  );
};

export default FavoritesScreen;
