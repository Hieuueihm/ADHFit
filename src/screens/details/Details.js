import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native';

//Details xong cai màn hình main này với 1/4 mục.
const Details = () => {
    const navigation = useNavigation();
    const hei = Dimensions.get("window").height;
    const wi = Dimensions.get("window").width;
    return (
        <SafeAreaView
            style={{
                height: hei,
                width: wi,
            }}
        >
            <View
                style={{
                    flexDirection: 'row',
                    height: hei / 12,
                    width: wi,
                    alignItems: 'center',
                    backgroundColor: '#DAD1D1'
                }}
            >
                <Text
                    style={{
                        color: 'black',
                        fontSize: 24,
                        marginLeft: 20,
                    }}>Details and Tips</Text>
                <Image
                    source={require("../../assets/images/avatar.png")}
                    style={{
                        width: 45,
                        height: 45,
                        marginLeft: 130,
                    }}></Image>
            </View>
            <ImageBackground
                source={require("../../assets/images/Layer1.png")}
                style={{
                    height: hei,
                    width: wi,
                }}>
                <ScrollView>
                    <View
                        style={{
                            height: hei,
                            width: wi,
                            alignItems: 'center'
                        }}>

                        <View style={styles.triangleCorner}></View>
                        <View style={styles.triangleCornerLayer}></View>
                        <View style={styles.triangleCorner1}>
                            <Image source={require("../../assets/icons/bloodPressure.png")}
                                style={{
                                    height: 40,
                                    width: 40,
                                    position: 'relative',
                                    bottom: 65,
                                    left: 20,
                                }}></Image>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: 'black',
                                    position: 'relative',
                                    bottom: 110,
                                    left: 120,
                                }}>Blood Pressure</Text>
                            <TouchableOpacity
                                style={{
                                    position: 'relative',
                                    bottom: 145,
                                    left: 260,
                                }}>
                                <Image source={require("../../assets/icons/arrowBlack.png")}
                                    style={{
                                        height: 20,
                                        width: 20,
                                    }}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            position: 'absolute',
                            top: 205,  /*************************************************** */
                            left: 0,
                            width: 350,
                            height: 100,
                            backgroundColor: 'transparent',
                            borderStyle: 'solid',
                            borderRightWidth: 50,
                            borderTopWidth: 80,
                            borderRightColor: 'transparent',
                            borderTopColor: 'gray'
                        }}></View>
                        <View style={{
                            position: 'absolute',
                            top: 207, /************************************************************* */
                            left: 0,
                            width: 347,
                            height: 100,
                            backgroundColor: 'transparent',
                            borderStyle: 'solid',
                            borderRightWidth: 47,
                            borderTopWidth: 75,
                            borderRightColor: 'transparent',
                            borderTopColor: 'white'
                        }}></View>
                        <View style={{
                            position: 'absolute',
                            top: 200, /************************************************************ */
                            left: 0,
                            width: 130,
                            backgroundColor: 'transparent',
                            borderStyle: 'solid',
                            borderRightWidth: 50,
                            borderTopWidth: 90,
                            borderRightColor: 'transparent',
                            borderTopColor: '#FD97E6'
                        }}>
                            <Image source={require("../../assets/icons/sugarBlood.png")}
                                style={{
                                    height: 40,
                                    width: 40,
                                    position: 'relative',
                                    bottom: 65,
                                    left: 20,
                                }}></Image>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: 'black',
                                    position: 'relative',
                                    bottom: 110,
                                    left: 120,
                                }}>Blood Sugar</Text>
                            <TouchableOpacity
                                style={{
                                    position: 'relative',
                                    bottom: 145,
                                    left: 260,
                                }}>
                                <Image source={require("../../assets/icons/arrowBlack.png")}
                                    style={{
                                        height: 20,
                                        width: 20,
                                    }}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            position: 'absolute',
                            top: 355,  /*************************************************** */
                            left: 0,
                            width: 350,
                            height: 100,
                            backgroundColor: 'transparent',
                            borderStyle: 'solid',
                            borderRightWidth: 50,
                            borderTopWidth: 80,
                            borderRightColor: 'transparent',
                            borderTopColor: 'gray'
                        }}></View>
                        <View style={{
                            position: 'absolute',
                            top: 357, /************************************************************* */
                            left: 0,
                            width: 347,
                            height: 100,
                            backgroundColor: 'transparent',
                            borderStyle: 'solid',
                            borderRightWidth: 47,
                            borderTopWidth: 75,
                            borderRightColor: 'transparent',
                            borderTopColor: 'white'
                        }}></View>
                        <View style={{
                            position: 'absolute',
                            top: 350, /************************************************************ */
                            left: 0,
                            width: 130,
                            backgroundColor: 'transparent',
                            borderStyle: 'solid',
                            borderRightWidth: 50,
                            borderTopWidth: 90,
                            borderRightColor: 'transparent',
                            borderTopColor: '#7EFC7C'
                        }}>
                            <Image source={require("../../assets/icons/scale.png")}
                                style={{
                                    height: 40,
                                    width: 40,
                                    position: 'relative',
                                    bottom: 65,
                                    left: 20,
                                }}></Image>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: 'black',
                                    position: 'relative',
                                    bottom: 110,
                                    left: 120,
                                }}>Weight and BMI</Text>
                            <TouchableOpacity
                                style={{
                                    position: 'relative',
                                    bottom: 145,
                                    left: 260,
                                }}>
                                <Image source={require("../../assets/icons/arrowBlack.png")}
                                    style={{
                                        height: 20,
                                        width: 20,
                                    }}></Image>
                            </TouchableOpacity>
                        </View>
                        <View style={{
                            position: 'absolute',
                            top: 505,  /*************************************************** */
                            left: 0,
                            width: 350,
                            height: 100,
                            backgroundColor: 'transparent',
                            borderStyle: 'solid',
                            borderRightWidth: 50,
                            borderTopWidth: 80,
                            borderRightColor: 'transparent',
                            borderTopColor: 'gray'
                        }}></View>
                        <View style={{
                            position: 'absolute',
                            top: 507, /************************************************************* */
                            left: 0,
                            width: 347,
                            height: 100,
                            backgroundColor: 'transparent',
                            borderStyle: 'solid',
                            borderRightWidth: 47,
                            borderTopWidth: 75,
                            borderRightColor: 'transparent',
                            borderTopColor: 'white'
                        }}></View>
                        <View style={{
                            position: 'absolute',
                            top: 500, /************************************************************ */
                            left: 0,
                            width: 130,
                            backgroundColor: 'transparent',
                            borderStyle: 'solid',
                            borderRightWidth: 50,
                            borderTopWidth: 90,
                            borderRightColor: 'transparent',
                            borderTopColor: '#CFD230'
                        }}>
                            <Image source={require("../../assets/icons/healthyFood.png")}
                                style={{
                                    height: 40,
                                    width: 40,
                                    position: 'relative',
                                    bottom: 65,
                                    left: 20,
                                }}></Image>
                            <Text
                                style={{
                                    fontSize: 20,
                                    color: 'black',
                                    position: 'relative',
                                    bottom: 110,
                                    left: 120,
                                }}>Healthy Nutrition</Text>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("HealthyFood")}
                                style={{
                                    position: 'relative',
                                    bottom: 145,
                                    left: 260,
                                }}>
                                <Image source={require("../../assets/icons/arrowBlack.png")}
                                    style={{
                                        height: 20,
                                        width: 20,
                                    }}></Image>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>

            </ImageBackground>

        </SafeAreaView>
    );
};


export default Details;
const styles = StyleSheet.create({
    container: {
        height: Dimensions.get("window").height,
        width: Dimensions.get("window").width,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        backgroundColor: '#ecf0f1',
    }, triangleCorner: {
        position: 'absolute',
        top: 55,  /*************************************************** */
        left: 0,
        width: 350,
        height: 100,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 50,
        borderTopWidth: 80,
        borderRightColor: 'transparent',
        borderTopColor: 'gray'
    }, triangleCorner1: {
        position: 'absolute',
        top: 50, /************************************************************ */
        left: 0,
        width: 130,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 50,
        borderTopWidth: 90,
        borderRightColor: 'transparent',
        borderTopColor: '#8BCEFF'
    }, triangleCornerLayer: {
        position: 'absolute',
        top: 57, /************************************************************* */
        left: 0,
        width: 347,
        height: 100,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 47,
        borderTopWidth: 75,
        borderRightColor: 'transparent',
        borderTopColor: 'white'
    }
});