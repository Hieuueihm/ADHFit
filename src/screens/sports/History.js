import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions, ImageBackground, SafeAreaView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../constants';
import { useSelector } from "react-redux"
import Donutchart from '../../components/Donutchart';


const distance = 5.45;
const distanceTarget = 7;

const time = 30;
const pace = time / distance;
const kCal = 450;
const kCalTarget = 400;
const heart = 120;

const calculateKm = () => {
    // Tính toán tỷ lệ tiến triển (progress) của distance so với distanceTarget
    const progress = Math.min(distance / distanceTarget, 1);
    return progress * 100; // Chuyển đổi thành phần trăm
};

const progress = calculateKm();

const calculateKcal = () => {
    const progressKcal = Math.min(kCal / kCalTarget, 1);
    return progressKcal * 100;
};

const progressKcal = calculateKcal();


const History = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.Header}>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(ROUTES.SPORT_TAB)
                    }}>
                    <View style={{
                        width: 100,
                        alignItems: 'flex-start',
                        //    backgroundColor: 'red',
                        marginLeft: -150,
                    }}><MaterialCommunityIcon name='chevron-left' size={30}></MaterialCommunityIcon></View>
                </TouchableOpacity>
                <View><Text style={[styles.headerText,]}>History</Text></View>
            </View>
            <View style={styles.chartView}>
                <Donutchart radius={80} target={distanceTarget} spent={distance} text="km" colorTarget='#aaa' colorAmount="#81acff" strokeTarget="20" strokeAmount="20" colorText='black' fontText={21}
                ></Donutchart>
                <Text style={{
                    color: 'black',
                    fontSize: 20,
                    position: 'absolute',
                    top: 20,
                    left: 30,
                }}>Last km</Text>
            </View>
            <View style={styles.inforView}>
                <View style={styles.halfView}>
                    <View style={[styles.halfView, { flexDirection: 'column' }]}>
                        <Entypo name='location-pin' size={38} color={"blue"} style={{
                            marginLeft: 28,
                            marginTop: 20,
                        }}></Entypo>
                        <Text style={styles.textInfor}>{distance} km</Text>
                        <Text style={styles.smallText}>total distance</Text>
                    </View>
                    <View style={[styles.halfView, { flexDirection: 'column' }]}>
                        <Entypo name='back-in-time' size={38} color={"blue"} style={{
                            marginLeft: 28,
                            marginTop: 20,
                        }}></Entypo>
                        <Text style={styles.textInfor}>{time} min</Text>
                        <Text style={styles.smallText}>total time</Text>
                    </View>
                </View>
                <View style={styles.halfView}>
                    <View style={[styles.halfView, { flexDirection: 'column' }]}>
                        <MaterialCommunityIcon name='chevron-double-right' size={38} color={"violet"} style={{
                            marginLeft: 28,
                            marginTop: 20,
                        }}></MaterialCommunityIcon>
                        <Text style={styles.textInfor}>{time} min/km</Text>
                        <Text style={styles.smallText}>average pace</Text>
                    </View>
                    <View style={[styles.halfView, { flexDirection: 'column' }]}>
                        <AntDesign name='heart' size={38} color={"violet"} style={{
                            marginLeft: 28,
                            marginTop: 20,
                        }}></AntDesign>
                        <Text style={styles.textInfor}>{heart} bpm</Text>
                        <Text style={styles.smallText}>average heart rate</Text>
                    </View>
                </View>

            </View>
            <View style={styles.lastView}>
                <Text style={[styles.textInfor, { marginTop: 20, }]}>{distance}<Text style={styles.morderateText}> / {distanceTarget}</Text></Text>
                <Text style={styles.smallText}>distance goal</Text>
                <View style={styles.progressBarContainer}>
                    <View style={[styles.progressBar, { width: `${progress}%` }]} />
                </View>

                <Text style={[styles.textInfor, { marginTop: 20, }]}>{kCal}<Text style={styles.morderateText}> / {kCalTarget}</Text></Text>
                <Text style={styles.smallText}>calories goal</Text>
                <View style={styles.progressBarContainer}>
                    <View style={[styles.progressBar, { width: `${progressKcal}%`, backgroundColor: 'violet' }]} />
                </View>
            </View>
        </SafeAreaView >
    )
}
export default History

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: '#ccc'
    },
    Header: {
        flexDirection: 'row',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#9d9d9d',
        backgroundColor: 'white'
    },
    headerText: {
        color: 'black',
        fontSize: 24,
    },
    chartView: {
        height: Dimensions.get("window").height * 0.35,
        //    backgroundColor: 'green',
    },
    inforView: {
        height: Dimensions.get("window").height * 0.35,
        //    backgroundColor: 'green',
        borderBottomWidth: 1,
        borderColor: '#d1d1d1',
    },
    lastView: {
        height: Dimensions.get("window").height * 0.3,
        //    backgroundColor: 'green',

    },
    halfView: {
        flex: 0.5,
        //    backgroundColor: 'orange',
        flexDirection: 'row',
    },
    aquarterView: {
        flex: 0.5,

    },
    textInfor: {
        color: 'black',
        fontSize: 20,
        marginLeft: 30,
        marginTop: 5,
    },
    smallText: {
        color: '#999',
        fontSize: 12,
        marginLeft: 30,
    },
    morderateText: {
        color: 'black',
        fontSize: 16,
    },
    progressBarContainer: {
        height: 5,
        marginLeft: 30,
        marginTop: 10,
        width: 350,
        borderRadius: 15,
        overflow: 'hidden', // Đảm bảo phần tiến triển không bị tràn ra ngoài
    },
    progressBar: {
        height: '100%',
        backgroundColor: 'blue',
    },

})