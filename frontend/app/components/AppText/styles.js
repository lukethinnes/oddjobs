import { StyleSheet, Platform } from 'react-native'

const styles = StyleSheet.create({
    text: {
        fontSize: 16,
        fontFamily: PlatformOS === "android" ? "Roboto" : "Avenir"
    }
})

export default styles;