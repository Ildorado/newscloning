import {StyleSheet} from 'react-native';
import React from 'react';
import {WidthPoint} from '../../constants/index';
import CustomText from '../../constants/Styles/CustomText';
import {getAuth} from '../../utilities/selectors/index';
import {setAuth, logOut} from '../../redux/actions/index';
import {useSelector, useDispatch} from 'react-redux';
import {LoginManager} from 'react-native-fbsdk';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
FontAwesome.loadFont();
const Facebook = () => {
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
  const login = async () => {
    logout();
    LoginManager.logInWithPermissions(['public_profile']).then(
      function(result) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          console.log(
            'Login success with permissions: ' +
              result.grantedPermissions.toString(),
            dispatch(
              setAuth({
                name: 'Facebook',
                data: [],
              }),
            ),
          );
        }
      },
      function(error) {
        console.log('Login fail with error: ' + error);
      },
    );
  };

  const logout = async () => {
    dispatch(logOut(authState.authorized));
  };
  return (
    <FontAwesome.Button
      name="facebook"
      backgroundColor="#3b5998"
      style={styles.button}
      onPress={() => {
        authState.authorized.name === 'Facebook' ? logout() : login();
      }}>
      <CustomText h2 white>
        {authState.authorized.name === 'Facebook'
          ? 'Logout from Facebook'
          : 'Login with Facebook'}
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

export default Facebook;
export const facebookLogout = () => LoginManager.logOut();
