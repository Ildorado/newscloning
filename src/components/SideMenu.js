import React from 'react';
import {ScrollView, View, StyleSheet, SafeAreaView} from 'react-native';
import NewsSources from '../constants/NewsSources';
import CustomDrawerButton from './CustomDrawerButton';
import Icon from 'react-native-vector-icons/Fontisto';
Icon.loadFont();
const SideMenu = props => {
  const {closeDrawer} = props.navigation;
  const buttonClickHandler = () => {
    closeDrawer();
  };
  return (
    <SafeAreaView style={styles.container}>
      <Icon
        onPress={buttonClickHandler}
        name="arrow-return-right"
        size={30}
        color="black"
      />
      <ScrollView>
        {NewsSources.map(item => (
          <View style={styles.Button} key={item.key}>
            {/* <Button title={item.Name} /> */}
            <CustomDrawerButton config={item} />
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Button: {
    marginTop: 10,
    width: '100%',
  },
});
export default SideMenu;
