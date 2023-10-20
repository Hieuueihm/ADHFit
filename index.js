/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import AppNavigations from './src/navigations/Navigations';
import { name as appName } from './app.json';
import AppNavigations from './src/navigations/AppNavigations';
import App from './App';
import Apptest from './Apptest';

AppRegistry.registerComponent(appName, () => Apptest);
