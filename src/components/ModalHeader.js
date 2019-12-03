import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Colors from '../constants/Colors';
import {useDispatch} from 'react-redux';
import {setWebViewVisibility} from '../redux/actions/index';
import Icon from 'react-native-vector-icons/Entypo';
Icon.loadFont();
const Header = ({onCancel}) => {
  console.log('onCancel:', onCancel);
  // const dispatch = useDispatch();
  // const modalOnCancelHandler = () => {
  //   dispatch(setWebViewVisibility(false));
  // };
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
