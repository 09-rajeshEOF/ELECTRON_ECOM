import React, { useContext } from 'react';
import { View, Text, FlatList,StyleSheet,ScrollView ,Image,TouchableOpacity} from 'react-native';
import { CartContext } from './Context/cartContext.js';
import ProductCard from './ProductCard.jsx';
import Button from './Button.jsx';
import {Swipeable} from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
const styles = StyleSheet.create({
  productCardContainer: {
    flexBasis: '49%',
    marginBottom: 10,
    marginRight: 10,
  },
})


const Cart = () => {
  const { cartState, cartDispatch, quantityState,quantityDispatch } = useContext(CartContext);
 const handleIncrement = (itemId) => {
  quantityDispatch({ type: 'INCREMENT_QUANTITY', payload: itemId });
};

const handleDecrement = (itemId) => {
  if (quantityState[itemId] > 1) {
    quantityDispatch({ type: 'DECREMENT_QUANTITY', payload: itemId });
  }
};

const handleRemoveFromCart = (itemId) => {
       cartDispatch({ type: 'REMOVE_FROM_CART', payload : itemId })
       quantityDispatch({type:'SET_QUANTITY', payload:{itemId : itemId,quantity:0}})
  }

const leftSwipe=(itemId)=>{
  return(
    <View style = {{backgroundColor:'red',justifyContent:'center',alignItems:'center',width:"60%",height:'100%'}}>
      <TouchableOpacity onPress={(itemId) => handleRemoveFromCart(itemId)}>
        <AntDesign name="delete" size={60} color="white" />
      </TouchableOpacity>
    </View>
  )
}

const rightSwipe=()=>{
  return(
    <View style = {{backgroundColor:'green',justifyContent:'center',alignItems:'center',width:"50%",height:'100%'}}>
      <TouchableOpacity>
        <MaterialIcons name="archive" size={60} color="white" />
      </TouchableOpacity>
    </View>
  )
}
  const renderProductCard = ({ item }) => {
    return (
      <View>
   <Swipeable renderLeftActions={leftSwipe} renderRightActions={rightSwipe}>
      <View style={styles.productCardContainer}>
        <ProductCard product={item}
         dispatch={cartDispatch} 
         showAddToCartButton={false} 
         quantity={quantityState[item.id]}
         onIncrement = {() => handleIncrement(item.id)} 
         onDecrement = {() => handleDecrement(item.id)}
         
         />
      </View>
    </Swipeable>
    </View>
    );
  };

//Total cart value 
//toFixed upto 2 decimal places 
const calculateBeforeDiscountTotal = () => {
  return cartState.items.reduce((acc, item) => acc + item.originalPrice * quantityState[item.id], 0).toFixed(2);
};

const calculateTotalCartValue = () => {
  let total = 0;
  cartState.items.forEach((item) => {
    const currentPrice = item.originalPrice - (item.originalPrice * item.discount) / 100;
    total += currentPrice * quantityState[item.id];
  });
  return total.toFixed(2);
};

const calculateTotalDiscount = () => {
  const totalOriginalPrice = cartState.items.reduce((acc, item) => acc + item.originalPrice * quantityState[item.id], 0);
  const totalDiscount = totalOriginalPrice - calculateTotalCartValue();
  return (totalDiscount / totalOriginalPrice) * 100;
};
  return (
  <ScrollView>
    {cartState.items.length === 0 ? (
      <View style={{flex:1, justifyContent:'space-between'}}>
      <View style = {{flexDirection:'row',justifyContent:'center'}}>
          <Text style = {{fontSize:24,fontWeight:50}}> Your Cart is Empty..</Text>
      </View>
      <Image source={require('./../assets/dawg.png')} style={{marginRight:150, marginLeft:-60}} />
        <View style = {{flexDirection:'row',justifyContent:'center'}}>
          <Text style = {{fontSize:24,fontWeight:50}}> Try Shopping with Us..</Text>
      </View>
      </View>
    
    ) : (
      <>
        <FlatList
          data={cartState.items}
          renderItem={renderProductCard}
          keyExtractor={(item) => item.id.toString()}
        />
        <View style = {{justifyContent:"space-between",height:300,width:"100%",elevation:120,borderRadius:20,backgroundColor:'#EDEADE',paddingTop:10,  shadowRadius: 2,
  shadowOffset: {
    width: 0,
    height: -3,
  },
  shadowColor: '#000000',
  elevation: 4,}}>
        <View style = {{flexDirection:'row',justifyContent:'center',paddingTop:10}}> 
             <Text style={{fontSize:30,fontWeight:'bold'}}> Cart Summary</Text>
        </View>

        <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  paddingVertical:5
                }}
              />

            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                  <Text>Before Discount: </Text>
                  <Text style={{ fontWeight: 'bold', fontSize: 18 ,paddingLeft:3}}>
                    ${calculateBeforeDiscountTotal()}
                  </Text>
           </View>
           <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <Text>Cart Discount: </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 18,paddingLeft:3 }}>
                  {calculateTotalDiscount().toFixed(2)}% off
                </Text>
          </View>
         <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <Text>Cart Total: </Text>
              <Text style={{ fontWeight: 'bold', fontSize: 18,paddingLeft:3 }}>
                ${calculateTotalCartValue()}
              </Text>
         </View>

        <View style = {{flex:1,padding:35,elevation:100}}><Button
            style={styles.button}
            height={50}
            width={300}
            borderColor="black"
            borderRadius={100}
            backgroundColor="orange"
            value="Checkout"
            icon = "shoppingcart"
            // onPress={}
          /></View>
          </View>
      </>
    )}
   
  </ScrollView>
);
};

export default Cart;