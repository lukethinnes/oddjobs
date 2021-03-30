import React, { useState } from 'react';
import {MaterialCommunityIcons} from '@expo/vector-icons'
import { 
    Button, 
    Modal, 
    StyleSheet, 
    Text,
    TouchableWithoutFeedback, 
    View, 
} from 'react-native';

import defaultStyles from '../config/styles'
import Screen from './Screen';
import { FlatList } from 'react-native';
import PickerItem from './PickerItem';

function AppPicker({ 
    icon, 
    items, 
    numberOfColumns = 1,
    onSelectItem, 
    selectedItem, 
    PickerItemComponent = PickerItem, 
    placeholder,
    width = '100%' }) {

    const [modalVisible, setModalVisible] = useState(false);
    
    return (
    <>
    <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, { width }]}>
            {icon && (
            <MaterialCommunityIcons
                name={icon}
                size={20}
                color={defaultStyles.colors.medium}
                style={styles.icon}
            />
        )}
        {selectedItem ? (
            <Text style={styles.text}>{selectedItem.label}</Text>
        ) : (
            <Text style={styles.placeholder}>{placeholder}</Text>
        )}

        <MaterialCommunityIcons
            name='chevron-down'
            size={20}
            color={defaultStyles.colors.medium}
        />
        </View>
        </TouchableWithoutFeedback>
        <Modal visible={modalVisible} animationType='slide'>
        <Screen>
            <Button title='Close' onPress={() => setModalVisible(false)} />
            <FlatList
                data={items}
                keyExtractor={(item) => item.value.toString()}
                numColumns={numberOfColumns}
                renderItem={({ item }) => (
                <PickerItemComponent
                    item={item}
                    label={item.label}
                    onPress={() => {
                    setModalVisible(false);
                    onSelectItem(item);
                }}
                />
            )}
        />
        </Screen>
    </Modal>
    </>
    );
}

const styles = StyleSheet.create({
    chevron: {
        flex: 1,
        marginLeft: 200,
    },
    container: {
        backgroundColor: defaultStyles.colors.light, 
        borderRadius: 25,
        flexDirection: 'row',
        padding: 15,
        marginVertical: 10
    },
    icon: {
        marginRight: 10,
        color: '#777',
    },
    modal: {
        fontSize: 12
    },
    placeholder: {
        marginLeft: 16,
        fontSize: 16,
        color: defaultStyles.colors.medium,
        flex: 1
    },
    text: {
        marginLeft: 16,
        fontSize: 16,
        flex: 1
    }
})

export default AppPicker;