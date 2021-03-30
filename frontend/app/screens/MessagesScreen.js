import React, { useState } from 'react';
import Screen from '../components/Screen'

import { FlatList, StyleSheet } from 'react-native';

import ListItem from '../components/lists/ListItem'
import ListItemSeparator from '../components/lists/ListItemSeparator';
import ListItemDeleteAction from '../components/lists/ListItemDeleteAction';

    const initialMessages = [
        {
            id: 1,
            title: 'Boxspring Chicken',
            description: 'I used your IP address to find out where you live. Do not push me any further.',
            image: require('../assets/boxspringchicken.jpeg')
        },
        {
            id: 2,
            title: 'Boxspring Chicken',
            description: 'You cannot hide from me. You will not hide from me. Give me free mattress.',
            image: require('../assets/boxspringchicken.jpeg')
        },
        {
            id: 3,
            title: 'Boxspring Chicken',
            description: 'Do you still have free mattress?',
            image: require('../assets/boxspringchicken.jpeg')
        },
        {
            id: 4,
            title: 'Boxspring Chicken',
            description: 'Hello I am craving free mattress when can I pick up?',
            image: require('../assets/boxspringchicken.jpeg')
        },
    ]

function MessagesScreen(props) {

    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing ]= useState(false);

    const handleDelete = message => {
        setMessages(messages.filter(m => m.id !== message.id))
        
    }

    return (
    <Screen>
        <FlatList 
            data={messages}
            keyExtractor={message => message.id.toString()}
            renderItem={({ item }) =>( 
            <ListItem 
            title={item.title}
            subTitle={item.description}
            image={item.image} 
            onPress={() => console.log('Pressed', item)} 
            renderRightActions={() =>
            <ListItemDeleteAction onPress={() => handleDelete(item)} />}/> 
            )} 
            ItemSeparatorComponent={ListItemSeparator}
            refreshing={refreshing}
            onRefresh={() => {
                setMessages([
                    {
                        id: 2,
                        title: '2',
                        description: '2',
                        image: require('../assets/boxspringchicken.jpeg')
                    },
                ])
            }}
            />
    </Screen>
    );
}

const styles = StyleSheet.create({

});

export default MessagesScreen;