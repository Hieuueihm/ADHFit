import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/welcome/Login';
const Stack = createNativeStackNavigator();
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/home/Home';
import WeatherScreen from './src/screens/home/WeatherScreen';

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Home" component={Home}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen name="Weather" component={WeatherScreen} options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>
    </NavigationContainer>

  );
}
export default App