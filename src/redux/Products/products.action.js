import productTypes from "./products.types";

export function addToCart(id) {
  return {
    type: productTypes.ADD_TO_CART,
    id,
  };
}

export function removeFromCart(id) {
  return {
    type: productTypes.REMOVE_FROM_CART,
    id,
  };
}

export function increaseQty(id) {
  return {
    type: productTypes.INCREASE_QTY,
    id,
  };
}

export function decreaseQty(id) {
  return {
    type: productTypes.DECREASE_QTY,
    id,
  };
}

export function cartTotal() {
  return {
    type: productTypes.CART_TOTAL,
  };
}
export function setContactDetails(data) {
  return {
    type: productTypes.SET_CONTACT_DETAILS,
    data,
  };
}
export function clearAll() {
  return {
    type: productTypes.CLEAR_ALL,
  };
}
