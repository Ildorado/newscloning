import React from 'react';
import {StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import CustomMenuButton from './CustomMenuButton';
import {WidthPoint, Colors} from '../constants/index';
import {setFocusedTabTitleAsync} from '../redux/actions/index';
import {getFocusedTabTitle} from '../utilities/selectors/index';
interface Props {
  title: string;
}
const Tab: React.FC<Props> = ({title}) => {
  const focusedTabTitle = useSelector(getFocusedTabTitle);
  const dispatch = useDispatch();
  const TabOnPressHandler = () => {
    dispatch(setFocusedTabTitleAsync(title));
  };

  return (
    <CustomMenuButton
      title={title}
      style={title === focusedTabTitle ? styles.focused : styles.unfocused}
      onPress={TabOnPressHandler}
    />
  );
};
const styles = StyleSheet.create({
  Tab: {
    padding: 3 * WidthPoint,
    borderRadius: 10,
    width: 27 * WidthPoint,
    alignItems: 'center',
    justifyContent: 'center',
  },
  focused: {
    backgroundColor: Colors.primary,
  },
  unfocused: {
    backgroundColor: Colors.tertiary,
  },
  text: {
    fontSize: 5 * WidthPoint,
  },
});
export default Tab;
