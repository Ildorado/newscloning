import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Colors from '../constants/Colors';
import CustomMenuButton from './CustomMenuButton';
import Icon from 'react-native-vector-icons/Entypo';
Icon.loadFont();
const Header = props => {
  // const onPressHandler = () => {
  //   props.navigation.openDrawer();
  //   dispatch(addCounter());
  // };
  console.log('Modal Header props:', props);
  return (
    <SafeAreaView style={styles.header}>
      <View>
        <Icon
          onPress={props.onCancel}
          name="squared-cross"
          size={30}
          color="black"
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: Colors.secondary,
    height: '10%',
    width: '100%',
    minHeight: 60,
  },
  firstIconGroup: {},
  secondIconGroup: {},
  MenuButton: {
    marginTop: 30,
    marginLeft: 10,
  },
});
export default Header;
