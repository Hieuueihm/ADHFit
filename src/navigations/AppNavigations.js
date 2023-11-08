import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Children, useEffect, useState } from 'react';
import OnboardingScreen from '../screens/welcome/onboarding/Onboarding';
import Login from '../screens/welcome/Login';
// import { SplashScreen } from '../screens/welcome/splash/SplashScreen';
import SplashScreen from 'react-native-splash-screen';
import Home from '../screens/home/Home';
import EditInformation from '../screens/me/EditInformation';
import { TabNavigations } from './TabNavigations';
import { COLORS, ROUTES } from '../../constants/index';
import Listvideo from '../screens/home/Listvideo';
import Steps from '../screens/home/Steps';
import Sleeptracking from '../screens/home/Sleeptracking';
import Heart from '../screens/home/Heart';
import WeatherScreen from '../screens/home/WeatherScreen';
import Goals from '../screens/me/Goals';
import Setting from '../screens/me/Settings';

import { Provider } from 'react-redux';
import store from '../../redux/store';
import utils from '../utils';
import Toast from 'react-native-toast-message'
import Splash from '../screens/welcome/splash/Splash';
import ChangeGoalsScreen from '../screens/me/ChangeGoalsScreen';
import TrainingSchedule from '../screens/me/TrainingSchedule';
import ViewSetting from '../screens/me/ViewSetting';

const Stack = createNativeStackNavigator();

function TabNavigationsMain() {
    return (
        <TabNavigations />
    );
}

export default function AppNavigations() {
    SplashScreen.hide();
    const [showOnboarding, setShowOnboarding] = useState(null);
    useEffect(() => {
        checkIfAlreadyOnboarding();
    }, [])
    const checkIfAlreadyOnboarding = async () => {
        const onboarded = await utils.AsyncStorage.getItem('onboarded');


        if (onboarded == '1') {
            setShowOnboarding(false)
        } else {
            setShowOnboarding(true)
        }
    }
    if (showOnboarding == null) {
        return <>
        </>
    }
    return (
        <>
            <Provider store={store}>
                <NavigationContainer independent={true}>
                    <Stack.Navigator initialRouteName='main' screenOptions={{ headerShown: false }}>
                        {
                            showOnboarding
                                ?
                                <Stack.Screen name={ROUTES.ONBOARDING} component={OnboardingScreen} />
                                :
                                <Stack.Screen name={ROUTES.SPLASH} component={Splash} />
                        }
                        <Stack.Screen name={ROUTES.LOGIN} component={Login} />
                        <Stack.Screen name={ROUTES.HOME} component={TabNavigationsMain} />

                        <Stack.Screen name={ROUTES.EDIT_INFORMATION} component={EditInformation} options={({ route }) => ({
                            title: 'Chỉnh sửa thông tin',
                            headerStyle: {
                                backgroundColor: COLORS.bgWheather1,
                            },
                            headerTintColor: 'white',
                            headerTitleStyle: {
                                fontWeight: 'bold',
                            },
                            headerShown: route?.params?.options === 'me'
                        })} />
                        <Stack.Screen name={ROUTES.LIST_VIDEO} component={Listvideo} />
                        <Stack.Screen name={ROUTES.STEP} component={Steps} />
                        <Stack.Screen name={ROUTES.SLEEPTRACKING} component={Sleeptracking} />
                        <Stack.Screen name={ROUTES.HEART} component={Heart} />
                        <Stack.Screen name={ROUTES.WEATHER} component={WeatherScreen} />
                        <Stack.Screen name={ROUTES.GOALS_SCREEN} component={Goals} />
                        <Stack.Screen name={ROUTES.SETTINGS_SCREEN} component={Setting} />
                        <Stack.Screen name={ROUTES.CHANGE_GOALS_SCREEN} component={ChangeGoalsScreen} />
                        <Stack.Screen name={ROUTES.TRAINING_SCHEDULE} component={TrainingSchedule} />
                        <Stack.Screen name={ROUTES.VIEWSETTING} component={ViewSetting} />

                    </Stack.Navigator>

                </NavigationContainer>
                <Toast config={utils.Toast.toastConfig} />
            </Provider>


        </>
    )


}
