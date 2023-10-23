import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const TickCheckbox = () => {
    const [isChecked, setIsChecked] = useState(false);

    const toggleCheckbox = () => {
        setIsChecked(!isChecked);
    };

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