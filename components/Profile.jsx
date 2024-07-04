import React, { useState } from 'react';
import { useNavigation, navigate } from '@react-navigation/native';
import { MaterialCommunityIcons, MaterialIcons, FontAwesome6, AntDesign, Feather, Entypo } from '@expo/vector-icons';

import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Modal,
  Alert,
  ImageBackground
} from 'react-native';
import Button from './Button.jsx'

const profilePicture = require('./../assets/profile.png'); // Replace with your actual image path

const Profile = () => {
  const [name, setName] = useState('Rajesh');
  const [email, setEmail] = useState('rajesh@gmail.com');
  const [phone, setPhone] = useState('7897897894');
  const [showEditForm, setShowEditForm] = useState(false);
  const [showOTPModal, setShowOTPModal] = useState(false);
  const [otp, setOTP] = useState('');
  const [otpVerified, setOtpVerified] = useState(false)

  const navigation = useNavigation()
  const handleLogoutPress = () => {
    console.log('Log out pressed');
    navigation.reset({
      index: 0,
      routes: [{ name: 'LogIn' }],
    });
  };
  const handleEditPress = () => {
    setShowEditForm(true);
  };
  const handleSubmit = () => {

    console.log('Profile updated with:', { name, email, phone });
    setShowEditForm(false);
  };
  const handlePhonePress = () => {
    if (!otpVerified) {
      setShowOTPModal(true);
    }
  };
  const handleOTPSubmit = () => {
    if (otp === '999999') {
      console.log('OTP verified, phone number can be changed');
      setShowOTPModal(false);
      setOtpVerified(true);
      setPhone('');
      setOTP('');
    } else {
      Alert.alert('few trys left!');
    }
  };
  const handleProfilePicturePress = () => {
    Alert.alert('This Feature is yet to be implemented !')
  }

  return (
  
      <SafeAreaView style={styles.container}>

        <View style={styles.navContainer}>
          <View style={styles.LeftNav}>

          </View>
          <View style={styles.RightNav} />
        </View>
        <View style={styles.profileContainer}>
          <View style={styles.profilePictureContainer}>
            <Image source={profilePicture} style={styles.profilePicture} />
            <TouchableOpacity onPress={handleEditPress} style={styles.penIcon}>
              <Entypo name="pencil" size={20} color="black" />
            </TouchableOpacity>
          </View>
          <View style={{ height: 150, width: '102%', backgroundColor: 'white', borderRadius: 10, zIndex: 99, elevation: 5, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Hi {name}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{email}</Text>
              <Text style={{ fontSize: 14, fontWeight: 'bold' }}>  +91 {phone}</Text>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <View style={{ fontSize: 14, fontWeight: 'bold' }}><Entypo name="location-pin" size={24} color="black" /></View>
              <Text style={{ fontSize: 14, fontWeight: 'bold' }}> Bhubaneswar,IN</Text>
            </View>
          </View>

        </View>

        {/* Options */}
        <View style={styles.optionsContainer}>
          <View style={{ paddingTop: 10 }}></View>
          <View style={styles.option}>
            <MaterialCommunityIcons name="account-circle" size={24} color="black" />
            <Button
              height={70}
              width="80%"
              borderColor="#ddd"
              borderRadius={10}
              backgroundColor="#fff"
              value="Accounts"
              onPress={() => console.log('Option 1 pressed')}
            />
            <AntDesign name="right" size={24} color="black" />
          </View>

          <View style={styles.option}>
            <Entypo name="dropbox" size={24} color="black" />
            <Button
              height={70}
              width="80%"
              borderColor="#ddd"
              borderRadius={10}
              backgroundColor="#fff"
              value="Your Orders"
              onPress={() => console.log('Option 2 pressed')}
            />
            <AntDesign name="right" size={24} color="black" />
          </View>

          <View style={styles.option}>
            <FontAwesome6 name="gear" size={24} color="black" />
            <Button
              height={70}
              width="80%"
              borderColor="#ddd"
              borderRadius={10}
              backgroundColor="#fff"
              value="Settings"
              onPress={() => console.log('Option 3 pressed')}
            />
            <AntDesign name="right" size={24} color="black" />
          </View>


          <View style={styles.option}>
            <MaterialIcons name="feedback" size={24} color="black" />
            <Button
              height={70}
              width="80%"
              borderColor="#ddd"
              borderRadius={10}
              backgroundColor="#fff"
              value="Feedback"
              onPress={() => console.log('Option 4 pressed')}
            />
            <AntDesign name="right" size={24} color="black" />
          </View>
          <View style={{ padding: 20, justifyContent: "center", flexDirection: "row" }}>
            <Button
              height={45}
              width={45}
              borderColor="#ddd"
              borderRadius={22}
              backgroundColor="#BBF022"
              icon="logout"
              onPress={handleLogoutPress}
            />
          </View>
        </View>

        {/* ---Modal Part----*/}
        <Modal visible={showEditForm} transparent={true} animationType="fade">
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
            <View style={[styles.editFormContainer, { alignSelf: 'center', maxWidth: 300 }]}>

              <TextInput
                placeholder="Name"
                value={name}
                onChangeText={(text) => setName(text)}
                style={styles.inputField}
              />
              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.inputField}
              />
              <TextInput
                placeholder="Phone"
                value={phone}
                onChangeText={(text) => setPhone(text)}
                style={styles.inputField}
                onPressIn={handlePhonePress}
              />
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Button
                  height={40}
                  width={150}
                  borderColor="#ddd"
                  borderRadius={10}
                  backgroundColor="#BBF022"
                  value="Save Changes"
                  onPress={handleSubmit}
                />
              </View>
            </View>
          </View>
        </Modal>

        <Modal visible={showOTPModal} transparent={true} animationType="fade">
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' ,width:"80%",height:300}}>
            <View style={styles.editFormContainer}>
              <Text>OTP sent to your registered mobile number</Text>
              <TextInput
                placeholder="Enter OTP"
                value={otp}
                onChangeText={(text) => setOTP(text)}
                style={styles.inputField}
              />
              <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Button
                  height={40}
                  width={150}
                  borderColor="#ddd"
                  borderRadius={10}
                  backgroundColor="#BBF022"
                  value="Verify OTP"
                  onPress={handleOTPSubmit}
                />
              </View>
            </View>
          </View>
        </Modal>

      </SafeAreaView>
  
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  navContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
  },
  LeftNav: {
    flex: 1,
  },
  navText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  RightNav: {
    flex: 1,
    alignItems: 'flex-end',
  },
  backIcon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  profileContainer: {
    alignItems: 'center',
    padding: 10,
  },
  profilePictureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 30,
    marginRight: -15
  },
  penIcon: {
    width: 20,
    height: 20,
    marginTop: 50,
    marginLeft: 7,
    resizeMode: 'contain',
  },
  optionsContainer: {
    backgroundColor: '#F9F6EE',
    marginTop: -33,
    height: 500,
    width: '100%',
    bottom: -5,
    borderRadius:50,
    padding: 5,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    shadowColor: '#F9F6EE',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 1,
    alignItems: 'center',
    marginHorizontal: .5,
    justifyContent: 'center',
    width: '98%',
    backgroundColor: "#fff",
    borderColor: '#ddd',
    borderRadius: 10,
    marginTop: 4,
  },
  editFormContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  inputField: {
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  imageBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
});

export default Profile;