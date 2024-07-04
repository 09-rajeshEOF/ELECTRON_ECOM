import React from 'react';
import { View,Text, Image, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
<<<<<<< HEAD

const Button = ({ height, width, borderColor, borderRadius, backgroundColor, value, onPress }) => {
=======
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Button = ({ height, width, borderColor, borderRadius, backgroundColor, value, onPress , source,disabled,icon}) => {
>>>>>>> 2b12dd9 (add files)
  return (
    <TouchableOpacity
      style={{
        height: height,
        width: width,
        borderColor: borderColor,
        borderRadius: borderRadius,
        backgroundColor: backgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
<<<<<<< HEAD
      }}
      onPress={onPress}
    >
      <Text>{value}</Text>
=======
        disabled:disabled,
      }}
      onPress={onPress}
    >
    <View style = {{flexDirection:'row',justifyContent:'space-between'}}>
      <Text style = {{fontSize:18,fontWeight:'bold'}}>{value}</Text>
      <View style = {{paddingLeft:8}}>
             <AntDesign name={icon} size={24} color="black" />
      </View>
      </View>
>>>>>>> 2b12dd9 (add files)
    </TouchableOpacity>
  );
};

export default Button;