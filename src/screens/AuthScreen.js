import {View, StyleSheet, Text, Button} from 'react-native';
import {MaterialIndicator} from 'react-native-indicators';
import React from 'react';
import {WidthPoint} from '../constants/index';
const AuthScreen = props => {
  console.log('props:', props);
  return (
    <View style={styles.screen}>
      <Button
        title="Auth Screen"
        onPress={() => props.navigation.navigate('App')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});
export default AuthScreen;
