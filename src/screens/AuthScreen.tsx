import {View, StyleSheet, Text} from 'react-native';
import React from 'react';
import FacebookAuthButton from '../components/AuthButtons/Facebook';
import GoogleAuthButton from '../components/AuthButtons/Google';
import ToAppButton from '../components/AuthButtons/ToApp';
import {WidthPoint} from '../constants';
import {NavigationScreenType} from '../typescript/index';
export interface Props {
  navigation: NavigationScreenType;
}
const AuthScreen: React.FC<Props> = ({navigation}) => {
  const goToApp = () => {
    navigation.navigate('App');
  };
  return (
    <View style={styles.screen}>
      <GoogleAuthButton goToApp={goToApp} />
      <FacebookAuthButton goToApp={goToApp} />
      <ToAppButton goToApp={goToApp}>
        <Text>to app"</Text>
      </ToAppButton>
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
  button: {
    width: WidthPoint * 70,
    height: WidthPoint * 10,
    backgroundColor: 'red',
  },
});
export default AuthScreen;
