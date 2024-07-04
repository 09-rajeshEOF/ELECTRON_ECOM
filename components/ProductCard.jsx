import React,{useState,useReducer,useContext,useCallback} from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, Modal } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import {CartContext,CartProvider} from './Context/cartContext.js'
import Button from './Button.jsx';
import {useNavigation} from '@react-navigation/native';



const styles = StyleSheet.create({
    card: {
      width: '100%',
      marginBottom: 16,
      borderRadius: 10,
      overflow: 'hidden',
      padding: 12,
      paddingTop: 12,
      backgroundColor: '#fff',
      shadowColor: '#EDEADE',
      shadowOffset: { width: 0, height: -2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      zIndex:99,
      elevation: 50, // for Android
      
    },
    image: {
      height: 150,
      width: '100%',
      resizeMode: 'contain',
      borderRadius: 10,
    },
    content: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      flexWrap: 'wrap',
    },
    textContainer: {
      flex: 1,
      paddingHorizontal: 12,
    },
    brand: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 4,
    },
    description: {
      fontSize: 12,
      color: '#666',
      marginBottom: 8,
    },
    rating: {
      fontSize: 14,
      color: '#666',
      marginBottom: 8,
    },
    priceContainer: {
      flexDirection: 'row',
      
      justifyContent: 'space-between',
      
      alignItems: 'center',
    },
    currentPrice: {
      fontSize: 18,
      fontWeight: 'bold',
      color: '#333',
    },
    originalPrice: {
      fontSize: 14,
      color: '#666',
      textDecorationLine: 'line-through',
    },
    discount: {
      fontSize: 14,
      color: 'red',
    },
 modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    width: '70%',
    maxWidth: 400,
  },
  closeModalButton: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
    zIndex: 1,
  },
});

//Add to cart ---->
// const ProductCard = ({product,onPressAddToCart}) => {
//   const handleAddToCart = () => {
//     onPressAddToCart(product)
//   }
// }

//using useReducer  -->


const ProductCard = ({ product, onPress, dispatch,showAddToCartButton,onLongPress,isGrid }) => {
  if (!product) return null;
 const [quantity, setQuantity] = useState(1);
  const currentPrice = product.originalPrice - (product.originalPrice * product.discount / 100);

  const { cartState, cartDispatch } = useContext(CartContext);
  const {quantityState, quantityDispatch} = useContext(CartContext);
 
 const navigation = useNavigation();
 const handleProductPress = () => {
   navigation.navigate('ProductPage',{product:product});
 }

  const handleAddToCart = () => {
    cartDispatch({ type: 'ADD_TO_CART', payload: product });
    quantityDispatch({type:'SET_QUANTITY',payload:{itemId : product.id,quantity:1}})
  }
 
  const handleRemoveFromCart = () => {
       cartDispatch({ type: 'REMOVE_FROM_CART', payload : product.id })
       quantityDispatch({type:'SET_QUANTITY', payload:{itemId : product.id,quantity:0}})
  }

 const handleIncrement = useCallback(() => {
    setQuantity(Math.min(quantity + 1, 5)); // Limit quantity to 6
    quantityDispatch({ type: 'INCREMENT_QUANTITY', payload: product.id });
  }, [quantity]);

  const handleDecrement = useCallback(() => {
    setQuantity(Math.max(quantity - 1, 1));
    quantityDispatch({ type: 'DECREMENT_QUANTITY', payload: product.id });
  }, [quantity]);

  const [showModal, setShowModal] = useState(false);

  // const handleOnLongPress = () => {
  //   setShowModal(true);
  // };

  // const handleModalClose = () => {
  //   setShowModal(false);
  // };

var imageURI = product.image

  return (
    <TouchableOpacity onPress={handleProductPress} onLongPress={onLongPress}>
      <View style={styles.card}>
        <Image source={{uri:imageURI}} style={styles.image} />
        <View style={styles.content}>
          <View style={styles.textContainer}>
            <Text style={styles.brand}>{product.brandname}</Text>
            <Text style={styles.description} numberOfLines={1}>{product.description}</Text>
            <Text style={styles.rating}>{product.rating}⭐</Text>
          </View>
        </View>

      {showAddToCartButton ? (
          <Button
            height={40}
            width={150}
            borderColor="#ddd"
            borderRadius={10}
            backgroundColor="#F0F706"
            value="Add to cart"
            onPress={handleAddToCart}
          />
        ) : (
          <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
            <Button
              height={40}
              width={120}
              borderColor="#ddd"
              borderRadius={10}
              backgroundColor="#F0F706"
              onPress={handleRemoveFromCart}
              value="Remove"
            >
              <Text>Remove</Text>
            </Button>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <Button
                height={40}
                width={40}
                borderColor="black"
                borderRadius={10}
                backgroundColor="#9DF706"
                onPress={handleDecrement}
                value="-"
              >

              <Text>-</Text> 
  </Button>
              <Text style={{ fontSize: 24, fontWeight: 'bold', marginHorizontal: 10, color: 'black' }}>{quantity}</Text>
              <Button
                height={40}
                width={40}
                borderColor="black"
                borderRadius={10}
                backgroundColor="#06F776"
                onPress={handleIncrement}
                value= "+"
              >
              <Text>+</Text> 
          </Button> 
             </View>
          </View>
        )}
      </View>

    </TouchableOpacity>
  );
};

export default ProductCard;

// import React,{useState,useReducer,useContext,useCallback} from 'react';
// import { View, Text, TouchableOpacity, Image, StyleSheet, Modal } from 'react-native';
// import { Entypo } from '@expo/vector-icons';
// import {CartContext,CartProvider} from './Context/cartContext.js'
// import Button from './Button.jsx';
// import {useNavigation} from '@react-navigation/native';



// const styles = StyleSheet.create({
//     card: {
//       flexDirection: 'row',
//     flexWrap: 'wrap',
//       width: '100%',
//       marginBottom: 16,
//       borderRadius: 10,
//       overflow: 'hidden',
//       padding: 12,
//       paddingTop: 12,
//       backgroundColor: '#fff',
//       shadowColor: '#EDEADE',
//       shadowOffset: { width: 0, height: -2 },
//       shadowOpacity: 0.1,
//       shadowRadius: 4,
//       zIndex:99,
//       elevation: 50, // for Android
      
//     },
//     image: {
//       height: 'auto',
//       width: '100%',
//       resizeMode: 'contain',
//       borderRadius: 10,
//     },
//     content: {
//       flexDirection: 'row',
//       justifyContent: 'space-between',
//       alignItems: 'center',
//       flexWrap: 'wrap',
//     },
//     textContainer: {
//       flex: 1,
//       paddingHorizontal: 12,
//     },
//     brand: {
//       fontSize: 18,
//       fontWeight: 'bold',
//       marginBottom: 4,
//     },
//     description: {
//       fontSize: 12,
//       color: '#666',
//       marginBottom: 8,
//     },
//     rating: {
//       fontSize: 14,
//       color: '#666',
//       marginBottom: 8,
//     },
//     priceContainer: {
//       flexDirection: 'row',
      
//       justifyContent: 'space-between',
      
//       alignItems: 'center',
//     },
//     currentPrice: {
//       fontSize: 18,
//       fontWeight: 'bold',
//       color: '#333',
//     },
//     originalPrice: {
//       fontSize: 14,
//       color: '#666',
//       textDecorationLine: 'line-through',
//     },
//     discount: {
//       fontSize: 14,
//       color: 'red',
//     },
//  modalContainer: {
//     flex: 1,
//     backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   modal: {
//     backgroundColor: 'white',
//     padding: 20,
//     borderRadius: 10,
//     width: '70%',
//     maxWidth: 400,
//   },
//   closeModalButton: {
//     position: 'absolute',
//     top: 10,
//     right: 10,
//     padding: 10,
//     zIndex: 1,
//   },
// });

// //Add to cart ---->
// // const ProductCard = ({product,onPressAddToCart}) => {
// //   const handleAddToCart = () => {
// //     onPressAddToCart(product)
// //   }
// // }

// //using useReducer  -->


// const ProductCard = ({ product, onPress, dispatch,showAddToCartButton,onLongPress,isGrid }) => {
//   if (!product) return null;
//  const [quantity, setQuantity] = useState(1);
//   const currentPrice = product.originalPrice - (product.originalPrice * product.discount / 100);

//   const { cartState, cartDispatch } = useContext(CartContext);
//   const {quantityState, quantityDispatch} = useContext(CartContext);
 
//  const navigation = useNavigation();
//  const handleProductPress = () => {
//    navigation.navigate('ProductPage',{product:product});
//  }

//   const handleAddToCart = () => {
//     cartDispatch({ type: 'ADD_TO_CART', payload: product });
//     quantityDispatch({type:'SET_QUANTITY',payload:{itemId : product.id,quantity:1}})
//   }
 
//   const handleRemoveFromCart = () => {
//        cartDispatch({ type: 'REMOVE_FROM_CART', payload : product.id })
//        quantityDispatch({type:'SET_QUANTITY', payload:{itemId : product.id,quantity:0}})
//   }

//  const handleIncrement = useCallback(() => {
//     setQuantity(Math.min(quantity + 1, 5)); // Limit quantity to 6
//     quantityDispatch({ type: 'INCREMENT_QUANTITY', payload: product.id });
//   }, [quantity]);

//   const handleDecrement = useCallback(() => {
//     setQuantity(Math.max(quantity - 1, 1));
//     quantityDispatch({ type: 'DECREMENT_QUANTITY', payload: product.id });
//   }, [quantity]);

//   const [showModal, setShowModal] = useState(false);

//   // const handleOnLongPress = () => {
//   //   setShowModal(true);
//   // };

//   // const handleModalClose = () => {
//   //   setShowModal(false);
//   // };

// var imageURI = product.image

//   return (
//     <TouchableOpacity onPress={handleProductPress} onLongPress={onLongPress}>
//       <View style={styles.card}>
//         <Image source={{uri:imageURI}} style={styles.image} />
//         <View style={styles.content}>
//           <View style={styles.textContainer}>
//             <Text style={styles.brand}>{product.brandname}</Text>
//             <Text style={styles.description} numberOfLines={1}>{product.description}</Text>
//             <Text style={styles.rating}>{product.rating}⭐</Text>
//           </View>
//         </View>

//       {showAddToCartButton ? (
//           <Button
//             height={40}
//             width={150}
//             borderColor="#ddd"
//             borderRadius={10}
//             backgroundColor="#F0F706"
//             value="Add to cart"
//             onPress={handleAddToCart}
//           />
//         ) : (
//           <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
//             <Button
//               height={40}
//               width={120}
//               borderColor="#ddd"
//               borderRadius={10}
//               backgroundColor="#F0F706"
//               onPress={handleRemoveFromCart}
//               value="Remove"
//             >
//               <Text>Remove</Text>
//             </Button>
//             <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
//               <Button
//                 height={40}
//                 width={40}
//                 borderColor="black"
//                 borderRadius={10}
//                 backgroundColor="#9DF706"
//                 onPress={handleDecrement}
//                 value="-"
//               >

//               <Text>-</Text> 
//   </Button>
//               <Text style={{ fontSize: 24, fontWeight: 'bold', marginHorizontal: 10, color: 'black' }}>{quantity}</Text>
//               <Button
//                 height={40}
//                 width={40}
//                 borderColor="black"
//                 borderRadius={10}
//                 backgroundColor="#06F776"
//                 onPress={handleIncrement}
//                 value= "+"
//               >
//               <Text>+</Text> 
//           </Button> 
//              </View>
//           </View>
//         )}
//       </View>

//     </TouchableOpacity>
//   );
// };

// export default ProductCard;

//  <Modal visible={showModal} animationType="slide">
//           <View style={styles.modalContainer}>
//             <View style={styles.modal}>
//               <TouchableOpacity style={styles.closeModalButton} onPress={handleModalClose}>
//                 <Entypo name="cross" size={24} color="black" />
//               </TouchableOpacity>
//               <View >
//                 <Image source={{ uri: imageURI }} style={styles.image} />
//                 <View>
//                   <Text style={styles.brand}>{product.brandname}</Text>
//                   <Text style={styles.description}>{product.description}</Text>
//                   <Text style={styles.rating}>{product.rating}⭐</Text>
//                   <Text style={styles.price}>${product.price}</Text>
//                 </View>
//                 <Button 
//                   value="Buy Now" 
//                   height={40} width = {70}
//                   icon = "shoppingcart"
//                   backgroundColor="#06F776"
//                 />
//               </View>
//             </View>
//           </View>