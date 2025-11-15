import { Text, View, TextInput } from 'react-native';
import { useState } from 'react';

import { AuthButtons } from './authscreen';
import styles from './credstyles';  



export default function Login({ navigation }) {
  
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
    {/* <Text style={styles.title}>Login</Text>   */}

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

      <AuthButtons name='LOGIN' style={[{minWidth: '90%' }]} onPress={handleLogin}/>

      {status != "" && <Text style={styles.status}>{status}</Text>}

      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

