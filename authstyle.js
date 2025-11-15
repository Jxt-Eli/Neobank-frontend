import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        padding: 20, 
        backgroundColor: "white", 
        alignItems: "center", 
        justifyContent: "flex-end", 
        gap: 17, 
    }, 
    authButtons: {
        //borderWidth: 1, 
        //borderColor: 'black', 
        justifyContent: "center", 
        backgroundColor: 'dodgerblue', 
        minWidth: '95%', 
        minHeight: 55, 
        alignItems: "center", 
        borderRadius: 30, 
        elevation: 1, 
    }, 
    authButtonText: {
        fontSize: 16, 
        fontWeight: "bold", 
        color: "#F4F7FA"
    }, 
});
export default styles