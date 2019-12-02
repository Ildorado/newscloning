import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Colors from '../constants/Colors';
import CustomMenuButton from './CustomMenuButton';
import {addCounter} from '../redux/actions/index';
import {useDispatch} from 'react-redux';
const Header = props => {
  const dispatch = useDispatch();
  const onPressHandler = () => {
    props.navigation.openDrawer();
    dispatch(addCounter());
  };
  return (
    <View style={styles.header}>
      <CustomMenuButton
        title="Menu"
        onPress={onPressHandler}
        style={styles.MenuButton}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    backgroundColor: Colors.secondary,
    height: '10%',
    width: '100%',
    minHeight: 60,
  },
  MenuButton: {
    marginTop: 30,
    marginLeft: 10,
  },
});
export default Header;
