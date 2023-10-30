import React, { useState, useEffect } from "react";
import { View, Text, Safe, AreaView, TextInput, ImageBackground, Image, Button, TouchableOpacity, StyleSheet } from 'react-native'
import { COLORS, ROUTES } from "../../../constants";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SwitchButton from "../../components/Switch";
import { getItem } from "../../utils/asyncStorage";
import { handleGetUserInformation, handleUpdateReceiveNotification } from "../../api/UserAPI";
import { useNavigation } from "@react-navigation/native";
import { removeItem } from "../../utils/asyncStorage";
import { handleLogout } from "../../api/UserAPI";

export default function Me() {

    const navigation = useNavigation()
    const [userName, setUserName] = useState(null);
    const [gmail, setGmail] = useState(null);
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [gender, setGender] = useState(null);
    const [displayImage, setDisplayImage] = useState('');
    const [isReceiveNotification, setIsRecieveNotification] = useState(false);
    const [userId, setUserId] = useState(null);


    useEffect(() => {
        const loadData = async () => {
            let userId = await getItem('user_id');
            setUserId(userId)

            handleGetUserInformation({
                "user_id": userId
            })
                .then(
                    (response) => {
                        if (response.data.success === true) {
                            setUserName(response?.data?.userInfo?.name);
                            setHeight(String(response?.data?.userInfo?.height));
                            setWeight(String(response?.data?.userInfo?.weight));
                            setGmail(response?.data?.userInfo?.email);
                            setGender(response?.data?.userInfo?.gender)
                            setIsRecieveNotification(response?.data?.userInfo?.isReceiveNotification)
                            if (response?.data?.userInfo?.avatar != '') {
                                setDisplayImage(`http://10.0.2.2:3001/${response?.data?.userInfo?.avatar}`)
                            }



                        }
                    }
                )
                .catch(error => {
                    console.log(error)
                })

        }
        loadData();
    }, []);

    useEffect(() => {
        handleUpdateReceiveNotification({
            "user_id": userId,
            "isReceiveNotification": isReceiveNotification
        })
    }, [isReceiveNotification])

    const handleEditButton = () => {
        navigation.navigate(ROUTES.EDIT_INFORMATION, {
            'options': 'me'
        });
    }
    const handleOnPress = (en) => {
        setIsRecieveNotification(en)
    }
    const handleLogoutBtn = () => {
        handleLogout({
            user_id: userId,
            fcmtoken: ''
        }).then((response) => {
            removeItem('user_id');
            navigation.navigate(ROUTES.LOGIN)
        })
    }
    return (
        <View style={{ flex: 1 }}>
            {/*Name and email...*/}

            <View style={{ flexDirection: 'row', marginTop: 20 }}>
                <Image
                    source={
                        displayImage === ''
                            ?
                            require('../../assets/images/avatar.png')
                            :
                            // require(selectedImage)
                            { uri: displayImage }
                    }
                    style={{ marginHorizontal: 20, height: 58, width: 58, borderRadius: 60 }} />
                <View style={{ marginVertical: 6, flex: 1 }}>
                    <Text style={{ color: COLORS.black, fontSize: 20, fontWeight: 'bold' }}>{userName}</Text>
                    <Text style={{ color: COLORS.grey, fontWeight: '600' }} >{gmail}</Text>
                </View>
                <TouchableOpacity
                    onPress={handleEditButton}
                    style={{
                        width: 90, height: 40,
                        flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                        backgroundColor: 'rgba(185, 175, 245, 1)',
                        borderRadius: 30, marginRight: 30

                    }}>
                    <Text style={{ color: COLORS.bgWhite(1), fontWeight: 600, fontSize: 16 }}>Edit</Text>
                </TouchableOpacity>
            </View>

            {/*Height, weight, gender*/}

            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20, paddingHorizontal: 10 }}>

                <View style={styles.rectangleViewContainer}>
                    <View style={styles.rectanglePositionText}>
                        <Text style={styles.rectangleTextStyle}>{height} cm</Text>
                        <Text style={{ color: COLORS.grey }}>Height</Text>
                    </View>
                </View>

                <View style={styles.rectangleViewContainer}>
                    <View style={styles.rectanglePositionText}>
                        <Text style={styles.rectangleTextStyle}>{weight} kg</Text>
                        <Text style={{ color: COLORS.grey }}>Weight</Text>
                    </View>
                </View>

                <View style={styles.rectangleViewContainer}>
                    <View style={styles.rectanglePositionText}>
                        <Text style={styles.rectangleTextStyle}>{gender}</Text>
                        <Text style={{ color: COLORS.grey }}>Gender</Text>
                    </View>
                </View>
            </View>

            {/*list */}

            <View style={{ paddingTop: 30 }}>
                <View style={styles.ViewRowContainer}>
                    <Image source={require('../../assets/icons/goal.png')} />
                    <Text style={styles.TextRow}>Goals</Text>

                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(ROUTES.GOALS_SCREEN)
                        }}
                    >
                        <MaterialCommunityIcon name="chevron-right"
                            style={styles.iconRight} />
                    </TouchableOpacity>
                </View>
                <View style={styles.ViewRowContainer}>
                    <Image source={require('../../assets/icons/notification.png')} />
                    <Text style={styles.TextRow}>Pop-up Notification</Text>

                    <View>
                        <SwitchButton handleOnPress={handleOnPress} updateStateSwitch={isReceiveNotification} />
                    </View>
                </View>
                <View style={styles.ViewRowContainer}>
                    <Image source={require('../../assets/icons/lightdark.png')} />
                    <Text style={styles.TextRow}>Light/dark mode</Text>

                    <View>
                        <SwitchButton />
                    </View>
                </View>
                <View style={styles.ViewRowContainer}>
                    <Image source={require('../../assets/icons/setting.png')} />
                    <Text style={styles.TextRow}>Settings</Text>

                    <TouchableOpacity

                        onPress={() => {
                            navigation.navigate(ROUTES.SETTINGS_SCREEN)
                        }}>
                        <MaterialCommunityIcon name="chevron-right"
                            style={styles.iconRight} />
                    </TouchableOpacity>
                </View>

            </View>


            {/*Sign Out btn*/}

            <TouchableOpacity
                onPress={handleLogoutBtn}
            >
                <View
                    style={{
                        alignItems: 'center', backgroundColor: COLORS.bgBlack(0.2), marginHorizontal: 30, borderRadius: 20,
                        height: 60, marginVertical: 20, justifyContent: 'center'
                    }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Sign Out</Text>
                </View>
            </TouchableOpacity>

        </View >
    )
}

const styles = StyleSheet.create({
    rectangleViewContainer: {
        backgroundColor: 'white',
        width: 100,
        height: 70,
        borderRadius: 20
    },
    rectanglePositionText: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    rectangleTextStyle: {
        color: 'rgba(193, 80, 246, 1)',
        paddingTop: 8,
        paddingBottom: 6,
        fontSize: 18,
        fontWeight: 'bold'
    },
    ViewRowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 30,
        paddingBottom: 20
    },
    TextRow: {
        marginTop: 5,
        flex: 1,
        marginHorizontal: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.bgBlack(1)
    },
    iconRight: {
        color: COLORS.bgBlack(1),
        fontSize: 30,
        marginTop: 3
    }

})