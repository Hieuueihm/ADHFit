import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { ROUTES } from './constants';
;
import ChangeGoalsScreen from './src/screens/me/ChangeGoalsScreen';
import Me from './src/screens/me/Me';
import Goals from './src/screens/me/Goals';
const Stack = createNativeStackNavigator();



export default function App() {

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
