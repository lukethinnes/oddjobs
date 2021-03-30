import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function LoginButton({text}) {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'dodgerblue',
        borderRadius: 35,
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#FFF',
        fontSize: 22,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})

export default LoginButton;