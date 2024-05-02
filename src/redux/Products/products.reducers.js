import productTypes from "./products.types";
import data from "../../data.json";

const cartFromStorage = JSON.parse(localStorage.getItem("cart"));
const INITIAL_STATE = {
  products: data.products,
  cart: cartFromStorage || data.cart,
  cartTotalPrice: 0,
  contactDetails: {},
};

export default function products(state = INITIAL_STATE, action) {
  let updatedCart;
  let elementsIndex;
  let newArray;
  let newCart;
  let total;

  switch (action.type) {
    case productTypes.ADD_TO_CART:
      var item = state.products.find((item) => item.id === action.id);
      var findincart = state.cart.find((item) => item.id === action.id);
      if (findincart === undefined) {
        return {
          ...state,
          cart: [...state.cart, item],
        };
      } else {
        elementsIndex = state.cart.findIndex(
          (element) => element.id === action.id
        );
        newArray = [...state.cart];
        newArray[elementsIndex] = {
          ...newArray[elementsIndex],
          qty: state.cart[elementsIndex].qty + 1,
        };
        return {
          ...state,
          cart: newArray,
        };
      }

    case productTypes.REMOVE_FROM_CART:
      updatedCart = state.cart.filter((item) => item.id !== action.id);

      return {
        ...state,
        cart: updatedCart,
      };

    case productTypes.INCREASE_QTY:
      elementsIndex = state.cart.findIndex(
        (element) => element.id === action.id
      );
      newArray = [...state.cart];
      newArray[elementsIndex] = {
        ...newArray[elementsIndex],
        qty: state.cart[elementsIndex].qty + 1,
      };
      return {
        ...state,
        cart: newArray,
      };

    case productTypes.DECREASE_QTY:
      elementsIndex = state.cart.findIndex(
        (element) => element.id === action.id
      );
      if (state.cart[elementsIndex].qty <= 1) {
        return state;
      }
      newCart = [...state.cart];
      newCart[elementsIndex] = {
        ...newCart[elementsIndex],
        qty: state.cart[elementsIndex].qty - 1,
      };
      return {
        ...state,
        cart: newCart,
      };

    case productTypes.CART_TOTAL:
      total = 0;
      state.cart.forEach((product) => {
        total += product.qty * product.price;
      });
      return {
        ...state,
        cartTotalPrice: total,
      };

    case productTypes.SET_CONTACT_DETAILS:
      return {
        ...state,
        contactDetails: action.data,
      };

    case productTypes.CLEAR_ALL:
      return {
        ...state,
        cart: data.cart,
        cartTotalPrice: 0,
        contactDetails: {},
      };

    default:
      return state;
  }
}
