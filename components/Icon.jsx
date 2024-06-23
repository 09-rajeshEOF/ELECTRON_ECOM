import React from 'react';
import { View, Image, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';

const Icon = ({ source, width, height, onPress }) => {
  return (
    <TouchableOpacity style={{ marginLeft:20  }} onPress={onPress}>
      <Image source={source} style={{ width, height }} />
    </TouchableOpacity>
  );
};
export default Icon;