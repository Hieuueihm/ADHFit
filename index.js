/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import AppNavigations from './src/navigations/Navigations';
import { name as appName } from './app.json';
import AppNavigations from './src/navigations/AppNavigations';

AppRegistry.registerComponent(appName, () => AppNavigations);
