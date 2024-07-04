import React,{useState,useContext} from 'react';
import { View, TouchableOpacity, Image,Text } from 'react-native';
import Icon from './Icon.jsx';
import GoBack from './IconsOnly/GoBack.jsx'
import {CartContext} from './Context/cartContext.js'

const styles = {
  navbar: {
    height: 75,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#f0ffff',
    elevation: 30,
  },
  leftArrow: {
    height: 30,
    width: 30,
    left: 10,
    top:20,
    paddingBottom:10,
    justifyContent:"center",
    
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  RightNav: {
    flexDirection: 'row',
    bottom: -40,
    right: 10,
    justifyContent: 'flex-end',
  },
};

const Navbar2 = ({ navigation ,onGridPress}) => {
  const [isGridPressed, setIsGridPressed] = useState(false);
  const [isFilterPressed, setFilterPressed] = useState(false);

const {cartState} = useContext(CartContext)

  const handleGridPressed = () => {
    setIsGridPressed((prev) => !prev);
    onGridPress(isGridPressed);
  };

  const handFilterPressed = () => {
    setFilterPressed((prev) => !prev);
  };

  return (
    <View style={styles.navbar}>
       <Text style = {styles.leftArrow}> <GoBack/> </Text>
      <View style={styles.RightNav}>
        <Icon
          source={require('./../assets/grid.png')}
          width={30}
          height={30}
          onPress={handleGridPressed}
          isPressed = {isGridPressed}
          style={{ opacity: isGridPressed ? 0.3 : 1 }}
        />
        <Icon
          source={require('./../assets/filter.png')}
          width={30}
          height={30}
          onPress={handFilterPressed}
          isPressed = {isFilterPressed}
          style={{ opacity: isFilterPressed ? 0.3 : 1 }}
        />
       <View>
        <Icon
          source={require('./../assets/bag.png')}
          width={40}
          height={30}
          onPress={() => navigation.navigate('Cart')}
        />
        <View style={{ position: 'absolute', top: -10, right: 0 }}>
          <Text style={{ fontSize: 12, fontWeight: 'bold', backgroundColor: 'red', borderRadius: 10, padding: 2, color: 'white' }}>
            {cartState.items.length}
          </Text>
      </View>
        </View>
      </View>
    </View>
  );
};

export default Navbar2;

// import React,{useState} from 'react';
// import { View, TouchableOpacity, Image,Text } from 'react-native';
// import Icon from './Icon.jsx';
// import GoBack from './IconsOnly/GoBack.jsx'

// const styles = {
//   navbar: {
//     height: 75,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     backgroundColor: '#f0ffff',
//     elevation: 30,
//   },
//   leftArrow: {
//     height: 30,
//     width: 30,
//     left: 10,
//     top:20,
//     paddingBottom:10,
//     justifyContent:"center",
    
//     alignItems: 'flex-start',
//     justifyContent: 'flex-start',
//   },
//   RightNav: {
//     flexDirection: 'row',
//     bottom: -40,
//     right: 10,
//     justifyContent: 'flex-end',
//   },
// };

// const Navbar2 = ({ navigation ,onGridPress,onFilterPress,setShowFilterModal}) => {
//   const [isGridPressed, setIsGridPressed] = useState(false);
//   const [isFilterPressed, setFilterPressed] = useState(false);

//   const handleGridPressed = () => {
//     setIsGridPressed((prev) => !prev);
//     onGridPress(isGridPressed);
//   };

//   const handFilterPressed = () => {
//     setFilterPressed((prev) => !prev);
//     setShowFilterModal(true);
    
//   };

//   return (
//     <View style={styles.navbar}>
//        <Text style = {styles.leftArrow}> <GoBack/> </Text>
//       <View style={styles.RightNav}>
//         <Icon
//           source={require('./../assets/grid.png')}
//           width={30}
//           height={30}
//           onPress={handleGridPressed}
//           isPressed = {isGridPressed}
//           style={{ opacity: isGridPressed ? 0.3 : 1 }}
//         />
//         <Icon
//           source={require('./../assets/filter.png')}
//           width={30}
//           height={30}
//           onPress={handFilterPressed}
//           isPressed = {isFilterPressed}
//           style={{ opacity: isFilterPressed ? 0.3 : 1 }}
//         />
//         <Icon
//           source={require('./../assets/bag.png')}
//           width={40}
//           height={30}
//           onPress={() => navigation.navigate('Cart')}
//         />
//       </View>
//     </View>
//   );
// };

// export default Navbar2;
