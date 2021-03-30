import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, Text } from 'react-native';

import Button from '../components/Button'
import Card from '../components/Card'
import colors from '../config/colors';
import listingsApi from '../api/listings'
import routes from '../navigation/routes';
import Screen from '../components/Screen';
import ActivityIndicator from '../components/ActivityIndicator'
import useApi from '../hooks/useApi';


function ListingsScreen({ navigation }) {

    const getListingsApi = useApi(listingsApi.getListings)

        useEffect(() => {
            getListingsApi.request(1, 2, 3)
        }, [])

    return (
        <Screen style={styles.screen}>
            {getListingsApi.error && 
            <>
                <Text>Couldn't retrieve the listings.</Text>
                <Button title='Retry' onPress={getListingsApi.request}></Button>
            </>}
            <ActivityIndicator visible={getListingsApi.loading} />
            <FlatList 
                data={getListingsApi.data}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) =>
            <Card
                title={item.title}
                subTitle={item.zip}
                imageUrl={item.images[0].url}
                onPress={() => navigation.navigate(routes.LISTING_DETAILS_SCREEN, item)}
                style={styles.card}
            />}/> 
        </Screen>
    );
}

const styles = StyleSheet.create({
    card: {
        marginTop: 20
    },
    screen : {
        padding: 20,
        backgroundColor: colors.light,
    }
});

export default ListingsScreen;