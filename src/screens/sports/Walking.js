import React from 'react';
import { View, StyleSheet, FlatList, PermissionsAndroid, TouchableOpacity } from 'react-native';
import MapView, { Polyline, Marker } from 'react-native-maps';
import { List, Title, Headline, Text, Appbar } from 'react-native-paper';
import { fetchData, csvrowToJson, parseCsvdata, twoDecimals } from './WalkTrack';
import GetLocation from 'react-native-get-location'
import { COLORS } from '../../../constants';
export default function Walking() {

    const [PGranted, setPGranted] = React.useState();

    const [walklist, setWalklist] = React.useState([]);
    const [refreshing, setRefreshing] = React.useState(false);
    const [walkinfo, setWalkinfo] = React.useState([]);
    const [minThreshold, setMinThreshold] = React.useState(10);
    const [selectedWalkIndex, setSelectedWalkIndex] = React.useState(-1);

    const urlSource = "https://bit.ly/3vjOhiJ";
    const mapRef = React.useRef();

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
    async function checkLocationPermission() {
        let granted = await getLocationPermission();
        setPGranted(granted)
        if (granted) {
            getCurrentPosition();
        }
    }
    async function getCurrentPosition() {
        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 60000,
        })
            .then(location => {
                console.log(location);
            })
            .catch(error => {
                const { code, message } = error;
                console.warn(code, message);
            })
    }
    async function getLocationPermission() {
        const granted = await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
        ).catch(err => console.log(err))
        return granted === PermissionsAndroid.RESULTS.GRANTED
    }
    React.useEffect(() => {
        checkLocationPermission();
        pullData(urlSource);
    }, []);

    const renderItem = ({ item, index }) => {
        const borderColor = (index === selectedWalkIndex) ? "orange" : "gray";
        return (
            <View>
                <List.Item
                    style={[styles.listitem, { borderColor }]}
                    title={`Walk #${index + 1} Distance: ${item.distance}m`}
                    description={
                        `Dur.: ${twoDecimals(item.duration / 60)}mins ` +
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
        <View style={styles.mainView}>
            {
                PGranted !== undefined
                    ?
                    <>
                        <View style={styles.infoView}>
                            <Appbar.Header>
                                <Appbar.Content title="Walk Track" />
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
                                keyExtractor={(item, index) => index}
                                refreshing={refreshing}
                                onRefresh={() => {
                                    pullData(urlSource)
                                }}
                            />
                        </View>
                    </>

                    :
                    <>
                        <TouchableOpacity
                            onPress={() => checkLocationPermission()}
                            style={{
                                width: 90, height: 40,
                                flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                                backgroundColor: 'rgba(185, 175, 245, 1)',
                                borderRadius: 30, marginRight: 30

                            }}>
                            <Text style={{ color: COLORS.bgWhite(1), fontWeight: 600, fontSize: 16 }}>Allow</Text>
                        </TouchableOpacity>
                    </>
            }
        </View >
    );
}


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
        borderRadius: 36,
        backgroundColor: "gray",
    }
});