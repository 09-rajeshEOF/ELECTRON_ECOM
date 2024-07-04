import React, { useState } from 'react';
import { View, Text,Alert, TextInput, TouchableOpacity, StyleSheet, Image, ImageBackground,SafeAreaView,ScrollView } from 'react-native';
import Button from './Button.jsx';
import Icon from './Icon.jsx';
import CustomInputField from './CustomInputField.jsx';
import { userAuthContext} from './Context/userAuthContext.js'


const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const handleSignup = () => {
    
  };

  return (
    <ScrollView>
    <ImageBackground
      style={{ width: '100%', height: '100%' }}
      source={require('../assets/login2.jpg')}
    >
    <View style = {{flexDirection: 'row',justifyContent:'center'}}>
      <Image source = {require('./../assets/brandLogoNoBG.png')} style = {{height:250,width:250}}/>
    </View>
    <View style = {{backgroundColor:'white',opacity:1,padding:15,borderRadius:50}}>
      <View style={{ padding: 20, opacity: 2,width:'100%' ,color:'white'}}>
        <CustomInputField
          label="Email"
          value={email}
          onChange={(text) => setEmail(text)}
          placeholder="example@email.com"
          iconName="mail"
        />
        <View style = {{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:5}}>
          <View style = {{marginRight:5}}>
            <CustomInputField
              label="First Name"
              value={firstName}
              onChange={(text) => setFirstName(text)}
              placeholder="Rajesh"
              iconName="user"
              width = "210%"
            />
          </View>
          <View style ={{left:-50}}>
            <CustomInputField
              label="Last Name"
              value={lastName}
              onChange={(text) => setLastName(text)}
              placeholder="Pattanaik"
              iconName="user"
              width = "170%"
            />
          </View>
        </View>
        <CustomInputField
          label="Password"
          value={password}
          onChange={(text) => setPassword(text)}
          secureTextEntry={true}
          placeholder="Password"
          iconName="lock"
        />
        <CustomInputField
          label="Repeat Password"
          value={repeatPassword}
          onChange={(text) => setRepeatPassword(text)}
          secureTextEntry={true}
          placeholder="Repeat Password"
          iconName="lock"
        />
        <View style = {{flexDirection: 'row',justifyContent:'center'}}>
               <Button
                height={50}
                width={275}
                borderColor="black"
                borderRadius={10}
                backgroundColor="yellow"
                value="SignUp"
                onPress={handleSignup}
              />
        </View>

        <TouchableOpacity style = {{flexDirection: 'row',justifyContent:'center'}}>
          <Text style={{ fontSize: 16, color: '#fff' }}>
            Registered user! Login ->
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ marginTop: 15,
    flexDirection: "row",
    justifyContent: "center"}}>
            <Icon source={require('./../assets/google.png')} width={50} height={50} onPress={() => console.log('Icon 1 google pressed')} />
            <Icon source={require('./../assets/microsoft.png')} width={50} height={50} onPress={() => console.log('Icon 2 msoft pressed')} />
            <Icon source={require('./../assets/githubFinal.png')} width={50} height={50} onPress={() => console.log('Icon 3 github pressed')} />
          </View>
    </View>
      
    </ImageBackground>
    </ScrollView>
  );
};

export default RegistrationForm;