import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { ROUTES } from './constants';
;
import ChangeGoalsScreen from './src/screens/me/ChangeGoalsScreen';
import Me from './src/screens/me/Me';
import Goals from './src/screens/me/Goals';
import { PermissionsAndroid } from 'react-native';
import Login from './src/screens/welcome/Login';
import { Notifications } from 'react-native-notifications';
import { useEffect } from 'react';
import EditInformation from './src/screens/me/EditInformation';
import TrainingSchedule from './src/screens/me/TrainingSchedule';

PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS);
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
                <Stack.Screen name={ROUTES.TRAINING_SCHEDULE} component={TrainingSchedule} />
                {/* <Stack.Screen name={ROUTES.LOGIN} component={Login} /> */}
                <Stack.Screen name={ROUTES.CHANGE_GOALS_SCREEN} component={ChangeGoalsScreen} />
                <Stack.Screen name={ROUTES.ME_TAB} component={Me} />
                <Stack.Screen name={ROUTES.GOALS_SCREEN} component={Goals} />




            </Stack.Navigator>
        </NavigationContainer>
    )
}

