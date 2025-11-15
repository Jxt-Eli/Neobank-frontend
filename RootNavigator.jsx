import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthNavigator from "./authNavigator";
import TabNavigator from "./TabNavigator";
import { useState } from "react";
import { StackNavigator } from "./StackNavigator";



const Stack = createNativeStackNavigator(); 

export default function RootNavigator() {

    const [authd, setAuthd] = useState(false)

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            { authd ? (

                <Stack.Screen name='App Screens' component={TabNavigator} />
            ) : (
                <Stack.Screen name='Auth Screens' >
                    {() => <AuthNavigator setAuthd={setAuthd} />}
                </Stack.Screen>

            )}
        </Stack.Navigator>
    );
}