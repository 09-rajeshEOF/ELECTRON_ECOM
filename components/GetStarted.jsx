import React, { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList, Dimensions, TouchableOpacity ,Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Button from './Button.jsx';
import Icon from './Icon.jsx'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const imageLink = [
  "https://i.postimg.cc/3R3Djx6F/2GS.jpg",
  "https://i.postimg.cc/HnxcKPTJ/4GS.jpg",
  "https://i.postimg.cc/B6NPmGf9/3GS.jpg",
  "https://i.postimg.cc/1XjnZczv/1GS.jpg"
]

const { height, width } = Dimensions.get('window');

export default function GetStarted() {
  const [data, setData] = useState(imageLink);
  const [currentIndex, setCurrentIndex] = useState(0);
const navigation = useNavigation()
  return (
    <SafeAreaView style={{ flex: 1,marginTop:50 }}>
    <View style = {{flexDirection:'row',justifyContent:'center'}}>
    <Text style = {{fontSize:40,fontWeight:'bold'}} >𝓖𝓮𝓽 𝓢𝓽𝓪𝓻𝓽𝓮𝓭</Text>
    </View>
     <View
                style={{
                  borderBottomColor: 'black',
                  borderBottomWidth: StyleSheet.hairlineWidth,
                  paddingVertical:5
                }}
              />

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ height: height / 2 + 100, justifyContent: 'center', alignItems: 'center' }}>
          <FlatList
            data={data}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            pagingEnabled
            onScroll={(event) => {
              const x = event.nativeEvent.contentOffset.x;
              setCurrentIndex(Math.round(x / width));
            }}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle = {{alignItems:'center'}}
            snapToAlignment="center"
            snapToInterval={width - 50}
            initialScrollIndex={0} // the first shown works with getItemLayout props
            getItemLayout={(data, index) => ({
              length: width - 50,
              offset: (width - 50) * index,
              index,
            })}
            renderItem={({ item, index }) => {
              return (
                <View
                  style={{
                    width: width - 50,
                    height: currentIndex == index ? height / 2 + 50 : height / 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                    elevation:15
                  }}
                >
                  <Image
                    source={{ uri: item }}
                    style={{ width: '90%', height: '90%', borderRadius: 15 ,elevation:15}}
                  />
                </View>
              );
            }}
          />


        </View>
        <View style={{ flexDirection: 'row', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
          {data.map((item, index) => {
            return (
              <View
                key={index}
                style={{
                  width: currentIndex == index ? 50 : 8,
                  height: currentIndex == index ? 10 : 8,
                  borderRadius: currentIndex == index ? 5 : 4,
                  backgroundColor: currentIndex == index ? 'green' : 'grey',
                  marginLeft: 5,
                }}
              ></View>
            );
          })}
        </View>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row', paddingLeft: 20, paddingRight: 20 }}>
        <View style = {{flexDirection:'row',justifyContent:'flex-end',paddingRight:'30',paddingTop:40}}>
          <TouchableOpacity style={{ width: 60, height: 60, borderRadius: 30, justifyContent: 'center',backgroundColor:'orange' }} onPress = {()=>{navigation.navigate('LogIn')}}>
          <View style = {{flexDirection:'row',justifyContent:'center'}}>
           <AntDesign name="right" size={24} color="black" />
           </View>
          </TouchableOpacity>
          
          </View>
        </View>
        <View style = {{flexDirection:'row',justifyContent:'center'}}>
        <Text>𝐆𝐫𝐞𝐚𝐭 𝐒𝐡𝐨𝐩𝐩𝐢𝐧𝐠 𝐆𝐫𝐞𝐚𝐭 𝐒𝐚𝐯𝐢𝐧𝐠</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}