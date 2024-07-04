// import React from 'react'
// import {View,Text,FlatList,SafeAreaView,TouchableOpacity,Image} from 'react-native'

// const vlist1 = [
//   "https://cdn-icons-png.freepik.com/512/3616/3616642.png",
//   "https://thumbs.dreamstime.com/b/phone-icon-style-rounded-isolated-vectors-phone-icons-various-ui-design-styles-rounded-download-static-animated-phone-240250921.jpg",
//   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyNiK-7SNml6gANlWNLbavOUMqvsyXFmAceQ&s",
//   "https://images.thdstatic.com/productImages/6dc04dc5-16f3-499e-851b-04fc770f022c/svn/black-frigidaire-mini-fridges-efr756-black-64_600.jpg",
//   "https://5.imimg.com/data5/BP/PD/MY-9889294/kids-mobile-tablets-500x500.jpg"
// ]

// const vlist2 = [
//   "https://as2.ftcdn.net/v2/jpg/06/01/54/75/1000_F_601547550_m55RJHDR10bnppDHf6WSgIcmEuVSl4XF.jpg",
//   "https://www.insightssuccess.in/wp-content/uploads/2020/12/785054-ecommerce-istock-020119.jpg",
//   "https://previews.123rf.com/images/lculig/lculig1610/lculig161000154/63910674-ecommerce-word-cloud-concept.jpg",
//   "https://i.pinimg.com/originals/f2/00/eb/f200eb6203aba005f6bb8c46ac157274.gif"
// ]

// const vlist3 = [
//   "https://as2.ftcdn.net/v2/jpg/06/01/54/75/1000_F_601547550_m55RJHDR10bnppDHf6WSgIcmEuVSl4XF.jpg",
//   "https://www.insightssuccess.in/wp-content/uploads/2020/12/785054-ecommerce-istock-020119.jpg",
//   "https://previews.123rf.com/images/lculig/lculig1610/lculig161000154/63910674-ecommerce-word-cloud-concept.jpg",
//   "https://i.pinimg.com/originals/f2/00/eb/f200eb6203aba005f6bb8c46ac157274.gif"
  
// ]
// const HomeBody = () => {
//   return (
//     <View>
//       <FlatList
//         data={[1, 1, 1]}
//         renderItem={({ item, index }) => {
//           return (
//             <View style={{ width: "100%" }}>
//               {index == 0 && (
//                 <View>
//                   <Text
//                     style={{
//                       fontSize: 20,
//                       fontWeight: "600",
//                       marginLeft: 20,
//                       marginTop: 20,
//                       color: "black",
//                     }}
//                   >
//                     Top Searches
//                   </Text>

//                   <FlatList
//                     horizontal={true}
//                     contentContainerStyle={{ marginTop: 20 }}
//                     data={vlist1}
//                     showsHorizontalScrollIndicator={false}
//                     renderItem={({ item }) => {
//                       return (
//                         <View style={{
//                           width: 85, // 0.15 reduction in width
//                           height: 85, // 0.15 reduction in height
//                           borderRadius: 50,
//                           marginLeft: 20,
//                         }}>
//                           <Image
//                             source={{ uri: item }}
//                             style={{
//                               flex: 1,
//                               width: null,
//                               height: null,
//                               resizeMode: "contain",
//                             }}
//                           />
//                         </View>
//                       );
//                     }}
//                   />
//                 </View>
//               )}

//               {index == 1 && (
//                 <View>
//                   <Text
//                     style={{
//                       fontSize: 20,
//                       fontWeight: "600",
//                       marginLeft: 20,
//                       marginTop: 20,
//                       color: "black",
//                     }}
//                   >
//                     Trending Items
//                   </Text>

//                   <FlatList
//                     horizontal
//                     contentContainerStyle={{ marginTop: 20 }}
//                     data={vlist2}
//                     showsHorizontalScrollIndicator={false}
//                     renderItem={({ item }) => {
//                       return (
//                         <View style={{
//                           width: 297.5, // 0.15 reduction in width
//                           height: 170, // 0.15 reduction in height
//                           borderRadius: 12,
//                           marginLeft: 20,
//                         }}>
//                           <Image
//                             source={{ uri: item }}
//                             style={{
//                               flex: 1,
//                               width: null,
//                               height: null,
//                               resizeMode: "contain",
//                             }}
//                           />
//                         </View>
//                       );
//                     }}
//                   />
//                 </View>
//               )}

//               {index == 2 && (
//                 <View>
//                   <Text
//                     style={{
//                       fontSize: 20,
//                       fontWeight: "600",
//                       marginLeft: 20,
//                       marginTop: 20,
//                       color: "black",
//                     }}
//                   >
//                     Trending Items
//                   </Text>

//                   <FlatList
//                     contentContainerStyle={{ marginTop: 20 }}
//                     data={vlist3}
//                     showsHorizontalScrollIndicator={false}
//                     renderItem={({ item }) => {
//                       return (
//                         <TouchableOpacity style={{
//                           width: 297.5, // 0.15 reduction in width
//                           height: 170, // 0.15 reduction in height
//                           borderRadius: 15,
//                           marginLeft: 20,
//                         }}>
//                           <Image
//                             source={{ uri: item }}
//                             style={{
//                               flex: 1,
//                               width: null,
//                               height: null,
//                               resizeMode: "contain",
//                             }}
//                           />
//                         </TouchableOpacity>
//                       );
//                     }}
//                     ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
//                   />
//                 </View>
//               )}
//             </View>
//           );
//         }}
//         nestedScrollEnabled={true}
//       />
//     </View>
//   );
// };

// export default HomeBody;

import React from 'react'
import {View,Text,FlatList,SafeAreaView,TouchableOpacity} from 'react-native'


const HomeBody = () => {
   return (
    <View>
        <FlatList
            data={[1, 1, 1]}
            renderItem={({ item, index }) => { 
                 return(
                <View style={{ width: "100%" }}>
                    {index == 0 && <View>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: '600',
                            marginLeft: 20,
                            marginTop: 20,
                            color: 'black',
                        }}>Top Searches
                        </Text>
        
                        <FlatList
                            horizontal = {true}
                            contentContainerStyle={{ marginTop: 20 }}
                            data={[1, 1, 1, 1, 1, 1, 1, 1, 1]}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{
                                        width: 100, height: 100,
                                        borderRadius: 50,
                                        backgroundColor: "red",
                                        marginLeft: 20
                                    }}>
                                    </View>
                                )
                            }}
                        />
                    </View>}

                    {index==1 && <View>
                        <Text style = {{
                            fontSize: 20,
                            fontWeight: '600',
                            marginLeft: 20,
                            marginTop: 20,
                            color: 'black',
                        }}>
                            Trending Items
                        </Text>

                        <FlatList
                            horizontal
                            contentContainerStyle={{ marginTop: 20 }}
                            data={[1, 1, 1, 1, 1, 1]}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => {
                                return (
                                    <View style={{
                                        width: 350, height: 200,
                                        borderRadius: 12,
                                        backgroundColor: "grey",
                                        marginLeft: 20
                                    }}>
                                    </View>
                                )
                            }}
                        />
                        </View>}

                        {index==2 && <View>
                        <Text style = {{
                            fontSize: 20,
                            fontWeight: '600',
                            marginLeft: 20,
                            marginTop: 20,
                            color: 'black',
                        }}>
                            Trending Items
                        </Text>

                        <FlatList
                        
                            contentContainerStyle={{ marginTop: 20 }}
                            data={[1, 1, 1, 1, 1, 1]}
                            showsHorizontalScrollIndicator={false}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity style={{
                                        width: 350, height: 200,
                                        borderRadius: 15,
                                        backgroundColor: "grey",
                                        marginLeft: 20
                                    }}>
                                    </TouchableOpacity>
                                )
                            }}
                            ItemSeparatorComponent={() => <View style={{height: 20}} />}
                        />
                        </View>}
                        
                </View>
                )}} 
                nestedScrollEnabled = {true}
                />
    </View>
)
}

export default HomeBody;