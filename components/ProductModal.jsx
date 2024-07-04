import React,{useState,useReducer,useContext,useCallback} from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Modal } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import {CartContext,CartProvider} from './Context/cartContext.js'
import Button from './Button.jsx';
import {useNavigation} from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const styles = StyleSheet.create({
   modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
    borderColor:'black'
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 30,
    width: '60%', 
    height: 350, 
    maxWidth: 310,
    alignSelf: 'center', // Center the modal
  },
  image: {
    height: 150, // Adjust as needed
    width: '100%', // Adjust as needed
    resizeMode: 'contain',
  },
  closeModalButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    zIndex: 1,
  },
})

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;
  

  return (
    <View style={styles.modalContainer}>
      <View style={styles.modal}>
        <TouchableOpacity style={styles.closeModalButton} onPress={onClose}>
          <Entypo name="cross" size={24} color="black" />
        </TouchableOpacity>
        <Image source={{ uri: product.image }} style={styles.image} />
        <View>
          <Text style={{fontSize:18,fontWeight:'bold',justifyContent:'center',alignItems:'center'}}>{product.brandname}</Text>
          <Text style={{fontSize:15,justifyContent:'center',alignItems:'center',paddingTop:4}} numberOfLines={1}>{product.description}</Text>
          <View style = {{flexDirection:'row',justifyContent:'space-between',paddingTop:5}}>
          <Text style = {{fontSize:15,justifyContent:'center',alignItems:'center',textDecorationLine:'line-through'}}>₹{product.originalPrice}</Text>
          <Text style = {{fontSize:15,justifyContent:'center',alignItems:'center'}}>₹{product.originalPrice-(product.discount*product.originalPrice)/100}</Text>

          <Text style={{fontSize:15,justifyContent:'center',alignItems:'center',color:'red',paddingTop:4}}>{product.discount}% off</Text>
          </View>
          <View style = {{flexDirection:'center',justifyContent:'center' ,alignItems:'center'}}>
          <Text> 𝑬𝒍𝒆𝒄𝒕𝒓𝒐𝒏 𝑨𝒔𝒔𝒖𝒓𝒆𝒅 </Text>
            <MaterialCommunityIcons name="lightning-bolt-outline" size={24} color="black" />
          </View>
          
        </View>
        <View style = {{flexDirection:'row',justifyContent:'center',bottom:4}}>
        <Button 
                  value="Buy Now" 
                  height={40} width = {140}
                  icon = "shoppingcart"
                  borderRadius={15}
                  backgroundColor="#06F776"
                  onPress = {console.log('Navigate to checkOut')}
                />
                </View>
      </View>
    </View>
  );
};

export default ProductModal;