import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions, ImageBackground, SafeAreaView, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../constants';
import { useSelector } from "react-redux"
import { List, Title, Headline, Appbar } from 'react-native-paper';

const History = () => {
    const [walklist, setWalklist] = React.useState([]);
    const [refreshing, setRefreshing] = React.useState(false);
    const navigation = useNavigation();

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

    const pullData = async (url) => {
        await setRefreshing(true);
        const csvdata = await fetchData(url);
        if (!csvdata) {
            await setRefreshing(false);
            return false;
        }
        const parsedWalks = await parseCsvdata(csvdata, minThreshold);
        await setWalklist(parsedWalks);
        await setRefreshing(false);
        return true;
    };
    const renderItem = ({ item, index }) => {
        const borderColor = (index === selectedWalkIndex) ? "green" : "gray";
        return (
            <View>
                <List.Item
                    style={[styles.listitem, { borderColor }]}
                    title={`Walk #${index + 1} - Distance: ${item.distance}m`}
                    description={
                        `Dur: ${twoDecimals(item.duration / 60)}mins - ` +
                        `Avg Spd: ${twoDecimals(item.speed)}m/sec`}
                    left={props => <List.Icon {...props} icon="walk" style={styles.icon} />}
                    onPress={() => {
                        const newWalkinfo = item.gps.map(e => { return { latitude: e.latitude, longitude: e.longitude, timestamp: e.timestamp } })
                        setWalkinfo(newWalkinfo);
                        mapRef.current.fitToCoordinates(newWalkinfo);
                        setSelectedWalkIndex(index);
                        // print current walk info on console
                        // console.log(`Walk #${index + 1} Distance: ${item.distance}m `+
                        //   `Duration: ${twoDecimals(item.duration / 60)}mins `+
                        //   `Avg Spd: ${twoDecimals(item.speed)}m/sec`);

                    }}
                />
            </View>
        );
    };



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

            <View style={styles.walklistView}>
                <Title style={styles.title}>
                    Walk List ({walklist.length})
                </Title>
                <FlatList
                    data={walklist} w
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index}
                    refreshing={refreshing}
                    onRefresh={() => {
                        pullData(urlSource)
                    }}
                />
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
    walklistView: {
        flex: 1,
        borderRadius: 12,
        paddingLeft: 10,
        paddingRight: 10
    },
    title: {
        paddingLeft: 20,
        paddingTop: 10,
        color: "#6200ee"
    },
})