import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity, ImageBackground, StyleSheet, } from "react-native";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { format, addDays } from 'date-fns';

import utils from "../../utils";
import api from "../../api";
import Donutchart from "../../components/Donutchart";
import Entypo from "react-native-vector-icons/Entypo"
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../../constants";

const TrainingSchedule = () => {
    const navigation = useNavigation();
    const [userId, setUserId] = useState(null);
    const currentTime = new Date();
    const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    currentTime.setUTCHours(currentTime.getUTCHours());
    const year = currentTime.getFullYear();     // năm
    const month = currentTime.getMonth();      // tháng
    const dayOfmonth = currentTime.getDate();  // ngày trong tháng
    const day = currentTime.getDay();          // Thứ trong tuần, nhung tra ve cac gia tri 0-6
    const dayName = daysOfWeek[day];           // Chuyen tu du lieu số sang thứ trong tuần

    const Cumulative = 0;    // gia su cai nay = 0
    const totalNumber = 0;
    const targerComplete = 0;
    const stepNumber = 0;
    const distance = 0;
    const target = 100; // mục tiêu chạy
    const amount = 55; // thực hiện đc bao nhiêu
    const percent = (amount / target * 100).toFixed(2);  // % ở donut


    const [currentDate, setCurrentDate] = useState(new Date());
    const startDate = new Date(currentDate);
    const [reminderDay, setReminderDay] = useState([]);


    const loadData = async () => {
        let user_id = await utils.AsyncStorage.getItem('user_id');
        setUserId(user_id)
        api.UserAPI.handleGetUserInformation({
            'user_id': user_id
        })
            .then(response => {
                if (response?.data?.userInfo?.reminderDay) {
                    //    console.log(response?.data?.userInfo?.reminderDay)
                    setReminderDay(response?.data?.userInfo?.reminderDay);
                }
            })
            .catch(err => {
                console.log(err)
            })

    }
    useEffect(() => {
        loadData();
    }, [])

    startDate.setDate(currentDate.getDate() - currentDate.getDay());

    const daysOfMonth = [];
    const dayNames = [];

    for (let i = 0; i < 7; i++) {
        const date = addDays(startDate, i);
        daysOfMonth.push(format(date, 'd'));
        dayNames.push(daysOfWeek[date.getDay()]);
    }

    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../assets/images/horizone.jpg")}
                style={styles.imagebg}>
                <View style={{ flex: 1, backgroundColor: 'rgba(129,172,255, 0.6)', }}>
                    <View style={styles.rowContainer}>
                        <TouchableOpacity style={{ marginHorizontal: -20, zIndex: 100 }} onPress={() => (navigation.navigate(ROUTES.ME_TAB))}>
                            <MaterialCommunityIcon name="chevron-left" style={styles.iconHeader} />
                        </TouchableOpacity>
                        <Text style={styles.textHeader}>Training Schedule</Text>
                        <TouchableOpacity>
                            <Ionicons name="settings-outline" size={32} color={"white"} onPress={() => (navigation.navigate(ROUTES.VIEWSETTING))}></Ionicons>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.boxInfor}>
                        <View style={styles.detailInfor}>
                            {/* Tích lũy */}
                            <Text style={styles.inforText1}>Cumulative{'\n'}</Text>
                            <View style={styles.detailInfor2}>
                                <Text style={styles.inforText2}>{Cumulative}</Text>
                                <Text style={{ color: 'white' }}>day</Text>
                            </View>
                        </View>
                        <View style={styles.detailInfor}>
                            {/* Tổng bước chạy trong tuần */}
                            <Text style={styles.inforText1}>Total number of step this week</Text>
                            <View style={styles.detailInfor2}>
                                <Text style={styles.inforText2}>{totalNumber}</Text>
                            </View>
                        </View>
                        <View style={styles.detailInfor}>
                            {/* Mục tiêu đã hoàn thành */}
                            <Text style={styles.inforText1}>Target completed</Text>
                            <View style={styles.detailInfor2}>
                                <Text style={styles.inforText2}>{targerComplete}</Text>
                                <Text style={{ color: 'white' }}>day</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.calender}>
                <Text style={styles.bluetext}>{year} - {month + 1}</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', flex: 1, marginVertical: 5, }}>
                    {daysOfWeek.map((day, index) => {
                        const isReminderDay = reminderDay.includes(day);
                        return (
                            <View key={index} style={[styles.day, { borderColor: dayNames[index].toLowerCase() === dayName.toLowerCase() ? 'blue' : 'transparent', }]}>
                                <Text style={styles.bluetext}>{day}</Text>
                                {
                                    isReminderDay
                                        ?
                                        <>
                                            <View style={[styles.circleBg, { backgroundColor: 'blue' }]}>
                                                <Text style={[styles.bluetext, { color: "white" }]}>{daysOfMonth[index]}</Text>
                                            </View>
                                        </>
                                        :
                                        <>
                                            <View style={[styles.circle]}>
                                                <Text style={styles.bluetext}>{daysOfMonth[index]}</Text>
                                            </View>
                                        </>
                                }
                            </View>
                        )
                    })}
                </View>
            </View>
            <View style={styles.attitude}>
                {
                    reminderDay.includes(dayName)
                        ?
                        <>
                            {/* Tập thì la cai nay */}
                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start' }}>
                                <View style={[styles.practiceRowView,]}>
                                    <View style={styles.halfPractice}>
                                        <View style={{
                                            height: 45, width: 45, borderRadius: 22.5, backgroundColor: '#81acff'
                                            , alignItems: 'center', justifyContent: 'center'
                                        }}>
                                            <Image source={require("../../assets/icons/shoe.png")} style={{
                                                height: 36,
                                                width: 36,
                                            }}></Image>
                                        </View>
                                        <View style={{ width: 120, height: 45, marginLeft: 8, }}>
                                            <Text style={{ fontSize: 18, }}>Step number {'\n'}
                                                {stepNumber}</Text>
                                        </View>
                                    </View>
                                    <View style={[styles.halfPractice, { alignItems: 'flex-start', marginTop: 50, }]}>
                                        <View style={{
                                            height: 45, width: 45, borderRadius: 22.5, backgroundColor: '#49F16E',
                                            justifyContent: 'center', alignItems: 'center'
                                        }}>
                                            <Entypo name="location" size={30} color={"white"}></Entypo>
                                        </View>
                                        <View style={{ width: 120, height: 45, marginLeft: 8, }}>
                                            <Text style={{ fontSize: 18, }}>Distance {'\n'}
                                                {distance} km</Text>
                                        </View>
                                    </View>
                                </View>
                                <View style={styles.practiceRowView}>
                                    <Donutchart radius={60} target={target} spent={percent} text="%" colorTarget='#FBDA85' colorAmount="#FCA21C" strokeTarget="15" strokeAmount="15" colorText='#FCA21C' fontText={20} />
                                </View>

                            </View>
                        </>
                        :
                        <>
                            <View>
                                <Image source={require("../../assets/images/training2.png")} style={styles.image}></Image>
                                <Image source={require("../../assets/images/training3.png")} style={{ width: 200, marginTop: -30, }}></Image>
                                <Text style={styles.bluetext}>Today is your day of ohh</Text>
                            </View>
                        </>

                }

            </View>
        </View >
    )

}
export default TrainingSchedule

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E2E2E2'
    },
    imagebg: {
        flex: 0.35,
    },
    iconHeader: {
        fontSize: 50,
        color: 'white',
    },
    rowContainer: {
        flexDirection: 'row',
        marginHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    textHeader: {
        fontSize: 25,
        color: 'white',
        fontWeight: '400',
        alignSelf: 'center',
    },
    boxInfor: {
        flex: 1,
        flexDirection: 'row',
    },
    detailInfor: {
        flex: 1 / 3,
        justifyContent: 'center',
    },
    inforText1: {
        fontSize: 18,
        color: 'white',
        alignSelf: 'center',
    },
    inforText2: {
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        marginRight: 5,
    },
    detailInfor2: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    calender: {
        marginVertical: 5,
        height: 150,
        //backgroundColor: 'blue',
        borderBottomWidth: 2,
        borderColor: '#ccc'
    },
    bluetext: {
        color: 'blue',
        fontSize: 16,
        alignSelf: 'center'
    },
    day: {
        flex: 1 / 8,
        borderBottomWidth: 3,
        borderColor: 'orange'
    },
    circle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'blue',
        //    backgroundColor: 'blue',
        alignSelf: 'center',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circleBg: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: 'blue',
        //    backgroundColor: 'blue',
        alignSelf: 'center',
        marginTop: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'yellow'
    },
    attitude: {
        flex: 0.5,
        //    backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 180,
        width: 180,
        alignSelf: 'center'
    },
    practiceRowView: {
        flex: 0.5,
        //    backgroundColor: 'green',
        //    justifyContent: 'center',
        //    alignSelf: 'flex-start'
    },
    halfPractice: {
        flex: 0.5,
        flexDirection: 'row',
        //    backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'flex-end',
    }
})