import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, TextInput, ImageBackground } from 'react-native';
import { StyleSheet } from 'react-native';
import Button from './Button.jsx';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 275,
    height: 275,
    marginBottom: 5,
  },
  welcomeElectron : { 
     marginTop:-40,
     fontSize: 30, 
     marginBottom: 50,
     color:"white",
     elevation : 20 
     },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    flexDirection:'coloumn',
    justifyContent:'center',
    alignItems:'center',
    padding: 20,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom:20
  },
  input: {
    height: 40,
    width: 275,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {marginTop:20,
    marginBottom: 20,
    fontSize : 18
  },
  buttonRegistration: {
    color: 'white',
    fontSize: 22,
  },
});

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username.trim() === '' || password.trim() === '') {
      alert('Please enter both username and password');
    } else {
      alert(`Welcome ${username}`);
    }
  };

  return (
    <ImageBackground source={require('./../assets/logIn.jpg')} style={styles.container}>
      <SafeAreaView style={styles.container}>
      
        <Image source={require('./../assets/brandLogoNoBG.png')} style={styles.logo} />
        
        <Text style={styles.welcomeElectron}>𝓦𝓮𝓵𝓬𝓸𝓶𝓮 𝓽𝓸 𝓔𝓵𝓮𝓬𝓽𝓻𝓸𝓷 𝓜𝓪𝓻𝓽...</Text>

        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          <TextInput
            style={[styles.input, { marginBottom: 10 }]}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          <Button
            style={styles.button}
            height={50}
            width={150}
            borderColor="black"
            borderRadius={10}
            backgroundColor="lightblue"
            value="LogIn"
            onPress={() => handleLogin()}
          />
         
        </View>
 <View style={{ flexDirection: 'column', alignItems: 'center' }}>
  <Button
    style={styles.button}
    height={50}
    width={275}
    borderColor="black"
    borderRadius={10}
    backgroundColor="yellow"
    value="LogIn with Google"
    onPress={() => console.warn('you wanted to login with google')}
  />
  <View style={{ marginBottom: 10 }} />
  <Button
    style={styles.button}
    height={50}
    width={275}
    borderColor="black"
    borderRadius={10}
    backgroundColor="lightgreen"
    value="LogIn with Microsoft"
    onPress={() => console.warn('you wanted to login with microsoft')}
  />
  <View style={{ marginBottom: 15 }} />
  <Button
    style={styles.button}
    height={50}
    width={275}
    borderColor="black"
    borderRadius={10}
    backgroundColor="#FA7403"
    value="LogIn with GitHub"
    onPress={() => console.warn('you wanted to login with microsoft')}
  />
</View>
        <TouchableOpacity>
          <Text style = {styles.buttonRegistration}>Not a User? Register</Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default LogIn;