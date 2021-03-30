import React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet, Text } from 'react-native';

import colors from '../config/colors'

function AppButton( { title, onPress, color = 'primary' } ) {
  return (
    <TouchableOpacity style={[styles.button, { backgroundColor: colors[color]}]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'dodgerblue',
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
        paddingLeft: 95,
        paddingRight: 95,
        width: '100%',
        marginVertical: 20,
    },
    text: {
        color: colors.white,
        fontSize: 22,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
    container: {}
});

export default AppButton;