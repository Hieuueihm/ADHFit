import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { ROUTES } from './constants';
import Goals from './src/screens/me/Goals';
import Login from './src/screens/welcome/Login';
import ChangeGoalsScreen from './src/screens/me/ChangeGoalsScreen';
import EditInformation from './src/screens/me/EditInformation';
import Home from './src/screens/home/Home';
import Me from './src/screens/me/Me';
const Stack = createNativeStackNavigator();



export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={ROUTES.HOME} component={Home} />

                <Stack.Screen name={ROUTES.ME_TAB} component={Me} />
                <Stack.Screen name={ROUTES.EDIT_INFORMATION} component={EditInformation} />
                <Stack.Screen name={ROUTES.CHANGE_GOALS_SCREEN} component={ChangeGoalsScreen} />



            </Stack.Navigator>
        </NavigationContainer>
    )





}