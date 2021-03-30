import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MyAccountScreen from "../screens/MyAccountScreen";
import MessagesScreen from "../screens/MessagesScreen";


const Stack = createStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen 
        component={MyAccountScreen} 
        name="Account" 
        />
        <Stack.Screen 
        component={MessagesScreen} 
        name="Messages" 
        />
    </Stack.Navigator>
);

export default AccountNavigator;