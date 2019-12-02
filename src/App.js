import React from 'react';
import DrawerNavigator from './navigation/DrawerNavigator';

const App = props => {
  console.log(('props:', props));
  return <DrawerNavigator />;
};
export default App;
