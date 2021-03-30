import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

function RegisterButton({text}) {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#ff6f1d',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        paddingLeft: 95,
        paddingRight: 95,
        width: '100%',
        marginVertical: 90,
    },
    text: {
        color: '#FFF',
        fontSize: 22,
        textTransform: 'uppercase',
        fontWeight: 'bold'
    }
})

export default RegisterButton;