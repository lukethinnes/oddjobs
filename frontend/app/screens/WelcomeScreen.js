import React from 'react';
import { View, ImageBackground, StyleSheet, Image } from 'react-native'

import AppButton from '../components/Button'
import RegisterButton from '../components/buttons/RegisterButton'
import routes from '../navigation/routes';

export default function WelcomeScreen({ navigation }) {
    return (
        <ImageBackground
        blurRadius={7}
        style={styles.background}
        source={require("../assets/welcomebackground.jpeg")}>
            <View style={styles.logoContainer}>
            <Image style={styles.logo} source={require('../assets/oddjoblogo.png')} />
            <Image style={styles.text} source={require('../assets/oddjobs.png')} />
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="Login" onPress={() => navigation.navigate(routes.LOGIN)} />
                <AppButton title="Register" color='secondary' onPress={() => navigation.navigate(routes.REGISTER)}/>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({

    background: {
        width: '100%',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonsContainer: {
        padding: 20,
        width: '100%',
        marginBottom: 100
    },
    logo: {
        width: 80,
        height: 80,
        marginTop: 204,
        marginRight: 210,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoContainer: {
        position: 'absolute',
        top: 50,   
        alignItems: 'center'
    },
    text:{
        flex: 1,
        height: 60,
        width: 200,
        marginLeft: 75,
        resizeMode: 'stretch',
        bottom: 73,
    },
}
)
