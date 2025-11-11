import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';
import FlexboxPlayground from './App2';

import HomeScreen from './homescreen'; 
import StatisticsScreen from './Statistics';  



export default function Login() {
  //return <FlexboxPlayground/>
  //return <HomeScreen/>

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState("");
  
  
  const handleLogin = () => {
    setStatus("Logging in...");
    
    // simulate API call with setTimeout (pretend delay)
    setTimeout(() => {
      setStatus("LoginSuccessful!"); 
    }, 2000);
  };


  return (
    <View style={styles.container}>
    <Text style={styles.title}>Quantevo</Text>  

      <TextInput 
        placeholder='Email'
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        placeholder='Password'
        value={password}
        onChangeText={setPassword}
        style={styles.input}
        secureTextEntry={true}
      />

      <Button title='Login' onPress={handleLogin}/>

      {status != "" && <Text style={styles.status}>{status}</Text>}

      <StatusBar style="auto" />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    //gap: 15
  },
  input: {
    fontSize: 16, 
    borderColor: 'black',
    width: '85%', 
    height: 50, 
    borderWidth: 1, 
    marginBottom: 15,
    borderRadius: 8, 
    paddingHorizontal: 15, 
  },
  title: {
    fontSize: 24, 
    color: 'black', 
    fontWeight: 'bold',
    marginBottom: 30
  }, 
  
  status: {
    marginTop: 20, 
    fontsize: 16, 
    color: 'black'
  }
});
