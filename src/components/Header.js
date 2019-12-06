import React from 'react';
import {View, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import CustomMenuButton from './CustomMenuButton';
const Header = ({navigation}) => {
  const onPressHandler = () => {
    navigation.openDrawer();
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
