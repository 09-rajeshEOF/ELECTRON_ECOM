import React,{useState,useCallback} from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Button from './Button.jsx'; 
import {CartContext} from './Context/cartContext';

//avoid creating handleIncrement /Decr everyt ime counter is called memorize the value instead 
const Counter = ({ quantity, onIncrement, onDecrement }) => {
  const [qty, setQty] = useState(quantity || 1);
 
 const handleIncrement = useCallback(() => {
    setQty(Math.min(qty + 1, 6));
  }, [qty]);

  const handleDecrement = useCallback(() => {
    setQty(Math.max(qty - 1, 0));
  }, [qty]);

  return (
    <View style={{ flexDirection: 'row', justifyContent:"space-between" }}>
      <Button
    height={40}
    width={40}
    borderColor="black"
    borderRadius={10} 
    backgroundColor="#9DF706"
    value="-"
    onPress={handleDecrement}
  />

      <Text style={{ fontSize: 24, fontWeight: 'bold', marginHorizontal: 10 ,color:"black"}}>{qty}</Text>

<Button
    height={40}
    width={40}
    borderColor="black"
    borderRadius={10}
    backgroundColor="#06F776"
    value="+"
    onPress={handleIncrement}
  /> 
    </View>
  );
};
export default Counter;
