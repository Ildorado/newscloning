import React, {useEffect} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Tab from './Tab';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';
Icon.loadFont();
const TabBar = ({navigationState, navigation}) => {
  const focusedRouteName = useSelector(state => state.focusedTabTitle);
  const IconOnPressHandler = () => {
    navigation.openDrawer();
  };
  useEffect(() => {
    navigation.navigate(focusedRouteName);
  }, [focusedRouteName, navigation]);
  return (
    <SafeAreaView style={styles.TabBar}>
      <Icon
        onPress={IconOnPressHandler}
        name="backburger"
        size={40}
        color="black"
      />
      <View style={styles.RoutesWrapper}>
        {navigationState.routes.map((route, index) => {
          return <Tab key={route + index} title={route.routeName} />;
        })}
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
