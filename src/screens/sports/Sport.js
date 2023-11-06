import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions, } from 'react-native';
import MapView, { Marker, Overlay, } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../constants';

const Sport = () => {
    const navigation = useNavigation();
    /* cái bản đồ l này làm cho mọi thứ khác muốn render đè lên phải dùng absolute nếu ko là lỗi đấy.
    Nên giải pháp của t là cho 1 cái container ở ngoài trước, xong cho Map vào xong cái View chứa nút bấm các thứ(1 cái container khác)
    đè lên trên vs postion = absolute.
    */
    const lastKm = 0.00;       // Giả sử đây là quãng đường đi được.
    const [currentLocation, setCurrentLocation] = useState(null);
    const [isWaitime, setIsWaitime] = useState(false);
    const clickGo = () => {
        setIsWaitime(true);
        console.log(isWaitime);
    }

    useEffect(() => {
        const watchID = Geolocation.watchPosition(
            position => {
                const crd = position.coords;
                setCurrentLocation({
                    latitude: crd.latitude,
                    longitude: crd.longitude,
                    latitudeDelta: 0.0421,
                    longitudeDelta: 0.0421,
                });
            },
            error => {
                console.error(error);
            },
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000, distanceFilter: 10 }
        );
        //    console.log(currentLocation);
        return () => Geolocation.clearWatch(watchID);
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.Header}>
                <Text style={styles.headerText}>Running out doors</Text>
            </View>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: currentLocation ? currentLocation.latitude : 21.036856666666665,
                    longitude: currentLocation ? currentLocation.longitude : 105.78229166666667,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            //    mapType='satellite'// Vệ tinh
            >
                <Marker
                    //Cái currentLocation lúc thì trả về null lúc lại trả về vị trí.
                    // Mà cái máy ảo vị trí là cố định, nên ko test đc nó có cập nhật ko, Thử trên máy thật thì nó cứ trả về null,
                    // là ra bản đồ nma ko lấy đc vị trí ấy.
                    // Đến giờ máy thật vs máy ảo ra 2 kết quả khác nhau r. máy thật maker ở ngã 4 máy ảo luôn maker đc ở cái position của máy ảo.
                    coordinate={{
                        latitude: currentLocation ? currentLocation.latitude : 21.016975,
                        longitude: currentLocation ? currentLocation.longitude : 105.781757,
                    }}
                    title="Your location"
                    description="U are"
                >

                </Marker>
            </MapView>

            {/* Chỉnh cái này mới là chỉnh những cái hiện trên map, trừ cái điểm đánh dấu */}
            <View style={styles.overLay}>
                <View style={styles.halfView}>
                    <View style={styles.rowView}>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate(ROUTES.WEATHER) }}>
                            <View style={{
                                flexDirection: 'row', backgroundColor: 'white',
                                borderRadius: 20, height: 40, width: 150, alignItems: 'center',
                            }}>
                                <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require("../../assets/icons/cloudy.png")} style={styles.icon}></Image>
                                </View>
                                <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'flex-start' }}>
                                    <Text style={{ fontSize: 14, color: '#9D9D9D', }}>Excellent</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate(ROUTES.HEART) }}>
                            <View style={{
                                flexDirection: 'row',
                                height: 40, width: 110, backgroundColor: 'white', borderRadius: 20,
                            }}>
                                <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require("../../assets/icons/heart2.png")} style={styles.icon}></Image>
                                </View>
                                <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'flex-start' }}>
                                    <Text style={{ fontSize: 14, color: '#9D9D9D', }}>-- BPM</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{
                        flex: 1 //, backgroundColor: 'blue'
                        , justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Text style={{ color: '#81acff', fontSize: 18, }}>Last km</Text>
                        <Text style={[styles.bigText, { color: '#81acff' }]}>{lastKm.toFixed(2)}</Text>
                        <Text style={{ color: '#81acff', fontSize: 14, }}>Running this month 0.00 kilometer</Text>
                    </View>
                </View>
                <View style={styles.halfView}>
                    <View style={[styles.rowView, { flex: 0.35, marginTop: 80, }]}>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate(ROUTES.ViewSetting) }}>
                            <View style={[styles.miniButton, { marginLeft: 60, }]}>
                                <MaterialCommunityIcons name='target' size={32}></MaterialCommunityIcons>

                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => {
                                // chỗ này bị j ấy lúc thì ko hiện running outdoor đc lúc thì ko hiện bấm giờ đc.
                                if (isWaitime === false) {
                                    navigation.navigate(ROUTES.Waittime);
                                    setIsWaitime(true);
                                } else if (isWaitime === true) {
                                    navigation.navigate(ROUTES.RUNNINGOUTDOOR);
                                }
                            }}>
                            <View style={[styles.goButton]}>
                                <Text style={[styles.bigText, { fontSize: 40, }]}>GO</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={[styles.miniButton, { marginRight: 60, }]}>
                                <Ionicons name='settings' size={32}></Ionicons>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>


        </View >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        flex: 1,
    },
    overLay: {
        height: Dimensions.get("screen").height,
        width: Dimensions.get("screen").width,
        position: 'absolute',
        top: Dimensions.get("screen").height / 14,
        left: 0,
        //    backgroundColor: 'red'
    },
    Header: {
        flexDirection: 'row',
        flex: 1 / 14,
        marginHorizontal: 10,
        //    backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        color: '#81acff',
        fontSize: 24,
    },
    goButton: {
        height: 100,
        width: 100,
        borderRadius: 50,
        backgroundColor: '#81acff',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 25
    },
    halfView: {
        flex: 1 / 2,
        //    backgroundColor: 'yellow',
    },
    rowView: {
        flex: 0.3,
        //    backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    icon: {
        height: 36,
        width: 36,
    },
    bigText: {
        fontSize: 60,
        color: 'white',
    },
    miniButton: {
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: 'white',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Sport;