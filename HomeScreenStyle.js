import { StyleSheet } from 'react-native';



const styles  = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#F4F7FA', 
        padding: 20, 
    }, 
    upperContainer: {
        flexDirection: 'row', 
    }, 
    circleButton :{
        width: 40, 
        height: 40, 
        borderRadius: 20, 
        backgroundColor: '#FFFFFF', 
        alignItems: 'center', 
        justifyContent: 'center', 
        marginLeft: 210, 
        marginTop: 3, 
        elevation: 2, 
    }, 
    lowerContainer: {
        padding: 20, 
        flexDirection: 'row', 
        gap: 7, 
        justifyContent: 'center', 
        marginTop: 20, 
    }, 
    welcome: {
        fontSize: 24, 
        fontWeight: 'bold', 
        marginTop: 5, 
        marginBottom: 15, 
    }, 
    balanceCard: {
        backgroundColor: 'dodgerblue', 
        padding: 47, 
        borderRadius: 20,
        elevation: 8, 
        marginBottom: 7, 
        width: '100%', 
        height: 240, 
        alignItems: 'center', 
    }, 
    balanceLabel:{
        color: 'rgba(255, 255, 255, 0.8)',
        fontSize: 14, 
        marginBottom: 10, 
        marginTop: 10, 
    }, 
    balanceAmount: {
        color: 'white', 
        fontSize: 42,  
        fontWeight: 'bold', 
        marginBottom: 22, 
    }, 
    /*actionButton: {
        backgroundColor: '#6C63FF', 
        padding: 12, 
        borderRadius: 30, 
        minWidth: 90, 
        elevation: 4, 
        alignItems: 'center', 
        justifyContent: 'flex-end'
    },*/
    actionButtonText: {
        fontSize: 12, 
        fontWeight: '600', 
        color: 'black', 
    }, 
    actionButton2: {
        backgroundColor: '#FFFFFF', 
        padding: 12, 
        borderRadius: 30, 
        minWidth: 90, 
        minHeight: 64, 
        elevation: 3,  
        alignItems: 'center', 
        justifyContent: 'flex-end'
    }, 
    recentTransactionsContainer: {
        flexDirection: 'row'
    }, 
    seeMoreText:{
        fontSize: 17, 
        color: 'dodgerblue', 
        textAlign: 'right', 
        marginRight: 10, 
    }, 
    recentTransactions:{
        fontWeight: 'bold', 
        fontSize: 22, 
    }, 
    box: {
        fontSize: 16, 
        backgroundColor: '#FFFFFF', 
        textAlign: 'center', 
        marginBottom: '20', 
        paddingHorizontal: 10, 
        paddingVertical: 20, 
        borderRadius: 16, 
        width: '45%', 
        minHeight: 200, 
        elevation: 1, 
    }, 
    stack: {
        flexDirection: 'row', 
        justifyContent: 'space-evenly', 
        flexWrap: 'wrap'
    }, 
})

export default styles;
