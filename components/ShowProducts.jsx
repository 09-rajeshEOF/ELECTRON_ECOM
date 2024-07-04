import React, { useState, useEffect,useContext } from 'react';
import { View, FlatList, TouchableOpacity, Image, SafeAreaView, StyleSheet,Modal } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductCard from '../components/ProductCard.jsx';
import ProductModal from './ProductModal.jsx'
import data from './data2.js';
import {CartContext,CartProvider} from './Context/cartContext';
import NavBar2 from './NavBar2.jsx'
// import Cart from './Cart.jsx';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    elevation:50
  },
  navbar: {
    height:75,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f0ffff',
    elevation: 30,
  },
  leftArrow: {
    height: 30,
    width: 30,
    left: 10,
    bottom: -40, // Why going -ve 
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  RightNav: {
    flexDirection: 'row',
    bottom: -40, 
    right: 10,
    justifyContent: 'flex-end',
  },
  gridContainer: {
    flex: 1,
    flexDirection: 'column',
    padding: 10,
  },
  gridView: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
  },
  productCardContainer: {
    flexBasis: '49%',
    marginBottom: 10,
    marginRight: 10,
  },
  listView: {
    flex: 1,
    padding: 10,
  },
});

export default function ShowProducts({route,navigation,isGridPressed}
) {
  // const [isPressed, setIsPressed] = useState(false);
  route.params;
  const [layout, setLayout] = useState(isGridPressed ? 'grid' : 'list');

const numColumns = layout === 'grid' ? 1 : 2;
  const [products, setProducts] = useState([]);
const isGrid = {isGridPressed}
  const {cartState,cartDispatch} = useContext(CartContext)

  useEffect(() => {
    setProducts(data);
  }, []);

  // const handleGridPress = () => {
  //   setIsPressed((prev) => !prev);
  //   setNumColumns(isPressed ? 1 : 2);
  //   setKey(isPressed ? 'grid' : 'list');

  // };

    const [selectedProduct, setSelectedProduct] = useState(null);

  const handleLongPress = (product) => {
    setSelectedProduct(product);
  };

  const renderProductCard = ({ item }) => {
    return (
      <View style={styles.productCardContainer}>
        <ProductCard
              product={item}
              dispatch={cartDispatch}
              showAddToCartButton={true}
              onLongPress={() => handleLongPress(item)}
              isGrid = {isGrid}
            />
      </View>
    );
  };

  return (
    
    <SafeAreaView style={styles.container}>
       <NavBar2 onGridPress={(isGridPressed) => setLayout(isGridPressed ? 'list' : 'grid')} navigation={navigation}/>
      <FlatList
        data={products}
        renderItem={renderProductCard}
        keyExtractor={(item) => item.id.toString()}
        numColumns={numColumns}  
        key = {layout}
        contentContainerStyle={{ paddingBottom: 5 }}
      />
       {selectedProduct && (
    <Modal
      animationType="slide"
      transparent={true}
      visible={!!selectedProduct}
      onRequestClose={() => setSelectedProduct(null)}
    >
      <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </Modal>
  )}
    
    </SafeAreaView>
    
  );
}

// import React, { useState, useEffect,useContext } from 'react';
// import { View, FlatList, TouchableOpacity, Image, SafeAreaView, StyleSheet,Modal,Text,Dimensions } from 'react-native';


// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import ProductCard from '../components/ProductCard.jsx';
// import ProductModal from './ProductModal.jsx'
// import data from './data2.js';
// import {CartContext,CartProvider} from './Context/cartContext';
// import NavBar2 from './NavBar2.jsx'
// // import Cart from './Cart.jsx';


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     elevation:50
//   },
//   navbar: {
//     height:75,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: '#f0ffff',
//     elevation: 30,
//   },
//   leftArrow: {
//     height: 30,
//     width: 30,
//     left: 10,
//     bottom: -40, // Why going -ve 
//     alignItems: 'flex-start',
//     justifyContent: 'flex-start',
//   },
//   RightNav: {
//     flexDirection: 'row',
//     bottom: -40, 
//     right: 10,
//     justifyContent: 'flex-end',
//   },
//   gridContainer: {
//     flex: 1,
//     flexDirection: 'column',
//     padding: 10,
//   },
//   gridView: {
//     flex: 1,
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     padding: 10,
//   },
//   productCardContainer: {
//     flexBasis: '49%',
//     marginBottom: 10,
//     marginRight: 10,
//   },
//   listView: {
//     flex: 1,
//     padding: 10,
//   },
// });

// export default function ShowProducts({route,navigation,isGridPressed}
// ) {
//   // const [isPressed, setIsPressed] = useState(false);
//   route.params;
//   const [layout, setLayout] = useState(isGridPressed ? 'grid' : 'list');

// const numColumns = layout === 'grid' ? 1 : 2;
//   const [products, setProducts] = useState([]);
//   const [prevProducts, setPrevProducts] = useState([]);
// const isGrid = {isGridPressed}
//   const {cartState,cartDispatch} = useContext(CartContext)

//   useEffect(() => {
//     setProducts(data);
//   }, [data]);

//   useEffect(() => {
//     if (JSON.stringify(prevProducts) !== JSON.stringify(products)) {
//       setPrevProducts(products);
//     }
//   }, [prevProducts, products]);

//   // const handleGridPress = () => {
//   //   setIsPressed((prev) => !prev);
//   //   setNumColumns(isPressed ? 1 : 2);
//   //   setKey(isPressed ? 'grid' : 'list');

//   // };

//   //modals ->
//   const [showFilterModal,setShowFilterModal] = useState(false)
//   const handleFilterPress = () => {
//     setShowFilterModal(true);
//   }
//   const handleFilterSelect = (filterOption) => {
//   setShowFilterModal(false);
//   let sortedProducts = [...products]; // Create a copy of the products array

//   switch (filterOption) {
//     case 'relevance':
//       sortedProducts = [...products]; // No need to sort, just return the original array
//       break;
//     case 'priceLow':
//       sortedProducts.sort((a, b) => a.price - b.price); // Sort in-place
//       break;
//     case 'priceHigh':
//       sortedProducts.sort((a, b) => b.price - a.price); // Sort in-place
//       break;
//     default:
//       sortedProducts = [...products]; // default sorting Relevance, no need to sort
//   }

//   setProducts(sortedProducts);
// };

//     const [selectedProduct, setSelectedProduct] = useState(null);

//   const handleLongPress = (product) => {
//     setSelectedProduct(product);
//   };

//   const renderProductCard = ({ item }) => {
//     return (
//       <View style={styles.productCardContainer}>
//         <ProductCard
//               product={item}
//               dispatch={cartDispatch}
//               showAddToCartButton={true}
//               onLongPress={() => handleLongPress(item)}
//               isGrid = {isGrid}
//             />
//       </View>
//     );
//   };

//   return (
    
//     <SafeAreaView style={styles.container}>
//        <NavBar2 onGridPress={(isGridPressed) => setLayout(isGridPressed ? 'list' : 'grid')} navigation={navigation} onFilterPress={handleFilterPress}
//        setShowFilterModal = {setShowFilterModal}/>
//       <FlatList
//         data={products}
//         renderItem={renderProductCard}
//         keyExtractor={(item) => item.id.toString()}
//         numColumns={numColumns}  
//         key = {layout}
//         contentContainerStyle={{ paddingBottom: 5 }}
//       />
//        {selectedProduct && (
//     <Modal
//       animationType="slide"
//       transparent={true}
//       visible={!!selectedProduct}
//       onRequestClose={() => setSelectedProduct(null)}
//     >
//       <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
//     </Modal>
//   )}
 
//   {showFilterModal && <FilterModal visible={showFilterModal} onClose={() => setShowFilterModal(false)} onSelectFilter={handleFilterSelect}/>}
    
//     </SafeAreaView>
    
//   );
// }

// export function FilterModal({onClose, onSelectFilter, visible}){
//   return (
//   <Modal animationType="slide" transparent={true} visible={visible}>
//     <View>
//         <TouchableOpacity onPress = {() => onSelectFilter('relevance')}>
//           <Text>Relevance</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress = {() => onSelectFilter('priceLow')}>
//           <Text>Low to High</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress  ={() => onSelectFilter('priceHigh')}>
//           <Text>High to Low</Text>
//         </TouchableOpacity>

//         <TouchableOpacity onPress={onClose}>
//               <Text>Close</Text>
//         </TouchableOpacity>

//     </View>
//   </Modal>)
// }