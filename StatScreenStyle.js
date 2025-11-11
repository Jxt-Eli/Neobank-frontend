import { StyleSheet } from "react-native";

const styles = StyleSheet.create ({
    container: {
        flex: 1, 
        backgroundColor: '#FAFAFA', 
        padding: 20, 
        alignItems: "center", 
    }, 
    title: {
        fontSize: 24, 
        marginTop: 30, 
        marginLeft: 20, 
        fontWeight: 'bold'
    }, 
    textField: {
        minWidth: "90%", 
        height: 50,  
        paddingHorizontal: 15, 
        borderWidth: 1, 
        borderRadius: 15, 
        fontSize: 16, 
    }, 
})
export default styles