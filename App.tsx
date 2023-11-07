import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { ROUTES } from './constants';
import ChangeGoalsScreen from './src/screens/me/ChangeGoalsScreen';

import Goals from './src/screens/me/Goals';
import Login from './src/screens/welcome/Login';
import { useEffect } from 'react';
import EditInformation from './src/screens/me/EditInformation';
import TrainingSchedule from './src/screens/me/TrainingSchedule';
import Sport from './src/screens/sports/Sport';
import RunningOutDoor from './src/screens/sports/RunningOutDoors';
import Splash from './src/screens/welcome/splash/Splash';

const Stack = createNativeStackNavigator();





export default function App() {

    // Xử lý khi nhận được thông báo
    // Notifications.events().registerNotificationReceivedForeground((notification, completion) => {
    //     console.log('Received notification:', notification);
    //     completion({ alert: true, sound: false, badge: false });
    // });




    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={ROUTES.SPLASH} component={Splash} />
                <Stack.Screen name={ROUTES.SPORT_TAB} component={RunningOutDoor} />
                <Stack.Screen name={ROUTES.TRAINING_SCHEDULE} component={TrainingSchedule} />

                <Stack.Screen name={ROUTES.CHANGE_GOALS_SCREEN} component={ChangeGoalsScreen} />

                <Stack.Screen name={ROUTES.LOGIN} component={Login} />
                <Stack.Screen name={ROUTES.GOALS_SCREEN} component={Goals} />




            </Stack.Navigator>
        </NavigationContainer>
    )
}

