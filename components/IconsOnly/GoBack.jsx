import React from 'react';
import { Image, TouchableOpacity,StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function GoBack ({ source, width, height, onPress, isPressed }){
  const navigation = useNavigation();
  const handlePress = () => {
    navigation.goBack();
  };
 
  return (
    <TouchableOpacity style={{
        height: 30,
        width: 30,
        left: 10,
        bottom: -40,
        
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
      }} onPress={handlePress}>
      <Image source={require('./../../assets/LeftArrowBlue.gif')} style={{ width:30, height:30 }} />
    </TouchableOpacity>
  );
};