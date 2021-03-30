import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { Platform } from 'react-native';
import { View, Text } from 'react-native';
import AppText from '../components/AppText';
import ContactSellerForm from '../components/ContactSellerForm';
import ListItem from '../components/lists/ListItem';
import Screen from '../components/Screen';
import colors from '../config/colors';

function ListingDetailsScreen({ route }) {
    const listing = route.params
    return (
        <KeyboardAvoidingView
            behvior='position'>
            <Image style={styles.image} source={listing.images} />
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>{listing.title}</AppText>
                <Text style={styles.description}>{listing.description}</Text>
                <Text style={styles.zip}>{listing.zip}</Text>
                <View>
                <ListItem 
                    image={require('../assets/boxspringchicken.jpeg')}
                    title='Boxspring Chicken'
                    style={styles.listing}
                    subTitle='3 listings'
                />
                </View>
                </View>
                <ContactSellerForm listing={listing} />
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 10
    },
    description: {
        marginTop: 0,
        marginBottom: 0
    },
    image: {
        width: '100%',
        height: 400,
        marginTop: 40
    },
    listing: {
        marginBottom: 30
    },
    title: {
        color: colors.secondary,
        fontSize: 12,
        fontWeight: '500',
        marginRight: 40
    },
    zip: {
        color: "#ff6f1d",
        fontSize: 18,
        marginVertical: 10
    }
})

export default ListingDetailsScreen;