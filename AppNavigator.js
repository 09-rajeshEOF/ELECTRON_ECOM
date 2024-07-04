// import "react-native-gesture-handler"
// import {NavigationContainer} from '@react-navigation/native';
// import { createDrawerNavigator } from "@react-navigation/drawer";
// import Profile from './components/Profile.jsx'
// import Notification from './DrawerMenu/Notifications.jsx';
// import Settings from './DrawerMenu/Settings.jsx';
// import Feedback from './DrawerMenu/Feedback.jsx';
// import HelpAndSupport from './DrawerMenu/HelpAndSupport.jsx'

// const Drawer = createDrawerNavigator();

// //notification comes from randomly picked texts from an array and shown in a flatlist / section list

// export default function AppDrawerNavigator(){
//     return(
//         <NavigationContainer>
//             <Drawer.Navigator>

//                 <Drawer.Screen name = "Dashboard" component={Profile}/>
//                 <Drawer.Screen name = "notifications" component={Notification}/>
//                 <Drawer.Screen name= "settings" component={Settings}/>
//                 <Drawer.Screen name= "Feedback"component={Feedback}/>
//                 <Drawer.Screen name= "Help and Support" component={HelpAndSupport}/>

//             </Drawer.Navigator>
//         </NavigationContainer>
//     )
// }

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { UserAuthContext } from './components/Context/userAuthContext.js';
import ShowProducts from './components/ShowProducts.jsx';
import Cart from './components/Cart.jsx';
import NavBar2 from './components/NavBar2.jsx';
import Footer from './components/Footer.jsx';
import ProductPage from './components/ProductPage.jsx';
import CollectionsPage from './components/CollectionsPage.jsx';
import Profile from './components/Profile.jsx';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const { isLoggedIn } = React.useContext(UserAuthContext);

  if (!isLoggedIn) {
    return null;
  }

  return (
    <Stack.Navigator>
      <Stack.Screen name="ShowProducts" component={ShowProducts} options={{ header: () => <NavBar2 /> }} />
      <Stack.Screen name="Cart" component={Cart} options={{ header: () => <NavBar2 /> }} />
      <Stack.Screen name="Footer" component={Footer} options={{ header: () => <NavBar2 /> }} />
      <Stack.Screen name="ProductPage" component={ProductPage} options={{ header: () => <NavBar2 /> }} />
       <Stack.Screen name="Profile" component={Profile} options={{ header: () => <NavBar2 /> }} />
      <Stack.Screen name="CollectionsPage" component={CollectionsPage} options={{ header: () => <NavBar2 /> }} />
    </Stack.Navigator>
  );
};

export default AppNavigator;