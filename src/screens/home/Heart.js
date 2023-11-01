import React from 'react';
import { View, SafeAreaView, Text, Image, Dimensions, TouchableOpacity, ImageBackground, StyleSheet, ScrollView } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo'
import Liinechart from '../../components/Liinechart'
import { useNavigation } from '@react-navigation/native';
import { ROUTES } from '../../../constants';
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux"

//Data mo phong cai heart
const dataHeart = {
    labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
    datasets: [
        {
            data: [90, 88, 73, 110, 49, 92, 88]
        }
    ]
};

// Lay kich thuoc cua cai man hinh thoi
const Heart = () => {
    const navigation = useNavigation();
    const hei = Dimensions.get("window").height;
    const wi = Dimensions.get("window").width;
    const { t } = useTranslation();
    const stylesLightDark = useSelector((state) => state.settings.styles);

    return (
        <SafeAreaView>
            <ImageBackground
                source={require('../../assets/images/Layer1.png')}
                style={{
                    height: Dimensions.get("window").height,
                    width: Dimensions.get("window").width,
                    alignItems: 'center',...stylesLightDark.background
                }}>
                <View
                    style={{
                        flexDirection: 'row',
                        height: hei / 14,
                        width: wi,
                        alignItems: 'center'
                    }}
                >
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate(ROUTES.HOME_TAB)
                        }}
                    >
                        <Entypo
                            name='chevron-left'
                            size={34}></Entypo>
                    </TouchableOpacity>
                    <Text
                        style={{
                            color: 'black',
                            fontSize: 24,
                            marginLeft: 5,
                        }}>{t('heart')}</Text>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: 325,
                        height: 50,
                        backgroundColor: '#3BDD41',
                        borderRadius: 15,
                    }}>
                    <Image
                        source={require('../../assets/icons/heart2.png')}
                        style={{
                            height: 35,
                            width: 35,
                            marginLeft: 10,
                        }}>
                    </Image>
                    <Text
                        style={{
                            fontSize: 20,
                            color: 'white',
                            marginLeft: 20,
                        }}>{t('heartHealth')}</Text>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={{
                            height: 35,
                            width: 85,
                            borderRadius: 15,
                            backgroundColor: 'white',
                            marginLeft: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text
                            style={{
                                fontSize: 16,
                                color: 'black',
                            }}>{t('measure')}</Text>

                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        height: 280,
                        width: 325,
                        borderRadius: 30,
                        backgroundColor: 'rgba(20,20,47, 0.5)',
                        alignItems: 'center',
                        marginTop: 15,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            color: 'white',
                        }}>Heart rate-bpm</Text>
                    <Liinechart height={250} width={350} data={dataHeart} backgroundGradient='#14142F' fillShadowGradientFrom='#14142F' fillShadowGradientTo='#14142F' colorLine={`rgb(93,246,108)`} Opacity={0}></Liinechart>
                </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        width: 325,
                        height: 50,
                        backgroundColor: '#3BDD41',
                        borderRadius: 15,
                        marginTop: 15,
                    }}>
                    <Image
                        source={require('../../assets/icons/o2.png')}
                        style={{
                            height: 35,
                            width: 35,
                            marginLeft: 10,
                        }}>

                    </Image>
                    <Text
                        style={{
                            fontSize: 20,
                            color: 'white',
                            marginLeft: 15,
                        }}>{t('oxygenInBlood')}</Text>
                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={{
                            height: 35,
                            width: 85,
                            borderRadius: 15,
                            backgroundColor: 'white',
                            marginLeft: 20,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                        <Text
                            style={{
                                fontSize: 16,
                                color: 'black',
                            }}>{t('measure')}</Text>

                    </TouchableOpacity>
                </View>
                <View
                    style={{
                        height: 280,
                        width: 325,
                        borderRadius: 30,
                        backgroundColor: 'rgba(20,20,47, 0.5)',
                        alignItems: 'center',
                        marginTop: 15,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 20,
                            color: 'white',
                        }}>SpO2-%</Text>
                    <Liinechart height={250} width={350} data={dataHeart} backgroundGradient='#14142F' fillShadowGradientFrom='#14142F' fillShadowGradientTo='#14142F' colorLine={`rgb(93,246,108)`} Opacity={0}></Liinechart>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}
export default Heart
