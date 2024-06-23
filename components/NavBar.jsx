import React from 'react';
import { View, Image, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import Icon from './Icon.jsx';

const styles = StyleSheet.create({
  container: {
    marginTop: 35,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f0ffff', //NavBar color options official Rnat #fffacd , #ffa07a
    borderRadius:7.5,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    elevation:20 //used for shadow effect 
  },
  imageStyle: {
    width: 88,
    height: 73,
    resizeMode: 'contain',
    marginRight: 12.5,
    marginLeft:-15.5,
  //   borderColor: '#ddd',
  //   elevation:30
  },
  searchBoxContainer: {
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

const NavBar = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Image source={require('./../assets/brandLogoNoBG.png')} style={styles.imageStyle} />
        <SearchBox />
          <Icon
          source={require('./../assets/profile.png')}
          width={30}
          height={30}
          onPress={() => console.log('Icon 1 clicked')}
        />
        <Icon
          source={require('./../assets/bag.png')}
          width={40}
          height={30}
          onPress={() => console.log('Icon 2 clicked')}
        />
      </View>
    </SafeAreaView>
  );
};

export default NavBar;