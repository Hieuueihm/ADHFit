import React, { useState, useEffect } from "react";
import { View, Text, Safe, AreaView, TextInput, ImageBackground, Image, Button, TouchableOpacity } from 'react-native'
import { COLORS, ROUTES } from "../../../constants";
import MaterialCommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import SwitchButton from "../../components/Switch";
import { getItem } from "../../utils/asyncStorage";
import { handleGetUserInformation } from "../../api/UserAPI";
import { useNavigation } from "@react-navigation/native";
import { removeItem } from "../../utils/asyncStorage";

export default function Me() {

    const navigation = useNavigation()
    const [userName, setUserName] = useState(null);
    const [gmail, setGmail] = useState(null);
    const [height, setHeight] = useState(null);
    const [weight, setWeight] = useState(null);
    const [gender, setGender] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            let userId = await getItem('user_id');

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



                        }
                    }
                )
                .catch(error => {
                    console.log(error)
                })

        }
        loadData();
    }, []);

    const handleEditButton = () => {
        navigation.navigate(ROUTES.EDIT_INFORMATION, {
            'options': 'me'
        });
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', marginTop: 30 }}>
                <Image source={require('../../assets/images/avatar.png')} style={{ marginHorizontal: 20 }} />
                <View style={{ marginVertical: 6, flex: 1 }}>
                    <Text style={{ color: COLORS.black, fontSize: 20, fontWeight: 'bold' }}>{userName}</Text>
                    <Text style={{ color: COLORS.grey, fontWeight: '600' }} >{gmail}</Text>
                </View>
                <TouchableOpacity
                    onPress={handleEditButton}
                    style={{
                        width: 90, height: 40,
                        flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(185, 175, 245, 1)',
                        borderRadius: 30, marginRight: 30

                    }}>
                    <Text style={{ color: COLORS.bgWhite(1), fontWeight: 600, fontSize: 16 }}>Edit</Text>
                </TouchableOpacity>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 20, paddingHorizontal: 10 }}>
                <View style={{ backgroundColor: 'white', width: 100, height: 70, borderRadius: 20 }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{
                            color: 'rgba(193, 80, 246, 1)', paddingTop: 8, paddingBottom: 6,
                            fontSize: 18, fontWeight: 'bold'
                        }}>{height} cm</Text>
                        <Text style={{ color: COLORS.grey }}>Height</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: 'white', width: 100, height: 70, borderRadius: 20 }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{
                            color: 'rgba(193, 80, 246, 1)', paddingTop: 8, paddingBottom: 6, fontSize: 18,
                            fontWeight: 'bold'
                        }}>{weight} kg</Text>
                        <Text style={{ color: COLORS.grey }}>Weight</Text>
                    </View>
                </View>
                <View style={{ backgroundColor: 'white', width: 100, height: 70, borderRadius: 20 }}>
                    <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{
                            color: 'rgba(193, 80, 246, 1)', paddingTop: 8, paddingBottom: 6, fontSize: 18,
                            fontWeight: 'bold'
                        }}>{gender}</Text>
                        <Text style={{ color: COLORS.grey }}>Gender</Text>
                    </View>
                </View>
            </View>

            <View style={{ paddingTop: 30 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30, paddingBottom: 20 }}>
                    <Image source={require('../../assets/icons/goal.png')} />
                    <Text style={{
                        marginTop: 5,
                        flex: 1, marginHorizontal: 20, fontSize: 18, fontWeight: 'bold', color: COLORS.bgBlack(1)
                    }}>Goals</Text>

                    <TouchableOpacity>
                        <MaterialCommunityIcon name="chevron-right" style={{ color: COLORS.bgBlack(1), fontSize: 30, marginTop: 3 }} />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30, paddingBottom: 20 }}>
                    <Image source={require('../../assets/icons/notification.png')} />
                    <Text style={{
                        marginTop: 5,
                        flex: 1, marginHorizontal: 20, fontSize: 18, fontWeight: 'bold', color: COLORS.bgBlack(1)
                    }}>Pop-up Notification</Text>

                    <View>
                        <SwitchButton />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30, paddingBottom: 20 }}>
                    <Image source={require('../../assets/icons/lightdark.png')} />
                    <Text style={{
                        marginTop: 5,
                        flex: 1, marginHorizontal: 20, fontSize: 18, fontWeight: 'bold', color: COLORS.bgBlack(1)
                    }}>Light/dark mode</Text>

                    <View>
                        <SwitchButton />
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30, paddingBottom: 20 }}>
                    <Image source={require('../../assets/icons/setting.png')} />
                    <Text style={{
                        marginTop: 5,
                        flex: 1, marginHorizontal: 20, fontSize: 18, fontWeight: 'bold', color: COLORS.bgBlack(1)
                    }}>Settings</Text>

                    <TouchableOpacity>
                        <MaterialCommunityIcon name="chevron-right" style={{ color: COLORS.bgBlack(1), fontSize: 30, marginTop: 3 }} />
                    </TouchableOpacity>
                </View>

            </View>

            <View
                style={{
                    alignItems: 'center', backgroundColor: COLORS.bgBlack(0.2), marginHorizontal: 30, borderRadius: 20,
                    height: 60, marginVertical: 20, justifyContent: 'center'
                }}>
                <TouchableOpacity
                    onPress={() => {
                        removeItem('user_id');
                        navigation.navigate(ROUTES.LOGIN)
                    }}
                >
                    <Text style={{ fontWeight: 'bold', fontSize: 20 }}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}