import _ from 'lodash'
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

export const removeFromCart = product => (dispatch) => {
  dispatch({
    type: types.REMOVE_FROM_CART,
    product
  })
}

export const cartQtyIncrement = productId => (dispatch) => {
  dispatch({
    type: types.CART_QTY_INCREMENT,
    productId
  })
}

export const cartQtyDecrement = productId => (dispatch) => {
  dispatch({
    type: types.CART_QTY_DECREMENT,
    productId
  })
}

export const closeCart = () => dispatch => {
  dispatch({
    type: types.CLOSE_CART
  })
}

export const openCart = () => dispatch => {
  dispatch({
    type: types.OPEN_CART
  })
}

export const updateCart = () => (dispatch, getState) => {
  const cart = getState().cart;

  if ( _.isEqual(cart.quantityById, cart.displayQtyById ) === false ) {
    const qtyDifference = _.reduce( cart.displayQtyById, ( result, value, key ) => {
        return { ...result, [key]: cart.quantityById[key] - cart.displayQtyById[key] }
      }, {})

    dispatch({
      type: types.UPDATE_CART,
      qtyDifference: qtyDifference
    })
  }
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
