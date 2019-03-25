import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import { checkout, removeFromCart, cartQtyIncrement, cartQtyDecrement } from '../actions'
import { getTotal, getCartProducts } from '../reducers'
import Cart from '../components/Cart'

const CartContainer = ({ products, total, checkout, removeFromCart, cartQtyIncrement, cartQtyDecrement }) => (
  <Cart
    products={products}
    total={total}
    onCheckoutClicked={() => checkout(products)}
    onRemoveClicked={(prod) => removeFromCart(prod)}
    onIncrementClicked={ (prod) => cartQtyIncrement(prod) }
    onDecrementClicked={ (prod) => cartQtyDecrement(prod) }
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
  total: getTotal(state)
})

export default connect(
  mapStateToProps,
  { checkout, removeFromCart, cartQtyIncrement, cartQtyDecrement }
)(CartContainer)
