import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
const FavoritesScreen = props => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
      <Image
        style={{width: 50, height: 50}}
        source={{
          uri:
            'https://dh.img.tyt.by/720x720s/n/avto/07/6/2_2_dtp_stolbcovskiy_rayon_02122019.jpg',
        }}
      />
    </View>
  );
};

export default FavoritesScreen;
