import React, {useState, useEffect} from 'react'
import { Text, View, Image } from 'react-native'

export default function Countdown(){
    const[secondleft, setsecondleft] = useState(0); 
    useEffect(() =>{
        if(secondleft <= 0) return;
        const timeout = setTimeout(() => {
            setsecondleft(secondleft - 1);
        }, 1000);
        return () => clearTimeout(timeout);
    }, [secondleft] )
    function start(seconds: number){
        setsecondleft(seconds);
    }
    return {secondleft, start}
}
