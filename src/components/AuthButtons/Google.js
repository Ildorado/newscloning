import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {StyleSheet} from 'react-native';
import React from 'react';
import {WidthPoint} from '../../constants/index';
import {authorize} from 'react-native-app-auth';
import {getAuth} from '../../utilities/selectors/index';
import {setAuth, logOut} from '../../redux/actions/index';
import {useSelector, useDispatch} from 'react-redux';
import CustomText from '../../constants/Styles/CustomText';
export const googleConfig = {
  issuer: 'https://accounts.google.com',
  clientId:
    '280211408355-lrhpl79blovc56dppp7uiipvf9r0onk9.apps.googleusercontent.com',
  redirectUrl:
    'com.googleusercontent.apps.280211408355-lrhpl79blovc56dppp7uiipvf9r0onk9:/oauth2redirect/google',
  scopes: ['openid', 'profile'],
};
FontAwesome.loadFont();
const Google = ({goToApp}) => {
  const authState = useSelector(getAuth);
  const dispatch = useDispatch();
  // const logOutOfCurrent = async () => {
  //   if (authState.authorized.data !== null) {
  //     await revoke(googleConfig, {
  //       tokenToRevoke: authState.authorized.data.accessToken,
  //     });
  //   }
  //   dispatch(
  //     setAuth({
  //       name: null,
  //       data: null,
  //     }),
  //   );
  // };
  const signIn = async () => {
    // await logOutOfCurrent();
    signOut();
    const authorized = await authorize(googleConfig);
    dispatch(
      setAuth({
        name: 'Google',
        data: authorized,
      }),
    );
    goToApp();
  };

  const signOut = async () => {
    dispatch(logOut(authState.authorized));
  };
  return (
    <FontAwesome.Button
      name="google"
      backgroundColor="red"
      style={styles.button}
      onPress={() => {
        authState.authorized.name === 'Google' ? signOut() : signIn();
      }}>
      <CustomText h2 white>
        {authState.authorized.name === 'Google'
          ? 'Logout from Google'
          : 'Login with Google'}
      </CustomText>
    </FontAwesome.Button>
  );
};
const styles = StyleSheet.create({
  button: {
    height: 10 * WidthPoint,
    width: 70 * WidthPoint,
    justifyContent: 'center',
  },
});
export default Google;
