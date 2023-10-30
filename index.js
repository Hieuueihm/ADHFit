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

PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);

Notifications.registerRemoteNotifications();


<<<<<<< HEAD
AppRegistry.registerComponent(appName, () => TrainingSchedule);
=======
AppRegistry.registerComponent(appName, () => App);
>>>>>>> dc79f15846c5e11906fce894477dcbd75657a4b0
