import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';
import { List, Title, Appbar } from 'react-native-paper';
import MapView, { Polyline, Marker } from 'react-native-maps';
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { ROUTES } from '../../../constants';
import { useNavigation } from "@react-navigation/native";

const History = () => {
    const navigation = useNavigation();
    const [walklist, setWalklist] = useState([]);
    const [refreshing, setRefreshing] = useState(false);
    const [walkinfo, setWalkinfo] = useState([]);
    const [selectedWalkIndex, setSelectedWalkIndex] = useState(-1);
    const mapRef = useRef();

    const urlSource = "https://bit.ly/3vjOhiJ";
    const isOnline = false;
    const mockData = [
        { distance: 1000, duration: 620, speed: 1.5, gps: [{ latitude: 37.78825, longitude: -122.4324, timestamp: "2023-01-01T12:00:00" }] },
        { distance: 1200, duration: 100, speed: 1.5, gps: [{ latitude: 21.041262, longitude: 105.777878, timestamp: "2023-01-01T12:00:00" }] },
        { distance: 7600, duration: 300, speed: 1.5, gps: [{ latitude: 21.028689, longitude: 105.808214, timestamp: "2023-01-01T12:00:00" }] },
        { distance: 1200, duration: 350, speed: 1.5, gps: [{ latitude: 21.062709, longitude: 105.360341, timestamp: "2023-01-01T12:00:00" }] },
        // Thêm các phần tử khác nếu cần
    ];

    useEffect(() => {
        setWalklist(mockData);
    }, []);

    const renderItem = ({ item, index }) => {
        const borderColor = (index === selectedWalkIndex) ? "orange" : "gray";
        const walkDistance = item.distance.toFixed(2);
        const walkDuration = (item.duration / 60).toFixed(2);
        const walkSpeed = item.speed.toFixed(2);

        return (
            <List.Item
                style={[styles.listitem, { borderColor }]}
                title={`Walk #${index + 1} Distance: ${walkDistance}m`}
                description={`Dur.: ${walkDuration}mins Avg Spd: ${walkSpeed}m/sec`}
                left={props => <List.Icon {...props} icon="walk" style={styles.icon} />}
                onPress={() => {
                    const newWalkinfo = item.gps.map(e => ({ latitude: e.latitude, longitude: e.longitude, timestamp: e.timestamp }));
                    setWalkinfo(newWalkinfo);
                    mapRef.current.fitToCoordinates(newWalkinfo);
                    setSelectedWalkIndex(index);
                }}
            />
        );
    };

    return (
        <View style={styles.mainView}>
            <View style={styles.infoView}>
                <Appbar.Header>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(ROUTES.SPORT_TAB)
                        }}
                    >
                        <MaterialCommunityIcon name='chevron-left' size={37}></MaterialCommunityIcon>
                    </TouchableOpacity>
                    <Text style={styles.headerText}>History walking</Text>
                </Appbar.Header>
                <MapView
                    ref={mapRef}
                    style={styles.mapView}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <Polyline
                        coordinates={walkinfo}
                        strokeColor="#8E94F2"
                        strokeWidth={6}
                        lineDashPattern={[3, 1, 3, 1]}
                    />
                    {walkinfo.length > 0 &&
                        <>
                            <Marker
                                title={`Start: ${walkinfo[0].timestamp}`}
                                pinColor="green"
                                coordinate={walkinfo[0]}
                            />
                            <Marker
                                title={`Stop: ${walkinfo[walkinfo.length - 1].timestamp}`}
                                pinColor="blue"
                                coordinate={walkinfo[walkinfo.length - 1]}
                            />
                        </>
                    }
                </MapView>
            </View>
            <View style={styles.walklistView}>
                <Title style={styles.title}>
                    Walk List ({walklist.length})
                </Title>
                <FlatList
                    data={walklist}
                    renderItem={renderItem}
                    keyExtractor={(item, index) => index.toString()}
                    refreshing={refreshing}
                    onRefresh={() => {
                        setRefreshing(true);
                        // Thêm logic cập nhật dữ liệu ở đây
                        setRefreshing(false);
                    }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    infoView: {
        flex: 1,
        width: "100%",
        height: "100%",
    },
    mapView: {
        flex: 1,
    },
    walklistView: {
        flex: 1,
        borderRadius: 12,
        paddingLeft: 10,
        paddingRight: 10
    },
    listitem: {
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "gray",
        borderRadius: 36,
        margin: 6
    },
    title: {
        paddingLeft: 20,
        paddingTop: 10,
        color: "#6200ee"
    },
    icon: {
        borderRadius: 24,
        backgroundColor: "gray",
        height: 48,
        width: 48,
    },
    headerText: {
        fontSize: 24,
        color: 'black',
        alignSelf: 'center',
        marginLeft: 72,
    },

});

export default History;