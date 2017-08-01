
import {ADD_ITEM, REMOVE_ITEM, AddItem, RemoveItem} from '../actions/actionTypes';

const initialState = {
  cart: []
}

export default function cartApp(state = initialState, action) {
  switch(action.type) {
    case ADD_ITEM:
      return {
        ...state,
        cart: [...state.cart, action.item]
      };
    case REMOVE_ITEM:
      return {
        ...state,
        cart: state.cart.filter(cartItem => cartItem.id !== action.item.id)
      };
    default:
      return state;
  }

}
