import React from 'react';
import { View } from 'react-native';
import { Image, StyleSheet } from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'

function ViewImageScreen(props) {
  return (
    <View style={{ backgroundColor: '#000', height: '100%'}}>
        <View style={styles.closeIcon}>
            <MaterialCommunityIcons name='close' color='white' size={30}/>
        </View>
        <View style={styles.deleteIcon}>
            <MaterialCommunityIcons name='trash-can-outline' color='white' size={30}/>
        </View>
        <Image 
        resizeMode='contain'
        style={styles.image} 
        source={require('../assets/sphynx.png')} />
    </View>
  );
}

const styles = StyleSheet.create({
    closeIcon: {
        position: 'absolute',
        top: 60,
        left: 60,
    },
    container: {
        backgroundColor: "#000",
        flex: 1,
    },
    deleteIcon: {
        position: 'absolute',
        top: 60,
        right: 60,
    },
    image: {
        width: '100%',
        height: 400,
        marginTop: 200,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default ViewImageScreen;