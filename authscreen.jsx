import { View, Text, TouchableOpacity, } from "react-native";
import styles from "./authstyle";



const AuthButtons = ({ text, onPress, name, style }) => {
    return (
        <TouchableOpacity style={[styles.authButtons, style]} onPress={onPress}>
            <Text style={styles.authButtonText} >{name}</Text>
        </TouchableOpacity>
    )
}
export {AuthButtons}


export default function Auth({ navigation }) {

    return (
        <View style={styles.container}>
            <AuthButtons name='LOGIN' onPress={() => navigation.navigate('Login')} />
            <AuthButtons name='REGISTER' style={[{backgroundColor: 'grey'}]}  onPress={() => navigation.navigate('Register')} />
        </View>
    )
}