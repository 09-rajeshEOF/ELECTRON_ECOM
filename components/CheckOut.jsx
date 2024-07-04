import React, { useState, useContext } from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  FlatList,
  TextInput
} from 'react-native';
import Button from './Button.jsx';
import { Fontisto } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CustomInputField from './CustomInputField.jsx';

const upiImages =  [

  "https://i.postimg.cc/23RTLtvb/googlepay.png",
  "https://i.postimg.cc/zBQx8vGk/phonepay.png",
  "https://i.postimg.cc/XqyQJWZ6/paytm.png",
  "https://i.postimg.cc/76hKF0w6/upi.png" 
]

const CheckoutScreen = () => {
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('card'); 
  
 const [data,setData] = useState(upiImages)

  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');
  const [paypalEmail, setPaypalEmail] = useState('');
  const [paypalPassword, setPaypalPassword] = useState('');
  const [upiId, setUpiId] = useState('');
  const [upiPassword, setUpiPassword] = useState('');

  return (
    <SafeAreaView style={styles.container}>
    <View style = {{marginTop:20}}>
    <View style = {{paddingTop:20}}>
      
    </View>
      <View style={styles.paymentMethods}>
      
        <Text style={styles.heading}>Checkout</Text>
      <Text style={styles.subtotal}>Subtotal: $100</Text>
        <Text style={styles.paymentMethodsHeading}>Payment Methods</Text>

   <View style = {{flex:1,flexDirection:'row',justifyContent:'center'}}>
<View style = {{width:"100%",height:"180%",flexDirection:'',}}>
        <View style={styles.paymentMethod}>
          <TouchableOpacity
            style={[styles.paymentMethodButton, selectedPaymentMethod === 'card' && styles.selectedButton]}
            onPress={() => setSelectedPaymentMethod('card')}
          >
            <Fontisto name="credit-card" size={24} color="white" />
            <Text style={styles.paymentMethodButtonText}>Card</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.paymentMethod}>
          <TouchableOpacity
            style={[styles.paymentMethodButton, selectedPaymentMethod === 'paypal' && styles.selectedButton]}
            onPress={() => setSelectedPaymentMethod('paypal')}
          >
            <Image source={require('./../assets/paypal.png')} style={styles.paymentMethodIcon} />
            <Text style={styles.paymentMethodButtonText}>PayPal</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.paymentMethod}>
          <TouchableOpacity
            style={[styles.paymentMethodButton, selectedPaymentMethod === 'upi' && styles.selectedButton]}
            onPress={() => setSelectedPaymentMethod('upi')}
          >
             <Image source={require('./../assets/upi.png')} style={styles.paymentMethodIcon} />
            <Text style={styles.paymentMethodButtonText}>UPI</Text>
          </TouchableOpacity>
        </View>
       
      </View>
</View>
      </View>

      {selectedPaymentMethod === 'card' && (
        <View style={styles.cardSection}>
        <View style = {{height:50,paddingTop:20,marginTop:175}}>
          <CustomInputField
            label="Card Number"
            value={cardNumber}
            onChange={(text) => setCardNumber(text)}
            placeholder="Enter your card number"
            iconName="credit-card"
            width="300%"
            height={40}
            borderRadius={10}
          />
          </View>
          <View style = {{height:50,marginTop:60,}}>
          <CustomInputField
            label="Expiry Date"
            value={expiryDate}
            onChange={(text) => setExpiryDate(text)}
            placeholder="Enter your expiry date"
            iconName="calendar"
            width="300%"
            height={80}
            borderRadius={10}
          />
            </View>
          <View style = {{height:50,paddingTop:40}}>
          <CustomInputField
            label="CVV"
            value={cvv}
            onChange={(text) => setCvv(text)}
            placeholder="Enter your cvv"
            iconName="lock"
            width="300%"
            height={0}
            borderRadius={10}
          />
            </View>
        </View>
      )}
     {selectedPaymentMethod === 'upi' && (
  <View style={styles.upiSection}>
    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center',top:275 }}>
      <TextInput style={{ width: 200, height: 40, borderColor: 'gray', borderWidth: 1 }} />
    </View>
    <View style = {{flexDirection:'row',justifyContent:'center'}}>
    <FlatList
        data = {data}
         horizontal = {true}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item,index }) => (
        <Image source={{ uri: item }} style={{ width: 200, height: 200, marginRight: 10 }} />
      )}
      
      
    />
    </View>
  </View>
)}
      </View>
      <View style = {{ bottom:-750,flexDirection:'row',justifyContent:'center',}}>
      <Button
        backgroundColor = "yellow"
        height = {50}
        width= {275}
        value = "Place Order"
        icon = "checkcircle"
        borderRadius = {20}
        
      />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    
    backgroundColor: '#f5f5f5',
    top:'100'
  },
  heading: {
    fontSize: 24,
    paddingTop:10,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  subtotal: {
    fontSize: 18,
    marginBottom: 10,
  },
  paymentMethods: {
    marginBottom: 20,
    height:200,
    width:"90%",
    padding:10
  },
  paymentMethodsHeading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paymentMethod: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  paymentMethodButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#333', // Example payment method button color
    width: '100%',
    height:100
  },
  paymentMethodButtonText: {
    color: 'white',
    marginLeft: 10,
  },
  paymentMethodIcon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  selectedButton: {
    backgroundColor: '#007bff', 
  },
  cardSection: {
    justifyContent:'space-between',
    width:"90%",
    paddingTop:60,
    height:350,
    marginBottom: 20,
  },
  upiSection:{
    flexDirection:'column',
    justifyContent:'center'
  }
});

export default CheckoutScreen;