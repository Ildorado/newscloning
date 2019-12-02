import * as React from 'react';
import {View, Animated, StyleSheet, Button} from 'react-native';
import Tab from './Tab';
import {useDispatch} from 'react-redux';
import {setFocusedTabTitle} from '../redux/actions/index';
import CustomMenuButton from '../components/CustomMenuButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../constants/Colors';
Icon.loadFont();
const TabBar = props => {
  const dispatch = useDispatch();
  const {navigationState, navigation, position} = props;
  const IconOnPressHandler = () => {
    navigation.openDrawer();
  };
  const TabOnPressHandler = route => {
    navigation.navigate(route.routeName);
    dispatch(setFocusedTabTitle(route.routeName));
  };
  return (
    <View style={styles.TabBar}>
      <Icon
        onPress={IconOnPressHandler}
        name="backburger"
        size={40}
        color="black"
      />
      <View style={styles.RoutesWrapper}>
        {navigationState.routes.map((route, index) => {
          return (
            <Tab
              key={route + index}
              title={route.routeName}
              onPress={() => TabOnPressHandler(route)}
            />
          );
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  TabBar: {
    height: 80,
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
