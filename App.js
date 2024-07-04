<<<<<<< HEAD


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
=======
// import React from 'react';
// import { StyleSheet, View, SafeAreaView } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { CartProvider, CartContext } from './components/Context/cartContext.js';
// import ShowProducts from './components/ShowProducts.jsx';
// import Cart from './components/Cart.jsx';
// import NavBar2 from './components/NavBar2.jsx';
// import Footer from './components/Footer.jsx';
// import ProductPage from './components/ProductPage.jsx'

// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="ShowProducts"
//         component={(props) => <ShowProducts isGridPressed={true} {...props}  />}
//         options={{
//           headerShown: false,
//           header: () => <NavBar2 />,
//         }}
//       />
//       <Stack.Screen name="Cart" component={Cart}
//         options={{
//           headerShown: true,
//           header: () => <NavBar2 />,
//         }}
//       />
//       <Stack.Screen name="NavBar2" component={NavBar2}/>
//       <Stack.Screen name="Footer" component={Footer}
//         options={{
//           headerShown: true,
//           header: () => <NavBar2 />,
//         }}
//       />
//       <Stack.Screen name="ProductPage" component={ProductPage}
//         options={{
//           headerShown: true,
//           header: () => <NavBar2 />,
//         }}
//       />
//     </Stack.Navigator>
//   );
// };
// export default function App() {
//   return (
//     <NavigationContainer>
//       <CartProvider>
//         <AppNavigator />
//       </CartProvider>
//     </NavigationContainer>
//   );
// }

import React from 'react';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import CollectionsPage from './components/CollectionsPage.jsx';
import {UserAuthProvider} from './components/Context/userAuthContext.js'
import {CartProvider} from './components/Context/cartContext'

export default function App() {
  return (

   <UserAuthProvider>
   <CartProvider>
   
       <CollectionsPage/>

   </CartProvider>
       
  </UserAuthProvider>

  );

}

// import React from 'react';
// import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
// import LogIn from './components/LogIn.jsx';
// import RegisterationForm from './components/Registeration.jsx';
// import GetStarted from './components/GetStarted.jsx';
// import Checkout from './components/CheckOut.jsx'

// export default function App() {
//   return (
//     <View>
//       <Checkout />
//     </View>
//   );
// }

// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { UserAuthProvider } from './components/Context/userAuthContext.js';
// import LogIn from './components/LogIn.jsx';
// import RegisterationForm from './components/Registeration.jsx';
// import AppNavigator from './AppNavigator';

// const Stack = createStackNavigator();

// const App = () => {
//   return (
//     <UserAuthProvider>
//       <NavigationContainer>
//         <Stack.Navigator>
//           <Stack.Screen name="Login" component={LogIn} options={{headershown:false}} />
//           <Stack.Screen name="Register" component={Registeration} />
//           <Stack.Screen name="App" component={AppNavigator} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </UserAuthProvider>
//   );
// };

// export default App;
>>>>>>> 2b12dd9 (add files)
