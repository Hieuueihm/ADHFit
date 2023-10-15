import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, SafeAreaView, Dimensions, ScrollView } from 'react-native';


//Details chua xong.
const Details = () => {
    const hei = Dimensions.get("window").height;
    const wi = Dimensions.get("window").width;
    return (
        <SafeAreaView
            style={{
                height: hei,
                width: wi,
            }}
        >
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
                        <View
                            style={{
                                height: 100,
                                width: 325,
                                backgroundColor: 'green',
                                marginTop: 15,
                            }}>

                        </View>
                        <View style={styles.triangleCorner}></View>
                        <View style={styles.triangleCornerLayer}></View>
                        <View style={styles.triangleCorner1}>
                            <Text
                                style={{
                                    position: 'relative',
                                    bottom: 20,
                                }}>ALOOO</Text>
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
        top: 125,
        left: 0,
        width: 300,
        height: 100,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 50,
        borderTopWidth: 80,
        borderRightColor: 'transparent',
        borderTopColor: 'gray'
    }, triangleCorner1: {
        position: 'absolute',
        top: 120,
        left: 0,
        width: 130,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 50,
        borderTopWidth: 90,
        borderRightColor: 'transparent',
        borderTopColor: 'green'
    }, triangleCornerLayer: {
        position: 'absolute',
        top: 127,
        left: 0,
        width: 297,
        height: 100,
        backgroundColor: 'transparent',
        borderStyle: 'solid',
        borderRightWidth: 47,
        borderTopWidth: 75,
        borderRightColor: 'transparent',
        borderTopColor: 'white'
    }
});