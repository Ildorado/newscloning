import React, {useEffect} from 'react';
import {ScrollView, View, Button, StyleSheet} from 'react-native';
import NewsSources from '../constants/NewsSources';
import CustomMenuButton from './CustomMenuButton';
import CustomDrawerButton from './CustomDrawerButton';
import Icon from 'react-native-vector-icons/Fontisto';
const SideMenu = props => {
  console.log('works woflks');
  const {closeDrawer} = props.navigation;
  const buttonClickHandler = () => {
    closeDrawer();
  };
  return (
    <View style={styles.container}>
      <Icon name="arrow-return-right" size={30} color="#900" />
      <CustomMenuButton title="Back" onPress={buttonClickHandler} />
      <ScrollView>
        {NewsSources.map(item => (
          <View style={styles.Button} key={item.key}>
            {/* <Button title={item.Name} /> */}
            <CustomDrawerButton config={item} />
          </View>
        ))}
      </ScrollView>
    </View>
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
