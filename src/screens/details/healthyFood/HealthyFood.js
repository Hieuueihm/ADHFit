import React from "react";
import { View, Text, Image, ImageBackground, SafeAreaView, TouchableOpacity, Dimensions, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
const HealthyFood = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView>
            <ImageBackground source={require("../../../assets/images/Layer1.png")}
                style={{
                    height: Dimensions.get("window").height,
                    width: Dimensions.get("window").width,
                }}>
                <View
                    style={{
                        height: Dimensions.get("window").height,
                        width: Dimensions.get("window").width,
                        alignItems: 'center'
                    }}>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Balanced diet")}
                        activeOpacity={0.7}
                        style={styles.container}>
                        <Text
                            style={styles.text}>What is{"\n"}a balanced diet?</Text>
                        <Image
                            source={require("../../../assets/images/balanced.jpg")}
                            style={styles.image}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("WeightLoss")}
                        activeOpacity={0.7}
                        style={styles.container}>
                        <Text
                            style={styles.text}>What is irregular{"\n"}weight loss?</Text>
                        <Image
                            source={require("../../../assets/images/vegestarian.jpg")}
                            style={styles.image}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Snacks")}
                        activeOpacity={0.7}
                        style={styles.container}>
                        <Text
                            style={styles.text}>How to choose   {"\n"}healthy snacks</Text>
                        <Image
                            source={require("../../../assets/images/fruit.jpg")}
                            style={styles.image}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Choose Oil")}
                        activeOpacity={0.7}
                        style={styles.container}>
                        <Text
                            style={styles.text}>How to choose   {"\n"}cooking oil</Text>
                        <Image
                            source={require("../../../assets/images/oil.jpg")}
                            style={styles.image}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate("Food and Heart")}
                        activeOpacity={0.7}
                        style={styles.container}>
                        <Text
                            style={styles.text}>Diet and{"\n"}healthy Health   </Text>
                        <Image
                            source={require("../../../assets/images/fastFood.jpg")}
                            style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
export default HealthyFood

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        height: 100,
        width: 370,
        backgroundColor: '#E4E4E4',
        flexDirection: 'row',
        borderRadius: 20,
    },
    text: {
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 20,
        marginTop: 25,
    },
    image: {
        height: 75,
        width: 120,
        marginTop: 13,
        marginStart: 70,
        borderRadius: 10,
    },
})