import React,{useState,useContext} from 'react';
import { View, Text, Image, ScrollView, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Button from './Button.jsx'
import {CartContext} from './Context/cartContext.js'
 

const styles = StyleSheet.create({
  container: {
    flex:1
  },
  images: {
    padding:10,
    height:200,
    width:"110%",
    flex:1
  },
  feedbackRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor:'#FCEFEC',
    borderRadius:40,
    height:50,
    fontSize:20,
    elevation:20,
    
  },
  feedbackText: {
    marginRight: 10,
    justifyContent:"center"
  },
  variantButton: {
    paddingHorizontal: 10,
    marginTop:25,
    paddingVertical: 5,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius:5,
    height:35,
    elevation:20
  },
  feedbackCard: {
    padding : 15,
    // backgroundColor:'white',
    
    // backgroundColor:'#FCEFEC',
    // borderRadius:40,
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation:50
  }
});

const ProductPage = ({ route }) => {
  const { product } = route.params;
  const currentPrice = product.originalPrice-(product.discount*product.originalPrice)/100;
  var imageURI = product.image
   const { cartState, cartDispatch } = useContext(CartContext);

  const handleAddToCart = () => {
  cartDispatch({ type: 'ADD_TO_CART', payload: product });
  console.log('Adding to cart....')
};

  return (
    <ScrollView style={styles.container}>
      <View style={{height:600,width:"90%",padding:10}}>
      <Image source={{uri:imageURI}} style = {styles.images} resizeMode='cover' />
      </View>
      <Text style={{fontSize:27,marginLeft:12.5,}}>{product.brandname}</Text>
      <Text style={{marginTop:5,marginLeft:13,fontSize:20}}>{product.description}</Text>
      <View style = {{padding:12}}>
      <Text style = {{fontSize:15}}>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
      </View>
      <Text style={{fontSize:25,marginLeft:9,marginTop:12.5}}> {product.rating}⭐</Text>
      <Text style={{fontSize:15,marginTop:12.5,marginLeft:10,color:"green"}}>Price: ${currentPrice}     <Text style={{textDecorationLine:"line-through",marginLeft:10}}>${product.originalPrice}</Text>    <Text style={{color:"red"}}>{product.discount}% off</Text></Text>
      

     <View >
      <FlatList
        horizontal
        data={product.variants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.variantButton}>
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
        showsScrollIndicator = {false}
      />
      <View style = {{paddingTop:10,borderColor:'grey'}}>
<View style  = {{flexDirection:'row', padding:20,justifyContent:'space-between',elevation:80,}}>
  <View style = {{shadowColor: '#171717',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    elevation:50}}>
      <Button
            height = {50}
            width = {275}
            icon = "shoppingcart"
            value = "Add To Cart"
            backgroundColor = "yellow"
            onPress = {handleAddToCart}
            borderRadius={25}
      />
   </View>
      <TouchableOpacity style = {{}}>
        <MaterialIcons name="local-offer" size={40} color="black" />
      </TouchableOpacity>
  </View>
  </View>
       <View style = {styles.feedbackCard}>
      {product.feedbacks.map((feedback, index) => (
        <TouchableOpacity key={index} style={styles.feedbackRow}>
          <Text style={styles.feedbackText} numberOfLines={1}><Text style ={{fontSize:30}}>👨🏻</Text>    {feedback.text}</Text>
          <Text style={{}}>  {feedback.rating}⭐</Text>
        </TouchableOpacity>
      ))}
      </View>
      
      </View>
    </ScrollView>
  
  );
};

export default ProductPage;