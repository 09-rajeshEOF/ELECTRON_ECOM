import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
<<<<<<< HEAD
import Icon from './Icon.jsx'; 
=======
import { useNavigation } from '@react-navigation/native';
import Icon from './Icon.jsx'; 
import ShowProducts from './ShowProducts.jsx';
import Television from './Catagories/Pages/TeleVision.jsx'
>>>>>>> 2b12dd9 (add files)

const styles = StyleSheet.create({
  container: {
    bottom: 0,
    left: 0,
    right: 0,
    height : 50,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#FCEFEC',
    height: 65,
    borderRadius : 15,
<<<<<<< HEAD
=======
    // shadowOffset: { width: 0, height: 10 },
    // shadowColor: '#000',
>>>>>>> 2b12dd9 (add files)
    

  },
  iconContainer: {
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
});

<<<<<<< HEAD
const Footer = () => {
=======
const Footer = ({navigation}) => {

  const handleShopPress = () => {
    navigation.navigate('ShowProducts');
  }
>>>>>>> 2b12dd9 (add files)
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon
          source={require('./../assets/MobileLap.png')}
          width={30}
          height={30}
<<<<<<< HEAD
          onPress={() => console.warn('Footer Icon 1 Clicked')}
        /> 
        <Text style={styles.text}>    Mobiles</Text>
=======
          onPress={handleShopPress}
        /> 
        <Text style={styles.text}>     Mobiles</Text>
>>>>>>> 2b12dd9 (add files)
      </View>
      <View style={styles.iconContainer}>
        <Icon
          source={require('./../assets/headphone.png')}
          width={30}
          height={30}
<<<<<<< HEAD
          onPress={() => console.warn('Footer Icon 2 Clicked')}
        />
        <Text style={styles.text}>    Audio</Text>
=======
          onPress={handleShopPress}
        />
        <Text style={styles.text}>     Audio</Text>
>>>>>>> 2b12dd9 (add files)
      </View>
      <View style={styles.iconContainer}>
        <Icon
          source={require('./../assets/Tv.png')}
          width={30}
          height={30}
<<<<<<< HEAD
          onPress={() => console.warn('Footer Icon 3 Clicked')}
=======
          onPress={() => {navigation.navigate('Television')}}
>>>>>>> 2b12dd9 (add files)
        />
        <Text style={styles.text}>     TV</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon
          source={require('./../assets/cameraCircled.png')}
          width={30}
          height={30}
<<<<<<< HEAD
          onPress={() => console.warn('Footer Icon 4 Clicked')}
=======
          onPress={(handleShopPress)}
>>>>>>> 2b12dd9 (add files)
        />
        <Text style={styles.text}>     Cameras</Text>
      </View>
    </View>
  );
};

export default Footer;