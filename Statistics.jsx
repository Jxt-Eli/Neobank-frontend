import react from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'; 
import styles from './StatScreenStyle';
import { useState } from 'react';



export default function StatisticsScreen() {
    
    const [email, setEmail] = useState('')
    const [error, setError] = useState('')
    
    const handleInput =(value) => {
        setEmail(value)
    
        if (value === '') {
            setError('Email is required')
        } else if (!isNaN(value)) {
            setError('invalid email')
        } else {
            setError('')
        }
    }

    return(
        <View style={styles.container}>
            <Text style={styles.title}>I hate javascript</Text>
            <TextInput 
                placeholder='name'
                value={email}
                style={styles.textField}
                onChangeText={handleInput}
                />
                {email != '' && <Text style={styles.title}>{email}</Text>}
                {error ? <Text>{error}</Text> : null}
        </View>
    )
}