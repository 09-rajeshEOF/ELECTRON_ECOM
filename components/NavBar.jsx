<<<<<<< HEAD
import React from 'react';
import { View, Image, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import Icon from './Icon.jsx';

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
=======
import React ,{useState,useContext} from 'react';
import { View, Image, TouchableOpacity, SafeAreaView, TextInput ,StyleSheet,Text} from 'react-native';
import {CartContext} from './Context/cartContext.js'
import { useNavigation } from '@react-navigation/native';
import Icon from './Icon.jsx';
import Profile from './Profile.jsx'
import Cart from './Cart.jsx'

const styles = StyleSheet.create({
  container: {
    // marginTop: 35,
    height : 100,
    bottom:10,
>>>>>>> 2b12dd9 (add files)
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f0ffff', //NavBar color options official Rnat #fffacd , #ffa07a
    borderRadius:7.5,
<<<<<<< HEAD
    alignItems: 'center',
=======
    // alignItems: 'center',
>>>>>>> 2b12dd9 (add files)
    borderBottomWidth: 1,
    borderColor: '#ddd',
    elevation:20 //used for shadow effect 
  },
  imageStyle: {
<<<<<<< HEAD
=======
    marginTop:35,
>>>>>>> 2b12dd9 (add files)
    width: 88,
    height: 73,
    resizeMode: 'contain',
    marginRight: 12.5,
    marginLeft:-15.5,
  //   borderColor: '#ddd',
  //   elevation:30
  },
  searchBoxContainer: {
<<<<<<< HEAD
=======
    marginTop:50,
>>>>>>> 2b12dd9 (add files)
    flex: 2.5,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: -17.5, // Bringing it closer to logo
  },
  textInput: {
    flex: 2,
    height:40,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderRadius: 20,
    borderWidth: 1.5,
    fontSize:15,
    
  },

});

const SearchBox = () => {
  const handleIconPress = () => {
    console.log('Image clicked');
  };

  return (
    <View style={styles.searchBoxContainer}>
      <TextInput
        placeholder="Search here.."
        style={styles.textInput}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Icon
          source={require('./../assets/bluesearch.png')}
          width={30}
          height={35}
          onPress={() => console.log('Icon 1 clicked')}
        />  
      
    </View>
  );
};

<<<<<<< HEAD
const NavBar = () => {
=======
const NavBar = (props) => {
  
const {cartState} = useContext(CartContext);

  const handleProfilePress = ()=>{
    props.navigation.navigate('Profile')
  }

  const handleCartPress = () => {
    props.navigation.navigate('Cart')
  }
>>>>>>> 2b12dd9 (add files)
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={require('./../assets/brandLogoNoBG.png')} style={styles.imageStyle} />
        <SearchBox />
<<<<<<< HEAD
=======

        <View style = {{flexDirection:"row",marginTop:60}}>
>>>>>>> 2b12dd9 (add files)
          <Icon
          source={require('./../assets/profile.png')}
          width={30}
          height={30}
<<<<<<< HEAD
          onPress={() => console.log('Icon 1 clicked')}
        />
=======
          onPress={handleProfilePress}
        />

        <View>
>>>>>>> 2b12dd9 (add files)
        <Icon
          source={require('./../assets/bag.png')}
          width={40}
          height={30}
<<<<<<< HEAD
          onPress={() => console.log('Icon 2 clicked')}
        />
=======
          onPress={handleCartPress}
        />
          <View style={{ position: 'absolute', top: -10, right: 0}}>
        <Text style={{ fontSize: 12, fontWeight: 'bold', backgroundColor: 'red', borderRadius: 10, padding: 2, color: 'white' }}>
          {cartState.items.length}
        </Text>
      </View>
        </View>
        </View>
>>>>>>> 2b12dd9 (add files)
      </View>
    </SafeAreaView>
  );
};

export default NavBar;