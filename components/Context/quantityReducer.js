const quantityReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT_QUANTITY': {
      const itemId = action.payload;
      const newQuantity = state[itemId] ? state[itemId] + 1 : 1;
      return {
        ...state,
        [itemId]: newQuantity,
      };
    }
    case 'DECREMENT_QUANTITY': {
      const itemId = action.payload;
      const newQuantity = state[itemId] && state[itemId] > 1 ? state[itemId] - 1 : 1;
      return {
        ...state,
        [itemId]: newQuantity,
      };
    }
    case 'SET_QUANTITY': {
      const itemId = action.payload.itemId;
      const quantity = action.payload.quantity;
      return {
        ...state,
        [itemId]: quantity,
      };
    }
    default:
      return state;
  }
};

export default quantityReducer;
