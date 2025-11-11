import React from "react";
import DepositScreen from "./DepositScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./homescreen";


const Stack = createNativeStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name='Home' component={HomeScreen} options={{headerShown: true}} />
            <Stack.Screen name="Deposit" component={DepositScreen}/>
            {/*<Stack.Screen/>*/}
        </Stack.Navigator>
    );
}; 