// CollectionsPage.js
import React from 'react';
import { StyleSheet, Text, View, SafeAreaView,FlatList } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack' 
import {createStackNavigator} from '@react-navigation/stack'
import Profile from './Profile.jsx';
import Cart from './Cart.jsx'
import Feedback from './../DrawerMenu/Feedback.jsx';
import Settings from './../DrawerMenu/Settings.jsx';
import NavBar from './NavBar.jsx';
import Footer from './Footer.jsx';
import { DrawerItem } from '@react-navigation/drawer';
import {CartProvider} from './Context/cartContext';
import {UserAuthProvider,UserAuthContext} from  './Context/userAuthContext'
import ShowProducts from './ShowProducts.jsx';
import ProductPage from './ProductPage.jsx';
import HomeBody from './HomeBody.jsx';
import LogIn from './LogIn.jsx'
import GoBack from './IconsOnly/GoBack.jsx'
import GetStarted from './GetStarted.jsx'


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  footer: {
    position: 'absolute',
    bottom: 0, 
    left: 0,
    width: '100%',
    padding: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
});


const Drawer = createDrawerNavigator();

const CustomDrawerContent = () => {
  return (
    <View>
      <DrawerItem label="Dashboard" onPress={() => navigation.navigate('Dashboard')} />
      <DrawerItem label="Feedback" onPress={() => navigation.navigate('Feedback')} />
      <DrawerItem label="Settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
};
const HomeStack = createStackNavigator();


const HomeStackNavigator = () => {
  return (
     
    <HomeStack.Navigator>
     <HomeStack.Screen name="Getstarted" component={GetStarted} options={{headerShown:false}} />
    <HomeStack.Screen name="LogIn" component={LogIn} options={{headerShown:false}} />
      <HomeStack.Screen name="Home" component={HomeScreen} options={{headerShown:false}} />
      <HomeStack.Screen name="Profile" component={Profile} options = {{headerStyle:{backgroundColor:'#f0ffff'},headerLeft:() => {return (
        
        <View style = {{top:-40}}>
        <GoBack/>
        </View>)}}}/>
        
      <HomeStack.Screen name="Cart" component={Cart} options = {{headerStyle:{backgroundColor:'#f0ffff'},headerLeft:() => {return (
        
        <View style = {{top:-40}}>
        <GoBack/>
        </View>)}}}/>
      <HomeStack.Screen name="ShowProducts" component={ShowProducts}  options={{headerShown:false}} />
      
      <HomeStack.Screen name="ProductPage" component={ProductPage} 
        options={{ 
          headerShown: true, 
          headerStyle:{backgroundColor:'#f0ffff'},headerLeft:() => {return (
        
        <View style = {{top:-40}}>
        <GoBack/>
        </View>)}
          
        }} 
      />
      
    </HomeStack.Navigator>
     
  );
};

export function HomeScreen ({ navigation })  {
  return (
    <View style={{ flex: 1 }}>
      <NavBar navigation={navigation} />
      <HomeBody/>
      <View style={styles.footer}>
        <Footer navigation={navigation}/>
      </View>
    </View>
  );
};

export default function CollectionsPage() {
  return (
   
    <View style={styles.container}>
    <NavigationContainer>
        <Drawer.Navigator drawerContent={CustomDrawerContent}
          drawerType="front"
          initialRouteName="Home"
          drawerStyle={{ backgroundColor: '#fff',paddingTop:80}}
          overlayColor={'rgba(0, 0, 0, 0.5)'}
          swipeEdgeWidth={70}
          hideStatusBar={true}
          drawerContentOptions={{
            labelStyle: {
              fontWeight: 'bold',
              color: '#000',
            },
            activeTintColor: '#fff',
            inactiveTintColor: '#000',
            itemStyle: {
              marginVertical: 5,
              color: '#fff',
            },
          }}
        >
          <Drawer.Screen name="Home"
            component={HomeStackNavigator}
            options={{
              headerShown: false,
              drawerLabel: null,
            }}
          />

          <Drawer.Screen name="Dashboard" 
            component={Profile} 
            options={{
              drawerLabel: 'Dashboard',
              headerShown: false,
              swipeEnabled: false,
            }}
          />
          
          <Drawer.Screen name="Feedback" 
            component={Feedback}
            options={{
              headerShown: false,
              swipeEnabled: false,
            }}
          />
          <Drawer.Screen name="Settings" 
            component={Settings}
            options={{
              headerShown: false,
              swipeEnabled: false,
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </View>
  );
}


// const FooterStack = createStackNavigator();
// const FooterStackNavigator = () => {
//   return (
//     <FooterStack.Navigator>
//       <FooterStack.Screen name="Footer" component={({ navigation }) => <Footer navigation={navigation} />} options={{ headerShown: false }} />
      
//     </FooterStack.Navigator>
//   );
// };


// const LogInWrapper = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="LogIn" component={LogIn} options={{headerShown:false}} />
//     </Stack.Navigator>
//   );
// };
