import DepositScreen from "./DepositScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./homescreen";



const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Home." screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home.' component={HomeScreen} options={{headerShown: true}}/>
            <Stack.Screen name="Deposit" component={DepositScreen}/>
        </Stack.Navigator>
    )
}; 
export { StackNavigator }