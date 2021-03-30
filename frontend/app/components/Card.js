import React from 'react';
import { Image } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native';

import { View, StyleSheet, Text } from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';


function Card({ title, subTitle, imageUrl, onPress }) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View style={styles.card}>
                <View style={styles.detailsContainer}>
                    <Image style={styles.image} source={{ uri: imageUrl }} />
                    <AppText numberOfLines={3}>{title}</AppText>
                    <Text style={styles.subtitle} numberOfLines={1}>{subTitle}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: colors.white,
        marginBottom: 20,
        overflow: 'hidden',
    },
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: 334,
        height: 300,
        borderRadius: 15,
        marginBottom: 30
    },
    subtitle: {
        color: colors.secondary,
        marginTop: 10,
        fontSize: 18,
    },
    title: {
        marginBottom: 20
    }
});

export default Card;