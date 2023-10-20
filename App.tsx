import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { ROUTES } from './constants';
import Goals from './src/screens/me/Goals';
import Login from './src/screens/welcome/Login';
import ChangeGoalsScreen from './src/screens/me/ChangeGoalsScreen';
const Stack = createNativeStackNavigator();



export default function App() {

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={ROUTES.GOALS_SCREEN} component={Goals} />
                <Stack.Screen name={ROUTES.CHANGE_GOALS_SCREEN} component={ChangeGoalsScreen} />

            </Stack.Navigator>
        </NavigationContainer>
    )





}