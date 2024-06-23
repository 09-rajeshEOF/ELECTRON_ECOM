import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Icon from './Icon.jsx'; 

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
    

  },
  iconContainer: {
    alignItems: 'center',
  },
  text: {
    color: 'black',
  },
});

const Footer = () => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Icon
          source={require('./../assets/MobileLap.png')}
          width={30}
          height={30}
          onPress={() => console.warn('Footer Icon 1 Clicked')}
        /> 
        <Text style={styles.text}>    Mobiles</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon
          source={require('./../assets/headphone.png')}
          width={30}
          height={30}
          onPress={() => console.warn('Footer Icon 2 Clicked')}
        />
        <Text style={styles.text}>    Audio</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon
          source={require('./../assets/Tv.png')}
          width={30}
          height={30}
          onPress={() => console.warn('Footer Icon 3 Clicked')}
        />
        <Text style={styles.text}>     TV</Text>
      </View>
      <View style={styles.iconContainer}>
        <Icon
          source={require('./../assets/cameraCircled.png')}
          width={30}
          height={30}
          onPress={() => console.warn('Footer Icon 4 Clicked')}
        />
        <Text style={styles.text}>     Cameras</Text>
      </View>
    </View>
  );
};

export default Footer;