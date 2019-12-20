import React from 'react';
import {ScrollView, View, StyleSheet, SafeAreaView} from 'react-native';
import NewsSources from '../constants/NewsSources';
import CustomDrawerButton from './CustomDrawerButton';
import Icon from 'react-native-vector-icons/Fontisto';
import {WidthPoint} from '../constants/index';
import {
  NavigationScreenType,
  NewsSourcesItemProps,
  NewsSourcesProps,
  NewsDataProps,
} from '../typescript/index.d';
Icon.loadFont();
export interface Props {
  navigation: NavigationScreenType;
}
const SideMenu: React.FC<Props> = ({navigation}) => {
  const {closeDrawer} = navigation;
  const buttonClickHandler = () => {
    closeDrawer();
  };
  return (
    <SafeAreaView style={styles.container}>
      <Icon
        onPress={buttonClickHandler}
        name="arrow-return-right"
        size={8 * WidthPoint}
        color="black"
        style={styles.icon}
      />
      <ScrollView>
        {NewsSources.map((item: any) => (
          <View key={item.key}>
            <CustomDrawerButton
              navigation={navigation}
              config={item}
              name={item.Name}
            />
          </View>
        ))}
        <CustomDrawerButton
          navigation={navigation}
          config={NewsSources}
          name="All"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 5.3 * WidthPoint,
    flex: 1,
  },
  icon: {
    alignSelf: 'flex-end',
    marginRight: 5 * WidthPoint,
    marginBottom: 3 * WidthPoint,
  },
});
export default SideMenu;