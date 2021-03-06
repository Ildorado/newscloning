import React from 'react';
import {StyleSheet} from 'react-native';
import {WidthPoint, FACEBOOK, GOOGLE} from '../constants/index';
import {useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {getAuth} from '../utilities/selectors/index';
Entypo.loadFont();
AntDesign.loadFont();
import {NavigationScreenType} from '../typescript/index';
export interface Props {
  navigation: NavigationScreenType;
}
const CustomAuthButton: React.FC<Props> = ({navigation}) => {
  const authState = useSelector(getAuth);
  let name;
  switch (authState.authorized.name) {
    case FACEBOOK:
      name = 'facebook-with-circle';
      break;
    case GOOGLE:
      name = 'google--with-circle';
      break;
    default:
      name = null;
      break;
  }
  return name ? (
    <Entypo
      style={styles.MenuButton}
      onPress={() => navigation.navigate('Auth')}
      name={name}
      size={8 * WidthPoint}
      color="green"
    />
  ) : (
    <AntDesign
      style={styles.MenuButton}
      onPress={() => navigation.navigate('Auth')}
      name="login"
      size={8 * WidthPoint}
      color="yellow"
    />
  );
};
const styles = StyleSheet.create({
  MenuButton: {},
});
export default CustomAuthButton;
