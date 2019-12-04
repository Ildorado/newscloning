import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Colors from '../constants/Colors';
import Icon from 'react-native-vector-icons/Entypo';
import WidthPoint from '../constants/ScreenWidthPercent';
Icon.loadFont();
const Header = ({onCancel}) => {
  return (
    <SafeAreaView style={styles.header}>
      <View>
        <Icon onPress={onCancel} name="squared-cross" size={30} color="black" />
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
    minHeight: 16 * WidthPoint,
  },
  firstIconGroup: {},
  secondIconGroup: {},
  MenuButton: {
    marginTop: 8 * WidthPoint,
    marginLeft: 3 * WidthPoint,
  },
});
export default Header;
