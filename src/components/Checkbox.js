import React, { useState, useEffect } from 'react';
import { View, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const TickCheckbox = (props) => {
    const [isChecked, setIsChecked] = useState(false);
    const [prev, setPrev] = useState(false);
    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

    useEffect(() => {
        if (isChecked) {
            props?.handleClickRatio(props?.day);
            setPrev(true);
        } else if (!isChecked && prev) {
            props?.handleUncheckRatio(props?.day);
            setPrev(false);
        }
    }, [isChecked]);

    useEffect(() => {
        if (props?.selectedDate.includes(props?.day)) {
            console.log(props?.selectedDate)
            setIsChecked(true);
        }
    }, [])



    return (
        <TouchableOpacity onPress={toggleCheckbox}>
            <View>
                {isChecked ? (
                    <FontAwesome5 name="check-circle" size={30} color="#81ACFF" />
                ) : (
                    <FontAwesome5 name="circle" size={30} color="orange" />
                )}
            </View>
        </TouchableOpacity>
    );
};

export default TickCheckbox;