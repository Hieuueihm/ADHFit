import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './src/screens/welcome/Login';
const Stack = createNativeStackNavigator();
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/home/Home';
import WeatherScreen from './src/screens/home/WeatherScreen';
import Me from './src/screens/me/me';
import EditInformation from './src/screens/me/editInformation';
import Listvideo from './src/screens/home/Listvideo';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View } from 'react-native';

const Tab = createBottomTabNavigator();

function ScreenWtaskbar() {
  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: '#9D9D9D',
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let screenName = route.name;
          let background;
          if (screenName === "Home") {
            iconName = focused ? 'home' : 'home-outline';
            background = focused ? '#BBF246' : 'white';
          } else if (screenName === "me") {
            iconName = focused ? 'settings' : 'settings-outline';
            background = focused ? '#BBF246' : 'white';
          }
          return <View
            style={{
              borderRadius: 20,
              width: 80,
              height: 30,
              backgroundColor: `${background}`,
              alignItems: 'center'
            }}>
            <Ionicons name={iconName} size={size} color={color} />
          </View>
        },
      })}>
      <Tab.Screen name={"Home"} component={Home} />
      <Tab.Screen name={"me"} component={Me} />
    </Tab.Navigator>
  );
}


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

        {/*  Lam cho an See All o Home thi no hien ra full video */}
        <Stack.Screen name="ScreenWtaskbar" component={ScreenWtaskbar} options={{ headerShown: false }} />
        <Stack.Screen name="Listvideo" component={Listvideo} />

        <Stack.Screen name="Me" component={EditInformation} options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
      </Stack.Navigator>

    </NavigationContainer>

  );
}
export default App