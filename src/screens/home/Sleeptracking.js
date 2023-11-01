import React from "react";
import { Text, View, Image, SafeAreaView, Dimensions, TouchableOpacity, ScrollView, StyleSheet, ImageBackground } from "react-native";
import Entypo from 'react-native-vector-icons/Entypo'
import Donutchart from "../../components/Donutchart";
import Liinechart from "../../components/Liinechart";
import { useNavigation } from "@react-navigation/native";
import { ROUTES } from "../../../constants";
import { useTranslation } from "react-i18next";

const Sleeptracking = () => {
    const navigation = useNavigation();
    daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    const monthsOfYear = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december'];
    const currentTime = new Date();
    currentTime.setUTCHours(currentTime.getUTCHours());
    const year = currentTime.getFullYear();     // năm
    const month = currentTime.getMonth();      // tháng
    const dayOfmonth = currentTime.getDate();  // ngày trong tháng
    const day = currentTime.getDay();          // Thứ trong tuần, nhung tra ve cac gia tri 0-6
    const dayName = daysOfWeek[day];           // Chuyen tu du lieu số sang thứ trong tuần
    const monthName = monthsOfYear[month];
    const { t } = useTranslation();

    // du lieu ve cai ngu
    const dataSleep = {
        labels: ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"],
        datasets: [
            {
                data: [1.5, 8, 7, 6, 4, 9, 3]
            }
        ]
    };
    return (
        <ImageBackground
            source={require('../../assets/icons/skynight.png')}
            style={{
                height: Dimensions.get('window').height,
                width: Dimensions.get('window').width,
            }}
        >
            <ScrollView>
                <SafeAreaView
                    style={{
                        //  backgroundColor:'#0B0B19',
                        height: 610,
                        width: Dimensions.get('window').width,
                    }}>
                    <View
                        // cai tren cung
                        style={{
                            height: Dimensions.get("window").height / 12,
                            width: Dimensions.get("window").width,
                            //    backgroundColor:'yellow',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}>
                        <TouchableOpacity
                            onPress={() => {
                                navigation.navigate(ROUTES.HOME_TAB)
                            }}
                            activeOpacity={0.8}>
                            <Entypo
                                name="chevron-left"
                                size={40}
                                color={'white'}
                                style={{
                                }}
                            ></Entypo>
                        </TouchableOpacity>
                        <View
                            style={{
                                //    backgroundColor:'blue',
                                height: Dimensions.get("window").height / 12,
                                width: Dimensions.get("window").width / 1.3,
                                alignItems: 'center',
                            }}
                        >
                            <Text
                                style={{
                                    color: 'white',
                                    fontSize: 24,
                                    margin: 5
                                }}>{t('today')}, {t(dayName)}</Text>
                            <Text
                                style={{
                                    color: '#8D8D8D',
                                    fontSize: 16,
                                }}>{t(dayOfmonth)} {t(monthName)} {t(year)} </Text>
                        </View>
                        <TouchableOpacity
                            activeOpacity={0.7}
                            style={{
                                borderRadius: 19,
                                height: 38,
                                width: 38,
                                backgroundColor: 'white'
                            }}>
                            <Entypo
                                name="calendar"
                                color={'black'}
                                size={28}
                                style={{
                                    marginLeft: 5,
                                    marginTop: 5
                                }}
                            >
                            </Entypo>
                        </TouchableOpacity>
                    </View>
                    <View
                        style={{
                            // cai chua nhieu cai vong
                            height: Dimensions.get("window").height / 8,
                            width: 370,
                            backgroundColor: 'rgba(20,20,47, 0.7)',
                            flexDirection: 'row',
                            marginTop: 15,
                            marginEnd: 10,
                            marginStart: 10,
                            borderRadius: 25,
                        }}>
                        <ScrollView horizontal={true}>
                            <View
                                style={{
                                    height: Dimensions.get("window").height / 8,
                                    width: 100,
                                }}
                            // Time ngủ mong muốn(target) mặc định nên để là 8 hoặc user cài đặt
                            //spent là cái tiến trình mình đang thực hiện
                            // text là đơn vị, như %, h, steps
                            //colorTarget là màu của cái chưa xong
                            //strokeTarget phải bằng strokeamount: là độ béo của cái bánh, nếu 2 cái khác nhau thì bánh lệch
                            //colorText là màu của cái dòng text bên giữa bánh
                            //fontText là font chữ của cái text đấy.
                            ><Donutchart radius={25} target={8} spent={5} text="h" colorTarget='rgba(0,0,0, 0)' colorAmount="#F6E176" strokeTarget="10" strokeAmount="10" colorText='#FFFFFF' fontText={12}
                            ></Donutchart>
                                <Text style={styles.item}>{t('mon')}</Text>
                            </View>
                            <View
                                style={{
                                    height: Dimensions.get("window").height / 8,
                                    width: 100,
                                }}
                            ><Donutchart radius={25} target={8} spent={3} text="h" colorTarget='rgba(0,0,0, 0)' colorAmount="#F6E176" strokeTarget="10" strokeAmount="10" colorText='#FFFFFF' fontText={12}
                            ></Donutchart>
                                <Text style={styles.item}>{t('tue')}</Text>
                            </View>
                            <View
                                style={{
                                    height: Dimensions.get("window").height / 8,
                                    width: 100,
                                }}
                            ><Donutchart radius={25} target={8} spent={6} text="h" colorTarget='rgba(0,0,0, 0)' colorAmount="#F6E176" strokeTarget="10" strokeAmount="10" colorText='#FFFFFF' fontText={12}
                            ></Donutchart>
                                <Text style={styles.item}>{t('wed')}</Text>
                            </View>
                            <View
                                style={{
                                    height: Dimensions.get("window").height / 8,
                                    width: 100,
                                }}
                            ><Donutchart radius={25} target={8} spent={4} text="h" colorTarget='rgba(0,0,0, 0)' colorAmount="#F6E176" strokeTarget="10" strokeAmount="10" colorText='#FFFFFF' fontText={12}
                            ></Donutchart>
                                <Text style={styles.item}>{t('thu')}</Text>
                            </View>
                            <View
                                style={{
                                    height: Dimensions.get("window").height / 8,
                                    width: 100,
                                }}
                            ><Donutchart radius={25} target={8} spent={1} text="h" colorTarget='rgba(0,0,0, 0)' colorAmount="#F6E176" strokeTarget="10" strokeAmount="10" colorText='#FFFFFF' fontText={12}
                            ></Donutchart>
                                <Text style={styles.item}>{t('fri')}</Text>
                            </View>
                            <View
                                style={{
                                    height: Dimensions.get("window").height / 8,
                                    width: 100,
                                }}
                            ><Donutchart radius={25} target={8} spent={7} text="h" colorTarget='rgba(0,0,0, 0)' colorAmount="#F6E176" strokeTarget="10" strokeAmount="10" colorText='#FFFFFF' fontText={12}
                            ></Donutchart>
                                <Text style={styles.item}>{t('sat')}</Text>
                            </View>
                            <View
                                style={{
                                    height: Dimensions.get("window").height / 8,
                                    width: 100,
                                }}
                            ><Donutchart radius={25} target={8} spent={2} text="h" colorTarget='rgba(0,0,0, 0)' colorAmount="#F6E176" strokeTarget="10" strokeAmount="10" colorText='#FFFFFF' fontText={12}
                            ></Donutchart>
                                <Text style={styles.item}>{t('sun')}</Text>
                            </View>
                        </ScrollView>
                    </View>
                    <View
                        // cai chua 2 hinh vuong
                        style={{
                            flexDirection: 'row',
                            height: 175,
                            marginTop: 15,
                            width: Dimensions.get("window").width,
                            //    backgroundColor:'red',
                            justifyContent: 'center'
                        }}
                    >
                        <View
                            // hinh vuong ben trai
                            style={{
                                marginTop: 10,
                                marginRight: 10,
                                marginBottom: 5,
                                height: 160,
                                width: 160,
                                borderRadius: 18,
                                backgroundColor: 'rgba(20,20,47, 0.6)',
                            }}
                        >
                            <Text
                                style={{
                                    color: 'white',
                                    marginLeft: 15,
                                    marginRight: 50,
                                    marginTop: 10,
                                }}
                            >{t('averageSleepTimeThisWeek')}</Text>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    height: 80,
                                    width: 160,
                                    margin: 10,
                                    alignItems: 'center'
                                    //   backgroundColor:'white'
                                }}
                            >
                                <Text style={{ fontSize: 38, fontWeight: 'bold', color: 'white'}}>6.2</Text>
                                <Text style={{fontSize: 12, color: 'white',marginLeft: 10, marginRight:15 }}>{t('hoursPerDay')}</Text>
                            </View>
                        </View>
                        <View
                            // hinh vuong ben phai
                            style={{
                                marginTop: 10,
                                marginLeft: 20,
                                height: 160,
                                width: 160,
                                borderRadius: 18,
                                backgroundColor: 'rgba(20,20,47, 0.6)'
                            }}
                        >
                            <Text
                                style={{
                                    marginTop: 10,
                                    marginLeft: 10,
                                    color: 'white',
                                    fontSize: 14,
                                }}
                            >{t('quality')}</Text>
                            <Donutchart radius={50} target={100} spent={67} text="%" colorTarget='rgba(0,0,0, 0)' colorAmount="#F6E176" strokeTarget="20" strokeAmount="20" colorText='#FFFFFF' fontText={20}
                            ></Donutchart>
                        </View>
                    </View>
                    <View    // Cái cục to to
                        style={{
                            backgroundColor: 'rgba(20,20,47, 0.5)',
                            height: 200,
                            width: 350,
                            margin: 20,
                            borderRadius: 25
                        }}>
                        <Text
                            style={{
                                color: 'white',
                                marginTop: 10,
                                marginLeft: 15,
                                fontSize: 16,
                            }}
                        >{t('lastSleepInformation')}</Text>
                        <View
                            style={{
                                width: 350,
                                height: 170,
                            }}>
                            <View   // 2 cái ở trên
                                style={{
                                    width: 350,
                                    height: 85,
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                <Image
                                    source={require('../../assets/icons/moon.png')}
                                    style={{
                                        width: 24,
                                        height: 24,
                                        marginLeft: 20
                                    }}
                                ></Image>
                                <View style={{
                                    width: 100,
                                    height: 85,
                                    justifyContent: 'center',
                                    marginLeft: 12,
                                }}>
                                    {/*Cai nay la Time sleep, truyen Time sleep vao Text */}
                                    <Text style={styles.bigTextinLastSleep}>6h52</Text>
                                    <Text style={styles.smallTextinLastSleep}>{t('timeInSleep')}</Text>

                                    {/* Cai nay la cai Wake up time  */}
                                </View>
                                <Image
                                    source={require('../../assets/icons/partly-cloudy.png')}
                                    style={{
                                        width: 24,
                                        height: 24,
                                        marginLeft: 28
                                    }}
                                ></Image>
                                <View style={{
                                    //Time Wake up
                                    width: 100,
                                    height: 85,
                                    justifyContent: 'center',
                                    marginStart: 12,
                                }}>
                                    <Text style={styles.bigTextinLastSleep}>07:12 AM</Text>
                                    <Text style={styles.smallTextinLastSleep}>{t('wakeUpTime')}</Text>
                                </View>
                            </View>

                            <View  //2 cái ở dưới
                                style={{
                                    width: 350,
                                    height: 85,
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                }}>
                                <Image
                                    source={require('../../assets/icons/clock.png')}
                                    style={{
                                        width: 24,
                                        height: 24,
                                        marginLeft: 20
                                    }}
                                ></Image>
                                <View style={{
                                    width: 100,
                                    height: 85,
                                    //   backgroundColor:'violet',
                                    justifyContent: 'center',
                                    marginLeft: 12,
                                }}>
                                    {/*Cai nay la Time sleep, truyen Time sleep vao Text */}
                                    <Text style={styles.bigTextinLastSleep}>7h23m</Text>
                                    <Text style={styles.smallTextinLastSleep}>{t('wentToBed')}</Text>
                                </View>
                                <Image
                                    source={require('../../assets/icons/zzz.png')}
                                    style={{
                                        width: 24,
                                        height: 24,
                                        marginLeft: 28
                                    }}
                                ></Image>
                                <View style={{
                                    width: 100,
                                    height: 85,
                                    justifyContent: 'center',
                                    marginStart: 12,
                                }}>
                                    <Text style={styles.bigTextinLastSleep}>25 min</Text>
                                    <Text style={styles.smallTextinLastSleep}>{t('fellAsSleep')}</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </SafeAreaView>
                <SafeAreaView>
                    <View
                        style={{
                            backgroundColor: 'rgba(20,20,47, 0.5)',
                            height: 250,
                            width: 350,
                            marginLeft: 20,
                            marginRight: 20,
                            borderRadius: 25,
                            marginBottom: 25,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 16,
                                color: 'white',
                                marginLeft: 20,
                                marginTop: 15,
                            }}
                        >{t('weeklySleep')}</Text>
                        <Liinechart height={200} width={300} data={dataSleep} colorLine="#225DF8" backgroundGradient='#14142F' fillShadowGradientFrom='#14142F' fillShadowGradientTo='#14142F' Opacity={0}></Liinechart>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </ImageBackground>
    )
}
export default Sleeptracking

const styles = StyleSheet.create({
    scrollViewContent: {
        paddingHorizontal: 5, // Khoảng cách giữa các item
    },
    item: {
        // width: 50,
        //backgroundColor: 'red',
        fontSize: 12,
        color: '#FFFFFF',
        marginHorizontal: 20, // Khoảng cách giữa các item ngang
        marginLeft: 35,
        marginBottom: 5
    },
    smallTextinLastSleep: {
        fontSize: 12,
        color: 'white',
    },
    bigTextinLastSleep: {
        color: 'white',
        fontSize: 22,
    },
});