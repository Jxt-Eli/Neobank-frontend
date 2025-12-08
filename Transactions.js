import {StyleSheet, View, FlatList, TouchableOpacity, Text } from 'react-native';

export default function Transactions() {
    const transactions = [
        { id: '1', name: 'Advertisement', amount: '-$12,212.55'}, 
        { id: '2', name: 'e-commerce', amount: '+$1,932.05'}, 
        { id: '3', name: 'Employees', amount: '-$134,611.50'}, 
        { id: '4', name: 'Marketing', amount: '-$3,965.00'}, 
        { id: '5', name: 'AI Training', amount: '-$420,000.50' },
        { id: '6', name: 'Salary Deposit', amount: '+$2,000.00' },
        { id: '7', name: 'Logistics', amount: '-$45,860.20' },
        { id: '8', name: 'Series B Funding', amount: '+$1,500,000.00' },
        { id: '9', name: 'Business Expenditure', amount: '-$6000.00' },
        { id: '10', name: 'Gross Income', amount: '+$892,120.50' },
    ]

    return (
        <View style={styles.container}>
            <FlatList
                style={{marginTop: 12}}
                data={transactions}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.section}>
                        <Text style={{fontWeight: 'bold'}}>{item.name}</Text>
                        <Text style={{color: item.amount.includes('-') ? 'red' : 'green'}}>{item.amount}</Text>
                    </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "#FFFFFF", 
        gap: 20,  
        padding: 10, 
    }, 
    section: {
        minWidth: '90%', 
        backgroundColor: '#F4F7FA', 
        minHeight: 75, 
        elevation: 2, 
        borderRadius: 14, 
        padding: 15, 
        margin: 10, 
    }, 
})