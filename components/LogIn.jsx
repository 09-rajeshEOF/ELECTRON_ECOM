<<<<<<< HEAD
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, TextInput, ImageBackground } from 'react-native';
import { StyleSheet } from 'react-native';
import Button from './Button.jsx';
=======
import React, { useState, useContext } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, TextInput, View, SafeAreaView, ImageBackground, Image, TouchableOpacity, Text, Alert } from 'react-native';
import { StyleSheet } from 'react-native';
import { UserAuthContext } from './Context/userAuthContext.js';
import Button from './Button.jsx';
import CustomInputField from './CustomInputField.jsx'; 
import {useNavigation} from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
>>>>>>> 2b12dd9 (add files)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
<<<<<<< HEAD
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
=======
    backgroundColor: 'transparent',
  },
  image: {
    flex: 1,
    height: "100%",
    width: "100%"
  },
  logo: {
    alignItems: 'center',
    marginTop:85,
    width: 200,
    height: 150,
    marginBottom: 5,
  },
  logoContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  welcomeElectron: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: -60,
    fontSize: 30,
    marginBottom: 30,
    color: "orange",
    elevation: 15
  },
  cardContainer: {
    marginTop:-20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    height:275,
    // flexDirection: 'column',
    // justifyContent: 'center',
    width: "90%",
    alignItems: 'center',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginBottom: 15,
>>>>>>> 2b12dd9 (add files)
  },
  input: {
    height: 40,
    width: 275,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginVertical: 5,
    paddingHorizontal: 10,
<<<<<<< HEAD
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
=======
    marginBottom: 15,
  },
  button: {
    marginTop: 15,
    marginBottom: 15,
    fontSize: 18
  },
  buttonRegistration: {
    color: 'grey',
    fontSize: 22,
  },
  // Styles for the top shapes
  topShape: {
    position: 'absolute',
    top: 0,
    right: 0,
    width: '50%',
    height: '30%',
    backgroundColor: '#673AB7', // Purple color
    borderTopLeftRadius: 200,
    borderBottomLeftRadius: 200,
    // Add padding to the left and right
    marginRight:-20// Adjust the padding as needed
  },
  topShape2: {
    position: 'absolute',
    top: 50,
    left: 0,
    width: '70%',
    height: '20%',
    backgroundColor: '#9C27B0', // Lighter purple color
    borderTopRightRadius: 200,
    borderBottomLeftRadius: 250,
    // Add padding to the left and right
    marginLeft:-20,
    marginRight:-20 // Adjust the padding as needed
  },
  bottomShape: {
    position: 'absolute',
    zIndex:-99,
    bottom:100,
    left: 0,
    width: '50%',
    height: '20%',
    backgroundColor: '#D81B60',
    borderTopRightRadius: 250,
    borderBottomRightRadius: 250,
    // Add padding to the left and right
    paddingHorizontal: 20, // Adjust the padding as needed
  },
  
>>>>>>> 2b12dd9 (add files)
});

const LogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
<<<<<<< HEAD

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
=======
  const { login } = useContext(UserAuthContext);
  const navigation = useNavigation();

  const handleSubmit = () => {
    console.log('handle submit called ')
    login(username, password).then((isValid) => {
      console.log('login result:', isValid);
      if (isValid) {
        console.log('Login success')
        navigation.navigate('Home');
        console.log('navigation done!!')
      } else {
        Alert.alert('Invalid username or password');
      }
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={{ flex: 1, justifyContent: 'center' }}
        >
          <View
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
          >
            {/* Add the top shape views */}
            <View style={styles.topShape} />
            <View style={styles.topShape2} />
            <View style={styles.logoContainer}>
              <Image source={require('./../assets/logo.png')} style={styles.logo} />
            </View>

            <View style = {{flexDirection:'row',justifyContent:'center'}}>
            <Text style={styles.welcomeElectron}>𝓦𝓮𝓵𝓬𝓸𝓶𝓮 𝓽𝓸 𝓔𝓵𝓮𝓬𝓽𝓻𝓸𝓷 𝓜𝓪𝓻𝓽...</Text>
            </View>

            <View style={styles.cardContainer}>
              <View style={styles.card}>
                <CustomInputField
                  label="Username"
                  value={username}
                  onChange={(text) => setUsername(text)}
                  iconName="user"
                />
                <CustomInputField
                  label="Password"
                  value={password}
                  onChange={(text) => setPassword(text)}
                  secureTextEntry={true}
                  iconName="lock"
                />
                <Button
                  style={styles.button}
                  height={45}
                  width={150}
                  borderColor="black"
                  borderRadius={10}
                  backgroundColor="lightblue"
                  value="LogIn"
                  onPress={handleSubmit}
                />
                <TouchableOpacity style = {{flexDirection:'row',justifyContent:'center',paddingTop:10}}>
              
            </TouchableOpacity>
         
              </View>
            </View>
            <View style={{ flexDirection: 'column', alignItems: 'center' ,marginBottom:40}}>
            <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
              <Button
                style={styles.button}
                height={40}
                width={220}
                borderColor="black"
                borderRadius={10}
                backgroundColor="yellow"
                value="LogIn with Google"
                onPress={() => navigation.navigate('HomeStackNavigator')}
                icon = "google"
              />
              </View>
              <View style={{ marginBottom: 10 }} />
              <Button
                style={styles.button}
                height={40}
                width={220}
                borderColor="black"
                borderRadius={18}
                backgroundColor="lightgreen"
                value="LogIn with Microsoft"
                onPress={() => console.warn('you wanted to login with microsoft')}
                icon = "windows"
              />
              <View style={{ marginBottom: 15 }} />
              <Button
                style={styles.button}
                height={40}
                width={220}
                borderColor="black"
                borderRadius={18}
                backgroundColor="#FA7403"
                value="LogIn with GitHub"
                disabled={true}
                onPress={() => console.warn('you wanted to login with microsoft')}
                icon = "github"
              />
            </View>
          </View>
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LogIn;
>>>>>>> 2b12dd9 (add files)
