/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import AppNavigations from './src/navigations/Navigations';
import { name as appName } from './app.json';
import AppNavigations from './src/navigations/AppNavigations';
import App from './App';

import { PermissionsAndroid } from 'react-native';
import { Notifications } from 'react-native-notifications';
import MotionSetting from './src/screens/sports/MotionSetting';
import Sport from './src/screens/sports/Sport';
import Walking from './src/screens/sports/Walking';


PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

Notifications.registerRemoteNotifications();


AppRegistry.registerComponent(appName, () => Sport);
