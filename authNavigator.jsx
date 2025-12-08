/*Auth Navigator*/
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Auth from "./authscreen";
import Login from "./Login";
import Register from "./Register";



const Stack = createNativeStackNavigator();

const AuthNavigator = ({ setAuthd }) => {
    console.log("AuthNavigator received setAuthd: ", setAuthd)
    return (
        <Stack.Navigator  screenOptions={{headerShown: true, headerTitleAlign: "center"}}>
            <Stack.Screen name="Auth" component={Auth} options={{headerShown: false}} />
            <Stack.Screen name='Login' >
                {props => <Login {...props} setAuthd={setAuthd}/>}
                </Stack.Screen>
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    )
};
export default AuthNavigator;