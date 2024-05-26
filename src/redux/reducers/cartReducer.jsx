
import { ADD_TO_CART } from '../actions/addToCart';

const initialState = [];

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (action.payload) {
        return [...state, action.payload];
      } else {
        throw new Error('Invalid payload for ADD_TO_CART action');
      }
    default:
      return state;
  }
};

export default cartReducer;
