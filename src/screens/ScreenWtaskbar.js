import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View } from 'react-native';
// Screens
import Home from './home/Home';
import Me from './me/me';
//Screen names
const homeName = "Home";
const me = "me";

const Tab = createBottomTabNavigator();
function ScreenWtaskbar() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={homeName}
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: 'black',
                    tabBarInactiveTintColor: '#9D9D9D',
                    //   tabBarInactiveBackgroundColor: 'yellow',
                    //    tabBarActiveBackgroundColor: 'green',
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let screenName = route.name;
                        let background;
                        if (screenName === homeName) {
                            iconName = focused ? 'home' : 'home-outline';
                            background = focused ? '#BBF246' : 'white';

                        } else if (screenName === me) {
                            iconName = focused ? 'settings' : 'settings-outline';
                            background = focused ? '#BBF246' : 'white';
                        }

                        // You can return any component that you like here!
                        return <View
                            style={{
                                borderRadius: 20,
                                width: 80,
                                height: 30,
                                backgroundColor: `${background}`,
                                alignItems: 'center'
                            }}>

                            <Ionicons name={iconName} size={size} color={color} />
                        </View>;
                    },
                })}>

                <Tab.Screen name={homeName} component={Home} />
                <Tab.Screen name={me} component={Me} />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default ScreenWtaskbar;