/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import Home from './src/screens/home/Home';
import { name as appName } from './app.json';
import AppWithSplashScreen from './src/screens/welcome/splash/AppWithSplashScreen';
import Sleeptracking from './src/screens/home/Sleeptracking';
import Liinechart from './src/components/Liinechart';
import OnboardingScreen from './src/screens/welcome/onboarding/Onboarding';
import ScreenWtaskbar from './src/screens/ScreenWtaskbar';
import Heart from './src/screens/home/Heart';
import Steps from './src/screens/home/Steps';
import Details from './src/screens/details/Details';
import Login from './src/screens/welcome/Login';
import TriangleView from './src/components/TriangleView';
import Goals from './src/screens/me/Goals'

AppRegistry.registerComponent(appName, () => Goals);

