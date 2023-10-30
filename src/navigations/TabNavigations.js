import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ROUTES } from '../../constants';
import Home from '../screens/home/Home';
import Me from '../screens/me/me';
import { View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { NavigationContainer } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export function TabNavigations() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName={ROUTES.HOME_TAB}
                screenOptions={({ route }) => ({
                    tabBarActiveTintColor: 'black',
                    tabBarInactiveTintColor: '#9D9D9D',
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        let screenName = route.name;
                        let background;
                        if (screenName === ROUTES.HOME_TAB) {
                            iconName = focused ? 'home' : 'home-outline';
                            background = focused ? '#BBF246' : 'white';
                        } else if (screenName === ROUTES.ME_TAB) {
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
                <Tab.Screen name={ROUTES.HOME_TAB} component={Home} options={{ headerShown: false }} />
                <Tab.Screen name={ROUTES.ME_TAB} component={Me} options={{ headerShown: false }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}