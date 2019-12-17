import {View, StyleSheet, Button} from 'react-native';
import React from 'react';
import {authorize, revoke} from 'react-native-app-auth';
import {AuthConfigs} from '../constants/index';
import {getAuth} from '../utilities/selectors/index';
import {setAuth} from '../redux/actions/index';
import {useSelector, useDispatch} from 'react-redux';
import FacebookAuthButton from '../components/AuthButtons/Facebook.js';
import GoogleAuthButton from '../components/AuthButtons/Google';
const AuthScreen = props => {
  const authState = useSelector(getAuth);
  const dispatch = useDispatch();
  const logOutOfCurrent = async () => {
    let revokedData = authState.revoked.data;
    let revokedName = authState.revoked.name;
    if (authState.authorized.data !== null) {
      revokedName = authState.authorized.name
        ? authState.authorized.name
        : revokedName;
      revokedData = await revoke(AuthConfigs[revokedName], {
        tokenToRevoke: authState.authorized.data.refreshToken,
      }).then(value => {
        console.log('vaue:', value);
        return value ? value : revokedData;
      });
    }
    if (revokedData) {
      dispatch(
        setAuth(
          {
            name: null,
            data: null,
          },
          {
            name: revokedName,
            data: revokedData,
          },
        ),
      );
    }
    return {name: revokedName, data: revokedData};
  };

  const signOut = async () => {
    logOutOfCurrent();
  };
  return (
    <View style={styles.screen}>
      <GoogleAuthButton />
      <FacebookAuthButton />
      <Button title="to app" onPress={() => props.navigation.navigate('App')} />
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
