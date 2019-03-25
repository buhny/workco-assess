import shop from '../api/shop'
import * as types from '../constants/ActionTypes'
import endpointProducts from '../api/products'

const receiveProducts = products => ({
  type: types.RECEIVE_PRODUCTS,
  products: products
})

export const getAllProducts = () => async dispatch => {
  const response = await endpointProducts.get('/shopping-cart/products.json');
  dispatch(receiveProducts(response.data));
}

const addToCartUnsafe = productId => ({
  type: types.ADD_TO_CART,
  productId
})

export const addToCart = productId => (dispatch, getState) => {
  if (getState().products.byId[productId].inventory > 0) {
    dispatch(addToCartUnsafe(productId))
  }
}

export const removeFromCart = product => (dispatch, getState) => {
  // need to:
  // 1. remove from addedIds
  // 2. remove from quantitybyId
  // 3. reset inventory to initial
  dispatch({
    type: types.REMOVE_FROM_CART,
    product
  })
}

export const cartQtyIncrement = productId => (dispatch, getState) => {
  dispatch({
    type: types.CART_QTY_INCREMENT,
    productId
  })
}

export const cartQtyDecrement = productId => (dispatch, getState) => {
  dispatch({
    type: types.CART_QTY_DECREMENT,
    productId
  })
}

export const checkout = products => (dispatch, getState) => {
  const { cart } = getState()

  dispatch({
    type: types.CHECKOUT_REQUEST
  })
  shop.buyProducts(products, () => {
    dispatch({
      type: types.CHECKOUT_SUCCESS,
      cart
    })
    // Replace the line above with line below to rollback on failure:
    // dispatch({ type: types.CHECKOUT_FAILURE, cart })
  })
}
