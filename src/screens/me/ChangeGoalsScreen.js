import React, { useState } from "react";
import { View, Text, SafeAreaView, TextInput, Image, ImageBackground, Button, TouchableOpacity, StyleSheet, Alert, ScrollView } from "react-native"
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../../constants";


export default function ChangeGoalsScreen() {
    const [currentScreen, setCurrentScreen] = useState(1);
    const [scollViewHeight, setScrollViewHeight] = useState(0);
    ; let stepsArray = [];
    for (let i = 1000; i <= 30000; i += 100) {
        stepsArray.push(i)
    }

    const handleClick = () => {
        if (currentScreen < 3) {
            setCurrentScreen(currentScreen + 1);
        } else {
            setCurrentScreen(1);
        }
        console.log(screens[currentScreen - 1])
    };
    const backHandleClick = () => {

    }

    const titleScreen = [
        'Goal',
        'Period',
        'Start time'
    ]
    const screens = [
        <>
            <View style={[styles.rowContainer, {
                marginTop: 40
            }]}>
                <Text style={[styles.textCenter,
                {
                    fontSize: 16
                }]}>Please set your target step</Text>
            </View>

            <ScrollView
                onLayout={(event) => {
                    var { height } = event.nativeEvent.layout;
                    setScrollViewHeight(height)
                }}
                style={{
                    marginTop: 12,
                    backgroundColor: '#ccc',
                }}>
                {stepsArray.map((step, index) => {
                    console.log(scollViewHeight)
                    return (
                        <View key={index} style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                            height: 60
                        }}>
                            <Text>{step}</Text>
                        </View>
                    )
                }

                )}

            </ScrollView>

        </>,
        <Text key={2}>Screen 2 Content</Text>,
        <Text key={3}>Screen 3 Content</Text>,
    ];
    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <TouchableOpacity
                    onPress={backHandleClick}
                >
                    <MaterialCommunityIcon name="chevron-left" style={styles.iconHeader} />
                </TouchableOpacity>

                <View style={styles.centerRowView}>
                    <Text style={styles.textHeader}>
                        {
                            titleScreen[currentScreen - 1]
                        }
                    </Text>
                </View>
            </View>
            {
                screens[currentScreen - 1]
            }

            <View style={{ height: 300 }}>

            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 4
    },
    rowContainer: {
        flexDirection: 'row',
        marginHorizontal: 10
    },
    centerRowView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginRight: 50
    }
    ,
    textHeader: {
        fontSize: 25,
        color: 'black',
        fontWeight: '400'
    }
    ,
    iconHeader: {
        fontSize: 50,
        color: 'black',
    },
    textCenter: {
        flex: 1,
        textAlign: 'center'
    }
})