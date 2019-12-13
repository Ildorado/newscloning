import {View, StyleSheet, Text, Button} from 'react-native';
import {MaterialIndicator} from 'react-native-indicators';
import React, {useState} from 'react';
import {WidthPoint} from '../constants/index';
import {authorize, revoke} from 'react-native-app-auth';
import {AuthConfigs} from '../constants/index';
import {getAuth} from '../utilities/selectors/index';
import {setAuth} from '../redux/actions/index';
import {useSelector, useDispatch} from 'react-redux';

const AuthScreen = props => {
  const authState = useSelector(getAuth);
  const dispatch = useDispatch();
  // const onPressHandler = source => {
  // let authorized;
  // let revoked;
  // if (
  //   authState.authorized &&
  //   Object.keys(authState.authorized).length !== 0
  // ) {
  //   revoked = await revoke(AuthConfigs[authState.authorized.name], {
  //     tokenToRevoke: await authState.authorized.responce.refreshToken,
  //   });
  // }
  // try {
  //   responce = await authorize(configs[source]);
  // } catch (error) {
  //   console.log('error:', error);
  // }
  // setAuthStates({
  //   authorized: {
  //     name: source,
  //     responce: responce,
  //   },
  //   revoked: revoked,
  // });
  // console.log('authStates:', authStates);
  // };
  const logOutOfCurrent = async () => {
    let revokedData = authState.revoked.data;
    let revokedName = authState.revoked.name;
    if (authState.authorized.data && authState.authorized.data !== null) {
      revokedName = authState.authorized.name;
      revokedData = await revoke(AuthConfigs[revokedName], {
        tokenToRevoke: authState.authorized.data.refreshToken,
      });
    }
    Promise.all([revokedData]);
    if (revokedData !== null) {
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
  const SignIn = async source => {
    let revoked = logOutOfCurrent();
    console.log('revoked:', revoked);
    let authorized;
    authorized = await authorize(AuthConfigs[source]);
    dispatch(
      setAuth(
        {
          name: source,
          data: authorized,
        },
        revoked,
      ),
    );
  };

  const signOut = async () => {
    logOutOfCurrent();
  };
  return (
    <View style={styles.screen}>
      <Button
        title={
          authState.authorized && authState.authorized.name === 'Google'
            ? 'Signed Google'
            : 'Google'
        }
        onPress={() => SignIn('Google')}
      />
      <Button
        title="Auth Screen"
        onPress={() => props.navigation.navigate('App')}
      />
      <Button title="Sign Out" onPress={() => signOut()} />
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
