

import React from 'react';
import { StyleSheet, View,SafeAreaView } from 'react-native';
import ProductCard from './components/ProductCard.jsx'; 
import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import Login from './components/LogIn.jsx';
import RegistrationForm from './components/Registration.jsx'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
  },
  footer: {
    flex:1,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    
    padding:10,
    backgroundColor: '#fff',
   
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
})

export default function App() {
  return (
    
    <SafeAreaView style={styles.container}>
      <NavBar/>
      
      <View style={styles.footer}>
        <Footer/>
      </View>
    </SafeAreaView>
  );
    
}
