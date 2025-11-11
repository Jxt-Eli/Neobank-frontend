// my own app.js
import React from 'react'
import {StyleSheet, View, Text} from 'react-native';

export default function FlexboxPlayground() {
    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <Text style={styles.text}>box 1</Text>
            </View>
            <View style={styles.box2}>
                <Text style={styles.text}>box 2</Text>
            </View>
            <View style={styles.box3}>
                <Text style={styles.text}>box 3</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: "hotpink", 
        flexDirection: 'column', 
        gap: 20,  
        alignItems: 'flex-end',
        justifyContent: 'space-evenly', 
    }, 
    box1: {
        width: 100, 
        height: 100, 
        backgroundColor: 'white', 
        justifyContent: 'center', 
        alignItems: 'center',
        marginTop: 15,  
        borderRadius: 8,  
        flex: 1
    }, 
    box2: {
        width: 100, 
        height: 100,    
        justifyContent: 'center', 
        backgroundColor: '#4ECDC4', 
        alignItems: 'center',
        marginTop: 15, 
        borderRadius: 8, 
        flex: 2
    }, 
    box3: {
        width: 100, 
        height: 100, 
        backgroundColor: '#45B7D1', 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: '15', 
        borderRadius: 12, 
        flex: 1
    }
})