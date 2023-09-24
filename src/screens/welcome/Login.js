import React, { useState } from "react";
import { Text, View, Image, SafeAreaView, StyleSheet, TextInput, TouchableOpacity, InputField, Alert } from "react-native";
import { COLORS, APP_NAME } from '../../../constants/index';
// import Icon from '../../android/app/src/main/assets/fonts/FontAwesome.ttf'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons.js';

const Login = () => {
    const [isTextInputEmailFocused, setIsTextInputEmailFocused] = useState(false);
    const [isTextInputCaptchaFocused, setIsTextInputCaptchaFocused] = useState(false);
    const [email, setEmail] = useState('');
    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);

    };
    const handleGetCaptcha = () => {
        if (!validateEmail(email)) {
            Alert.alert('Lỗi email', 'Vui lòng nhập đúng đinh dạng email');
            return;
        }

    };
    return (
        <SafeAreaView
            style={styles.container}
        >
            <View style={styles.layoutLogo}>
                <Image
                    source={require('../../assets/logos/logo.png')}
                    style={styles.mainLogo}
                />
            </View>

            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                    maxHeight: 80

                }}
            >
                <Text
                    style={{
                        marginBottom: 4,
                        color: COLORS.green,
                        fontSize: 24,
                        fontWeight: 500
                    }}
                >
                    {APP_NAME.name}
                </Text>

                <Text
                    style={{
                        color: COLORS.grey1
                    }}
                >
                    Please login to your account
                </Text>
            </View>

            <View
                style={{
                    marginTop: 10,
                    paddingHorizontal: 32,
                    paddingEnd: 32
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        borderBottomColor: isTextInputEmailFocused ? COLORS.green1 : COLORS.grey,
                        borderBottomWidth: 2,
                        marginBottom: 25,
                    }}
                >
                    <MaterialCommunityIcons
                        name='email-outline'
                        size={32}
                        color={isTextInputEmailFocused ? COLORS.green : COLORS.grey}
                        style={{
                            marginTop: 4,
                        }}
                    ></MaterialCommunityIcons>
                    <TextInput
                        placeholder="Email address"
                        onFocus={() => setIsTextInputEmailFocused(true)}
                        onBlur={() => setIsTextInputEmailFocused(false)}
                        onChangeText={text => setEmail(text)}
                        style={{
                            flex: 1,
                            paddingVertical: 0,
                            color: COLORS.black,
                            paddingLeft: 5

                        }}
                        placeholderTextColor={COLORS.grey}
                        keyboardType="email-address"W

                    />
                </View>


                <View
                    style={{
                        flexDirection: 'row',
                        borderBottomColor: isTextInputCaptchaFocused ? COLORS.green1 : COLORS.grey,
                        borderBottomWidth: 2,
                        marginBottom: 25,

                    }}
                >
                    <MaterialCommunityIcons
                        name='lock-outline'
                        size={32}
                        color={isTextInputCaptchaFocused ? COLORS.green : COLORS.grey}
                        style={{
                            marginTop: 4,
                        }}
                    ></MaterialCommunityIcons>
                    <TextInput

                        placeholder="Captcha"
                        onFocus={() => setIsTextInputCaptchaFocused(true)}
                        onBlur={() => setIsTextInputCaptchaFocused(false)}
                        style={{
                            flex: 1,
                            paddingVertical: 0,
                            paddingLeft: 5,
                            color: COLORS.black
                        }}
                        placeholderTextColor={COLORS.grey}

                        keyboardType="number-pad"

                    />
                </View>

                <TouchableOpacity
                    onPress={handleGetCaptcha}
                    style={{
                        marginTop: 10,
                        backgroundColor: COLORS.captcha,
                        padding: 10,
                        borderRadius: 30,
                        marginBottom: 27,
                        marginEnd: 46,
                        marginStart: 46,
                        borderColor: COLORS.black,
                        borderWidth: 1
                    }}
                >
                    <Text
                        style={{
                            color: COLORS.black,
                            textTransform: "uppercase",
                            textAlign: "center",
                            fontSize: 18,
                            fontWeight: "400"


                        }}
                    >
                        get Captcha
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    style={{
                        backgroundColor: COLORS.signin,
                        padding: 10,
                        borderRadius: 30,
                        marginBottom: 10,
                        marginEnd: 80,
                        marginStart: 80,

                    }}
                >
                    <Text
                        style={{
                            color: COLORS.black,
                            textTransform: "uppercase",
                            textAlign: "center",
                            fontSize: 18,
                            fontWeight: "400"


                        }}
                    >
                        sign in
                    </Text>

                </TouchableOpacity>

                <Text
                    style={{
                        textAlign: 'center',
                        marginTop: 10,
                        marginLeft: 10,
                        color: COLORS.black29
                    }}
                >Email did not receive verification code?</Text>

                <View style={{
                    alignItems: 'center',
                    marginTop: 20
                }}>
                    <Text
                        style={{
                            paddingLeft: 10,
                            paddingRight: 10,
                            marginTop: 10,
                            backgroundColor: 'white',
                            position: 'relative',
                            zIndex: 1
                        }}
                    >
                        OR SIGN IN WITH
                    </Text>
                    <View
                        style={{
                            borderBottomWidth: 1,
                            borderBottomColor: COLORS.green,
                            width: '80%',
                            position: 'absolute',
                            top: '70%',
                            zIndex: 0
                        }}
                    />
                </View>

                <View style={{
                    flexDirection: 'row', justifyContent: 'space-around', marginTop: 40
                }}>
                    <TouchableOpacity
                    >
                        <Image source={require('../../assets/logos/facebook.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/logos/google.png')} />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Image source={require('../../assets/logos/github.png')} />
                    </TouchableOpacity>
                </View>
            </View>



        </SafeAreaView >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 100,
        backgroundColor: COLORS.white,

    },
    mainLogo: {
        height: 100,
        width: 120,
        marginTop: 40

    },
    layoutLogo: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        minHeight: 100,
    }
});


export default Login;