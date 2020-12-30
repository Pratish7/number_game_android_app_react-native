import React from 'react';
import { StyleSheet, TextInput } from 'react-native';

const Input = props => {
    return(
        <TextInput style={{...styles.input, ...props.style}}/>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 60,
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        borderTopColor: 'grey',
        borderTopWidth: 1,
        borderLeftColor: 'grey',
        borderLeftWidth: 1,
        borderRightColor: 'grey',
        borderRightWidth: 1,
        marginVertical: 10,
    }
});

export default Input;