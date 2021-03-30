import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import Swipeable from 'react-native-gesture-handler/Swipeable';

import colors from '../../config/colors';

function ListItem({ 
    title, 
    subTitle, 
    image, 
    IconComponent, 
    onPress, 
    renderRightActions }) {
    return (
        <Swipeable renderRightActions={renderRightActions}>
        <TouchableHighlight 
        underlayColor={colors.light}
        onPress={onPress}>
        <View style={styles.container}>
        {IconComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailsContainer}>
            <Text style={styles.title} numberOfLines={1}>{title}</Text>
            {subTitle && <Text style={{ color: colors.medium }} numberOfLines={2}>{subTitle}</Text>}
        </View>
        <MaterialCommunityIcons color={colors.medium} style={styles.chevron} name='chevron-right' size={20} />
        </View>
        </TouchableHighlight>
        </Swipeable>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5,
        backgroundColor: colors.white,
    },
    detailsContainer: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginTop: 30,
        marginLeft: 10,
    },
    subTitle: {
        color: '#6e6969'
    },
    title: {
        color: colors.black
    },
    userContainer: {
        marginTop: 38,
        marginLeft: 15,
        color: colors.primary
    }
});

export default ListItem;