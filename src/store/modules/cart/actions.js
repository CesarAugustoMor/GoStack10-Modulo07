export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  };
}

export function addToCartSucecess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product,
  };
}

export function removeFromCart(id) {
  return {
    type: '@cart/REMOVE',
    id,
  };
}

export function updateAmountResquest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_RESQUEST',
    id,
    amount,
  };
}

export function updateAmountSucces(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCESS',
    id,
    amount,
  };
}
