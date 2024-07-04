import { createContext, useReducer,useContext } from 'react';
import quantityReducer from './quantityReducer.js'

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, items: [...state.items, action.payload] };
    case 'REMOVE_FROM_CART':
      return { ...state, items: state.items.filter((item) => item.id !== action.payload) };
    default:
      return state;
  }
};

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, { items: [] });
  const [quantityState, quantityDispatch] = useReducer(quantityReducer, {});

  return (
    <CartContext.Provider value={{ cartState, cartDispatch,quantityState,quantityDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };