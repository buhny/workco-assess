import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {
  checkout,
  removeFromCart,
  cartQtyIncrement,
  cartQtyDecrement,
  updateCart,
  closeCart
} from '../actions'
import { getTotal, getCartProducts, getIsCartHidden } from '../reducers'
import Cart from '../components/Cart'

const CartContainer = ({ products, total, checkout, removeFromCart, cartQtyIncrement, cartQtyDecrement, updateCart, closeCart, isCartHidden }) => (
  <Cart
    products={products}
    total={total}
    onCheckoutClicked={() => checkout(products)}
    onRemoveClicked={(prod) => removeFromCart(prod)}
    onIncrementClicked={ (prod) => cartQtyIncrement(prod) }
    onDecrementClicked={ (prod) => cartQtyDecrement(prod) }
    onUpdateClicked={ () => updateCart() }
    onCloseClicked={ () => closeCart() }
    isCartHidden={isCartHidden}
  />
)

CartContainer.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    productTitle: PropTypes.string.isRequired,
    price: PropTypes.shape({
      value: PropTypes.number.isRequired,
      currency: PropTypes.string
    }),
    quantity: PropTypes.number.isRequired
  })).isRequired,
  total: PropTypes.string,
  checkout: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state),
  isCartHidden: getIsCartHidden(state)
})

export default connect(
  mapStateToProps,
  { checkout,
    removeFromCart,
    cartQtyIncrement,
    cartQtyDecrement,
    updateCart,
    closeCart
  }
)(CartContainer)
