/**
 * @format
 */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import Store from './src/redux/store/index';
import React from 'react';
import {Provider} from 'react-redux';
// AppRegistry.registerComponent(appName, () => App);
const storedApp = () => {
  return (
    <Provider store={Store}>
      <App />
    </Provider>
  );
};
AppRegistry.registerComponent(appName, () => storedApp);
