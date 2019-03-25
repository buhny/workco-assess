import _ from 'lodash'
import {
  ADD_TO_CART,
  CHECKOUT_REQUEST,
  CHECKOUT_FAILURE,
  REMOVE_FROM_CART,
  CART_QTY_INCREMENT,
  CART_QTY_DECREMENT,
  UPDATE_CART,
  CLOSE_CART,
  OPEN_CART
} from '../constants/ActionTypes'

const initialState = {
  addedIds: [],
  quantityById: {},
  displayQtyById: {},
  isCartHidden: true
}

const addedIds = (state = initialState.addedIds, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      if (state.indexOf(action.productId) !== -1) {
        return state
      }
      return [ ...state, action.productId ]
    case REMOVE_FROM_CART:
      return  state.filter( id => id !== action.product.id)
    default:
      return state
  }
}

const quantityById = (state = initialState.quantityById, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const { productId } = action
      return { ...state,
        [productId]: (state[productId] || 0) + 1
      }
    case REMOVE_FROM_CART:
      return _.omit( state, action.product.id )
    default:
      return state
  }
}
const displayQtyById = (state = initialState.displayQtyById, action) => {
  const { productId } = action

  switch (action.type) {
    case ADD_TO_CART:
    case CART_QTY_INCREMENT:
      return { ...state,
        [productId]: (state[productId] || 0) + 1
      }
    case CART_QTY_DECREMENT:
      return { ...state,
        [productId]: (state[productId] || 0) - 1
      }
    case REMOVE_FROM_CART:
      return _.omit( state, action.product.id )
    default:
      return state
  }
}

export const getQuantity = (state, productId) =>
  state.quantityById[productId] || 0

export const getDisplayQty = (state, productId) =>
  state.displayQtyById[productId] || 0

export const getAddedIds = state => state.addedIds

export const getIsCartHidden = (state) => {
  return state.cart.isCartHidden
}

const cart = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_CART:
      return {
        ...state,
        isCartHidden: false
      }
    case CLOSE_CART:
      return {
        ...state,
        isCartHidden: true
      }
    case UPDATE_CART:
      return { ...state,
        quantityById: state.displayQtyById
      }
    case CHECKOUT_REQUEST:
      return initialState
    case CHECKOUT_FAILURE:
      return action.cart
    default:
      return {
        addedIds: addedIds(state.addedIds, action),
        quantityById: quantityById(state.quantityById, action),
        displayQtyById: displayQtyById(state.displayQtyById, action),
        isCartHidden: state.isCartHidden
      }
  }
}

export default cart
