import React, { useState, useEffect } from "react";
import { Text, View, Image, TouchableOpacity, ImageBackground, StyleSheet, } from "react-native";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { alignSelf } from "react-native-wind/dist/styles/flex/align-self";


const TrainingSchedule = () => {
    const currentTime = new Date();
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    currentTime.setUTCHours(currentTime.getUTCHours());
    const year = currentTime.getFullYear();     // năm
    const month = currentTime.getMonth();      // tháng
    const dayOfmonth = currentTime.getDate();  // ngày trong tháng
    const day = currentTime.getDay();          // Thứ trong tuần, nhung tra ve cac gia tri 0-6
    const dayName = daysOfWeek[day];           // Chuyen tu du lieu số sang thứ trong tuần
    const monthName = monthsOfYear[month];
    const isHighlightMon = day === 1;
    const isHighlightTue = day === 2;
    const isHighlightWed = day === 3;
    const isHighlightThur = day === 4;
    const isHighlightFri = day === 5;
    const isHighlightSat = day === 6;
    const isHighlightSun = day === 0;

    const [dayCheck, setDayCheck] = useState(0);
    const Cumulative = 0;    // gia su cai nay = 0
    const totalNumber = 0;
    const targerComplete = 0;

    useEffect(() => {
        // Giả sử thứ 3 5 t7 chủ nhât là ngày tập
        if (day === 2 || day === 4 || day === 5 || day === 6) {
            setDayCheck(1);
        } else if (day === 0 || day === 1 || day === 3) {
            // Ngày nghỉ
            setDayCheck(0);
        }
    }, [day]);

    return (
        <View style={styles.container}>
            <ImageBackground source={require("../../assets/images/horizone.jpg")}
                style={styles.imagebg}>
                <View style={{ flex: 1, backgroundColor: 'rgba(129,172,255, 0.6)', }}>
                    <View style={styles.rowContainer}>
                        <TouchableOpacity>
                            <MaterialCommunityIcon name="chevron-left" style={styles.iconHeader} />
                        </TouchableOpacity>
                        <Text style={styles.textHeader}>Training Schedule</Text>
                        <TouchableOpacity>
                            <Ionicons name="settings-outline" size={32} color={"white"} ></Ionicons>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.boxInfor}>
                        <View style={styles.detailInfor}>
                            <Text style={styles.inforText1}>Cumulative{'\n'}</Text>
                            <View style={styles.detailInfor2}>
                                <Text style={styles.inforText2}>{Cumulative}</Text>
                                <Text style={{ color: 'white' }}>day</Text>
                            </View>
                        </View>
                        <View style={styles.detailInfor}>
                            <Text style={styles.inforText1}>Total number of step this week</Text>
                            <View style={styles.detailInfor2}>
                                <Text style={styles.inforText2}>{totalNumber}</Text>
                            </View>
                        </View>
                        <View style={styles.detailInfor}>
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
                    <View style={[styles.day, { borderColor: isHighlightMon ? 'blue' : 'transparent', }]}>
                        <Text style={styles.bluetext}>Mon</Text>
                        <View style={styles.circle}>
                            <Text style={styles.bluetext}>23</Text>
                        </View>
                    </View>
                    <View style={[styles.day, { borderColor: isHighlightTue ? 'blue' : 'transparent', }]}>
                        <Text style={styles.bluetext}>Tue</Text>
                        <View style={styles.circle}>
                            <Text style={styles.bluetext}>24</Text>
                        </View>
                    </View>
                    <View style={[styles.day, { borderColor: isHighlightWed ? 'blue' : 'transparent', }]}>
                        <Text style={styles.bluetext}>Wed</Text>
                        <View style={styles.circle}>
                            <Text style={styles.bluetext}>25</Text>
                        </View>
                    </View>
                    <View style={[styles.day, { borderColor: isHighlightThur ? 'blue' : 'transparent', }]}>
                        <Text style={styles.bluetext}>Thu</Text>
                        <View style={styles.circle}>
                            <Text style={styles.bluetext}>26</Text>
                        </View>
                    </View>
                    <View style={[styles.day, { borderColor: isHighlightFri ? 'blue' : 'transparent', }]}>
                        <Text style={styles.bluetext}>Fri</Text>
                        <View style={styles.circle}>
                            <Text style={styles.bluetext}>27</Text>
                        </View>
                    </View>
                    <View style={[styles.day, { borderColor: isHighlightSat ? 'blue' : 'transparent', }]}>
                        <Text style={styles.bluetext}>Sat</Text>
                        <View style={styles.circle}>
                            <Text style={styles.bluetext}>28</Text>
                        </View>
                    </View>
                    <View style={[styles.day, { borderColor: isHighlightSun ? 'blue' : 'transparent', }]}>
                        <Text style={styles.bluetext}>Sun</Text>
                        <View style={styles.circle}>
                            <Text style={styles.bluetext}>29</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.attitude}>
                {
                    dayCheck ? (
                        // Tập thì in ảnh này
                        <Image source={require("../../assets/images/training1.png")} style={styles.image}></Image>
                    ) : (
                        <Image source={require("../../assets/images/training2.png")} style={styles.image}></Image>
                    )
                }
                <Image source={require("../../assets/images/training3.png")} style={{ width: 200, marginTop: -30, }}></Image>
                {
                    dayCheck ? (
                        //Tập thì in dòng text này
                        <Text style={styles.bluetext}>Let's practice hard today</Text>
                    ) : (
                        <Text style={styles.bluetext}>Today is your day of ohh</Text>
                    )
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
        height: 200,
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
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center'
    },
    attitude: {
        flex: 0.4,
        //    backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height: 180,
        width: 180,
        alignSelf: 'center'
    }
})