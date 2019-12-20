import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {fetchNews, fetchNewsAsync} from '../redux/actions/index';
import {WidthPoint, Colors} from '../constants/index';
import CustomText from '../constants/Styles/CustomText';
import {getFocusedDrawerButton} from '../utilities/selectors/index';
import {NavigationScreenType, NewsSourcesProps} from '../typescript/index';
export interface Props {
  navigation: NavigationScreenType;
  name: string;
  config: NewsSourcesProps[];
}
const CustomDrawerButton: React.FC<Props> = ({navigation, config, name}) => {
  const dispatch = useDispatch();
  const focusedDrawerButton = useSelector(getFocusedDrawerButton);
  const onPressHandler = () => {
    dispatch(fetchNewsAsync(config));
    navigation.closeDrawer();
  };
  return (
    <TouchableOpacity
      onPress={onPressHandler}
      style={{
        ...styles.Button,
        ...(focusedDrawerButton === name ? styles.focused : styles.unfocused),
      }}>
      <CustomText h3>{name}</CustomText>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  Button: {
    height: 9 * WidthPoint,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 3 * WidthPoint,
    paddingHorizontal: 3 * WidthPoint,
  },
  unfocused: {
    backgroundColor: Colors.tertiary,
  },
  focused: {
    backgroundColor: Colors.primary,
  },
});
export default CustomDrawerButton;
