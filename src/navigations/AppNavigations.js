import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Children, useEffect, useState } from 'react';
import { getItem } from '../utils/asyncStorage';
import OnboardingScreen from '../screens/welcome/onboarding/Onboarding';
import Login from '../screens/welcome/Login';
// import { SplashScreen } from '../screens/welcome/splash/SplashScreen';
import SplashScreen from 'react-native-splash-screen';
import Home from '../screens/home/Home';
import EditInformation from '../screens/me/editInformation';
import { TabNavigations } from './TabNavigations';
import { COLORS, ROUTES } from '../../constants/index';
import Listvideo from '../screens/home/Listvideo';
import Steps from '../screens/home/Steps';
import Sleeptracking from '../screens/home/Sleeptracking';
import Heart from '../screens/home/Heart';
import WeatherScreen from '../screens/home/WeatherScreen';
import Goals from '../screens/me/Goals';
import Setting from '../screens/me/Settings';
import Sport from '../screens/sports/Sport';
import Details from '../screens/details/Details';
import RunningOutDoor from '../screens/sports/RunningOutDoors';
import BloodPressure from '../screens/details/BloodPressure/BloodPressure';
import BloodSugar from '../screens/details/BloodSugar/BloodSugar';
import BodyWeight from '../screens/details/BodyWeight/BodyWeight';
import HealthyFood from '../screens/details/HealthyFood/HealthyFood';
import ViewSetting from '../screens/me/ViewSetting';
import Waitime from '../screens/sports/Waitime';


const Stack = createNativeStackNavigator();

function TabNavigationsMain() {
    return (
        <TabNavigations />
    );
}

export default function AppNavigations() {
    const [showOnboarding, setShowOnboarding] = useState(false);
    useEffect(() => {
        checkIfAlreadyOnboarding();
    }, [])

    const checkIfAlreadyOnboarding = async () => {
        const onboarded = await getItem('onboarded');

        console.log(onboarded)


        if (onboarded == '1') {
            setShowOnboarding(false)
            console.log(showOnboarding)
            SplashScreen.show()
            setTimeout(() => {
                SplashScreen.hide();
            }, 2000);
        } else {
            setShowOnboarding(true)
            SplashScreen.hide()
        }
    }
    if (showOnboarding === true) {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName={ROUTES.ONBOARDING}>
                    <Stack.Screen name={ROUTES.ONBOARDING} component={OnboardingScreen} />
                    <Stack.Screen name={ROUTES.LOGIN} component={Login} options={{ headerShown: false }} />
                    <Stack.Screen name={ROUTES.HOME} component={TabNavigationsMain} options={{ headerShown: false }} />

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
                    <Stack.Screen name={ROUTES.LIST_VIDEO} component={Listvideo} options={{ headerShown: false }} />
                    <Stack.Screen name={ROUTES.STEP} component={Steps} options={{ headerShown: false }} />
                    <Stack.Screen name={ROUTES.SLEEPTRACKING} component={Sleeptracking} options={{ headerShown: false }} />
                    <Stack.Screen name={ROUTES.HEART} component={Heart} options={{ headerShown: false }} />
                    <Stack.Screen name={ROUTES.WEATHER} component={WeatherScreen} options={{ headerShown: false }} />
                    <Stack.Screen name={ROUTES.GOALS_SCREEN} component={Goals} options={{ headerShown: false }} />
                    <Stack.Screen name={ROUTES.SETTINGS_SCREEN} component={Setting} options={{ headerShown: false }} />

                    <Stack.Screen name={ROUTES.SPORT} component={Sport} options={{ headerShown: false }} />
                    <Stack.Screen name={ROUTES.Waittime} component={Waitime} options={{ headerShown: false }} />
                    <Stack.Screen name={ROUTES.RUNNINGOUTDOOR} component={RunningOutDoor} options={{ headerShown: false }} />
                    <Stack.Screen name={ROUTES.ViewSetting} component={ViewSetting} options={{ headerShown: false }} />


                    <Stack.Screen name={ROUTES.DETAILS} component={Details} options={{ headerShown: false }} />
                    <Stack.Screen name={ROUTES.BloodPresssure} component={BloodPressure} options={{ headerShown: false }} />
                    <Stack.Screen name={ROUTES.BloodSugar} component={BloodSugar} options={{ headerShown: false }} />
                    <Stack.Screen name={ROUTES.BodyWeight} component={BodyWeight} options={{ headerShown: false }} />
                    <Stack.Screen name={ROUTES.HealthyFood} component={HealthyFood} options={{ headerShown: false }} />

                </Stack.Navigator>

            </NavigationContainer>


        )
    } else {
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName={ROUTES.SPLASH}>
                    <Stack.Screen name={ROUTES.HOME} component={TabNavigationsMain} options={{ headerShown: false }} />
                    <Stack.Screen name={ROUTES.LOGIN} component={Login} options={{ headerShown: false }} />



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
                    <Stack.Screen name={ROUTES.LIST_VIDEO} component={Listvideo} options={{ headerShown: false }} />
                    <Stack.Screen name={ROUTES.STEP} component={Steps} options={{ headerShown: false }} />
                    <Stack.Screen name={ROUTES.SLEEPTRACKING} component={Sleeptracking} options={{ headerShown: false }} />
                    <Stack.Screen name={ROUTES.HEART} component={Heart} options={{ headerShown: false }} />
                    <Stack.Screen name={ROUTES.WEATHER} component={WeatherScreen} options={{ headerShown: false }} />
                    <Stack.Screen name={ROUTES.GOALS_SCREEN} component={Goals} options={{ headerShown: false }} />
                    <Stack.Screen name={ROUTES.SETTINGS_SCREEN} component={Setting} options={{ headerShown: false }} />

                    <Stack.Screen name={ROUTES.SPORT} component={Sport} options={{ headerShown: false }} />
                    <Stack.Screen name={ROUTES.Waittime} component={Waitime} options={{ headerShown: false }} />
                    <Stack.Screen name={ROUTES.RUNNINGOUTDOOR} component={RunningOutDoor} options={{ headerShown: false }} />
                    <Stack.Screen name={ROUTES.ViewSetting} component={ViewSetting} options={{ headerShown: false }} />


                    <Stack.Screen name={ROUTES.DETAILS} component={Details} options={{ headerShown: false }} />
                    <Stack.Screen name={ROUTES.BloodPresssure} component={BloodPressure} options={{ headerShown: false }} />
                    <Stack.Screen name={ROUTES.BloodSugar} component={BloodSugar} options={{ headerShown: false }} />
                    <Stack.Screen name={ROUTES.BodyWeight} component={BodyWeight} options={{ headerShown: false }} />
                    <Stack.Screen name={ROUTES.HealthyFood} component={HealthyFood} options={{ headerShown: false }} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }



}