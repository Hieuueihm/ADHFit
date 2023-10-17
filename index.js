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
import HealthyFood from './src/screens/details/healthyFood/HealthyFood';
import BalancedDiet from './src/screens/details/healthyFood/BalancedDiet';
import WeightLoss from './src/screens/details/healthyFood/WeightLoss';
import Login from './src/screens/welcome/Login';
import Fruit from './src/screens/details/healthyFood/Fruit';
import ChooseOil from './src/screens/details/healthyFood/ChooseOil';
import FoodandHeart from './src/screens/details/healthyFood/FoodandHeart';



AppRegistry.registerComponent(appName, () => App);
