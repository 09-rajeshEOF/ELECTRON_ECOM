import React from 'react';
<<<<<<< HEAD
import { View, Image, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';

const Icon = ({ source, width, height, onPress }) => {
  return (
    <TouchableOpacity style={{ marginLeft:20  }} onPress={onPress}>
      <Image source={source} style={{ width, height }} />
=======
import {  Image, TouchableOpacity, } from 'react-native';
import { StyleSheet } from 'react-native';

const Icon = ({ source, width, height, onPress,isPressed }) => {
  const opacity = isPressed ? 0.4 : 1;
  
  return (
    <TouchableOpacity style={{ marginLeft:20, 
      }} onPress={onPress}>
      <Image source={source} style={{ width, height, opacity }} />
>>>>>>> 2b12dd9 (add files)
    </TouchableOpacity>
  );
};
export default Icon;