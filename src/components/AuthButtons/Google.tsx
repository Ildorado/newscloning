import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {StyleSheet, Platform} from 'react-native';
import React from 'react';
import {WidthPoint, GOOGLE} from '../../constants/index';
import {authorize} from 'react-native-app-auth';
import {getAuth} from '../../utilities/selectors/index';
import {setAuth, logOut} from '../../redux/actions/index';
import {useSelector, useDispatch} from 'react-redux';
import CustomText from '../../constants/Styles/CustomText';
export const googleConfig = Platform.select({
  default: {
    issuer: 'https://accounts.google.com',
    clientId:
      '280211408355-6hg3h47udo255t5cmuek9io2u7qrdvg1.apps.googleusercontent.com',
    redirectUrl:
      'com.googleusercontent.apps.280211408355-6hg3h47udo255t5cmuek9io2u7qrdvg1:/oauth2redirect/google',
    scopes: ['openid', 'profile'],
  },
  ios: {
    issuer: 'https://accounts.google.com',
    clientId:
      '280211408355-lrhpl79blovc56dppp7uiipvf9r0onk9.apps.googleusercontent.com',
    redirectUrl:
      'com.googleusercontent.apps.280211408355-lrhpl79blovc56dppp7uiipvf9r0onk9:/oauth2redirect/google',
    scopes: ['openid', 'profile'],
  },
});
export interface Props {
  goToApp: () => void;
}
const Google: React.FC<Props> = ({goToApp}) => {
  const authState = useSelector(getAuth);
  const dispatch = useDispatch();
  const signIn = async () => {
    signOut();
    const authorized = await authorize(googleConfig);
    dispatch(
      setAuth({
        name: GOOGLE,
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
        authState.authorized.name === GOOGLE ? signOut() : signIn();
      }}>
      <CustomText h2 white>
        {authState.authorized.name === GOOGLE
          ? `Logout from ${GOOGLE}`
          : `Login with ${GOOGLE}`}
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
