import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Image,ImageBackground } from 'react-native';
import Button from './Button.jsx';
import Icon from './Icon.jsx'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    flex: 1,
    width:"100%",
    resizeMode: 'cover',
   
  },
  cardContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    opacity: 0.7,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  header: {
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "yellow",
    marginTop:-30
  },
  input: {
    height: 40,
    
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 8,
    borderRadius: 5,
  },
  error: {
    fontSize: 12,
    color: 'red',
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
  },
  ifRegistred:{
    fontSize:14,
    // alignItems:"center",
    textAlign:"center",
    marginTop:10
  },
  iconBar:{
    marginTop : 15,
    flexDirection:"row",
    justifyContent:"center"
  },
  alsoRegister:
  {marginTop:10,
  fontSize:20,
  color:"white"}
});

const RegistrationForm = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [reEnterPassword, setReEnterPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleRegistration = () => {
    const errorObject = {};

    // If Any of the four fields empty
    if (!email || !username || !password || !reEnterPassword) {
      errorObject.emptyField = 'Please fill in all fields';
    }

    // Password and re-enter password match
    if (password !== reEnterPassword) {
      errorObject.passwordMatch = 'Passwords do not match';
    }

    // Email format Validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      errorObject.emailFormat = 'Invalid email format';
    }

    // Username must not start with numbers or special characters
    const usernameRegex = /^[a-zA-Z]/;
    if (!usernameRegex.test(username)) {
      errorObject.usernameFormat = 'Username must start with a letter';
    }

    // Password length
    if (password.length < 8) {
      errorObject.passwordLength = 'Password must be at least 8 characters';
    }

    // Password must contain at least one uppercase and one lowercase letter
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])/;
    if (!passwordRegex.test(password)) {
      errorObject.passwordStrength = 'Password must contain at least one uppercase and one lowercase letter';
    }

    //  Password must contain at least one number
    const passwordNumberRegex = /^(?=.*\d)/;
    if (!passwordNumberRegex.test(password)) {
      errorObject.passwordNumber = 'Password must contain at least one number';
    }

    setErrors(errorObject);

    if (Object.keys(errorObject).length === 0) {
      //Future navigation ....... to
      alert(`Welcome ${username}`)
    }
  };

   return (
    <View style={styles.container}>
      <ImageBackground source={require('./../assets/Registration.jpg')} style={styles.backgroundImage} >
      <View style={styles.cardContainer}>
      <Image source={require('./../assets/brandLogoNoBG.png')} style={styles.logo} />
          <Text style={styles.header}>𝑬𝒍𝒆𝒄𝒕𝒓𝒐𝒏 𝑴𝒂𝒓𝒕 𝒚𝒐𝒖𝒓 𝑬𝒍𝒆𝒄𝒕𝒓𝒐𝒏𝒊𝒄𝒔 𝑷𝒂𝒓𝒕𝒏𝒆𝒓</Text>

        <View style={styles.card}>
          
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          {errors.emailFormat && <Text style={styles.error}>{errors.emailFormat}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Username"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />
          {errors.usernameFormat && <Text style={styles.error}>{errors.usernameFormat}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
          {errors.passwordLength && <Text style={styles.error}>{errors.passwordLength}</Text>}
          {errors.passwordStrength && <Text style={styles.error}>{errors.passwordStrength}</Text>}
          {errors.passwordNumber && <Text style={styles.error}>{errors.passwordNumber}</Text>}

          <TextInput
            style={styles.input}
            placeholder="Re-enter Password"
            secureTextEntry={true}
            value={reEnterPassword}
            onChangeText={(text) => setReEnterPassword(text)}
          />
          {errors.passwordMatch && <Text style={styles.error}>{errors.passwordMatch}</Text>}

          {errors.emptyField && <Text style={styles.error}>{errors.emptyField}</Text>}
<View style = {{flexDirection:"row",justifyContent:"center"}}>
          <Button
  height={40}
  width={200}
  borderColor="blue"
  borderRadius={5}
  backgroundColor="green"
  value="Register"
  onPress={handleRegistration}
/>
</View >
<TouchableOpacity><Text style = {styles.ifRegistred}>Registered User ! LogIn here </Text></TouchableOpacity>

        </View>
        <Text style={styles.alsoRegister}> Also Register Using </Text>
        <View style = {styles.iconBar}>
        <Icon source={require('./../assets/google.png')} width={50} height={50} onPress={() => console.log('Icon 1 pressed')} />
      <Icon source={require('./../assets/microsoft.png')} width={50} height={50} onPress={() => console.log('Icon 2 pressed')} />
      <Icon source={require('./../assets/githubFinal.png')} width={50} height={50} onPress={() => console.log('Icon 3 pressed')} />
      </View>
      </View>
      </ImageBackground>
    </View>
  );
};


export default RegistrationForm