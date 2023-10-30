import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { ROUTES } from './constants';
;
import ChangeGoalsScreen from './src/screens/me/ChangeGoalsScreen';
import Me from './src/screens/me/me';
import Goals from './src/screens/me/Goals';
import { PermissionsAndroid } from 'react-native';
import Login from './src/screens/welcome/Login';
import { Notifications } from 'react-native-notifications';
import { useEffect } from 'react';

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
                <Stack.Screen name={ROUTES.ME_TAB} component={Me} />
                <Stack.Screen name={ROUTES.GOALS_SCREEN} component={Goals} />

                <Stack.Screen name={ROUTES.CHANGE_GOALS_SCREEN} component={ChangeGoalsScreen} />




            </Stack.Navigator>
        </NavigationContainer>
    )
}

