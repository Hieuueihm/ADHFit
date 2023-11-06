import React from "react";
import { View, Text, Image, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SwitchButton from "../../components/Switch";

const ViewSetting = () => {
    // ngay tap.
    const isSun = true;
    const isMon = false;
    const isTue = false;
    const isWed = true;
    const isThu = false;
    const isFri = true;
    const isSat = false;
    const hour = 8;
    const Minutes = 30;
    const handleOnPress = (enable) => {
        setIsRemider(enable);
    }
    const startHouse = 9;
    const startMinute = 45;
    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="chevron-left" size={32}></MaterialCommunityIcons>
                </TouchableOpacity>
                <View style={{ flex: 0.9 }}>
                    <Text style={styles.headerText}>Settings</Text>
                </View>
            </View>
            <View style={styles.ViewStartTime}>
                <View style={{ flexDirection: 'row', flex: 1 / 12 }}>
                    <View style={{ marginLeft: 10, width: 10, height: 25, backgroundColor: '#9d9d9d' }}></View>
                    <Text style={styles.tittle}>Start time</Text>
                </View>
                <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={require("../../assets/icons/clock1.png")} style={{
                        height: 45,
                        width: 45,
                    }}></Image>
                    <Text style={{ fontSize: 20, marginLeft: 10, }}>Start practice at : {startHouse}.{startMinute}</Text>
                </View>
            </View>
            <View style={styles.ViewShedule}>
                <View style={{ flexDirection: 'row', flex: 1 / 12 }}>
                    <View style={{ marginLeft: 10, width: 10, height: 25, backgroundColor: '#9d9d9d' }}></View>
                    <Text style={styles.tittle}>Schedule</Text>
                </View>
                <View style={{ flexDirection: "row", height: 100, }}>
                    <View style={styles.day}>
                        <Text style={styles.textday}>Sun</Text>
                        <View style={styles.centerposition}>
                            <View style={[styles.circleday, { backgroundColor: isSun ? '#9d9d9d' : 'transparent' }]}></View>
                        </View>
                    </View>
                    <View style={styles.day}>
                        <Text style={styles.textday}>Mon</Text>
                        <View style={styles.centerposition}>
                            <View style={[styles.circleday, { backgroundColor: isMon ? '#9d9d9d' : 'transparent' }]}></View>
                        </View>
                    </View>
                    <View style={styles.day}>
                        <Text style={styles.textday}>Tue</Text>
                        <View style={styles.centerposition}>
                            <View style={[styles.circleday, { backgroundColor: isTue ? '#9d9d9d' : 'transparent' }]}></View>
                        </View>
                    </View>
                    <View style={styles.day}>
                        <Text style={styles.textday}>Wed</Text>
                        <View style={styles.centerposition}>
                            <View style={[styles.circleday, { backgroundColor: isWed ? '#9d9d9d' : 'transparent' }]}></View>
                        </View>
                    </View>
                    <View style={styles.day}>
                        <Text style={styles.textday}>Thu</Text>
                        <View style={styles.centerposition}>
                            <View style={[styles.circleday, { backgroundColor: isThu ? '#9d9d9d' : 'transparent' }]}></View>
                        </View>
                    </View>
                    <View style={styles.day}>
                        <Text style={styles.textday}>Fri</Text>
                        <View style={styles.centerposition}>
                            <View style={[styles.circleday, { backgroundColor: isFri ? '#9d9d9d' : 'transparent' }]}></View>
                        </View>
                    </View>
                    <View style={styles.day}>
                        <Text style={styles.textday}>Sat</Text>
                        <View style={styles.centerposition}>
                            <View style={[styles.circleday, { backgroundColor: isSat ? '#9d9d9d' : 'transparent' }]}></View>
                        </View>
                    </View>
                </View>
                <View style={[styles.bottomSetting,]}>
                    <View style={{ width: 300, }}>
                        <Text style={[styles.textBottom]}>Training remainder</Text>
                    </View>
                    <SwitchButton handleOnPress={handleOnPress} />
                </View>
                <View style={[styles.bottomSetting,]}>
                    <View style={{ width: 300, }}>
                        <Text style={[styles.textBottom]}>Reminder time</Text>
                    </View>
                    <Text style={{ fontSize: 16, marginLeft: 25, }}>{hour}:{Minutes}</Text>

                    <TouchableOpacity>
                        <MaterialCommunityIcons name="chevron-right" size={32}></MaterialCommunityIcons>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    style={styles.delete}
                >
                    <Text style={{ color: 'black', fontSize: 18, }}>Delete</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default ViewSetting

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    Header: {
        flex: 1 / 14,
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        color: '#81acff',
        fontSize: 24,
        alignSelf: 'center',
    },
    ViewStartTime: {
        flex: 0.4,
        //    backgroundColor: 'yellow',
        borderBottomWidth: 1,
        borderColor: '#9d9d9d'
    },
    ViewShedule: {
        flex: 0.6,
        //    backgroundColor: 'green',
        marginTop: 10,
    },
    tittle: {
        fontSize: 18,
        color: 'black',
        marginLeft: 10,
    },
    day: {
        flex: 1 / 7,
        alignItems: 'center',
        marginTop: 20,
        //    backgroundColor: 'red',

    },
    textday: {
        fontSize: 18,
        color: "#9d9d9d",
        alignSelf: 'center',
    },
    centerposition: {
        justifyContent: 'center',
        flex: 0.9,
        //    backgroundColor: 'blue',
    },
    circleday: {
        height: 30,
        width: 30,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#9d9d9d",
        alignSelf: 'center'
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
    delete: {
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
})