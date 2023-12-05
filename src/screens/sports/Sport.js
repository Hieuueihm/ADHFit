import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, Dimensions, } from 'react-native';
import MapView, { Marker, Overlay, Polyline } from 'react-native-maps';
import GetLocation from 'react-native-get-location'
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../constants';

const LATITUDE_DELTA = 0.009
const LONGITUDE_DELTA = 0.009
const Sport = () => {
    const [routeCoordinates, setRouteCoordinates] = React.useState([])
    async function getCurrentPosition() {
        await GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 60000
        })
            .then((location) => {
                setCurrentLatitude(location?.latitude)
                setCurrentLongitude(location?.longitude)
                const { latitude, longitude, time } = location
                let coordinate = {
                    latitude: latitude, longitude: longitude, timestamp: time
                }
                setRouteCoordinates(prevCoordinates => [...prevCoordinates, coordinate]);

            })
            .catch(error => {
                const { code, message } = error;
                console.warn(code, message);
            })
    }
    return (
        <View style={styles.container}>
            <Text> test</Text>
        </View >
    )
};


export default Sport;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ccc'
    },
    mapView: {
        flex: 1,
    },
})