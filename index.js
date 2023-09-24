/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import Home from './src/screens/home/Home';
import { name as appName } from './app.json';
import Donutchart from './src/components/Donutchart';
import AppWithSplashScreen from './src/screens/welcome/splash/AppWithSplashScreen';

AppRegistry.registerComponent(appName, () => AppWithSplashScreen);
