import React from "react";
import {Text, View, Image} from 'react-native'
import Donutchart from "../../components/Donutchart";
import { spentAmount, targetAmount } from "../../components/Donutchart";
import MaterialCommunityIcons,{Icon} from "react-native-vector-icons/MaterialCommunityIcons";

function Home(){
    return <View style={{
        flex :1
    }}>
    <View style={{
        flexDirection:'row',
        height:50,
        backgroundColor : '#33E364',
        alignItems:'center',
        justifyContent:'flex-start'
    }}> 
            <Text style={{
            fontSize :18,
            color:'white',
            marginLeft:10
            //username nay
        }}>Hi, UserName</Text>  

            <MaterialCommunityIcons 
        name ={"weather-night-partly-cloudy"} // này không biết chỉnh đc không, kiểu lấy thời tiết hiện tại để suy ra icon đấy
        style={{
            color:'white',
            fontSize:30,
            marginLeft:160
        }}
        />
            <Text style={{
            fontSize :18,
            color:'white',
            marginLeft:10
        }}>37 °C</Text>
        </View>
    <View style={{
        flex : 0.3,
        backgroundColor : '#33E364'
    }}>   
        
        <Donutchart />
    </View>
    <View style={{
        flex:0.04,
        backgroundColor:'#33E364',
        flexDirection:'row',
        alignItems:'flex-start',
    }}>
        <Text style={{
            color:'white',
            fontSize:16,
            marginStart:30
        }}
        >Target steps</Text>
                <Text style={{
            color:'white',
            fontSize:16,
            marginStart:30
        }}
        >Distance(km)</Text>
                <Text style={{
            color:'white',
            fontSize:16,
            marginLeft:30
        }}
        >Energy(kcal)</Text>

    </View>
    <View style={{
        flex:0.06,
        backgroundColor:'#33E364',
        flexDirection:'row',
        alignItems:'flex-start',
    }}>
        <Text style={{
            color:'white',
            fontSize:16,
            marginStart:50
        }}
        // may cai nay lay du lieu
        >{targetAmount}</Text>
                <Text style={{
            color:'white',
            fontSize:16,
            marginLeft:90
        }}
        >2002</Text>
                <Text style={{
            color:'white',
            fontSize:16,
            marginLeft:90
        }}
        >436</Text>

    </View>

</View>
}
export default Home