import {StyleSheet} from 'react-native';
import React from 'react';
import {WidthPoint, FACEBOOK} from '../../constants/index';
import CustomText from '../../constants/Styles/CustomText';
import {getAuth} from '../../utilities/selectors/index';
import {setAuth, logOut} from '../../redux/actions/index';
import {useSelector, useDispatch} from 'react-redux';
import {LoginManager} from 'react-native-fbsdk';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
export interface Props {
  goToApp: () => void;
}
const Facebook: React.FC<Props> = ({goToApp}) => {
  const authState = useSelector(getAuth);
  const dispatch = useDispatch();
  const login = async () => {
    logout();
    LoginManager.logInWithPermissions(['public_profile']).then(
      function(result) {
        if (result.isCancelled) {
          console.log('Login cancelled');
        } else {
          const grantedPermissions =
            result && result.grantedPermissions
              ? result.grantedPermissions.toString()
              : '';
          console.log('Login success with permissions: ' + grantedPermissions);
          dispatch(
            setAuth({
              name: FACEBOOK,
              data: [],
            }),
          );
          goToApp();
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
        authState.authorized.name === FACEBOOK ? logout() : login();
      }}>
      <CustomText h2 white>
        {authState.authorized.name === FACEBOOK
          ? `Logout from ${FACEBOOK}`
          : `Login with ${FACEBOOK}`}
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
