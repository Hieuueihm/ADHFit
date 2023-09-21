import React from "react";
import { Text, View, Image, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, InputField } from "react-native";
import { COLORS, APP_NAME } from '../../constants/index.js';
import Icon from 'react-native-vector-icons/dist/Ionicons.js';


const Login = () => {
    return (
        <SafeAreaView
            style={styles.container}
        >
            <View style={styles.layoutLogo}>
                <Image
                    source={require('../assets/logos/logo.png')}
                    style={styles.mainLogo}
                />
            </View>

            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    padding: 20,
                }}
            >
                <Text
                    style={styles.greenText}
                >
                    {APP_NAME.name}
                </Text>
            </View>

            <View
                style={{
                    marginTop: 10,
                    backgroundColor: 'red',
                    paddingHorizontal: 25

                }}
            >
                <View>
                    <Icon name="arrow-back" size={30} color="#000" />
                </View>

            </View>


        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 100,
        backgroundColor: COLORS.white,

    },
    mainLogo: {
        height: 100,
        width: 100,
        marginTop: 40

    },
    layoutLogo: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        minHeight: 100,
    },
    greenText: {
        color: COLORS.green,
        fontSize: 20,
        lineHeight: 25.3,


    }
});

export default Login;