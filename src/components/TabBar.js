import React, {useEffect} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Tab from './Tab';
import {useSelector} from 'react-redux';
import {getFocusedTabTitle} from '../utilities/selectors/index';
import CustomAuthButton from './CustomAuthButton';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Colors, WidthPoint} from '../constants/index';
MaterialCommunityIcon.loadFont();
const TabBar = ({navigationState, navigation}) => {
  const focusedRouteName = useSelector(getFocusedTabTitle);
  const IconOnPressHandler = () => {
    navigation.openDrawer();
  };
  useEffect(() => {
    navigation.navigate(focusedRouteName);
  }, [focusedRouteName, navigation]);
  return (
    <SafeAreaView style={styles.TabBar}>
      <MaterialCommunityIcon
        onPress={IconOnPressHandler}
        name="backburger"
        size={WidthPoint * 11}
        color="black"
      />
      <View style={styles.RoutesWrapper}>
        {navigationState.routes.map((route, index) => {
          return <Tab key={route + index} title={route.routeName} />;
        })}
      </View>
      <View>
        <CustomAuthButton title="Sign in" navigation={navigation} />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  TabBar: {
    height: '10%',
    backgroundColor: Colors.secondary,
    flexDirection: 'row',
    alignItems: 'center',
  },
  RoutesWrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
});
export default TabBar;
