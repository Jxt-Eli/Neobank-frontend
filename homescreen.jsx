import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";
import styles from "./HomeScreenStyle";
import DepositScreen from "./DepositScreen";
import { StatusBar } from 'expo-status-bar';


const QuickActionButtons = ({name, onPress}) => {
    return (
        <TouchableOpacity style={styles.actionButton2} onPress={onPress}>
            <Text style={styles.actionButtonText} >{name}</Text>
        </TouchableOpacity>
    );
};



export default function HomeScreen({ navigation }) {


    const [message, setMessage] = useState("");

    const handler = (button) => {
        if (button === 1) {
            setMessage('you clicked the send money button')
        } else {
            setMessage('you clicked the deposit button')
        }
    };

    return(
        <View style={styles.container}>
            <View style={styles.upperContainer}>
            <Text style={styles.welcome}>Dashboard</Text>
            <TouchableOpacity 
                style={styles.circleButton}
                onPress={() => navigation.navigate('Auth')}
                >
                <Text>+</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.balanceCard}>
                <Text style={styles.balanceLabel}>Total Balance</Text>
                <Text style={styles.balanceAmount}
                    numberOfLines={1}
                    adjustsFontSizeToFit={true}
                >
                    $923,499.35
                </Text>
            </View>
            <View style={styles.lowerContainer}> 
                    <QuickActionButtons name='send money' />
                    <QuickActionButtons name='Deposit' onPress={() => navigation.navigate('Deposit')}/>
                    <QuickActionButtons name='Receive' />
                    <QuickActionButtons name='scan' />
            </View>
                    <Text style={styles.recentTransactions}>Recent Transactions</Text>
            <ScrollView>
                <View style={styles.stack}>
                {/*loop for 20 boxes to scroll through*/}
                {Array.from({length: 8}, (_, i) => (
                    <TouchableOpacity key={i} style={styles.box}>
                        <Text style={styles.listLabel}>this is box {i + 1}</Text>
                    </TouchableOpacity>
                ))}
                </View>
                <Text style={styles.seeMoreText}> see more </Text>
            </ScrollView>
            <StatusBar style="auto" />
        </View>
    )
};

