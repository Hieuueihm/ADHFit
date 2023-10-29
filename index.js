/**
 * @format
 */

import { AppRegistry } from 'react-native';
// import AppNavigations from './src/navigations/Navigations';
import { name as appName } from './app.json';
import AppNavigations from './src/navigations/AppNavigations';
import App from './App';
import TickCheckbox from './src/components/Checkbox';
import TrainingSchedule from './src/screens/me/TrainingSchedule';
import CalendarPickerButton from './src/components/CalendarPickerButton';
import Sport from './src/screens/sports/Sport';
import RunningOutDoor from './src/screens/sports/RunningOutDoors';
import Waitime from './src/screens/sports/Waitime';
import Home from './src/screens/home/Home';


AppRegistry.registerComponent(appName, () => Sport);
