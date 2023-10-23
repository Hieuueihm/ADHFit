import React from "react";
import { View, Text, Image, ImageBackground, SafeAreaView, TouchableOpacity, Dimensions, ScrollView, StyleSheet } from "react-native";
import { useNavigation } from '@react-navigation/native';
const BodyWeight = () => {
    //const navigation = useNavigation();
    const text1="What is a healthy weight?";
    const text2="What is a obesity?";
    const text3="What causes obesity?";
    const text4="How to diagnose obesity?";
    const text5="How to loss weight?";
    const image1 = require("../../../assets/images/post1BodyWeight.jpg");
    const image2 = require("../../../assets/images/post2BodyWeight.jpg");
    const image3 = require("../../../assets/images/post3BodyWeight.jpg");
    const image4 = require("../../../assets/images/post4BodyWeight.jpg");
    const image5 = require("../../../assets/images/post5BodyWeight.jpg");
    return (
        <SafeAreaView>
            <ImageBackground source={require("../../../assets/images/Layer1.png")}style={{height: Dimensions.get("window").height,width: Dimensions.get("window").width,}}>
                <View style={{height: Dimensions.get("window").height, width: Dimensions.get("window").width, alignItems: 'center'}}>

                    <TouchableOpacity
                        //onPress={() => navigation.navigate("text1")}
                        activeOpacity={0.7} style={styles.container}>
                        <Text style={styles.text}>{text1}</Text>
                        <Image source={image1} style={styles.image}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity
                        //onPress={() => navigation.navigate("text2")}
                        activeOpacity={0.7} style={styles.container}>
                        <Text style={styles.text}>{text2}</Text>
                        <Image source={image2} style={styles.image}></Image>
                    </TouchableOpacity>
                    
                    <TouchableOpacity
                        //onPress={() => navigation.navigate("text3")}
                        activeOpacity={0.7} style={styles.container}>
                        <Text style={styles.text}>{text3}</Text>
                        <Image source={image3} style={styles.image}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity
                       //onPress={() => navigation.navigate("text4")}
                        activeOpacity={0.7} style={styles.container}>
                        <Text style={styles.text}>{text4}</Text>
                        <Image source={image4} style={styles.image}></Image>
                    </TouchableOpacity>

                    <TouchableOpacity
                        //onPress={() => navigation.navigate("text5")}
                        activeOpacity={0.7} style={styles.container}>
                        <Text style={styles.text}>{text5}</Text>
                        <Image source={image5} style={styles.image}></Image>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
export default BodyWeight

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        height: 100,
        width: 370,
        backgroundColor: '#E4E4E4',
        flexDirection: 'row',
        borderRadius: 20,
        alignItems: 'center',
        display: 'flex',
    },
    text: {
        flex: 2,
        fontSize: 20,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 25,
        whiteSpace: 'normal', 
        wordWrap: 'break-word'
    },
    image: {
        flex: 1,
        height: 75,
        width: 120,
        borderRadius: 10,
        marginRight: 10
    },
})