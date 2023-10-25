import React, { useState, useEffect } from 'react';
import { View, Switch, StyleSheet } from 'react-native';

const SwitchButton = (props) => {
    const [isEnabled, setIsEnabled] = useState(false);

    useEffect(() => {
        if (props.updateStateSwitch) {
            setIsEnabled(props.updateStateSwitch)
        }
    }, [props?.updateStateSwitch])
    const toggleSwitch = () => {
        setIsEnabled(previousState => !previousState);
        if (props.handleOnPress) {
            props?.handleOnPress(!isEnabled)
        }
    }
    return (
        <View style={styles.container}>
            <Switch
                trackColor={{ false: '#767577', true: '#81b0ff' }}
                thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SwitchButton;