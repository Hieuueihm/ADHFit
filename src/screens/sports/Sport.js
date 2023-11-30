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

    return (
        <View style={styles.container}>
            <MapView
                ref={mapRef}
                style={styles.mapView}
                initialRegion={{
                    latitude: 37.4226711,
                    longitude: -122.0849872,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                }}
            >
                <Polyline
                    coordinates={routeCoordinates}
                    strokeColor="#000"
                    strokeColors={[
                        '#7F0000',
                        '#00000000',
                        '#B24112',
                        '#E5845C',
                        '#238C23',
                        '#7F0000',
                    ]}
                    lineDashPattern={[3, 1, 3, 1]}
                    strokeWidth={6}
                />

                {
                    routeCoordinates.length > 0 && (
                        <>
                            <Marker
                                coordinate={{
                                    latitude: routeCoordinates[0].latitude,
                                    longitude: routeCoordinates[0].longitude,
                                }}
                                title="Điểm đầu"
                                pinColor='red'
                            />

                        </>


                    )
                }
                <Marker.Animated
                    ref={marker}
                    coordinate={
                        {
                            latitude: 0,
                            longitude: 0
                        }
                    }
                    title="Điểm cuối"
                    pinColor="green"

                />



            </MapView>
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