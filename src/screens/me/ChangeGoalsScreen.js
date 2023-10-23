import React, { useState, useRef } from "react";
import { View, Text, SafeAreaView, TextInput, Image, ImageBackground, Button, TouchableOpacity, StyleSheet, Alert, ScrollView, TouchableWithoutFeedback } from "react-native"
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../../constants";
import TickCheckbox from "../../components/Checkbox";
import LinearGradient from "react-native-linear-gradient";
import SwitchButton from "../../components/Switch";


export default function ChangeGoalsScreen() {
    const [currentScreen, setCurrentScreen] = useState(1);
    const [scollViewHeight, setScrollViewHeight] = useState(0);
    const [selectedStep, setSelectedStep] = useState(null);
    const buttonText = currentScreen === 3 ? "Done" : "Next";
    ; let stepsArray = [];
    for (let i = 1000; i <= 30000; i += 100) {
        stepsArray.push(i)
    }

    ; let timeArray = [];
    for (let i = 0; i <= 480; i += 1) {
        timeArray.push(i);
    }
    const handleClick = () => {
        if (currentScreen < 3) {
            setCurrentScreen(currentScreen + 1);
        } else {
            setCurrentScreen(1);
        }
        //    console.log(screens[currentScreen - 1])
    };
    const backHandleClick = () => {

    }
    const handleStepPress = (step) => {
        setSelectedStep(step);
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
                    const isSelected = selectedStep === step;
                    return (
                        <TouchableWithoutFeedback
                            key={index}
                            onPress={() => handleStepPress(step)}
                        >
                            <View
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: 60,
                                    backgroundColor: isSelected ? '#81ACFF' : '#ccc',
                                }}>
                                <Text>{step}</Text>
                                {isSelected && <Text> Steps</Text>}
                            </View>
                        </TouchableWithoutFeedback>
                    )
                }

                )}

            </ScrollView>

        </>,
        <>
            <View style={[styles.rowContainer, {
                marginTop: 40,
            }]}>
                <Text style={[styles.textCenter,
                {
                    fontSize: 18,
                    fontWeight: 'bold'
                }]}>Select Training day</Text>
            </View>
            <Text style={[styles.textCenter, { fontSize: 16, }]}>Training for at least one day</Text>
            <View style={[styles.centerPosition]}>
                <Text style={{ fontSize: 16, marginLeft: -5, color: '#81ACFF' }}>Mon</Text>
                <Text style={{ fontSize: 16, marginLeft: -5, color: '#81ACFF' }}>Tue</Text>
                <Text style={{ fontSize: 16, marginLeft: -5, color: '#81ACFF' }}>Wed</Text>
                <Text style={{ fontSize: 16, marginLeft: -5, color: '#81ACFF' }}>Thu</Text>
                <Text style={{ fontSize: 16, color: '#81ACFF' }}>Fri</Text>
                <Text style={{ fontSize: 16, color: '#81ACFF' }}>Sat</Text>
                <Text style={{ fontSize: 16, color: '#81ACFF' }}>Sun</Text>
            </View>
            <View style={[styles.centerPosition]}>
                <TickCheckbox />
                <TickCheckbox />
                <TickCheckbox />
                <TickCheckbox />
                <TickCheckbox />
                <TickCheckbox />
                <TickCheckbox />
            </View>
            <Image source={require("../../assets/images/changegoal2.png")}
                style={{
                    height: 250,
                    width: 250,
                    position: 'absolute',
                    top: 280,
                    left: 60,
                }}></Image>
        </>,
        <>
            <View style={[styles.rowContainer, {
                marginTop: 40,
            }]}>
                <Text style={[styles.textCenter,
                {
                    fontSize: 18,
                    fontWeight: 'bold'
                }]}>Daily training start time</Text>
            </View>
            <LinearGradient
                start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} colors={['rgba(255,255,255, 0.5)', '#DCDCDC', 'rgba(255,255,255, 0.5)']}
                style={{
                    height: 200,
                    width: 300,
                    alignSelf: 'center'
                }}>
                <ScrollView
                    onLayout={(event) => {
                        var { height } = event.nativeEvent.layout;
                        setScrollViewHeight(height)
                    }}
                    style={{
                        marginTop: 12,
                    }}>
                    {timeArray.map((time, index) => {
                        const isSelected = selectedStep === time;
                        const displayValue = time % 24; // Sử dụng modulo 24 để lặp lại giá trị từ 0 đến 23
                        return (

                            <TouchableWithoutFeedback
                                key={index}
                                onPress={() => handleStepPress(time)}
                            >
                                <View
                                    style={{
                                        flexDirection: 'row',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: 40,
                                        backgroundColor: isSelected ? '#81ACFF' : 'transparent',
                                        borderColor: isSelected ? 'blue' : 'transparent',  // Màu viền
                                    }}>
                                    <Text style={{ fontWeight: isSelected ? "bold" : "400" }}>{displayValue}:00</Text>
                                </View>
                            </TouchableWithoutFeedback>
                        )
                    }
                    )}
                </ScrollView>
            </LinearGradient>
            <Image source={require("../../assets/images/changegoal3.png")}
                style={{
                    margin: 20,
                    height: 150,
                    width: 150,
                    alignSelf: 'center'
                }}></Image>
            <View style={[styles.bottomSetting,]}>
                <Text style={[styles.textBottom]}>Training remainder</Text>
                <SwitchButton />
            </View>
            <View style={[styles.bottomSetting,]}>
                <Text style={[styles.textBottom]}>Reminder time</Text>
                <Text style={{ fontSize: 16, marginLeft: 75, }}>8:00</Text>
                <TouchableOpacity>
                    <MaterialCommunityIcon name="chevron-right" size={32}></MaterialCommunityIcon>
                </TouchableOpacity>
            </View>
        </>,
    ];
    return (
        <View style={styles.container}>
            <View style={styles.rowContainer}>
                <TouchableOpacity
                    onPress={backHandleClick}
                >
                    <MaterialCommunityIcon name="chevron-left" style={styles.iconHeader} />
                </TouchableOpacity>

                <View style={[styles.centerRowView, { borderRadius: 25, backgroundColor: "#81ACFF" }]}>
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
            <TouchableOpacity
                onPress={handleClick}
                style={styles.next}
            >
                <Text style={{ color: 'black', fontSize: 18, }}>{buttonText}</Text>
            </TouchableOpacity>
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
        marginHorizontal: 10,
    },
    centerRowView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        marginRight: 50,
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
    },
    next: {
        backgroundColor: '#81ACFF',
        borderRadius: 20,
        height: 35,
        width: 300,
        position: 'absolute',
        bottom: 55,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    centerPosition: {
        height: 50,
        position: "relative",
        bottom: 170,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    bottomSetting: {
        height: 45,
        borderBottomWidth: 2,
        borderColor: 'rgba(129,172,255, 0.5)',
        flexDirection: 'row',
        alignItems: 'center',
    },
    textBottom: {
        fontSize: 16,
        marginLeft: 10,
        marginRight: 120,
        fontWeight: '600'
    },
})