
import HomeScreen from "./homescreen";
import StatisticsScreen from "./Statistics";
import Login from "./Login";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "./Profile";
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { StackNavigator } from "./StackNavigator";


const Tab = createBottomTabNavigator(); 


export default function TabNavigator() {
    return (
        <Tab.Navigator>
            <Tab.Screen 
                name="Home" 
                component={StackNavigator} 
                options={{
                    tabBarIcon: ({ color, size })  => (
                        <Ionicons name="home" size={size} color={color}/>
                    ), 
                    headerShown: false
                }}
            />
            <Tab.Screen 
                name="Stats" 
                component={StatisticsScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="pie-chart" size={size} color={color}/>
                    ), 
                }}
            />
            <Tab.Screen 
                name="Profile" 
                component={Profile} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="person" size={size} color={color}/>
                    ), 
                }}
            />
        </Tab.Navigator>
    );
};


